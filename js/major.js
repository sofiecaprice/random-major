// ---------------
// CONSTANTS: DATA
// ---------------

const cardData = [
    {
        title: 'The Fool',
        known: true,
        explanation: 'Let go of preconceived ideas and remain open to change. There is no advantage to be gained by thinking you possess the knowledge, power, or control to direct reality. Open and receive without question, instead of trying to manage what\'s happening right now. The Fool has no ambition to manipulate a specific outcome. Just be happy to be part of the whole. Release any demands or expectations. Give your complete attention to events as they are occurring in the present moment.',
    },
    {
        title: 'The Magician',
        known: true,
        explanation: 'You are now able to transform your life through the strength of your originality and power -- all you need to do is take action on the highest level.',
    },
    {
        title: 'The High Priestess',
        known: true,
        explanation: '<img src="https://gfx.tarot.com/images/site/decks/fenestra/full_size/2.jpg"/>',
    },
    {
        title: 'The Empress',
        known: true,
        explanation: '<img src="https://gfx.tarot.com/images/site/decks/fenestra/full_size/3.jpg"/>',
    },
    {
        title: 'The Emperor',
        known: true,
        explanation: '<img src="https://gfx.tarot.com/images/site/decks/fenestra/full_size/4.jpg"/>',
    },
    {
        title: 'The Hierophant',
        known: false,
        explanation: [
            'Expand your inner knowledge and share it with others.',
            'Develop your expertise, and have faith that you are a master in the making. The Hierophant advises that you return to the role of a meticulous student. Learn everything you can about your chosen area. Let that knowledge become a part of you and an operative influence on your day-to-day awareness. In this way, you can slowly and steadily establish real credibility in your field or chosen subject. Earn respect and recognition by completing your education and broadening your experience. If you already have all the necessary experience you need, then rewrite your resume so others can appreciate who you are and what you can bring to a situation. Focus on your goal and be determined. You may be destined to be a master in your realm.',
            'The traditions expressed in Juno\'s ceremonies gave comfort to their practitioners, offering a sense of continuity as they passed from one generation to the next. However tradition for tradition\'s sake can empty any ritual of power: to keep them meaningful, traditions sometimes need to be questioned and revitalized. This card can represent a desire for security and structure in one\'s life.',
        ],
    },
    {
        title: 'The Lovers',
        known: false,
        explanation: [
            'Integrate two potential realities or let go of one of them.',
            'Creative compromise helps you accept your commitments fully. The Lovers card advises that you study your options and make the wisest choice. Carefully consider your long-term interests. There is no judgment on what you choose to keep from the array of possibilities before you. Just watch out for choices that will produce dissatisfaction and discontent. Be willing to make some compromises, then stick with the commitments you finally make. Trust your intuition along with your rational intellect, and once you make your choice, carry it out with conviction.',
            'Love suggests a renewed awareness of the nature of passionate love and what is needed to encourage its growth. A new, important relationship may be on the horizon, one that dares you to live up to this challenge. It also offers the promise of artistic creativity, beauty, and sexuality -- as well as the ability to recognize the emotional beauty which surround us. Look for examples of inner and outer harmony in your life.',
        ],
    },
    {
        title: 'The Chariot',
        known: true,
        explanation: 'Hermes: This card often appears when there will be career advancement or fortunate timing. If you are feeling impatient, don\'t worry -- all will be settled in its own time.',
    },
    {
        title: 'Strength',
        known: true,
        explanation: 'Ares: Often we underestimate the power of our words, our ability to better our lives simply by speaking up.',
    },
    {
        title: 'The Hermit',
        known: false,
        explanation: [
            'Gaze into the mysteries of your inner life.',
            'Give yourself time for contemplation. Don\'t allow others to stand in your way. The Hermit advises that you think things through carefully. The demands on you have been high, giving you scant time for reflection. While you have a gift for understanding the larger implications involved, you need some private time to consider the steps to take in the future. You can\'t just lock yourself in your room for fifteen minutes and expect to come up with profound solutions. You need more seclusion and time to assimilate and process. Now may be the moment for you to tell everyone to leave you alone. When you are fully ready, you will be able and willing to give others what they need.',
            'Chang O symbolizes the need for withdrawal from the world to better contemplate life\'s eternal questions. Unlike Chang O, we do not need to spend our entire lives separated from the world receive the benefits of contemplation. The appearance of this card suggests it is time to allow yourself this necessity, so often overlooked and neglected. At this time, your needs are not so focused on relationships with others, but on strengthening your relationship with yourself and the universe.',
        ],
    },
    {
        title: 'Wheel of Fortune',
        known: false,
        explanation: [
            'Learn to go with the flow without resisting ups and downs.',
            'Fundamental change is imminent. The positive benefits you gain during this period could last a long time. The Wheel of Fortune advises you follow the flow of events. Physical moves, spiritual awakenings, or dramatically changing social patterns could arise now. Accept these transformations. This is a safe place for you to be. You are watched over and protected as you go round and round the wheel. You will learn a lot. You will also learn it quickly, and what you absorb will benefit you for a long time to come.',
            'The Fortune card suggests that your consciousness is flying to embrace good luck and abundance. You may also be experiencing a new awareness of the beauty and love surrounding you. The universe can be an expansive, generous place. If you feel even the tiniest resistance to this idea, perhaps now is the time to examine the role that expectations play in creating the future. There may be a new awareness of the role chance plays in your life.',
        ],
    },
    {
        title: 'Justice',
        known: true,
        explanation: '<img src="https://gfx.tarot.com/images/site/decks/goddess/full_size/11.jpg"/>',
    },
    {
        title: 'The Hanged Man',
        known: false,
        explanation: [
            'You have reached a crossroads, making it possible to clear the slate and start over.',
            'Accept the consequences of your decisions. Go through it, get it over with, and free yourself up for new pursuits. The Hanged Man advises you to surrender illusions of control. Accept that you have been overcome and deceived by your own devices. Having made your bed, you now need to lie in it. This is not a negative judgment. It\'s just that sometimes there are consequences for being in the wrong place at the wrong time. Bad things can happen to good people. These consequences are not fatal, even if they are inconvenient -- or perhaps even embarrassing. Stop resisting your circumstances and let some time go by. Eventually, you will be released a little wiser and not much the worse for wear. You will come to realize in time how you collaborated with the problem. However, the issues you were stuck on when you were first hung up have subsided and no longer concern you. You are free to take up new endeavors. You will ultimately feel refreshed and grateful that you were derailed from your former track.',
            'This card often represents a time where great patience and surrender are needed. We are required to be as selfless as Kuan Yin as we sacrifice ourself to a greater good. However there can be a danger that we may find more satisfaction in martyrdom than in supporting what we believe. Remember that to sacrifice is to make sacred, not to suffer. You may also be experiencing heightened empathy and sensitivity.',
        ],
    },
    {
        title: 'Death',
        known: false,
        explanation: [
            'Shed the old to make room for the new.',
            'Free yourself from a past that no longer serves you well and proceed toward the future. The Death card advises you to detach from the old order. You may want to close accounts, complete unfinished tasks, and gather your harvest. It is time to move on. If you cut the cords that have bound you to old ways and outdated conventions, you could free yourself to join the sweep of incoming light. This is not an excuse to reject others or hurt them in any way. It is simply a time to move toward your ultimate interests. Do not allow nostalgia and outworn loyalties to hold you back. Be willing to go through whatever it takes to get to where you really want to be.',
            'After her death, Ukemochi\'s body was transformed into various life forms to supply food and goods to nurture the world. While personal transformation can be a painful experience, this card offers the hope that change can be for the best. So often edath is looked upon as an end, instead of as a beginning; considering this, it is not surprising that we often cling to the old at the expense of growth. The appearance of Transformation suggests that it is time to allow something to die in order to create room for the new. Something better awaits.',
        ],
    },
    {
        title: 'Temperance',
        known: true,
        explanation: 'Yemana is often called upon to provide rain, water that nurtures all of life. This water created from the sky represents the necessary balance between heaven and earth -- a balance which brings harmony to the earth.</p><h4>Water</h4><p>You approach your life more in terms of intuition rather than reasoning, and you value that trait in others.  You tend to be very aware of your own emotions and to be strongly affected by them.  Noticing others’ needs and responding to them is in your nature.</p><p>You’re a romantic person—not necessarily in relationships (though you definitely can be that), but in your whole approach to the world.  You see and react to beauty and tragedy, and experiences usually seem more meaningful or poignant to you than they do to others.  You have an instinct for caretaking, and love of all kinds—giving and getting—comes easily to you.</p><h4>Strengths</h4><p>You have strikingly accurate intuition, especially about other people, and you almost always know the right thing to do in awkward situations to make everyone feel better.</p><p>You’re very good at keeping secrets and you’re completely trustworthy.  You tend to be generous—sometimes more generous with others than you are with yourself!—and you may be one of those folks who senses the “vibe” of a room.  Your overflowing feeling may contribute to an ability to evoke strong reactions in others if you produce art about your experiences.  You’re generally the person anyone can count on for a good hug, and you flourish in being able to be that person.</p><h4>Weaknesses</h4><p>You may be termed “oversensitive” often by people who don’t feel like you do; this is because when you feel, it can overwhelm you and cause a tearful breakdown or an inability to function.  Sometimes you overextend yourself trying to take on too much of everyone else’s problems, and because you put yourself last, you can suffer if you don’t learn to balance yourself.  You may be unable to pull through something that’s bothering you and you just let it ruin your week as you brood.</p><p>Sometimes you can be moody and not interested in helping other people figure out what interactions from them you’d appreciate in this state—you’re annoyed that they can’t just know, like you do—so sometimes you pull away and isolate yourself, and may have a tendency to engage in addictive behaviors that are detrimental to your health.  Sometimes your sensitivity causes you to react to others’ words very strongly, and you find yourself the only offended or hurt person in the room.',
    },
    {
        title: 'The Devil',
        known: false,
        explanation: [
            'Put subtlety aside and empower your passion and confidence.',
            'Let go of inhibitions. Allow yourself to express all of who you are. The Devil card advises that you show some spunk. There may be nothing to be gained by trying to be subtle or strategic in this situation. Assert your agenda, express yourself honestly, and let the chips fall where they may. Your best bet could be to express your true emotions, possibly even including anger. Acknowledge that you have whatever feelings you have. While it may not be necessary to act out what you feel in every situation, accepting the power and depth of your inner experience enables you to remain true to yourself.',
            'She symbolizes the hidden forces of the ocean -- forces whose powers must be respected. Every one has a dark side within themselves that can turn them from their highest purpose -- what jung would call the shadow. If it goes unacknowledged, we may find our shadow appearing where we least expect it: in the form of a person who bothers us, an addiction that enslaves us, even the need to control another. The appearance of this card invites us to own our weaknesses and grow stronger from them. Alternately, Temptation can represent an intoxicating immersion in the physical pleasures of life: intense sensuality, even gluttony.',
        ],
    },
    {
        title: 'The Tower',
        known: false,
        explanation: [
            'Because of circumstances beyond your control, you have no choice.',
            'You are the one to serve as a catalyst for change. With the Tower card, think of yourself as an agent of transformation. This self-sacrificing role is likely to create stressful situations. Your vision shows you that a radical change has already been unleashed by forces much larger than mere mortals, and therefore you are no longer resisting. Now you may be at the forefront, acknowledging and accepting the bracing presence of the future bursting in on the present. Try to mediate the harsher parts of the changes as they unfold, so the most vulnerable are the most cushioned. Acknowledge yourself, as well as the others in your life, who are offering their resources to usher in a better future.',
            'Oppression often appears when we\'ve had an experience that has shattered our view of the world. It\'s hard to imagine life improving -- all we anticipate is never-ending darkness. The appearance of this card suggests that, while this situation is painful and overwhelming, it will not last forever. YOu will soon be released into a new start. Sometimes this card symbolizes depression and pessimism.',
        ],
    },
    {
        title: 'The Star',
        known: true,
        explanation: '<img src="https://gfx.tarot.com/images/site/decks/fenestra/full_size/17.jpg"/>',
    },
    {
        title: 'The Moon',
        known: false,
        explanation: [
            'This is an opportunity to draw messages from your inner self.',
            'Listen to the body and its unique wisdom. Rely upon your inner resources as your best source of support and security. The Moon card advises that you trust your instincts and intuitions. Your aboriginal body, which is connected to all living things, is sharper and quicker than the cultivated, civilized self. The everyday mind may not be prepared for strange oceanic circumstances. Plus, it has no game plan. Your intuitive body will support you unerringly if you do not interfere with or try to control what you perceive. A better approach would be to meditate. Try to just be a witness. Do nothing; let nature carry you forward. This may be your best option in this situation.',
            'The Moon suggests intense feelings as changeable as that celestial body. Instead of seeing this as a negative, recognize that what is empty will become full again -- just as the moon does. These emotional times can be seen as opportunities to work on your relationship with what truly nourishes you; to develop intuition and trust in yourself. You may also be more aware of the nurturing of women who truly care about you.',
        ],
    },
    {
        title: 'The Sun',
        known: false,
        explanation: [
            'You are in the right place at the right time.',
            'Let your light shine. Be confident in the sacred power of your original nature. The Sun card advises you to have confidence in your natural divinity. Throw off any cultural conditioning that keeps you from being authentic with yourself. Step into the full light of truth and reveal your motives and principles. Once done, you will no longer give away power to the people that criticize and shame you. Focus on the positive and the real. Your authentic shining self can be a light for others if you project it without contrivance.',
            'The Sun represents the brilliance of the life force that the Zorya protect: the incisiveness of intellect, the inspiration of creativity. Just as the sun shares its warmth, we all have special talents and qualities we need to share with the world. Prepare to shine your light to the world -- this is a time of optimism and opportunities. The appearance of this card is a wonderful affirmation of brilliant, expansive energy.',
         ],
    },
    {
        title: 'Judgment',
        known: true,
        explanation: 'Judgment presents an invitation for you to become queen of your life -- to rule over your personal realm just as Gwenhwyfar ruled over Wales. This card frequently appears when it is time for a major and necessary change in life -- often welcome, but frightening because of its magnitude.',
    },
    {
        title: 'The World',
        known: true,
        explanation: 'Hermes: Inspiration, desire for positive change, travel, communication',
    },
]

