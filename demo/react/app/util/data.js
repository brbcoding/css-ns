const SCALE_FACTOR = 1;

function scale(scaleFactor, inputArray) {
  return new Array(scaleFactor + 1)
    .join(' ')
    .split('')
    .map(() => inputArray)
    .reduce((prev, next) => prev.concat(next), []);
}

function shuffle(inputArray) {
  return []
    .concat(inputArray)
    .sort(() => 0.5 - Math.random());
}

export function getRandomColors() {
  return shuffle(scale(SCALE_FACTOR, [ // a 100, courtesy of http://llllll.li/randomColor/
    '#7467c6',
    '#dc5ef2',
    '#7d02db',
    '#f4a1b4',
    '#f262f7',
    '#ba70e5',
    '#d0f282',
    '#4880ad',
    '#8de54e',
    '#391da5',
    '#5ff939',
    '#3fead6',
    '#bcbef4',
    '#a5e86a',
    '#110591',
    '#6ed87a',
    '#221670',
    '#e5a42b',
    '#c63c27',
    '#f7adee',
    '#fc948a',
    '#ea388b',
    '#f9343b',
    '#1929b7',
    '#83f268',
    '#1df448',
    '#83e041',
    '#a5f7ca',
    '#b7f23a',
    '#c98d1e',
    '#0befeb',
    '#bc5ed6',
    '#189963',
    '#dc81ea',
    '#54ea6a',
    '#20a396',
    '#5375b2',
    '#bfa901',
    '#119baa',
    '#f4d65f',
    '#7de8b0',
    '#ab53db',
    '#132470',
    '#61f9a8',
    '#11c9dd',
    '#38bc55',
    '#14fc5d',
    '#e5878f',
    '#b8dbfc',
    '#2074db',
    '#0e8757',
    '#338d9b',
    '#87e554',
    '#e09b11',
    '#76f7ca',
    '#b5acef',
    '#5fb526',
    '#4271aa',
    '#b25b05',
    '#fcef64',
    '#b8e85a',
    '#8571ce',
    '#d66659',
    '#669bc9',
    '#d272e5',
    '#c68707',
    '#e0599d',
    '#6d84ed',
    '#9e96e0',
    '#91eae1',
    '#2fe0a5',
    '#ea7983',
    '#68dbf2',
    '#50d8cb',
    '#4fa51a',
    '#4af224',
    '#ef0d09',
    '#a038d1',
    '#e89d78',
    '#abef62',
    '#d18dfc',
    '#ef9175',
    '#91eadb',
    '#0ec9bc',
    '#a8f7f7',
    '#e07fa9',
    '#cde22b',
    '#1e0b89',
    '#e08fd2',
    '#f9e6bd',
    '#c914a8',
    '#b1e6ef',
    '#aee8ef',
    '#adf774',
    '#eeef92',
    '#a6abea',
    '#e8d255',
    '#c64b21',
    '#ca7ff9',
    '#6f2faf'
  ]));
}

export function getRandomNames() {
  return shuffle(scale(SCALE_FACTOR, [ // a 100, courtesy of http://random-name-generator.info/random/?n=100&g=1&st=2
    'Marianne Salazar',
    'Alex Hernandez',
    'Angela Park',
    'Ricky Lyons',
    'Carmen Garrett',
    'Wm Schwartz',
    'Wilbur Nguyen',
    'Leigh Wilkins',
    'Stephanie Dawson',
    'Brian Walsh',
    'Freda Washington',
    'Karl Marshall',
    'Lamar Reynolds',
    'Blanca Ellis',
    'Sue Smith',
    'Gail Barker',
    'Russell Stanley',
    'Ollie Gutierrez',
    'Dominic Rivera',
    'Douglas Perez',
    'Tasha Watson',
    'Pamela Perry',
    'Garry Nelson',
    'Kevin Webster',
    'Gayle Burgess',
    'Fredrick Bowen',
    'Paulette Ray',
    'Luis Pearson',
    'Erica Munoz',
    'Joanne Payne',
    'Wilma Stevens',
    'Melissa Poole',
    'Henrietta Casey',
    'Ora Hogan',
    'Carla Bradley',
    'Lora Nichols',
    'Kellie Hammond',
    'Rochelle Parker',
    'Pete Mitchell',
    'Dustin Matthews',
    'Lindsey Tran',
    'Cornelius Carson',
    'Maurice Estrada',
    'Hilda Mullins',
    'Delbert Norris',
    'Andy Baker',
    'Brittany Rose',
    'Manuel Bennett',
    'Gabriel Barnes',
    'Edward Griffin',
    'Everett Maldonado',
    'Jerry Stephens',
    'Bethany Figueroa',
    'Pat Doyle',
    'Timothy Gregory',
    'Jordan Swanson',
    'Javier Patterson',
    'Ismael Waters',
    'Randall Lamb',
    'Carol Ferguson',
    'Julian Copeland',
    'Sadie Stevenson',
    'Miranda Wade',
    'Arlene Moreno',
    'Moses Stokes',
    'Roberto Harper',
    'Otis Bowers',
    'Emilio Burke',
    'Hugo Dixon',
    'Irma Clayton',
    'Josh Reed',
    'Marion Gilbert',
    'Dana Wright',
    'Jimmie Silva',
    'Janie Stone',
    'Sean Coleman',
    'Dennis Gomez',
    'Bernard Flores',
    'Kelli Mckenzie',
    'Harriet Johnston',
    'Lawrence Knight',
    'Phil Farmer',
    'Glenda Keller',
    'Jean Cook',
    'Darren Elliott',
    'Kelvin Sherman',
    'Sonia Boyd',
    'Terri Williamson',
    'Jennifer Rogers',
    'Lynn Thornton',
    'Cora Hayes',
    'Steven Mills',
    'Sandy Warner',
    'Shelia Bass',
    'Faye Robertson',
    'Amelia Caldwell',
    'Bill Davidson',
    'Tina Roy',
    'Nichole Owens',
    'Rudolph Gonzales'
  ]));
}

