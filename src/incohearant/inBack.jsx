import React from 'react';

const DetailCard = ({ phrase, hint, description }) => {
    return (
      <div className="w-48 h-72 rounded-xl overflow-hidden shadow-lg print:shadow-none" style={{ backgroundColor: '#87CEEB' }}>
        <div className="p-4 flex flex-col h-full">
          <div className="mb-4">
            <p className="text-2xl font-bold text-black leading-tight">
              {phrase}
            </p>
          </div>
          
          <div className="bg-white/30 rounded-lg p-2 mb-3">
            <p className="text-xs font-bold text-black uppercase mb-1">HINT</p>
            <p className="text-xs text-black">{hint}</p>
          </div>
          
          <div className="flex-1">
            <p className="text-xs text-black">
              {description}
            </p>
          </div>
          
          <div className="text-center mt-3 flex flex-col items-center">
            <p className="text-black text-xs font-bold">INCOHEARENT</p>
            <p className="text-black text-[0.6rem] font-medium opacity-90">Bisque's 30th</p>
          </div>
        </div>
      </div>
    );
  };

  const InBack = () => {

    const phrases = [
        { 
        "front": "Mack inn cheeze", 
        "back": "Pizza", 
        "hint": "Food of the gods", 
        "description": "The reason why everyone loves circles" 
        },
        { 
        "front": "Peet tzuh", 
        "back": "Mac N Cheese", 
        "hint": "Comfort food", 
        "description": "When you're feeling sad but then remember there's cheese involved" 
        },
        { 
        "front": "Tack kohz", 
        "back": "Burritos", 
        "hint": "Edible sleeping bag", 
        "description": "Like a taco that went to college" 
        },
        { 
        "front": "Burr ee toze", 
        "back": "Tacos", 
        "hint": "Tuesday's MVP", 
        "description": "The only food that makes you say 'just one more' 17 times" 
        },
        { 
        "front": "Ahh ree uh rest er rawnt", 
        "back": "Princess Diaries", 
        "hint": "Royal glow-up", 
        "description": "When your grandma tells you you're actually important and then gives you a country" 
        },
        { 
        "front": "Prin sess dye uh reeze", 
        "back": "Aria Restaurant", 
        "hint": "Fancy eats", 
        "description": "Where your wallet goes to cry but your taste buds go to party" 
        },
        { 
            "front": "Sheez thuh mayan", 
            "back": "Cape Town, South Africa", 
            "hint": "Table Mountain's home", 
            "description": "Where penguins live on beaches and nobody questions it" 
          },
          { 
            "front": "Kay puh town sow thaf ree kuh", 
            "back": "She's the Man", 
            "hint": "Soccer in disguise", 
            "description": "When you really want to play sports but have to pretend to be your brother to do it" 
          },
          { 
            "front": "Bee chin hah why yee", 
            "back": "Panama", 
            "hint": "Canal country", 
            "description": "That place where boats go to avoid the long way around" 
          },
          { 
            "front": "Pah nuh mah", 
            "back": "Beach in Hawaii", 
            "hint": "Paradise found", 
            "description": "Where mainlanders go to get sunburned and pretend they can surf" 
          },
          { 
            "front": "Tack koh grrrl inn uh tack koh werld", 
            "back": "Wow very cute", 
            "hint": "Basic reaction", 
            "description": "What you say when you don't know what else to say" 
          },
          { 
            "front": "Woww vehr ree kyewt", 
            "back": "Taco girl in a taco world", 
            "hint": "Food parody", 
            "description": "Like Barbie Girl but with more guacamole" 
          },
          { 
            "front": "Awl burt eye steen skool uhv med uh sin", 
            "back": "Hackensack University Medical Center", 
            "hint": "Hospital life", 
            "description": "Where the parking costs more than the treatment" 
          },
          { 
            "front": "Hack ken sak yoo nee vur sit tee med ih kul sen tur", 
            "back": "Albert Einstein School of Medicine", 
            "hint": "Smart docs", 
            "description": "Where people go to learn how to say 'turn your head and cough' professionally" 
          },
          { 
            "front": "Mahr guh ree tuh vill", 
            "back": "Survivor", 
            "hint": "Island drama", 
            "description": "Where people voluntarily starve themselves for a chance at a million dollars" 
          },
          { 
            "front": "Ser vy vur", 
            "back": "Margaritaville", 
            "hint": "Salty rims", 
            "description": "Where it's always 5 o'clock and nobody questions your life choices" 
          },
          { 
            "front": "Sturn kaw ledge fer wih min", 
            "back": "Hebrew academy of nassau county", 
            "hint": "Jewish education", 
            "description": "Where you learn both Torah and TikTok dances" 
          },
          { 
            "front": "Hee brew ack kad uh mee uhv nah saw kown tee", 
            "back": "Stern college for women", 
            "hint": "Girl power", 
            "description": "Where the dress code is strict but the minds are free" 
          },
          { 
            "front": "Sitt ing awn thuh toy lett", 
            "back": "Obstetrics and gynecology", 
            "hint": "Lady docs", 
            "description": "When you spend 12 years in medical school to look at things nobody wants to talk about" 
          },
          { 
            "front": "Awb stet tricks n guy nuh kaw luh gee", 
            "back": "Sitting on the toilet", 
            "hint": "Throne time", 
            "description": "The only place where everyone becomes a philosopher" 
          },
          { 
            "front": "Hap pea thur tee-eth burrth daye", 
            "back": "Smash burger", 
            "hint": "Flat patties", 
            "description": "When violence against meat creates something beautiful" 
          },
          { 
            "front": "Smaysh burr gurr", 
            "back": "Happy 30th birthday", 
            "hint": "Big milestone", 
            "description": "When your back starts hurting for no reason and you can't drink like you used to" 
          },
          { 
            "front": "Sah bahss peet tzuh", 
            "back": "Camp lindenmere", 
            "hint": "Summer fun", 
            "description": "Where parents send their kids to learn independence and TikTok dances" 
          },
          { 
            "front": "Kam plin den meer", 
            "back": "Sabas pizza", 
            "hint": "Kosher slices", 
            "description": "Where the pizza is blessed and so is your appetite" 
          },
          { 
            "front": "Kye fahn awl yew ken eet", 
            "back": "Fire making", 
            "hint": "Hot stuff", 
            "description": "Rubbing sticks together until something happens or you give up" 
          },
          { 
            "front": "Fye yur may kyng", 
            "back": "Kai fan all you can eat", 
            "hint": "Endless food", 
            "description": "Where 'I'm full' is a challenge, not a statement" 
          },
          { 
            "front": "Kuhm awn een geyez", 
            "back": "The tribe has spoken", 
            "hint": "Exit line", 
            "description": "Fancy way of saying 'you're fired' while holding a torch" 
          },
          { 
            "front": "Thuh trie buh haz spoh kinn", 
            "back": "Come on in guys", 
            "hint": "Jeff's catchphrase", 
            "description": "What you hear before everything goes horribly wrong on Survivor" 
          },
          { 
            "front": "Dee yuh day lohs mwehr tohs", 
            "back": "Day of the dead", 
            "hint": "Spooky celebration", 
            "description": "Like Halloween but with better food and less candy corn" 
          },
          { 
            "front": "Day uhv thuh dehd", 
            "back": "Dia de los muertos", 
            "hint": "Skeleton party", 
            "description": "When the afterlife has better parties than your current life" 
          },
          { 
            "front": "Doo brohv neek crow ay shee yuh", 
            "back": "Lake Bled Slovenia", 
            "hint": "Fairy tale waters", 
            "description": "That place with the church on an island that's in every Instagram feed" 
          },
          { 
            "front": "Layk blehd slow veen yuh", 
            "back": "Dubrovnik Croatia", 
            "hint": "King's Landing IRL", 
            "description": "Where Game of Thrones fans go to pretend they're Lannisters" 
          },
          { 
            "front": "Wight koht sair uh moh nee", 
            "back": "Camp Nesher", 
            "hint": "Summer dreams", 
            "description": "Where kids learn to be Jewish and play basketball at the same time" 
          },
          { 
            "front": "Kahmp nesh urr", 
            "back": "White coat ceremony", 
            "hint": "Doctor initiation", 
            "description": "When med students dress up to celebrate their future debt" 
          },
          { 
            "front": "Lawng brahnch", 
            "back": "Firetruck spin", 
            "hint": "Dance move", 
            "description": "When you're trying to look cool but end up looking like a lost firefighter" 
          },
          { 
            "front": "Fye yur truhk speen", 
            "back": "Long Branch", 
            "hint": "Jersey shore", 
            "description": "Not quite the Hamptons, but your grandmother thinks it's fancy" 
          },
          { 
            "front": "Rah mehn noo duhl soop", 
            "back": "Taglit et haeish", 
            "hint": "Hebrew phrase", 
            "description": "When you try to speak Hebrew but sound like you're sneezing" 
          },
          { 
            "front": "Tahg leet eht hah yeesh", 
            "back": "Ramen noodle soup", 
            "hint": "College cuisine", 
            "description": "The official meal of broke students everywhere" 
          },
          { 
            "front": "Wee arr uh meer uh kuhl", 
            "back": "Ohana means family", 
            "hint": "Disney wisdom", 
            "description": "The tattoo everyone got in 2012" 
          },
          { 
            "front": "Oh hah nuh meenz fam ih lee", 
            "back": "We are a miracle", 
            "hint": "Inspirational quote", 
            "description": "What your mom posts on Facebook with too many emojis" 
          },
          { 
            "front": "Why key key hon oh loo loo", 
            "back": "Tiny house", 
            "hint": "Minimal living", 
            "description": "When your closet becomes your bedroom, kitchen, and office" 
          },
          { 
            "front": "Tie nee howz zuh", 
            "back": "Waikiki honolulu", 
            "hint": "Tourist central", 
            "description": "Where mainlanders go to pronounce things wrong and get lei'd" 
          },
          { 
            "front": "Snork kuh ling inn hah why yee", 
            "back": "Talk to me after celine", 
            "hint": "Post-concert mood", 
            "description": "When your heart will go on but your voice is gone" 
          },
          { 
            "front": "Tawk two mee ahff turr sell een", 
            "back": "Snorkeling in hawaii", 
            "hint": "Fish watching", 
            "description": "When you pretend to be a mermaid but keep getting water in your nose" 
          },
          { 
            "front": "Thuh liz zee mick gwhy urr moo vee", 
            "back": "Pineapple smoothie", 
            "hint": "Tropical blend", 
            "description": "When you want to pretend you're on vacation but you're just at Jamba Juice" 
          },
          { 
            "front": "Pye napp pull smoo thee", 
            "back": "The Lizzy mcguire movie", 
            "hint": "Roman holiday", 
            "description": "When you go to Italy and accidentally become a pop star" 
          },
          { 
            "front": "Kay suh dee yuh zuh", 
            "back": "Grilled hearts of palm", 
            "hint": "Fancy veggie", 
            "description": "When you're trying to be healthy but make it bougie" 
          },
          { 
            "front": "Grilled hahrtz uhv pawmm", 
            "back": "Quesadillas", 
            "hint": "Folded happiness", 
            "description": "When a grilled cheese gets cultural" 
          },
          { 
            "front": "Mush roo mmz", 
            "back": "Skirt steak", 
            "hint": "Fancy beef", 
            "description": "The cut of meat that makes you feel sophisticated at a BBQ" 
          },
          { 
            "front": "Skurt stay kuh", 
            "back": "Mushrooms", 
            "hint": "Fun guys", 
            "description": "The only fungus we're happy to eat" 
          },
          { 
            "front": "Soo shee sah lahd", 
            "back": "Crunchwrap supreme", 
            "hint": "Late night craving", 
            "description": "What you eat at 2am and immediately regret at 2:05am" 
          },
          { 
            "front": "Krun chuh rapp soo preem", 
            "back": "Sushi salad", 
            "hint": "Deconstructed rolls", 
            "description": "When you're too lazy to roll but still want the flavor" 
          },
          { 
            "front": "Eyem inn luhv wiff thuh koh koh", 
            "back": "Astronaut in the ocean", 
            "hint": "Wet space", 
            "description": "When you're trying to be deep but you're just confused" 
          },
          { 
            "front": "Ass truh nawt inn thee oh shun", 
            "back": "Im in love with the koko", 
            "hint": "Chocolate confession", 
            "description": "When your relationship status is 'committed to cocoa'" 
          },
          { 
            "front": "Looz yur self inn thuh myoo zik", 
            "back": "West hempstead", 
            "hint": "Long Island life", 
            "description": "Where people argue about whether they're from the city or not" 
          },
          { 
            "front": "Wess temp studd", 
            "back": "Lose yourself in the music", 
            "hint": "Eminem wisdom", 
            "description": "Mom's spaghetti: A memoir" 
          },
          { 
            "front": "Skran tun thee ee lek trick sit tee", 
            "back": "The maldives", 
            "hint": "Island paradise", 
            "description": "Where influencers go to take pictures of floating breakfast" 
          },
          { 
            "front": "Thuh mawl deevz", 
            "back": "Scranton the electric city", 
            "hint": "Office location", 
            "description": "Where paper is life and that's what she said" 
          },
          { 
            "front": "Add ven chur izz owt thay urr", 
            "back": "Its a wonderful life", 
            "hint": "Holiday classic", 
            "description": "When an angel needs a promotion and you need a reality check" 
          },
          { 
            "front": "Itz uh wuhn durr full lyfe", 
            "back": "Adventure is out there", 
            "hint": "UP quote", 
            "description": "When balloons become a valid form of transportation" 
          },
          { 
            "front": "Fie vend dred twin tee hive thou sand six hun dred min its", 
            "back": "How we gonna pay last years rent", 
            "hint": "Bohemian problems", 
            "description": "When your art doesn't pay the bills but at least you have a song about it" 
          },
          { 
            "front": "How wee go nah pay lass cheers rent", 
            "back": "Five hundred twenty five thousand six hundred minutes", 
            "hint": "RENT math", 
            "description": "The most complicated way to say 'one year'" 
          },
          { 
            "front": "Flee mar kitt", 
            "back": "Happy thanksgiving to you", 
            "hint": "Turkey wishes", 
            "description": "When you're thankful but mostly just ready for a nap" 
          },
          { 
            "front": "Hap pee thankz give ing too yew", 
            "back": "Flea market", 
            "hint": "Treasure hunt", 
            "description": "Where one person's trash becomes another person's questionable purchase" 
          },
          { 
            "front": "Cock uh dood uhl dew", 
            "back": "Israel", 
            "hint": "Holy Land", 
            "description": "Where hummus is life and everyone's your cousin" 
          },
          { 
            "front": "Izz ray yull", 
            "back": "Cockadoodledoo", 
            "hint": "Rooster call", 
            "description": "Nature's most annoying alarm clock" 
          },
          { 
            "front": "Lass mang goh inn pear iss", 
            "back": "Indian ocean", 
            "hint": "Big water", 
            "description": "The ocean that's not the Pacific or Atlantic but still wants attention" 
          },
          { 
            "front": "Inn dee un oh shun", 
            "back": "Last mango in paris", 
            "hint": "Tropical romance", 
            "description": "When fruit meets French sophistication" 
          },
          { 
            "front": "Ack wuh row bix", 
            "back": "Table mountain", 
            "hint": "Flat top", 
            "description": "Nature's attempt at furniture design" 
          },
          { 
            "front": "Tay bull mow tin", 
            "back": "Aquarobics", 
            "hint": "Wet workout", 
            "description": "When you want to exercise but also pretend you're a synchronized swimmer" 
          },
          { 
            "front": "Kroo gurr nash null park", 
            "back": "Steel drum", 
            "hint": "Island beats", 
            "description": "The instrument that makes everything sound like vacation" 
          },
          { 
            "front": "Steal drumb", 
            "back": "Kruger national park", 
            "hint": "Safari time", 
            "description": "Where you realize you're not at the top of the food chain" 
          },
          { 
            "front": "Ree moat wurk", 
            "back": "Sandboarding", 
            "hint": "Desert surfing", 
            "description": "When you want to snowboard but live in a desert" 
          },
          { 
            "front": "Sand bore ding", 
            "back": "Remote work", 
            "hint": "Pajama office", 
            "description": "When your commute is from bed to desk and back" 
          },
          { 
            "front": "Im madge inn drag unz", 
            "back": "On top of the world", 
            "hint": "Peak feelings", 
            "description": "When everything's great but you still have to tell everyone about it" 
          },
          { 
            "front": "Awn tawp uhv thee whirled", 
            "back": "Imagine dragons", 
            "hint": "Modern rock", 
            "description": "When you're radioactive but in a good way" 
          },
          { 
            "front": "Ray dee oh ack tiv", 
            "back": "Lions head mountain", 
            "hint": "Cape Town peak", 
            "description": "When a mountain looks like a cat but everyone takes selfies anyway" 
          },
          { 
            "front": "Lie unz head mow tin", 
            "back": "Radioactive", 
            "hint": "Glowing song", 
            "description": "When you wake up and choose nuclear physics" 
          },
          { 
            "front": "Beer tay stingg", 
            "back": "Cheese tasting", 
            "hint": "Dairy adventure", 
            "description": "When you're fancy but also just really like cheese" 
          },
          { 
            "front": "Cheez tay stingg", 
            "back": "Beer tasting", 
            "hint": "Hoppy sampling", 
            "description": "When drinking becomes a sophisticated activity" 
          },
          { 
            "front": "Whine tay stingg", 
            "back": "Surfing in south africa", 
            "hint": "Cold waves", 
            "description": "When you want to surf but also maybe see a shark" 
          },
          { 
            "front": "Surf fing inn sow thaf ree kuh", 
            "back": "Wine tasting", 
            "hint": "Grape judging", 
            "description": "When you pretend to taste notes of leather but it's just fermented grape juice" 
          },
          { 
            "front": "Spahh dayy", 
            "back": "Safari", 
            "hint": "Animal search", 
            "description": "When you go on vacation to look at cats but bigger" 
          },
          { 
            "front": "Suh fahr ree", 
            "back": "Spa day", 
            "hint": "Pamper time", 
            "description": "When you pay someone to tell you to relax" 
          },
          { 
            "front": "Lite ning bawlt", 
            "back": "Lions roaring", 
            "hint": "Cat sounds", 
            "description": "When a meow goes pro" 
          },
          { 
            "front": "Lie unz roar ringg", 
            "back": "Lightning bolt", 
            "hint": "Sky zap", 
            "description": "Nature's way of saying 'don't stand there'" 
          },
          { 
            "front": "Lie unz poop pingg", 
            "back": "Dead giraffe", 
            "hint": "Tall nap", 
            "description": "When a long neck takes its final bow" 
          },
          { 
            "front": "Dehd jur ahff", 
            "back": "Lions pooping", 
            "hint": "Jungle business", 
            "description": "When nature calls in the wild" 
          },
          { 
            "front": "Dew bye", 
            "back": "Bali indonesia", 
            "hint": "Island vibes", 
            "description": "Where people go to find themselves but find Instagram spots instead" 
          },
          { 
            "front": "Bah lee inn doe knee zhuh", 
            "back": "Dubai", 
            "hint": "Desert bling", 
            "description": "Where buildings compete in a height contest and always win" 
          },
          { 
            "front": "Wah turr sly duh", 
            "back": "Cliff jumping", 
            "hint": "Scary leap", 
            "description": "When good judgment takes a vacation" 
          },
          { 
            "front": "Kliff jump pingg", 
            "back": "Water slide", 
            "hint": "Wet zoom", 
            "description": "When gravity and water team up for fun" 
          },
          { 
            "front": "Gett ting oh uld", 
            "back": "Growing old", 
            "hint": "Age journey", 
            "description": "When naps become your favorite hobby" 
          },
          { 
            "front": "Grow wing oh uld", 
            "back": "Getting old", 
            "hint": "Time march", 
            "description": "When your body starts making sounds every time you move" 
          },
          { 
            "front": "Ken yun ning", 
            "back": "Whitewater rafting", 
            "hint": "River rodeo", 
            "description": "When you pay to almost fall out of a boat" 
          },
          { 
            "front": "White wah turr raff ting", 
            "back": "Canyoning", 
            "hint": "Rock splash", 
            "description": "When hiking gets wet and wild" 
          },
          { 
            "front": "Back muh sahzh", 
            "back": "Hiking", 
            "hint": "Nature walking", 
            "description": "Walking but make it difficult" 
          },
          { 
            "front": "High king", 
            "back": "Back massage", 
            "hint": "Knot removal", 
            "description": "When someone else's elbows fix your problems" 
          },
          { 
            "front": "Owt door bath roomz", 
            "back": "Seasons of love", 
            "hint": "RENT anthem", 
            "description": "When you measure a year in cups of coffee" 
          },
          { 
            "front": "See zunz uhv luhv", 
            "back": "Outdoor bathrooms", 
            "hint": "Nature's call", 
            "description": "When privacy is just a suggestion" 
          },
          { 
            "front": "Wuhn sawng glore ree", 
            "back": "Light my candle", 
            "hint": "RENT duet", 
            "description": "When you definitely lost your stash but keep flirting anyway" 
          },
          { 
            "front": "Lyght my kan dull", 
            "back": "One song glory", 
            "hint": "Rocker's prayer", 
            "description": "When you need to write a hit before the end of Act One" 
          },
          { 
            "front": "Tang goh maw reen uh", 
            "back": "La vie boheme", 
            "hint": "Bohemian toast", 
            "description": "When dinner turns into a revolution" 
          },
          { 
            "front": "Lah vee boh emm", 
            "back": "Tango Maureen", 
            "hint": "Ex-lovers dance", 
            "description": "When your girlfriend's ex teaches you to dance about your girlfriend" 
          },
          { 
            "front": "Noh wuhn mournz thuh wik kid", 
            "back": "Dancing through life", 
            "hint": "Popular philosophy", 
            "description": "When you skip class to teach life lessons" 
          },
          { 
            "front": "Dan sing throo lyff", 
            "back": "No one mourns the wicked", 
            "hint": "Green opener", 
            "description": "When being bad makes you famous" 
          },
          { 
            "front": "Dee fye ying grav ih tee", 
            "back": "Waving through a window", 
            "hint": "Teen angst", 
            "description": "When you're on the outside but make it musical" 
          },
          { 
            "front": "Way ving throo uh whin doh", 
            "back": "Defying gravity", 
            "hint": "Witch flight", 
            "description": "When you're so mad you break the laws of physics" 
          },
          { 
            "front": "Yew will bee fownd", 
            "back": "I am Africa", 
            "hint": "Mormon pride", 
            "description": "When you really misunderstand an entire continent" 
          },
          { 
            "front": "Eye yam aff ree kuh", 
            "back": "You will be found", 
            "hint": "Viral hope", 
            "description": "When your anxiety goes viral but in a good way" 
          },
          { 
            "front": "Joe ziff smyth uh mare ih kun moh zez", 
            "back": "It's five o'clock somewhere", 
            "hint": "Drink excuse", 
            "description": "When you need to justify your life choices" 
          },
          { 
            "front": "Itz fyve oh klawk sum wear", 
            "back": "Joseph Smith American Moses", 
            "hint": "Mormon tale", 
            "description": "When you tell a story about America but make it biblical" 
          },
          { 
            "front": "My hed hertz my feet stynk n eye dohnt luv gee zuss", 
            "back": "Circle of life", 
            "hint": "Lion wisdom", 
            "description": "When animals teach you about existence" 
          },
          { 
            "front": "Sur kull uhv lyff", 
            "back": "My head hurts my feet stink and I don't love Jesus", 
            "hint": "Mormon doubt", 
            "description": "When your crisis of faith includes poor hygiene" 
          },
          { 
            "front": "Hee livz inn yew", 
            "back": "Hakuna Matata", 
            "hint": "Problem free", 
            "description": "When your life philosophy comes from a warthog and a meerkat" 
          },
          { 
            "front": "Hah koo nuh muh tah tuh", 
            "back": "He lives in you", 
            "hint": "Lion spirit", 
            "description": "When your dad becomes a cloud but it's inspirational" 
          },
          { 
            "front": "Ken yew feel thuh luhv tuh nyght", 
            "back": "Tradition", 
            "hint": "Fiddler opener", 
            "description": "When you explain your entire culture in one word" 
          },
          { 
            "front": "Truh dish yun", 
            "back": "Can you feel the love tonight", 
            "hint": "Lion romance", 
            "description": "When animals fall in love and Elton John narrates it" 
          },
          { 
            "front": "Tik tik boo mmm", 
            "back": "Maybe happy ending", 
            "hint": "Hopeful thoughts", 
            "description": "When you're optimistic but also realistic" 
          },
          { 
            "front": "May bee hap pee end ding", 
            "back": "Tick tick boom", 
            "hint": "Time bomb musical", 
            "description": "When your quarter-life crisis gets its own soundtrack" 
          },
          { 
            "front": "Lyfe izz uh high whey", 
            "back": "Everyday is a winding road", 
            "hint": "Journey truth", 
            "description": "When even your shortcuts have shortcuts" 
          },
          { 
            "front": "Ev ree day izz uh wine ding rowed", 
            "back": "Life is a highway", 
            "hint": "Road philosophy", 
            "description": "When your GPS becomes a metaphor for existence" 
          },
          { 
            "front": "Par tee inn thuh yew ess ayy", 
            "back": "Livin on a prayer", 
            "hint": "Jersey anthem", 
            "description": "When being halfway there is better than not being there at all" 
          },
          { 
            "front": "Liv vin awn uh pray yerr", 
            "back": "Party in the USA", 
            "hint": "Patriotic pop", 
            "description": "When your taxi radio becomes your autobiography" 
          },
          { 
            "front": "Sweet hohm al uh bam uh", 
            "back": "What dreams are made of", 
            "hint": "Lizzie's anthem", 
            "description": "When your Italian vacation turns into pop stardom" 
          },
          { 
            "front": "Wut dreemz arr mayd uhv", 
            "back": "Sweet home Alabama", 
            "hint": "Southern rock", 
            "description": "When your GPS says 'turn left at the family reunion'" 
          },
          { 
            "front": "Yeer three thow zand", 
            "back": "Just around the riverbend", 
            "hint": "Disney wisdom", 
            "description": "When your GPS is a raccoon and your car is a canoe" 
          },
          { 
            "front": "Juhst uh rownd thuh riv ver bend", 
            "back": "Year three thousand", 
            "hint": "Future pop", 
            "description": "When your time machine only goes to boy band concerts" 
          },
          { 
            "front": "Awn thuh flore", 
            "back": "Crank that soulja boy", 
            "hint": "Dance craze", 
            "description": "When Superman becomes a dance move" 
          },
          { 
            "front": "Krank that sole juh boy", 
            "back": "On the floor", 
            "hint": "Club classic", 
            "description": "When gravity becomes a dance move" 
          },
          { 
            "front": "Grow azz wee goh", 
            "back": "Made to be", 
            "hint": "Destiny talk", 
            "description": "When fate needs a bumper sticker" 
          },
          { 
            "front": "Mayd two bee", 
            "back": "Grow as we go", 
            "hint": "Love journey", 
            "description": "When your relationship needs a gardening metaphor" 
          },
          { 
            "front": "Feeldz uhv gowld", 
            "back": "Here comes the sun", 
            "hint": "Beatles dawn", 
            "description": "When nature's alarm clock actually makes you happy" 
          },
          { 
            "front": "Heer kumz thuh suhn", 
            "back": "Fields of gold", 
            "hint": "Sting's farm", 
            "description": "When agriculture meets romance" 
          },
          { 
            "front": "Thuh lawng n wine ding rowd", 
            "back": "If I had a boat", 
            "hint": "Wishful sailing", 
            "description": "When your escape plan involves maritime dreams" 
          },
          { 
            "front": "Iff eye had uh bowt", 
            "back": "The long and winding road", 
            "hint": "Beatles journey", 
            "description": "When your GPS takes the scenic route through your feelings" 
          },
          { 
            "front": "Show mee thuh whey", 
            "back": "That's the way it is", 
            "hint": "Life facts", 
            "description": "What adults say when they don't want to explain things" 
          },
          { 
            "front": "Thatz thuh whey itt izz", 
            "back": "Show me the way", 
            "hint": "Lost soul", 
            "description": "When you need directions but emotionally" 
          },
          { 
            "front": "Eye wannah dans wit sum buh dee", 
            "back": "The safety dance", 
            "hint": "80s moves", 
            "description": "When dancing dangerously isn't an option" 
          },
          { 
            "front": "Thuh sayf tee dahnts", 
            "back": "I wanna dance with somebody", 
            "hint": "Whitney's wish", 
            "description": "When your dance partner standards are surprisingly low" 
          },
          { 
            "front": "Fur guh lish ee yus", 
            "back": "Bootylicious", 
            "hint": "Destiny's jelly", 
            "description": "When you're not sure if the world is ready for this jelly" 
          },
          { 
            "front": "Boo tee lish ee yus", 
            "back": "Fergalicious", 
            "hint": "Self-praise", 
            "description": "When spelling your own name becomes a workout" 
          },
          { 
            "front": "Ee vack yew ayt thuh dans flore", 
            "back": "Lip gloss", 
            "hint": "Shiny pout", 
            "description": "When your makeup is poppin' and so is your confidence" 
          },
          { 
            "front": "Lipp glawss", 
            "back": "Evacuate the dancefloor", 
            "hint": "Club emergency", 
            "description": "When your moves are so bad they're considered a safety hazard" 
          },
          { 
            "front": "Tayk yore shurt awff", 
            "back": "In the shallow", 
            "hint": "Star is born", 
            "description": "When you're far from the shallow now but still can't swim" 
          },
          { 
            "front": "Inn thuh shah low", 
            "back": "Take your shirt off", 
            "hint": "Strip request", 
            "description": "When the temperature isn't the real reason" 
          },
          { 
            "front": "Wut uh wuhn der full werld", 
            "back": "Get back Jojo", 
            "hint": "Beatles plea", 
            "description": "When you need to go back to where you once belonged" 
          },
          { 
            "front": "Gett bak joe joe", 
            "back": "What a wonderful world", 
            "hint": "Louis' view", 
            "description": "When you see trees of green and skies of blue and think 'nice'" 
          },
          { 
            "front": "Eye dint git it frum az best ohs", 
            "back": "All I do is win", 
            "hint": "Victory lap", 
            "description": "When modesty takes a vacation" 
          },
          { 
            "front": "Awl eye doo iz winn", 
            "back": "I didn't get it from asbestos", 
            "hint": "Health defense", 
            "description": "When you need to clarify the source of your problems" 
          },
          { 
            "front": "Uh big lump wit knawbz itt haz thuh jooce", 
            "back": "You and me but mostly me", 
            "hint": "Mormon ego", 
            "description": "When partnership means different things to different people" 
          },
          { 
            "front": "Yew n mee butt moast lee mee", 
            "back": "A big lump with knobs it has the juice", 
            "hint": "Corn song", 
            "description": "When vegetables become TikTok famous" 
          },
          { 
            "front": "Iff eye had my thyme uh gen", 
            "back": "Alexander Hamilton", 
            "hint": "Founding father", 
            "description": "When your life story becomes a rap battle" 
          },
          { 
            "front": "Al ex zan dur ham ill tun", 
            "back": "If I had my time again", 
            "hint": "Do-over dreams", 
            "description": "When hindsight is 20/20 but time machines don't exist" 
          },
          { 
            "front": "Luv izz ann oh pun dore", 
            "back": "You can't stop the beat", 
            "hint": "Hairspray groove", 
            "description": "When rhythm wins against all odds" 
          },
          { 
            "front": "Yew kant stahp thuh beet", 
            "back": "Love is an open door", 
            "hint": "Frozen hearts", 
            "description": "When your dating profile is actually a trap" 
          },
          { 
            "front": "Wee dohnt diss krim in eight bayzd awn jen dur", 
            "back": "Don't bring me here anymore alright", 
            "hint": "Final visit", 
            "description": "When you've had enough of someone's favorite restaurant" 
          },
          { 
            "front": "Downt bring mee heer ann ee more awl rite", 
            "back": "We don't discriminate based on gender", 
            "hint": "Equal rights", 
            "description": "When inclusion becomes a catchy tune" 
          }
    ]
    
    return (
      <div className="grid grid-cols-2 gap-8 p-6 max-h-[calc(100vh-2rem)] overflow-y-auto">
        <style type="text/css" media="print">{`
          @page {
            size: portrait;
            margin: 0.25in;
          }
          @media print {
            body {
              margin: 0;
              padding: 0;
              min-height: 11in;
            }
            .grid {
              display: grid !important;
              grid-template-columns: repeat(2, 1fr) !important;
              grid-auto-rows: 2.5in !important;
              gap: 0.5rem !important;
              padding: 0.5rem !important;
              height: auto !important;
              overflow: visible !important;
              min-height: 11in;
            }
            .card-wrapper {
              transform: rotate(90deg);
              transform-origin: center center;
              height: 2.5in;
              display: flex;
              align-items: center;
              justify-content: center;
              page-break-inside: avoid;
              break-inside: avoid;
            }
            .grid > div:nth-child(8n) {
              page-break-after: always;
              break-after: page;
            }
            @-moz-document url-prefix() {
              .grid {
                display: flex !important;
                flex-wrap: wrap !important;
                justify-content: space-between !important;
                min-height: 11in;
              }
              .card-wrapper {
                width: calc(50% - 0.25rem) !important;
              }
            }
          }
        `}</style>
  
        {phrases?.map((phrase, index) => (
          <div key={index} className="card-wrapper">
            <DetailCard 
              phrase={phrase.back}
              hint={phrase.hint}
              description={phrase.description}
            />
          </div>
        ))}
      </div>
    );
  };
  
  export default InBack;