// ------------------
// CONSTANTS: STRINGS
// ------------------

const INACTIVE = 'inactive';
const SECTION_INTRO = 'section-intro';
const SECTION_QUERY = 'section-query';
const SECTION_KNOWN = 'section-known';
const SECTION_LEARNING = 'section-learning';
const BUTTON_DEAL = 'button-deal';
const BUTTON_SHUFFLE = 'button-shuffle';
const KNOWN_TITLE = 'known-title';
const KNOWN_SUMMARY = 'known-summary';
const LEARNING_TITLE = 'learning-title';
const LEARNING_SUMMARY = 'learning-summary';
const LEARNING_TAROT = 'learning-tarot';
const LEARNING_GODDESS = 'learning-goddess';

// ----------------
// GLOBAL VARIABLES
// ----------------

let cards = [...cardData.keys()]; // https://stackoverflow.com/questions/3895478
let cardsArrayIndex = -1;

// ---------------
// FUNCTIONS: DATA
// ---------------

function shuffleCards() {
    // shuffle `cards`
    _shuffle(cards);

    // reset `cardsArrayIndex`
    cardsArrayIndex = -1;
}

// deal card
function dealCard() {
    // increment `cardsArrayIndex`
    cardsArrayIndex += 1;

    // loop around to the beginning
    cardsArrayIndex %= cards.length;
}