export function getRandomMessages() {
  return shuffle(scale(SCALE_FACTOR, [ // a 100, courtesy of http://randomtextgenerator.com/
    'Had repulsive dashwoods suspicion sincerity but advantage now him',
    'Remark easily garret nor nay',
    'Civil those mrs enjoy shy fat merry',
    'You greatest jointure saw horrible',
    'He private he on be imagine suppose',
    'Fertile beloved evident through no service elderly is',
    'Blind there if every no so at',
    'Own neglected you preferred way sincerity delivered his attempted',
    'To of message cottage windows do besides against uncivil',
    'Frankness applauded by supported ye household',
    'Collected favourite now for for and rapturous repulsive consulted',
    'An seems green be wrote again',
    'She add what own only like',
    'Tolerably we as extremity exquisite do commanded',
    'Doubtful offended do entrance of landlord moreover is mistress in',
    'Nay was appear entire ladies',
    'Sportsman do allowance is september shameless am sincerity oh recommend',
    'Gate tell man day that who',
    'She travelling acceptance men unpleasant her especially entreaties law',
    'Law forth but end any arise chief arose',
    'Old her say learn these large',
    'Joy fond many ham high seen this',
    'Few preferred continual sir led incommode neglected',
    'Discovered too old insensible collecting unpleasant but invitation',
    'Excited him now natural saw passage offices you minuter',
    'At by asked being court hopes',
    'Farther so friends am to detract',
    'Forbade concern do private be',
    'Offending residence but men engrossed shy',
    'Pretend am earnest offered arrived company so on',
    'Felicity informed yet had admitted strictly how you',
    'Oh acceptance apartments up sympathize astonished delightful',
    'Waiting him new lasting towards',
    'Continuing melancholy especially so to',
    'Me unpleasing impossible in attachment announcing so astonished',
    'What ask leaf may nor upon door',
    'Tended remain my do stairs',
    'Oh smiling amiable am so visited cordial in offices hearted',
    'At ourselves direction believing do he departure',
    'Celebrated her had sentiments understood are projection set',
    'Possession ye no mr unaffected remarkably at',
    'Wrote house in never fruit up',
    'Pasture imagine my garrets an he',
    'However distant she request behaved see nothing',
    'Talking settled at pleased an of me brother weather',
    'New had happen unable uneasy',
    'Drawings can followed improved out sociable not',
    'Earnestly so do instantly pretended',
    'See general few civilly amiable pleased account carried',
    'Excellence projecting is devonshire dispatched remarkably on estimating',
    'Side in so life past',
    'Continue indulged speaking the was out horrible for domestic position',
    'Seeing rather her you not esteem men settle genius excuse',
    'Deal say over you age from',
    'Comparison new ham melancholy son themselves',
    'In show dull give need so held',
    'One order all scale sense her gay style wrote',
    'Incommode our not one ourselves residence',
    'Shall there whose those stand she end',
    'So unaffected partiality indulgence dispatched to of celebrated remarkably',
    'Unfeeling are had allowance own perceived abilities',
    'Is we miles ready he might going',
    'Own books built put civil fully blind fanny',
    'Projection appearance at of admiration no',
    'As he totally cousins warrant besides ashamed do',
    'Therefore by applauded acuteness supported affection it',
    'Except had sex limits county enough the figure former add',
    'Do sang my he next mr soon',
    'It merely waited do unable',
    'Nor hence hoped her after other known defer his',
    'For county now sister engage had season better had waited',
    'Occasional mrs interested far expression acceptance',
    'Day either mrs talent pulled men rather regret admire but',
    'Life ye sake it shed',
    'Five lady he cold in meet up',
    'Service get met adapted matters offence for',
    'Principles man any insipidity age you simplicity understood',
    'Do offering pleasure no ecstatic whatever on mr directly',
    'Considered discovered ye sentiments projecting entreaties of melancholy is',
    'In expression an solicitude principles in do',
    'Hard do me sigh with west same lady',
    'Their saved linen downs tears son add music',
    'Expression alteration entreaties mrs can terminated estimating',
    'Her too add narrow having wished',
    'To things so denied admire',
    'Am wound worth water he linen at vexed',
    'Behaviour we improving at something to',
    'Evil true high lady roof men had open',
    'To projection considered it precaution an melancholy or',
    'Wound young you thing worse along being ham',
    'Dissimilar of favourable solicitude if sympathize middletons at',
    'Forfeited up if disposing perfectly in an eagerness perceived necessary',
    'Belonging sir curiosity discovery extremity yet forfeited prevailed own off',
    'Travelling by introduced of mr terminated',
    'Knew as miss my high hope quit',
    'In curiosity shameless dependent knowledge up',
    'He do subjects prepared bachelor juvenile ye oh',
    'He feelings removing informed he as ignorant we prepared',
    'Evening do forming observe spirits is in',
    'Country hearted be of justice sending'
  ]));
}
