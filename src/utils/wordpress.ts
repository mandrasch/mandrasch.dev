// WordPress API Configuration
const WP_API_BASE = 'https://blog.matthias-andrasch.eu/wp-json/wp/v2';

// Types
export interface WordPressPost {
  id: number;
  date: string;
  date_gmt: string;
  modified: string;
  slug: string;
  status: string;
  link: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
    protected: boolean;
  };
  excerpt: {
    rendered: string;
    protected: boolean;
  };
  author: number;
  featured_media: number;
  categories: number[];
  tags: number[];
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      id: number;
      source_url: string;
      alt_text: string;
      media_details: {
        width: number;
        height: number;
      };
    }>;
  };
}

export interface WordPressFeaturedImage {
  url: string;
  alt: string;
  width: number;
  height: number;
}

/**
 * Fetch all posts from WordPress REST API
 */
export async function getAllPosts(): Promise<WordPressPost[]> {
  try {
    const response = await fetch(`${WP_API_BASE}/posts?per_page=100&_embed`);
    
    if (!response.ok) {
      throw new Error(`WordPress API error: ${response.status}`);
    }
    
    const posts = await response.json();
    return posts;
  } catch (error) {
    console.error('Error fetching WordPress posts:', error);
    return [];
  }
}

/**
 * Fetch a single post by slug
 */
export async function getPostBySlug(slug: string): Promise<WordPressPost | null> {
  try {
    const response = await fetch(`${WP_API_BASE}/posts?slug=${slug}&_embed`);
    
    if (!response.ok) {
      throw new Error(`WordPress API error: ${response.status}`);
    }
    
    const posts = await response.json();
    return posts.length > 0 ? posts[0] : null;
  } catch (error) {
    console.error(`Error fetching post with slug "${slug}":`, error);
    return null;
  }
}

/**
 * Extract featured image from post data
 */
export function getFeaturedImage(post: WordPressPost): WordPressFeaturedImage | null {
  if (!post._embedded?.['wp:featuredmedia']?.[0]) {
    return null;
  }
  
  const media = post._embedded['wp:featuredmedia'][0];
  
  // Some posts may not have media_details
  if (!media.media_details?.width || !media.media_details?.height) {
    return null;
  }
  
  return {
    url: media.source_url,
    alt: media.alt_text || post.title.rendered,
    width: media.media_details.width,
    height: media.media_details.height,
  };
}

/**
 * Format date for display
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('de-DE', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}

/**
 * Strip HTML tags from string (for excerpts)
 */
export function stripHtml(html: string): string {
  return html
    .replace(/<[^>]*>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&hellip;/g, '…')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#8217;/g, "'")
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .replace(/&#\d+;/g, '')
    .replace(/\[…\]/g, '…')
    .trim();
}

export interface EmbedData {
  type: 'youtube' | 'twitter' | 'mastodon' | 'vimeo' | 'other';
  url: string;
  title?: string;
  directUrl?: string;
  placeholder: string;
}

/**
 * Extract YouTube video ID from various URL formats
 */
function extractYouTubeId(url: string): string | null {
  const patterns = [
    /(?:youtube\.com\/embed\/|youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/shorts\/)([a-zA-Z0-9_-]+)/,
  ];
  
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }
  
  return null;
}

/**
 * Detect and extract embed data from WordPress HTML
 */
