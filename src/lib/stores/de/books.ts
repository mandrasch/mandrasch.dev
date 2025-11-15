// src/content/en/books.ts
import type { Book } from '$lib/types';

const books: Book[] = [
	{
		authors: 'Patricia Cammarata',
		title: 'Musterbruch. Überraschende Lösungen für wirkliche Gleichberechtigung.',
		icon: '⌛',
		link: 'https://www.beltz.de/sachbuch_ratgeber/produkte/details/51956-musterbruch.html'
	},
	{
		authors: 'Tahsim Durgun',
		icon: '',
		title:
			'»Mama, bitte lern Deutsch«. Unser Eingliederungsversuch in eine geschlossene Gesellschaft.',
		link: 'https://www.droemer-knaur.de/buch/tahsim-durgun-mama-bitte-lern-deutsch-9783426561140'
	},
	{
		authors: 'Toxische Pommes',
		icon: '',
		title: 'Ein schönes Ausländerkind',
		link: 'https://www.hanser-literaturverlage.de/buch/toxische-pommes-ein-schoenes-auslaenderkind-9783552073968-t-5248'
	},
	{
		id: '',
		authors: 'Mareike Fallwickl',
		icon: '',
		title: 'Die Wut, die bleibt.',
		link: 'https://www.rowohlt.de/buch/mareike-fallwickl-die-wut-die-bleibt-9783499009129'
	},
	{
		id: 'jankovska-anti-work',
		authors: 'Bianca Jankovska',
		icon: '',
		title: 'Potenziell furchtbare Tage. Über Anti-Work, Menstrual Health und das gute Leben.',
		learning:
			'Schon die Einleitung mit Referenz auf Teresa Bücker hat mich abgeholt. Bianca Jankovska will kein nüchtern-objektives Sachbuch schreiben, nicht mit Zahlen- und Studien-Kolonnen überzeugen - sondern die Debatte um Arbeit mit einem lebendigen, schonungslosen Buch ergänzen. Dies ist passend, denn für viele Menschen ist Erwerbsarbeit eben genau das - ein hochemotionales Thema. Und dennoch steckt einige Recherche-Arbeit dahinter, um die Themen wie 4-Tage-Woche, Great Resignation, Menstrual Leave oder Erbe wissenschaftlich fundiert zu hinterlegen. Eigener Blogbeitrag zum Buch: <a href="https://workwhileclimate.at/anti-work-mindset/">Befreiung durch das Anti-Work-Mindset: „Es gibt gute Arbeit, aber nur für verdammt wenige.“</a>',
		link: 'https://www.haymonverlag.at/produkt/potenziell-furchtbare-tage/'
	},
	{
		id: 'wozu-das-alles',
		authors: 'Christian Uhle',
		title: 'Wo zu das alles? Eine philosophische Reise zum Sinn des Lebens.',
		icon: '',
		learning:
			'Es ist mental total gesund, unsere Existenz und unseren absurden Alltag zu hinterfragen - und dennoch tun wir es wohl eher selten, beispielsweise im Arbeitskontext. Warum sind wir eigentlich auf diesem Planeten? Christian Uhle versucht das dickste Brett mit Hilfe von Philosophie und Wissenschaft zu bohren. Wo früher Religionen Antworten gaben, herrscht nun potenziell Leere. Und: Sinn ist nicht immer mit Glück gleichzusetzen.',
		link: 'https://www.fischerverlage.de/buch/christian-uhle-wozu-das-alles-9783596709472'
	},
	{
		authors: 'Sara Weber',
		title: 'Die Welt geht unter, und ich muss trotzdem arbeiten?',
		icon: '⌛',
		learning: '',
		link: 'https://www.kiwi-verlag.de/buch/sara-weber-die-welt-geht-unter-und-ich-muss-trotzdem-arbeiten-9783462004151'
	},
	{
		authors: 'Rutger Bregman',
		title: 'Im Grunde gut. Eine neue Geschichte der Menschheit.',
		icon: '',
		link: 'https://www.rowohlt.de/buch/rutger-bregman-im-grunde-gut-9783499004162',
		learning:
			'Im Katastrophenfall helfen sich Menschen, es bricht nicht direkt Bürgerkrieg aus. Eine Widerlegung der Fassadentheorie als auch vieler berühmter psychologischer Experimente, die unser Bild vom egoistischen, gewälttätigen Menschen prägten - aber inzwischen nicht mehr wissenschaftlich haltbar sind. Siehe auch mein <a href="https://crunchtime2030.de/menschen-helfen-sich-im-katastrophenfall-rutger-bregman/" target="_blank">Blogbeitrag</a>.'
	},
	{
		authors: 'Lea Dohm & Mareike Schulze',
		title:
			'Klimagefühle. Wie wir an der Umweltkrise wachsen, statt zu verzweifeln. Die "Psychologists for Future" über die psychologischen Folgen der Klimakrise',
		status: 'read',
		icon: '',
		link: 'https://www.droemer-knaur.de/buch/lea-dohm-mareike-schulze-klimagefuehle-9783426286159',
		learning:
			'Der menschengemachten, fortschreitenden Erderhitzung zusehen zu müssen kann Gefühle wie Angst, Wut, Frust, Hoffnungslosigkeit oder Trauer hervorrufen. Mit ihnen umzugehen ist eine Mammut-Aufgabe, individuell wie gesellschaftlich. Eine großartige Einordnung der Psychologists for Future mit Empfehlungen wie dem "ins Handeln kommen" oder <a href="https://crunchtime2030.de/klimagefuehle-tipps-fuer-den-umgang-mit-angst-lea-dohm-mareike-schulze/" target="_blank">Tipps für den Umgang mit Angst</a>. Das Buch ist auch kostenfrei <a href="https://open.spotify.com/album/4jiOmIlad5pxgOGH1dQCT3" target="_blank" rel="noreferrer noopener">auf Spotify als Hörbuch</a> verfügbar.'
	}
];

export default books;
