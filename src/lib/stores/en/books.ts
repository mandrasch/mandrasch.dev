import type { Book } from '$lib/types';

const books: Book[] = [
	{
		id:'jankovska-anti-work',
		authors: 'Bianca Jankovska',
		rating: '⌛',
		title: 'Potenziell furchtbare Tage. Über Anti-Work, Menstrual Health und das gute Leben.',
		learning: 'The introduction, with its reference to Teresa Bücker, already caught my attention. Bianca Jankovska doesn\'t want to write a sober, objective non-fiction book, nor convince with columns of figures and studies - but rather add to the debate about work with a lively, unsparing book. This is fitting, because for many people, employment is just that - a highly emotional topic. And yet a lot of research work has gone into providing a scientifically sound basis for topics such as the 4-day week, the Great Resignation, menstrual leave and inheritance.',
		link: 'https://www.haymonverlag.at/produkt/potenziell-furchtbare-tage/'
	},
	{
		id: 'wozu-das-alles',
		authors: 'Christian Uhle',
		title: 'Wo zu das alles? Eine philosophische Reise zum Sinn des Lebens.',
		rating: '★★★★☆',
		learning:
			"It is  mentally totally healthy to question our existence and our absurd everyday lives - and yet we rarely do it, for example in a work context. Why are we actually on this planet? Christian Uhle is trying to get to the bottom of this with the help of philosophy and science. Where religions used to provide answers, there is now potential emptiness - which can be filled. But it's not about one question, there are multiple questions to answer. And: Purpose does not always correlate with happiness.",
		link: 'https://www.fischerverlage.de/buch/christian-uhle-wozu-das-alles-9783596709472'
	},
	{
		authors: 'Sara Weber',
		title: 'Die Welt geht unter, und ich muss trotzdem arbeiten?',
		rating: '⌛',
		learning: '',

		link: 'https://www.kiwi-verlag.de/buch/sara-weber-die-welt-geht-unter-und-ich-muss-trotzdem-arbeiten-9783462004151'
	},
	{
		authors: 'Rutger Bregman',
		title: 'Humankind: A Hopeful History.',
		rating: '★★★★☆',
		link: 'https://www.rowohlt.de/buch/rutger-bregman-im-grunde-gut-9783499004162',
		learning:
			'In the event of a disaster, people help each other. Civil war does not break out immediately. A refutation of the facade theory as well as many famous psychological experiments that have shaped our image of the egotistical, violent human being - but which are no longer scientifically tenable. See my <a href="https://crunchtime2030.de/menschen-helfen-sich-im-katastrophenfall-rutger-bregman/" target="_blank">blog post</a> as well.'
	},
	{
		authors: 'Lea Dohm & Mareike Schulze',
		title:
			'Klimagefühle. Wie wir an der Umweltkrise wachsen, statt zu verzweifeln. Die "Psychologists for Future" über die psychologischen Folgen der Klimakrise',
		rating: '★★★★☆',
		link: 'https://www.droemer-knaur.de/buch/lea-dohm-mareike-schulze-klimagefuehle-9783426286159',
		learning:
			'Having to watch the progressing, human-made global warming can evoke feelings such as fear, anger, frustration, hopelessness or sadness. Dealing with them is a mammoth task, both individually and as socities. A great introduction by the Psychologists for Future with recommendations such as “getting into action” or <a href="https://crunchtime2030.de/klimagefuehle-tipps-fuer-den-umgang-mit-angst-lea-dohm-mareike-schulze/" target = "_blank" > tips for dealing with fear</a>. The book is also available as <a href = "https://open.spotify.com/album/4jiOmIlad5pxgOGH1dQCT3" target = "_blank" rel = "noreferrer noopener">free audiobook on Spotify</a >'
	},
	{
		authors: 'Martin Gaedt',
		title: '4 Tage Woche. Mehr Gesundheit, Freizeit und Lebensqualität.',
		rating: '⌛',
		link: 'https://martingaedt.de/buecher/'
	}
];

export default books;