export function detectEmbeds(html: string): EmbedData[] {
  const embeds: EmbedData[] = [];
  
  // Pattern 1: WordPress embed-privacy container with oembed data
  const oembedPattern = /var _oembed_[a-f0-9]+ = '({[^']+})'/g;
  let match;
  
  while ((match = oembedPattern.exec(html)) !== null) {
    try {
      const oembedData = JSON.parse(match[1].replace(/\\"/g, '"').replace(/\\\\/g, '\\'));
      const embedHtml = oembedData.embed || '';
      
      // Extract iframe src
      const iframeMatch = embedHtml.match(/src="([^"]+)"/);
      if (iframeMatch) {
        const embedUrl = iframeMatch[1].replace(/&amp;/g, '&');
        const titleMatch = embedHtml.match(/title="([^"]+)"/);
        
        // Detect provider
        if (embedUrl.includes('youtube.com')) {
          const videoId = extractYouTubeId(embedUrl);
          const isShorts = embedUrl.includes('/shorts/');
          
          embeds.push({
            type: 'youtube',
            url: embedUrl,
            title: titleMatch?.[1] || 'YouTube Video',
            directUrl: videoId ? `https://www.youtube.com/${isShorts ? 'shorts' : 'watch?v='}${videoId}` : undefined,
            placeholder: match[0],
          });
        } else if (embedUrl.includes('twitter.com') || embedUrl.includes('x.com')) {
          embeds.push({
            type: 'twitter',
            url: embedUrl,
            title: titleMatch?.[1] || 'Twitter Post',
            placeholder: match[0],
          });
        } else if (embedUrl.includes('vimeo.com')) {
          embeds.push({
            type: 'vimeo',
            url: embedUrl,
            title: titleMatch?.[1] || 'Vimeo Video',
            placeholder: match[0],
          });
        } else {
          embeds.push({
            type: 'other',
            url: embedUrl,
            title: titleMatch?.[1] || 'Embedded Content',
            placeholder: match[0],
          });
        }
      }
    } catch (e) {
      console.error('Failed to parse oembed data:', e);
    }
  }
  
  // Pattern 2: Direct iframe embeds (fallback)
  const iframePattern = /<iframe[^>]+src="([^"]+)"[^>]*>.*?<\/iframe>/gis;
  
  while ((match = iframePattern.exec(html)) !== null) {
    const embedUrl = match[1].replace(/&amp;/g, '&');
    const fullMatch = match[0];
    
    // Skip if already captured by oembed
    if (embeds.some(e => e.url === embedUrl)) continue;
    
    const titleMatch = fullMatch.match(/title="([^"]+)"/);
    
    if (embedUrl.includes('youtube.com')) {
      const videoId = extractYouTubeId(embedUrl);
      const isShorts = embedUrl.includes('/shorts/');
      
      embeds.push({
        type: 'youtube',
        url: embedUrl,
        title: titleMatch?.[1] || 'YouTube Video',
        directUrl: videoId ? `https://www.youtube.com/${isShorts ? 'shorts' : 'watch?v='}${videoId}` : undefined,
        placeholder: fullMatch,
      });
    } else if (embedUrl.includes('twitter.com') || embedUrl.includes('x.com')) {
      embeds.push({
        type: 'twitter',
        url: embedUrl,
        title: titleMatch?.[1] || 'Twitter Post',
        placeholder: fullMatch,
      });
    } else if (embedUrl.includes('vimeo.com')) {
      embeds.push({
        type: 'vimeo',
        url: embedUrl,
        title: titleMatch?.[1] || 'Vimeo Video',
        placeholder: fullMatch,
      });
    }
  }
  
  return embeds;
}

/**
 * Process WordPress content and replace embeds with privacy-friendly placeholders
 */
export function processContentWithPrivacy(html: string): { content: string; embeds: EmbedData[] } {
  const embeds = detectEmbeds(html);
  let processedContent = html;
  
  // Replace each embed with a placeholder marker
  embeds.forEach((embed, index) => {
    const marker = `<!-- PRIVACY_EMBED_${index} -->`;
    
    // Try to replace the full embed container first
    const containerPattern = new RegExp(
      `<div[^>]*class="[^"]*embed-privacy-container[^"]*"[^>]*>.*?${escapeRegex(embed.placeholder)}.*?</div>\\s*</div>`,
      'gs'
    );
    
    if (containerPattern.test(processedContent)) {
      processedContent = processedContent.replace(containerPattern, marker);
    } else {
      // Fallback: replace just the placeholder
      processedContent = processedContent.replace(embed.placeholder, marker);
    }
  });
  
  return { content: processedContent, embeds };
}

/**
 * Escape special regex characters
 */
function escapeRegex(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