function populateKnownCard(cardDataIndex) {
    let cardObj = cardData[cardDataIndex];

    if (cardObj.known === false) {
        console.error('Trying to call populateKnownCard() on a card with known: false');
        return;
    }

    const knownTitle = document.getElementById(KNOWN_TITLE);
    const knownSummary = document.getElementById(KNOWN_SUMMARY);

    knownTitle.textContent = cardObj.title;
    knownSummary.innerHTML = cardObj.explanation;
}

function populateLearningCard(cardDataIndex) {
    let cardObj = cardData[cardDataIndex];

    if (cardObj.known === true) {
        console.error('Trying to call populateLearningCard() on a card with known: true');
        return;
    }

    const learningTitle = document.getElementById(LEARNING_TITLE);
    const learningSummary = document.getElementById(LEARNING_SUMMARY);
    const learningTarot = document.getElementById(LEARNING_TAROT);
    const learningGoddess = document.getElementById(LEARNING_GODDESS);

    learningTitle.textContent = cardObj.title;
    learningSummary.textContent = cardObj.explanation[0];
    learningTarot.textContent = cardObj.explanation[1];
    learningGoddess.textContent = cardObj.explanation[2];
}

// ------------------
// FUNCTIONS: DISPLAY
// ------------------

// display `query` section ('Shuffling...' message)
function displaySection(elementId, shouldDisplay) {
    const sectionDOM = document.getElementById(elementId);
    if (shouldDisplay) {
        sectionDOM.classList.remove(INACTIVE);
    } else {
        sectionDOM.classList.add(INACTIVE);
    }
}

