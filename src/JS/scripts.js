var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var blackCards = [
    'A moment of silence for: {}.',
    'Nobody expects the spanish inquisition, our chief weapons are fear surprise and {}.',
    'But that was just the tip of the iceberg. The real story is: {}.',
    'I\'m sorry your {} is in another castle.',
    'Little Timmy hates {} more than anything in the world.',
    'Meanwhile in Soviet Russia... {}.',
    //* 'Mom! Dad! The babysitter is {}!',
    //* 'Nobody expects the {} inquisition.',
    //* 'Now that we\'re all here let\'s get started on {}.',
    //* 'Prepare to be {}ed.',
    //* 'Science has finally proven that {} is real.',
    //* 'You\'ve been {}ed. Congratulations!',
    //* 'If I could have any superpower, I\'d choose: {}.',
    //* 'The real reason dinosaurs went extinct: {}.',
    //* 'Instead of a handshake, politicians should greet each other with: {}.',
    //* 'The theme for the next James Bond movie is: {}.',
    //* 'After a wild night out, I woke up with: {} in my bed.',
    //* 'If my life were a movie, the title would be: {}.',
    //* 'In my next life, I want to come back as: {}.',
    //* 'After a failed experiment, scientists accidentally created: {}.',
    //* 'The key to a successful relationship is: {}.',
    //* 'To solve global warming, we should all start: {}.',
    //* 'To impress my date, I brought: {}.',
    //* 'After years of training, I\'ve finally mastered the art of: {}.',
    //* 'If I were a wizard, my Patronus would be: {}.',
    //* 'I have a recurring dream where I\'m being chased by: {}.',
    //* 'The real meaning of life is: {}.',
    //* 'During a midlife crisis, I plan to buy: {}.',
    //* 'To become a millionaire, I would: {}.',
    //* 'If I were a superhero, my catchphrase would be: "{}".',
    //* 'In a parallel universe, everyone communicates through: {}.',
    //* 'The best advice for a first date is to talk extensively about your collection of {}.',
    //* 'The most unexpected item in the lost and found was a mysterious package labeled {}.',
    //* 'I drink to forget {}.',
    //* 'When I am a billionaire, I shall erect a 50-foot statue to commemorate {}.',
    //* '{}, Jim\'ll fix it.',
    //* 'I got 99 problems but {} ain\'t one.',
    //* 'During sex, I think about {}.',
    //* 'Uh, guys, I know this was my idea, but I\'m having serious doubts about {}.',
    //* 'Next up on channel 4: Ramsay\'s {} nightmares.',
    //* 'I\'m going on a cleanse this week. Nothing but kale juice and {}.',
    //* 'What don\'t you want to find in your donner kebab? {}.',
    //* 'The next Happy Meal toy will be {}.',
    //* 'As the mum of 5 rambunctious boys, I am no stranger to {}.',
    //* 'What ended my last relationship? {}.',
    //* '{} will always get you laid.',
    //* 'Nobody expects the Spanish Inquisition. Our chief weapons are fear, surprise, and {}.',
    //* 'In Belmarsh prison, you can trade 200 fags for {}.',
    //* 'Mate, don\'t go in that bathroom. There\'s {} in there.',
    //* 'Just saw this upsetting video! Please retweet!! #stop {}.',
    //* 'When I am prime minister of the UK, I will create the Ministry of {}.',
    //* 'I am no doctor, but I\'m pretty sure what you\'re suffering from is a case of {}.',
    //* 'UKIP: putting {} first.',
    //* 'Instead of coal, Father Christmas now gives the naughty children {} for Christmas.',
    //* 'What never fails to lighten up the party? {}.',
    //* 'How did I lose my virginity? {}.',
    //* 'Mr. and Mrs. Diaz, we called you in because we are concerned about your daughter. Are you aware she is {}.',
    //* 'Old MacDonald had a {} E-I-E-I-O.',
    //* 'Why do I hurt all over? {}.',
    //* 'Check me out yo, I call this dance move "{}".',
];
var whiteCards = [
    'Mild autism',
    'Yak shaving',
    'Pretending to be a mouse',
    'Yelling \'not the momma\' at someone\'s mom',
    'Unsolicited advice',
    'Wanting a baby',
    'Valentine\'s day',
    'The meaning of life',
    'Friends who eat all the snacks',
    'My relationship status',
    'Taking off your shirt',
    'Seeing what happens when you lock people in a room with rabid wallabies',
    'Seeing what happens when you lock people in a room with rabid skunks',
    'Yelling \'time out\' in bed',
    'War',
    'Robocop',
    'The illuminati',
    'The silent treatment',
    'Russians',
    'Yelling \'open sesame\' at automatic doors',
    'Skull-fucking',
    'Genghis khan',
    'The yellow brick road',
    'Pretending to be a lizard',
    'Flying sex snakes',
    'Crucifixion',
    'Dancing with a broom',
    'Seeing what happens when you lock people in a room with rabid potoroos',
    'Watching fish',
    'Wolf whistling',
    'Wet kittens',
    'Unattended children',
    'Throwing up in your mouth a little bit',
    'Taking candy from a baby',
    'Weekend getaways',
    'Weird traditions',
    'Pretending to be straight',
    'Yelling \'that\'s a wrap\' on set',
    'Seeing what happens when you lock people in a room with rabid bats',
    'Shotgun weddings',
    'Wingman',
    'The invisible man',
    'Toy story',
    'Vikings',
    'Making a pouty face',
    'Yelling \'say hello to my little friend\' in public',
    'Time travel',
    'The world\'s smallest violin',
    'Getting abducted by peter pan',
    'George clooney\'s musk',
    'Too many dirty dishes',
    'Friction',
    'Taking a dump',
    'The ugly duckling',
    'Pretending to be a teacher',
    'Pretending to be a caterpillar',
    'The one percent',
    'Shitting out a perfect cumberland sausage',
    'Passive-aggressive post-it notes',
    'Flesh-eating bacteria',
    'Walks of shame',
    'Used-up tubes of toothpaste',
    'Goats eating cans',
    'Pretending to be a bee',
    'Things that go bump in the night',
    'Pretending to be a shrew',
    'Sipping melted ice',
    'Pretending to be black',
    'Wanting to go back in time',
    'The golden girls',
    'The cops',
    'Pretending to be offended',
    'Girls who shouldn\'t go wild',
    'Pretending to be a girl',
    'The black market',
    'Permanent orgasm-face disorder',
    'Finger painting',
    'Teaching a robot to love',
    'Peeing a little bit',
    'Tattoo regrets',
    'The unknown',
    'Seeing what happens when you lock people in a room with rabid raccoons',
    'Pretending to be happy',
    'Robert downey, jr.',
    'Slapping the stupid out of someone',
    'Not reciprocating oral sex',
    'Pretending to be a penguin',
    'Ugly babies',
    'Rapidly advancing parkinson\'s disease',
    'Land mines',
    'Pretending to be homeless',
    'Tooth fairies',
    'A homoerotic volleyball game',
    'Yelling \'quiet please\' in a library',
    'Used diapers',
    'My genitals',
    'Sitting on the cake',
    'Pretending to be a starfish',
    'Penis breath',
    'Working with children',
    'Telling someone they have something in their teeth',
    'The zombie apocalypse',
    'White trash',
    'The middle class',
    'The square root of 69',
    'The elderly',
    'The titanic',
    'Seeing what happens when you lock people in a room with rabid dogs',
    'Convulsively vomiting as a brood of crab spiders hatches in his brain and erupts from his tear ducts',
    'A snapping turtle biting the tip of your penis off',
    'Reverse cowgirl',
    'Toe jam',
    'Ugly dogs',
    'Used razor blades',
    'Watching a car crash',
    'Too much plastic surgery',
    'Whaling',
    'Used band-aids',
    'Porn stars',
    'Van gogh\'s missing ear',
    'The good, the bad, and the ugly',
    'Lockjaw',
    'Sobriety',
    'Writing poetry',
    'A bag of magic beans',
    'Not having relations',
    'Triple chins',
    'Used condoms',
    'Turning into your parents',
    'Weird people',
    'Yelling \'marco\' in a crowded room',
    'Shitting out a solid block of ketchup',
    'Penis fingers',
    'The ten commandments',
    'Jumping out at people',
    'Tripping on acid',
    'Sneezing into the baby\'s face',
    'Weapons of mass destruction',
    'Yelling \'plot twist\' during a movie',
    'Toenail clippings',
    'Menstruation',
    'Veganism',
    'Used toilet paper',
    'Pretending to be a villain',
    'Bees?',
    'Harry potter erotica',
    'Yelling \'shark\' at the beach',
    'Wanting to fit in',
    'Underwater basket weaving',
    'Watching people fall',
    'Existing',
    'Throwing up on the pope',
    'Used-up tubes of herpes cream',
    'Just the tip',
    'Nipple blades',
    'Testicular torsion',
    'Active listening',
    'Toe-tapping',
    'Laying an egg',
    'Hipsters',
    'Ufo sightings',
    'Turning water into wine',
    'Ultra-thin condoms',
    'Getting so angry that you pop a boner',
    'Weird sounds',
    'Having big dreams but no realistic way to achieve them',
    'Historically black colleges',
    'Used socks',
    'Vaginas',
    'Dead babies',
    'Giant sperm',
    'The last supper',
    'Peeing on a wizard',
    'Three nipples',
    'Pretending to be vegan',
    'Muhammad (praise be unto him)',
    'Toilet snakes',
    'Sharks with laser beams attached to their heads',
    'My first kill',
    'Rush limbaugh\'s soft, shitty body',
    'Texting during a movie',
    'Slapping someone with an open hand',
    'Re-gifting',
    'Smoking meth',
    'Not contributing to society in any meaningful way',
    'Friendly fire',
    'Pissing on a cat',
    'Rock, paper, scissors',
    'My uber driver, pavel',
    'Penis transplants',
    'Having anuses for eyes',
    'Two left feet',
    'Homeless people',
    'Shooting a wizard with a gun',
    'Hope',
    'Overpowering your father',
    'Incest',
    'My machete',
    'Grandpa',
    'Used underwear in the laundry',
    'Bullshit',
    'War profiteering',
    'Throwing a virgin into a volcano',
    'Having shotguns for legs',
    'Unplanned pregnancies',
    'Intimacy problems',
    'Talking dirty',
    'Teaching your cat to dance',
    'Peeing into a person\'s posterior to make a baby',
    'Pretending to be the opposite sex',
    'Breaking out into song and dance',
    'Grave robbing',
    'Poor life choices',
    'Gandalf',
    'Toilet training',
    'Talking about politics at thanksgiving dinner',
    'Too much cleavage',
    'Warm toilet seats',
    'Too many shots',
    'Toxic masculinity',
    'War heroes',
    'Lance armstrong\'s missing left testicle',
    'Making the penises kiss',
    'Tombstone pizza',
    'Firing a rifle into the air while balls deep in a squealing hog',
    'Yelling \'action\' in bed',
    'Sitting in the corner and crying',
    'Elizabeth the second',
    'Wanting to make history',
    'The french revolution',
    'Immaculate conception',
    'Patriarchy',
    'Vegetarians',
    'Slapping an old lady',
    'Vomit-inducing sights',
    'Racism',
    'Weird dreams',
    'The karate kid',
    'Target practice',
    'Wanting your cake and eating it too',
    'Getting drunk on mouthwash',
    'The past',
    'Pretending to be a human',
    'Used toothpicks',
    'Tardiness',
    'Used chewing gum',
    'Kids with ass cancer',
    'Oversized lollipops',
    'Nothing. absolutely nothing.',
    'Pretending to care',
    'Tearaway pants',
    'The unabomber',
    'Smoking crack',
    'Sitting in a jar of vinegar all night because I am gherkin',
    'Famine',
    'Being marginalized',
    'Used pregnancy tests',
    'Used underwear',
    'Thunder thighs',
    'Revolution',
    'Used tissues',
    'Weird smells',
    'Nelson mandela',
    'Full frontal nudity',
    'Just one job',
    'Ugly face contests',
    'Verbal typos',
    'Too much hair gel',
    'Too many hipsters',
    'Teaching grandma to be racist',
    'Used cat litter',
    'Urban legends',
    'Getting naked and watching nickelodeon',
    'Seeing granny naked',
    'Jewish fraternities',
    'Fabricating statistics',
    'Tipsy grandparents',
    'Writing your own vows',
    'Wiping out',
    'Watching your neighbours',
    'My none-existing soul',
    'Massive penises',
    'Three-headed monkeys',
    'Wanking to cartoons',
    'Powerful thighs',
    'Being awesome at sex',
    'Tuberculosis',
    'Foreskin',
    'Vaginal rejuvenation',
    'Licking things to claim them as your own',
    'Snowball fights',
    'Mouth herpes',
    'The time machine',
    'The seven deadly sins',
    'Shitting all over the floor like a bad, bad girl',
    'Wanting to be invisible',
    'Used dental floss',
    'Pretending to be an alien',
    'Seeing what happens when you lock people in a room with rabid rats',
    'Ethnic cleansing',
    'The shake weight',
    'Used-up tubes of haemorrhoid cream',
    'Too many chins',
    'Penis pumps',
    'Double penetration',
    'Period poops',
    'Weirdos',
    'The royal family',
    'The great depression',
    'Used toothbrushes',
    'Fingering',
    'Breastfeeding a ten year old',
    'Men',
    'Enormous scandinavian women',
    'Used condoms in the park',
    'Concealing a boner',
    'Pretending to be a police officer',
    'The salem witch trials',
    'Whips and chains',
    'Smelly feet',
    'Teaching squirrels to play golf',
    'My inner demons',
    'Peeing on things to assert dominance',
    'Making sex at her',
    'Penis envy',
    'The price of freedom',
    'Inappropriate yodelling',
    'Three dudes with ponytails',
    'Shitting out a screaming face',
    'My vagina',
    'The village idiot',
    'Women\'s rights',
    'Virginity pledges',
    'Sitting in a jar of vinegar all night because i am gherkin',
    'Nelson mandela',
    'The salem witch trials',
    'A pangender octopus who roams the cosmos in search of love',
    'Sniffing glue',
    'Dead parents',
    'Pac-man uncontrollably guzzling cum',
    'Just touching david beckham\'s hair',
    'Shaking a baby until it stops crying',
    'Cottaging',
    'Itchy pussy',
    'The kkk',
    'White people',
    'Casually suggesting a threesome',
    'A crucifixion',
    'My Vigna',
    'My fat daughter',
    'Your mum',
    'The clitoris',
    'The hold bible',
    'Poor people',
    'Having sex for the first time',
    'A water pistol full of cat piss',
    'An unwanted pregnancy',
    'A ball of earwax, semen and toenail clippings',
    'My neck, my back, my pussy and my crack',
    'Paedophiles',
];
var Random = /** @class */ (function () {
    function Random() {
    }
    /**
     * Generates a random integer between and including min and max
     */
    Random.randInt = function (min, max) {
        min = Math.ceil(min);
        max = Math.ceil(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    Random.choice = function (options) {
        return options[Random.randInt(0, options.length - 1)];
    };
    Random.shuffle = function (array) {
        return array.sort(function () { return Math.random() - 0.5; });
    };
    return Random;
}());
var Deck = /** @class */ (function () {
    function Deck(cards) {
        this.cards = [];
        for (var i = 0; i < cards.length; i++) {
            var card = cards[i].trim();
            if (card) {
                this.cards.push(card);
            }
        }
        this.cards.sort(function () { return Math.random() - 0.5; });
    }
    Deck.prototype.draw = function (amount) {
        var cards = this.cards.slice(0, amount);
        this.cards = this.cards.slice(amount);
        return cards;
    };
    return Deck;
}());
var Player = /** @class */ (function () {
    function Player(hand, colour, name) {
        this.hand = [];
        this.name = '';
        this.index = 0;
        this.score = 0;
        this.colour = '#00ab00';
        this.hand = hand;
        this.name = name;
        this.colour = colour;
    }
    Player.prototype.addScore = function () {
        this.score += 1;
    };
    Player.prototype.spendCard = function (spentCard, newCard) {
        var copyOfHand = this.hand;
        this.hand = [];
        for (var i = 0; i < copyOfHand.length; i++) {
            var cardToCheck = copyOfHand[i];
            if (cardToCheck != spentCard) {
                this.hand.push(cardToCheck);
            }
        }
        this.hand.push(newCard);
    };
    return Player;
}());
var WindowManger = /** @class */ (function () {
    function WindowManger(idOfRoot) {
        if (idOfRoot === void 0) { idOfRoot = 'main'; }
        this.root = document.getElementById(idOfRoot);
    }
    WindowManger.prototype.clearRoot = function () {
        this.root.innerHTML = '';
    };
    WindowManger.prototype.pickCard = function (blackCard, player) {
        this.clearRoot();
        var titleText = document.createElement('h1');
        titleText.innerText = blackCard;
        titleText.classList.add('black-card-title');
        this.root.appendChild(titleText);
        var playerNameSubTitle = document.createElement('h2');
        playerNameSubTitle.innerText = player.name;
        playerNameSubTitle.classList.add('player-name-subtitle');
        playerNameSubTitle.style.color = player.colour;
        this.root.appendChild(playerNameSubTitle);
        var cardContainer = document.createElement('div');
        cardContainer.classList.add('card-container');
        this.root.appendChild(cardContainer);
        return new Promise(function (resolve) {
            var _loop_1 = function (i) {
                var card = document.createElement('button');
                card.classList.add('card');
                card.innerText = player.hand[i];
                card.addEventListener('click', function () { return resolve(i); });
                cardContainer.appendChild(card);
            };
            for (var i = 0; i < player.hand.length; i++) {
                _loop_1(i);
            }
        });
    };
    WindowManger.prototype.getWinnerIndex = function (cardReader, blackCard, playerAnswers) {
        return __awaiter(this, void 0, void 0, function () {
            var titleText, playerSubTitle, toDoSubtitle, cardContainer;
            return __generator(this, function (_a) {
                this.clearRoot();
                titleText = document.createElement('h1');
                titleText.innerText = blackCard;
                titleText.classList.add('black-card-title');
                this.root.appendChild(titleText);
                playerSubTitle = document.createElement('h2');
                playerSubTitle.innerText = "".concat(cardReader.name);
                playerSubTitle.classList.add('card-reader-title');
                playerSubTitle.style.color = cardReader.colour;
                this.root.appendChild(playerSubTitle);
                toDoSubtitle = document.createElement('h2');
                toDoSubtitle.innerText = 'Pick the funniest card';
                toDoSubtitle.classList.add('to-do-subtitle');
                this.root.appendChild(toDoSubtitle);
                cardContainer = document.createElement('div');
                cardContainer.classList.add('card-container');
                this.root.appendChild(cardContainer);
                return [2 /*return*/, new Promise(function (resolve) {
                        var _loop_2 = function (i) {
                            var card = document.createElement('button');
                            card.classList.add('card');
                            card.innerText = playerAnswers[i].answer;
                            card.addEventListener('click', function () { return resolve(playerAnswers[i].playerIndex); });
                            cardContainer.appendChild(card);
                        };
                        for (var i = 0; i < playerAnswers.length; i++) {
                            _loop_2(i);
                        }
                    })];
            });
        });
    };
    WindowManger.prototype.getNumberOfPlayers = function () {
        return __awaiter(this, void 0, void 0, function () {
            var titleText, inputForm, playerNumberInput, submitButton;
            return __generator(this, function (_a) {
                this.clearRoot();
                titleText = document.createElement('h1');
                titleText.innerText = 'How many players are there?';
                titleText.classList.add('player-title');
                this.root.appendChild(titleText);
                inputForm = document.createElement('form');
                playerNumberInput = document.createElement('input');
                playerNumberInput.max = '10';
                playerNumberInput.min = '3';
                playerNumberInput.type = 'number';
                playerNumberInput.required = true;
                submitButton = document.createElement('button');
                submitButton.type = 'submit';
                submitButton.innerText = 'Submit';
                inputForm.appendChild(playerNumberInput);
                inputForm.appendChild(submitButton);
                this.root.appendChild(inputForm);
                return [2 /*return*/, new Promise(function (resolve) {
                        inputForm.addEventListener('submit', function (e) {
                            e.preventDefault();
                            resolve(playerNumberInput.valueAsNumber);
                        });
                    })];
            });
        });
    };
    WindowManger.prototype.getPlayer = function (playerNumber) {
        return __awaiter(this, void 0, void 0, function () {
            var titleText, inputForm, nameInput, colourInput, submitButton;
            return __generator(this, function (_a) {
                this.clearRoot();
                titleText = document.createElement('h1');
                titleText.innerText = "Player ".concat(playerNumber + 1, ", please fill in your details");
                titleText.classList.add('player-title');
                this.root.appendChild(titleText);
                inputForm = document.createElement('form');
                nameInput = document.createElement('input');
                nameInput.type = 'text';
                nameInput.required = true;
                nameInput.name = 'name';
                colourInput = document.createElement('input');
                colourInput.type = 'color';
                colourInput.required = true;
                colourInput.name = 'colour';
                submitButton = document.createElement('button');
                submitButton.type = 'submit';
                submitButton.innerText = 'Submit';
                inputForm.appendChild(nameInput);
                inputForm.appendChild(colourInput);
                inputForm.appendChild(submitButton);
                this.root.appendChild(inputForm);
                return [2 /*return*/, new Promise(function (resolve) {
                        inputForm.addEventListener('submit', function (e) {
                            e.preventDefault();
                            resolve(new Player([], colourInput.value, nameInput.value));
                        });
                    })];
            });
        });
    };
    WindowManger.prototype.showWinners = function (players) {
        this.clearRoot();
        var titleText = document.createElement('h1');
        titleText.innerText = 'Winners';
        titleText.classList.add('winners-title');
        this.root.appendChild(titleText);
        var winnersGrid = document.createElement('table');
        winnersGrid.classList.add('winners-grid');
        var tableHeaders = document.createElement('tr');
        var positionHeaderText = document.createElement('th');
        positionHeaderText.innerText = 'Position';
        tableHeaders.appendChild(positionHeaderText);
        var playerNameHeaderText = document.createElement('th');
        playerNameHeaderText.innerText = 'Player Name';
        tableHeaders.appendChild(playerNameHeaderText);
        var playerScoreHeaderText = document.createElement('th');
        playerScoreHeaderText.innerText = 'Player Score';
        tableHeaders.appendChild(playerScoreHeaderText);
        winnersGrid.appendChild(tableHeaders);
        for (var i = 0; i < players.length; i++) {
            var player = players[i];
            var tableRow = document.createElement('tr');
            tableRow.style.color = player.colour;
            var playerPosition = document.createElement('td');
            playerPosition.innerText = "".concat(i + 1);
            var playerName = document.createElement('td');
            playerName.innerText = player.name;
            var playerScore = document.createElement('td');
            playerScore.innerText = "".concat(player.score);
            tableRow.appendChild(playerPosition);
            tableRow.appendChild(playerName);
            tableRow.appendChild(playerScore);
            winnersGrid.appendChild(tableRow);
        }
        this.root.appendChild(winnersGrid);
    };
    return WindowManger;
}());
var Game = /** @class */ (function () {
    function Game(players) {
        this.number_of_players = 0;
        this.whiteCards = new Deck(whiteCards);
        this.blackCards = new Deck(blackCards);
        this.window = new WindowManger();
        this.players = players;
        for (var i = 0; i < this.players.length; i++) {
            this.players[i].index = i;
            this.players[i].hand = this.whiteCards.draw(5);
        }
        this.number_of_players = this.players.length;
        this.card_reader = Random.randInt(0, this.number_of_players - 1);
        this.window.clearRoot();
    }
    Game.prototype.playGame = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.haveCardsToPlayRound()) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.playRound()];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 0];
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    Game.prototype.playRound = function () {
        return __awaiter(this, void 0, void 0, function () {
            var blackCard, playerAnswers, i, player, chosenCardIndex, chosenCard, winnerIndex;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        blackCard = this.blackCards.draw(1)[0].replace('{}', '______');
                        playerAnswers = [];
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < this.number_of_players)) return [3 /*break*/, 4];
                        player = this.players[i];
                        if (i == this.card_reader) {
                            return [3 /*break*/, 3];
                        }
                        return [4 /*yield*/, this.window.pickCard(blackCard, player)];
                    case 2:
                        chosenCardIndex = _a.sent();
                        chosenCard = player.hand[chosenCardIndex];
                        this.players[i].spendCard(chosenCard, this.whiteCards.draw(1)[0]);
                        playerAnswers.push({
                            answer: chosenCard,
                            playerIndex: player.index,
                        });
                        _a.label = 3;
                    case 3:
                        i++;
                        return [3 /*break*/, 1];
                    case 4:
                        playerAnswers = Random.shuffle(playerAnswers);
                        return [4 /*yield*/, this.window.getWinnerIndex(this.players[this.card_reader], blackCard, playerAnswers)];
                    case 5:
                        winnerIndex = _a.sent();
                        this.players[winnerIndex].addScore();
                        return [2 /*return*/];
                }
            });
        });
    };
    Game.prototype.showWinners = function () {
        this.players.sort(function (a, b) { return b.score - a.score; });
        this.window.showWinners(this.players);
    };
    Game.prototype.haveCardsToPlayRound = function () {
        return (this.blackCards.cards.length > 0) && (this.whiteCards.cards.length > this.number_of_players);
    };
    return Game;
}());
var testData = {
    players: [
        new Player([], 'red', 'Player 1'),
        new Player([], 'green', 'Player 2'),
        new Player([], 'blue', 'Player 3'),
        new Player([], 'yellow', 'Player 4'),
    ]
};
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var windowManger, game;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    windowManger = new WindowManger();
                    game = new Game(testData.players);
                    return [4 /*yield*/, game.playGame()];
                case 1:
                    _a.sent();
                    game.showWinners();
                    return [2 /*return*/];
            }
        });
    });
}
main();