// -------------------------
// FUNCTIONS: CLICK HANDLERS
// -------------------------

function onClickShuffle() {
    // hide everything
    displaySection(BUTTON_DEAL, false);
    displaySection(SECTION_KNOWN, false);
    displaySection(SECTION_LEARNING, false);

    // shuffle and show 'Shuffling...'
    shuffleCards();
    displaySection(SECTION_QUERY, true);

    // later show 'Deal Card' button
    setTimeout(() => {displaySection(BUTTON_DEAL, true)}, 900);

    console.log('cards', cards);
    console.log('cardsArrayIndex', cardsArrayIndex);
}

function onClickDeal() {
    // deal card
    dealCard();

    cardDataIndex = cards[cardsArrayIndex];
    if (cardData[cardDataIndex].known) {
        // populate known card
        populateKnownCard(cardDataIndex);

        // show only known card
        displaySection(SECTION_KNOWN, true);
        displaySection(SECTION_LEARNING, false);
    } else {
        // populate learning card
        populateLearningCard(cardDataIndex);

        // show only learning card
        displaySection(SECTION_LEARNING, true);
        displaySection(SECTION_KNOWN, false);
    }

    console.log('cards', cards);
    console.log('cardsArrayIndex', cardsArrayIndex);
}

const shuffleButton = document.getElementById(BUTTON_SHUFFLE);
const dealButton = document.getElementById(BUTTON_DEAL);

shuffleButton.addEventListener('click', onClickShuffle);
dealButton.addEventListener('click', onClickDeal);

// ----------------
// HELPER FUNCTIONS
// ----------------

// helper function: cannot believe this isn't built in zomg https://stackoverflow.com/questions/2450954
function _shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
