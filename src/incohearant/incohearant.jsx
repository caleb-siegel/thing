import React from 'react';

const SimpleCard = ({ gibberish }) => {
  return (
    <div className="transform -rotate-90 w-96 h-64">
      <div className="w-64 h-96 rounded-xl overflow-hidden shadow-lg bg-white">
        <div className="h-4/5 p-6 flex flex-col justify-center">
          <p className="text-3xl font-bold text-black leading-tight">
            {gibberish}
          </p>
        </div>
        
        <div className="h-1/5 relative" style={{ backgroundColor: '#87CEEB' }}>
          <div className="absolute inset-0 grid grid-cols-6 w-full h-full">
            <div className="bg-white/5" />
            <div className="bg-white/10" />
            <div className="bg-white/5" />
            <div className="bg-white/10" />
            <div className="bg-white/5" />
            <div className="bg-white/10" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-white text-sm font-bold">INCOHEARENT</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const DetailCard = ({ phrase, hint, description }) => {
  return (
    <div className="w-64 h-96 rounded-xl overflow-hidden shadow-lg" style={{ backgroundColor: '#87CEEB' }}>
      <div className="p-6 flex flex-col h-full">
        <div className="mb-6">
          <p className="text-3xl font-bold text-black leading-tight">
            {phrase}
          </p>
        </div>
        
        <div className="bg-white/30 rounded-lg p-3 mb-4">
          <p className="text-sm font-bold text-black uppercase mb-1">HINT</p>
          <p className="text-sm text-black">{hint}</p>
        </div>
        
        <div className="flex-1">
          <p className="text-sm text-black">
            {description}
          </p>
        </div>
        
        <div className="text-center mt-4">
          <p className="text-black text-sm font-bold">INCOHEARENT</p>
        </div>
      </div>
    </div>
  );
};

const CardDisplay = () => {

  const phrases = [
    { 
      "front": "Mack inn cheeze", 
      "back": "Mac N Cheese", 
      "hint": "Comfort food", 
      "description": "When you're feeling sad but then remember there's cheese involved" 
    },
    { 
      "front": "Peet tzuh", 
      "back": "Pizza", 
      "hint": "Food of the gods", 
      "description": "The reason why everyone loves circles" 
    },
    { 
      "front": "Tack kohz", 
      "back": "Tacos", 
      "hint": "Tuesday's MVP", 
      "description": "The only food that makes you say 'just one more' 17 times" 
    },
    { 
      "front": "Burr ee toze", 
      "back": "Burritos", 
      "hint": "Edible sleeping bag", 
      "description": "Like a taco that went to college" 
    },
    { 
      "front": "Ahh ree uh rest er rawnt", 
      "back": "Aria Restaurant", 
      "hint": "Fancy eats", 
      "description": "Where your wallet goes to cry but your taste buds go to party" 
    },
    { 
      "front": "Prin sess dye uh reeze", 
      "back": "Princess Diaries", 
      "hint": "Royal glow-up", 
      "description": "When your grandma tells you you're actually important and then gives you a country" 
    },
    { 
      "front": "Sheez thuh mayan", 
      "back": "She's the Man", 
      "hint": "Soccer in disguise", 
      "description": "When you really want to play sports but have to pretend to be your brother to do it" 
    },
    { 
      "front": "Kay puh town sow thaf ree kuh", 
      "back": "Cape Town, South Africa", 
      "hint": "Table Mountain's home", 
      "description": "Where penguins live on beaches and nobody questions it" 
    },
    { 
      "front": "Bee chin hah why yee", 
      "back": "Beach in Hawaii", 
      "hint": "Paradise found", 
      "description": "Where mainlanders go to get sunburned and pretend they can surf" 
    },
    { 
      "front": "Pah nuh mah", 
      "back": "Panama", 
      "hint": "Canal country", 
      "description": "That place where boats go to avoid the long way around" 
    },
    { 
      "front": "Tack koh grrrl inn uh tack koh werld", 
      "back": "Taco girl in a taco world", 
      "hint": "Food parody", 
      "description": "Like Barbie Girl but with more guacamole" 
    },
    { 
      "front": "Woww vehr ree kyewt", 
      "back": "Wow very cute", 
      "hint": "Basic reaction", 
      "description": "What you say when you don't know what else to say" 
    },
    { 
      "front": "Awl burt eye steen skool uhv med uh sin", 
      "back": "Albert Einstein School of Medicine", 
      "hint": "Smart docs", 
      "description": "Where people go to learn how to say 'turn your head and cough' professionally" 
    },
    { 
      "front": "Hack ken sak yoo nee vur sit tee med ih kul sen tur", 
      "back": "Hackensack University Medical Center", 
      "hint": "Hospital life", 
      "description": "Where the parking costs more than the treatment" 
    },
    { 
      "front": "Mahr guh ree tuh vill", 
      "back": "Margaritaville", 
      "hint": "Salty rims", 
      "description": "Where it's always 5 o'clock and nobody questions your life choices" 
    },
    { 
      "front": "Ser vy vur", 
      "back": "Survivor", 
      "hint": "Island drama", 
      "description": "Where people voluntarily starve themselves for a chance at a million dollars" 
    },
    { 
      "front": "Sturn kaw ledge fer wih min", 
      "back": "Stern college for women", 
      "hint": "Girl power", 
      "description": "Where the dress code is strict but the minds are free" 
    },
    { 
      "front": "Hee brew ack kad uh mee uhv nah saw kown tee", 
      "back": "Hebrew academy of nassau county", 
      "hint": "Jewish education", 
      "description": "Where you learn both Torah and TikTok dances" 
    },
    { 
      "front": "Sitt ing awn thuh toy lett", 
      "back": "Sitting on the toilet", 
      "hint": "Throne time", 
      "description": "The only place where everyone becomes a philosopher" 
    },
    { 
      "front": "Awb stet tricks n guy nuh kaw luh gee", 
      "back": "Obstetrics and gynecology", 
      "hint": "Lady docs", 
      "description": "When you spend 12 years in medical school to look at things nobody wants to talk about" 
    },
    { 
      "front": "Hap pea thur tee-eth burrth daye", 
      "back": "Happy 30th birthday", 
      "hint": "Big milestone", 
      "description": "When your back starts hurting for no reason and you can't drink like you used to" 
    },
    { 
      "front": "Smaysh burr gurr", 
      "back": "Smash burger", 
      "hint": "Flat patties", 
      "description": "When violence against meat creates something beautiful" 
    },
    { 
      "front": "Sah bahss peet tzuh", 
      "back": "Sabas pizza", 
      "hint": "Kosher slices", 
      "description": "Where the pizza is blessed and so is your appetite" 
    },
    { 
      "front": "Kam plin den meer", 
      "back": "Camp lindenmere", 
      "hint": "Summer fun", 
      "description": "Where parents send their kids to learn independence and TikTok dances" 
    },
    { 
      "front": "Kye fahn awl yew ken eet", 
      "back": "Kai fan all you can eat", 
      "hint": "Endless food", 
      "description": "Where 'I'm full' is a challenge, not a statement" 
    },
    { 
      "front": "Fye yur may kyng", 
      "back": "Fire making", 
      "hint": "Hot stuff", 
      "description": "Rubbing sticks together until something happens or you give up" 
    },
    { 
      "front": "Kuhm awn een geyez", 
      "back": "Come on in guys", 
      "hint": "Jeff's catchphrase", 
      "description": "What you hear before everything goes horribly wrong on Survivor" 
    },
    { 
      "front": "Thuh trie buh haz spoh kinn", 
      "back": "The tribe has spoken", 
      "hint": "Exit line", 
      "description": "Fancy way of saying 'you're fired' while holding a torch" 
    },
    { 
      "front": "Dee yuh day lohs mwehr tohs", 
      "back": "Dia de los muertos", 
      "hint": "Skeleton party", 
      "description": "When the afterlife has better parties than your current life" 
    },
    { 
      "front": "Day uhv thuh dehd", 
      "back": "Day of the dead", 
      "hint": "Spooky celebration", 
      "description": "Like Halloween but with better food and less candy corn" 
    },
    { 
      "front": "Doo brohv neek crow ay shee yuh", 
      "back": "Dubrovnik Croatia", 
      "hint": "King's Landing IRL", 
      "description": "Where Game of Thrones fans go to pretend they're Lannisters" 
    },
    { 
      "front": "Layk blehd slow veen yuh", 
      "back": "Lake Bled Slovenia", 
      "hint": "Fairy tale waters", 
      "description": "That place with the church on an island that's in every Instagram feed" 
    },
    { 
      "front": "Wight koht sair uh moh nee", 
      "back": "White coat ceremony", 
      "hint": "Doctor initiation", 
      "description": "When med students dress up to celebrate their future debt" 
    },
    { 
      "front": "Kahmp nesh urr", 
      "back": "Camp Nesher", 
      "hint": "Summer dreams", 
      "description": "Where kids learn to be Jewish and play basketball at the same time" 
    },
    { 
      "front": "Lawng brahnch", 
      "back": "Long Branch", 
      "hint": "Jersey shore", 
      "description": "Not quite the Hamptons, but your grandmother thinks it's fancy" 
    },
    { 
      "front": "Fye yur truhk speen", 
      "back": "Firetruck spin", 
      "hint": "Dance move", 
      "description": "When you're trying to look cool but end up looking like a lost firefighter" 
    },
    { 
      "front": "Rah mehn noo duhl soop", 
      "back": "Ramen noodle soup", 
      "hint": "College cuisine", 
      "description": "The official meal of broke students everywhere" 
    },
    { 
      "front": "Tahg leet eht hah yeesh", 
      "back": "Taglit et haeish", 
      "hint": "Hebrew phrase", 
      "description": "When you try to speak Hebrew but sound like you're sneezing" 
    },
    { 
      "front": "Wee arr uh meer uh kuhl", 
      "back": "We are a miracle", 
      "hint": "Inspirational quote", 
      "description": "What your mom posts on Facebook with too many emojis" 
    },
    { 
      "front": "Oh hah nuh meenz fam ih lee", 
      "back": "Ohana means family", 
      "hint": "Disney wisdom", 
      "description": "The tattoo everyone got in 2012" 
    },
    { 
      "front": "Why key key hon oh loo loo", 
      "back": "Waikiki honolulu", 
      "hint": "Tourist central", 
      "description": "Where mainlanders go to pronounce things wrong and get lei'd" 
    },
    { 
      "front": "Tie nee howz zuh", 
      "back": "Tiny house", 
      "hint": "Minimal living", 
      "description": "When your closet becomes your bedroom, kitchen, and office" 
    },
    { 
      "front": "Snork kuh ling inn hah why yee", 
      "back": "Snorkeling in hawaii", 
      "hint": "Fish watching", 
      "description": "When you pretend to be a mermaid but keep getting water in your nose" 
    },
    { 
      "front": "Tawk two mee ahff turr sell een", 
      "back": "Talk to me after celine", 
      "hint": "Post-concert mood", 
      "description": "When your heart will go on but your voice is gone" 
    },
    { 
      "front": "Thuh liz zee mick gwhy urr moo vee", 
      "back": "The Lizzy mcguire movie", 
      "hint": "Roman holiday", 
      "description": "When you go to Italy and accidentally become a pop star" 
    },
    { 
      "front": "Pye napp pull smoo thee", 
      "back": "Pineapple smoothie", 
      "hint": "Tropical blend", 
      "description": "When you want to pretend you're on vacation but you're just at Jamba Juice" 
    },
    { 
      "front": "Kay suh dee yuh zuh", 
      "back": "Quesadillas", 
      "hint": "Folded happiness", 
      "description": "When a grilled cheese gets cultural" 
    },
    { 
      "front": "Grilled hahrtz uhv pawmm", 
      "back": "Grilled hearts of palm", 
      "hint": "Fancy veggie", 
      "description": "When you're trying to be healthy but make it bougie" 
    },
    { 
      "front": "Mush roo mmz", 
      "back": "Mushrooms", 
      "hint": "Fun guys", 
      "description": "The only fungus we're happy to eat" 
    },
    { 
      "front": "Skurt stay kuh", 
      "back": "Skirt steak", 
      "hint": "Fancy beef", 
      "description": "The cut of meat that makes you feel sophisticated at a BBQ" 
    },
    { 
      "front": "Soo shee sah lahd", 
      "back": "Sushi salad", 
      "hint": "Deconstructed rolls", 
      "description": "When you're too lazy to roll but still want the flavor" 
    },
    { 
      "front": "Krun chuh rapp soo preem", 
      "back": "Crunchwrap supreme", 
      "hint": "Late night craving", 
      "description": "What you eat at 2am and immediately regret at 2:05am" 
    },
    { 
      "front": "Eyem inn luhv wiff thuh koh koh", 
      "back": "Im in love with the koko", 
      "hint": "Chocolate confession", 
      "description": "When your relationship status is 'committed to cocoa'" 
    },
    { 
      "front": "Ass truh nawt inn thee oh shun", 
      "back": "Astronaut in the ocean", 
      "hint": "Wet space", 
      "description": "When you're trying to be deep but you're just confused" 
    },
    { 
      "front": "Looz yur self inn thuh myoo zik", 
      "back": "Lose yourself in the music", 
      "hint": "Eminem wisdom", 
      "description": "Mom's spaghetti: A memoir" 
    },
    { 
      "front": "Wess temp studd", 
      "back": "West hempstead", 
      "hint": "Long Island life", 
      "description": "Where people argue about whether they're from the city or not" 
    },
    { 
      "front": "Skran tun thee ee lek trick sit tee", 
      "back": "Scranton the electric city", 
      "hint": "Office location", 
      "description": "Where paper is life and that's what she said" 
    },
    { 
      "front": "Thuh mawl deevz", 
      "back": "The maldives", 
      "hint": "Island paradise", 
      "description": "Where influencers go to take pictures of floating breakfast" 
    },
    { 
      "front": "Add ven chur izz owt thay urr", 
      "back": "Adventure is out there", 
      "hint": "UP quote", 
      "description": "When balloons become a valid form of transportation" 
    },
    { 
      "front": "Itz uh wuhn durr full lyfe", 
      "back": "Its a wonderful life", 
      "hint": "Holiday classic", 
      "description": "When an angel needs a promotion and you need a reality check" 
    },
    { 
      "front": "Fie vend dread twin tee hive thou sand six hun dread min its", 
      "back": "Five hundred twenty five thousand six hundred minutes", 
      "hint": "RENT math", 
      "description": "The most complicated way to say 'one year'" 
    },
    { 
      "front": "How wee go nah pay lass cheers rent", 
      "back": "How we gonna pay last years rent", 
      "hint": "Bohemian problems", 
      "description": "When your art doesn't pay the bills but at least you have a song about it" 
    },
    { 
      "front": "Flee mar kitt", 
      "back": "Flea market", 
      "hint": "Treasure hunt", 
      "description": "Where one person's trash becomes another person's questionable purchase" 
    },
    { 
      "front": "Hap pee thankz give ing too yew", 
      "back": "Happy thanksgiving to you", 
      "hint": "Turkey wishes", 
      "description": "When you're thankful but mostly just ready for a nap" 
    },
    { 
      "front": "Cock uh dood uhl dew", 
      "back": "Cockadoodledoo", 
      "hint": "Rooster call", 
      "description": "Nature's most annoying alarm clock" 
    },
    { 
      "front": "Izz ray yull", 
      "back": "Israel", 
      "hint": "Holy Land", 
      "description": "Where hummus is life and everyone's your cousin" 
    },
    { 
      "front": "Lass mang goh inn pear iss", 
      "back": "Last mango in paris", 
      "hint": "Tropical romance", 
      "description": "When fruit meets French sophistication" 
    },
    { 
      "front": "Inn dee un oh shun", 
      "back": "Indian ocean", 
      "hint": "Big water", 
      "description": "The ocean that's not the Pacific or Atlantic but still wants attention" 
    },
    { 
      "front": "Ack wuh row bix", 
      "back": "Aquarobics", 
      "hint": "Wet workout", 
      "description": "When you want to exercise but also pretend you're a synchronized swimmer" 
    },
    { 
      "front": "Tay bull mow tin", 
      "back": "Table mountain", 
      "hint": "Flat top", 
      "description": "Nature's attempt at furniture design" 
    },
    { 
      "front": "Kroo gurr nash null park", 
      "back": "Kruger national park", 
      "hint": "Safari time", 
      "description": "Where you realize you're not at the top of the food chain" 
    },
    { 
      "front": "Steal drumb", 
      "back": "Steel drum", 
      "hint": "Island beats", 
      "description": "The instrument that makes everything sound like vacation" 
    },
    { 
      "front": "Ree moat wurk", 
      "back": "Remote work", 
      "hint": "Pajama office", 
      "description": "When your commute is from bed to desk and back" 
    },
    { 
      "front": "Sand bore ding", 
      "back": "Sandboarding", 
      "hint": "Desert surfing", 
      "description": "When you want to snowboard but live in a desert" 
    },
    { 
      "front": "Im madge inn drag unz", 
      "back": "Imagine dragons", 
      "hint": "Modern rock", 
      "description": "When you're radioactive but in a good way" 
    },
    { 
      "front": "Awn tawp uhv thee whirled", 
      "back": "On top of the world", 
      "hint": "Peak feelings", 
      "description": "When everything's great but you still have to tell everyone about it" 
    },
    { 
      "front": "Ray dee oh ack tiv", 
      "back": "Radioactive", 
      "hint": "Glowing song", 
      "description": "When you wake up and choose nuclear physics" 
    },
    { 
      "front": "Lie unz head mow tin", 
      "back": "Lions head mountain", 
      "hint": "Cape Town peak", 
      "description": "When a mountain looks like a cat but everyone takes selfies anyway" 
    },
    { 
      "front": "Beer tay stingg", 
      "back": "Beer tasting", 
      "hint": "Hoppy sampling", 
      "description": "When drinking becomes a sophisticated activity" 
    },
    { 
      "front": "Cheez tay stingg", 
      "back": "Cheese tasting", 
      "hint": "Dairy adventure", 
      "description": "When you're fancy but also just really like cheese" 
    },
    { 
      "front": "Whine tay stingg", 
      "back": "Wine tasting", 
      "hint": "Grape judging", 
      "description": "When you pretend to taste notes of leather but it's just fermented grape juice" 
    },
    { 
      "front": "Surf fing inn sow thaf ree kuh", 
      "back": "Surfing in south africa", 
      "hint": "Cold waves", 
      "description": "When you want to surf but also maybe see a shark" 
    },
    { 
      "front": "Spahh dayy", 
      "back": "Spa day", 
      "hint": "Pamper time", 
      "description": "When you pay someone to tell you to relax" 
    },
    { 
      "front": "Suh fahr ree", 
      "back": "Safari", 
      "hint": "Animal search", 
      "description": "When you go on vacation to look at cats but bigger" 
    },
    { 
      "front": "Lite ning bawlt", 
      "back": "Lightning bolt", 
      "hint": "Sky zap", 
      "description": "Nature's way of saying 'don't stand there'" 
    },
    { 
      "front": "Lie unz roar ringg", 
      "back": "Lions roaring", 
      "hint": "Cat sounds", 
      "description": "When a meow goes pro" 
    },
    { 
      "front": "Lie unz poop pingg", 
      "back": "Lions pooping", 
      "hint": "Jungle business", 
      "description": "When nature calls in the wild" 
    },
    { 
      "front": "Dehd jur ahff", 
      "back": "Dead giraffe", 
      "hint": "Tall nap", 
      "description": "When a long neck takes its final bow" 
    },
    { 
      "front": "Dew bye", 
      "back": "Dubai", 
      "hint": "Desert bling", 
      "description": "Where buildings compete in a height contest and always win" 
    },
    { 
      "front": "Bah lee inn doe knee zhuh", 
      "back": "Bali indonesia", 
      "hint": "Island vibes", 
      "description": "Where people go to find themselves but find Instagram spots instead" 
    },
    { 
      "front": "Wah turr sly duh", 
      "back": "Water slide", 
      "hint": "Wet zoom", 
      "description": "When gravity and water team up for fun" 
    },
    { 
      "front": "Kliff jump pingg", 
      "back": "Cliff jumping", 
      "hint": "Scary leap", 
      "description": "When good judgment takes a vacation" 
    },
    { 
      "front": "Gett ting oh uld", 
      "back": "Getting old", 
      "hint": "Time march", 
      "description": "When your body starts making sounds every time you move" 
    },
    { 
      "front": "Grow wing oh uld", 
      "back": "Growing old", 
      "hint": "Age journey", 
      "description": "When naps become your favorite hobby" 
    },
    { 
      "front": "Ken yun ning", 
      "back": "Canyoning", 
      "hint": "Rock splash", 
      "description": "When hiking gets wet and wild" 
    },
    { 
      "front": "White wah turr raff ting", 
      "back": "Whitewater rafting", 
      "hint": "River rodeo", 
      "description": "When you pay to almost fall out of a boat" 
    },
    { 
      "front": "Back muh sahzh", 
      "back": "Back massage", 
      "hint": "Knot removal", 
      "description": "When someone else's elbows fix your problems" 
    },
    { 
      "front": "High king", 
      "back": "Hiking", 
      "hint": "Nature walking", 
      "description": "Walking but make it difficult" 
    },
    { 
      "front": "Owt door bath roomz", 
      "back": "Outdoor bathrooms", 
      "hint": "Nature's call", 
      "description": "When privacy is just a suggestion" 
    },
    { 
      "front": "See zunz uhv luhv", 
      "back": "Seasons of love", 
      "hint": "RENT anthem", 
      "description": "When you measure a year in cups of coffee" 
    },
    { 
      "front": "Wuhn sawng glore ree", 
      "back": "One song glory", 
      "hint": "Rocker's prayer", 
      "description": "When you need to write a hit before the end of Act One" 
    },
    { 
      "front": "Lyght my kan dull", 
      "back": "Light my candle", 
      "hint": "RENT duet", 
      "description": "When you definitely lost your stash but keep flirting anyway" 
    },
    { 
      "front": "Tang goh maw reen uh", 
      "back": "Tango Maureen", 
      "hint": "Ex-lovers dance", 
      "description": "When your girlfriend's ex teaches you to dance about your girlfriend" 
    },
    { 
      "front": "Lah vee boh emm", 
      "back": "La vie boheme", 
      "hint": "Bohemian toast", 
      "description": "When dinner turns into a revolution" 
    },
    { 
      "front": "Noh wuhn mournz thuh wik kid", 
      "back": "No one mourns the wicked", 
      "hint": "Green opener", 
      "description": "When being bad makes you famous" 
    },
    { 
      "front": "Dan sing throo lyff", 
      "back": "Dancing through life", 
      "hint": "Popular philosophy", 
      "description": "When you skip class to teach life lessons" 
    },
    { 
      "front": "Dee fye ying grav ih tee", 
      "back": "Defying gravity", 
      "hint": "Witch flight", 
      "description": "When you're so mad you break the laws of physics" 
    },
    { 
      "front": "Way ving throo uh whin doh", 
      "back": "Waving through a window", 
      "hint": "Teen angst", 
      "description": "When you're on the outside but make it musical" 
    },
    { 
      "front": "Yew will bee fownd", 
      "back": "You will be found", 
      "hint": "Viral hope", 
      "description": "When your anxiety goes viral but in a good way" 
    },
    { 
      "front": "Eye yam aff ree kuh", 
      "back": "I am Africa", 
      "hint": "Mormon pride", 
      "description": "When you really misunderstand an entire continent" 
    },
    { 
      "front": "Joe ziff smyth uh mare ih kun moh zez", 
      "back": "Joseph Smith American Moses", 
      "hint": "Mormon tale", 
      "description": "When you tell a story about America but make it biblical" 
    },
    { 
      "front": "Itz fyve oh klawk sum wear", 
      "back": "It's five o'clock somewhere", 
      "hint": "Drink excuse", 
      "description": "When you need to justify your life choices" 
    },
    { 
      "front": "My hed hertz my feet stynk n eye dohnt luv gee zuss", 
      "back": "My head hurts my feet stink and I don't love Jesus", 
      "hint": "Mormon doubt", 
      "description": "When your crisis of faith includes poor hygiene" 
    },
    { 
      "front": "Sur kull uhv lyff", 
      "back": "Circle of life", 
      "hint": "Lion wisdom", 
      "description": "When animals teach you about existence" 
    },
    { 
      "front": "Hee livz inn yew", 
      "back": "He lives in you", 
      "hint": "Lion spirit", 
      "description": "When your dad becomes a cloud but it's inspirational" 
    },
    { 
      "front": "Hah koo nuh muh tah tuh", 
      "back": "Hakuna Matata", 
      "hint": "Problem free", 
      "description": "When your life philosophy comes from a warthog and a meerkat" 
    },
    { 
      "front": "Ken yew feel thuh luhv tuh nyght", 
      "back": "Can you feel the love tonight", 
      "hint": "Lion romance", 
      "description": "When animals fall in love and Elton John narrates it" 
    },
    { 
      "front": "Truh dish yun", 
      "back": "Tradition", 
      "hint": "Fiddler opener", 
      "description": "When you explain your entire culture in one word" 
    },
    { 
      "front": "Tik tik boo mmm", 
      "back": "Tick tick boom", 
      "hint": "Time bomb musical", 
      "description": "When your quarter-life crisis gets its own soundtrack" 
    },
    { 
      "front": "May bee hap pee end ding", 
      "back": "Maybe happy ending", 
      "hint": "Hopeful thoughts", 
      "description": "When you're optimistic but also realistic" 
    },
    { 
      "front": "Lyfe izz uh high whey", 
      "back": "Life is a highway", 
      "hint": "Road philosophy", 
      "description": "When your GPS becomes a metaphor for existence" 
    },
    { 
      "front": "Ev ree day izz uh wine ding rowed", 
      "back": "Everyday is a winding road", 
      "hint": "Journey truth", 
      "description": "When even your shortcuts have shortcuts" 
    },
    { 
      "front": "Par tee inn thuh yew ess ayy", 
      "back": "Party in the USA", 
      "hint": "Patriotic pop", 
      "description": "When your taxi radio becomes your autobiography" 
    },
    { 
      "front": "Liv vin awn uh pray yerr", 
      "back": "Livin on a prayer", 
      "hint": "Jersey anthem", 
      "description": "When being halfway there is better than not being there at all" 
    },
    { 
      "front": "Sweet hohm al uh bam uh", 
      "back": "Sweet home Alabama", 
      "hint": "Southern rock", 
      "description": "When your GPS says 'turn left at the family reunion'" 
    },
    { 
      "front": "Wut dreemz arr mayd uhv", 
      "back": "What dreams are made of", 
      "hint": "Lizzie's anthem", 
      "description": "When your Italian vacation turns into pop stardom" 
    },
    { 
      "front": "Yeer three thow zand", 
      "back": "Year three thousand", 
      "hint": "Future pop", 
      "description": "When your time machine only goes to boy band concerts" 
    },
    { 
      "front": "Juhst uh rownd thuh riv ver bend", 
      "back": "Just around the riverbend", 
      "hint": "Disney wisdom", 
      "description": "When your GPS is a raccoon and your car is a canoe" 
    },
    { 
      "front": "Awn thuh flore", 
      "back": "On the floor", 
      "hint": "Club classic", 
      "description": "When gravity becomes a dance move" 
    },
    { 
      "front": "Krank that sole juh boy", 
      "back": "Crank that soulja boy", 
      "hint": "Dance craze", 
      "description": "When Superman becomes a dance move" 
    },
    { 
      "front": "Grow azz wee goh", 
      "back": "Grow as we go", 
      "hint": "Love journey", 
      "description": "When your relationship needs a gardening metaphor" 
    },
    { 
      "front": "Mayd two bee", 
      "back": "Made to be", 
      "hint": "Destiny talk", 
      "description": "When fate needs a bumper sticker" 
    },
    { 
      "front": "Feeldz uhv gowld", 
      "back": "Fields of gold", 
      "hint": "Sting's farm", 
      "description": "When agriculture meets romance" 
    },
    { 
      "front": "Heer kumz thuh suhn", 
      "back": "Here comes the sun", 
      "hint": "Beatles dawn", 
      "description": "When nature's alarm clock actually makes you happy" 
    },
    { 
      "front": "Thuh lawng n wine ding rowd", 
      "back": "The long and winding road", 
      "hint": "Beatles journey", 
      "description": "When your GPS takes the scenic route through your feelings" 
    },
    { 
      "front": "Iff eye had uh bowt", 
      "back": "If I had a boat", 
      "hint": "Wishful sailing", 
      "description": "When your escape plan involves maritime dreams" 
    },
    { 
      "front": "Show mee thuh whey", 
      "back": "Show me the way", 
      "hint": "Lost soul", 
      "description": "When you need directions but emotionally" 
    },
    { 
      "front": "Thatz thuh whey itt izz", 
      "back": "That's the way it is", 
      "hint": "Life facts", 
      "description": "What adults say when they don't want to explain things" 
    },
    { 
      "front": "Eye wannah dans wit sum buh dee", 
      "back": "I wanna dance with somebody", 
      "hint": "Whitney's wish", 
      "description": "When your dance partner standards are surprisingly low" 
    },
    { 
      "front": "Thuh sayf tee dahnts", 
      "back": "The safety dance", 
      "hint": "80s moves", 
      "description": "When dancing dangerously isn't an option" 
    },
    { 
      "front": "Fur guh lish ee yus", 
      "back": "Fergalicious", 
      "hint": "Self-praise", 
      "description": "When spelling your own name becomes a workout" 
    },
    { 
      "front": "Ee vack yew ayt thuh dans flore", 
      "back": "Evacuate the dancefloor", 
      "hint": "Club emergency", 
      "description": "When your moves are so bad they're considered a safety hazard" 
    },
    { 
      "front": "Boo tee lish ee yus", 
      "back": "Bootylicious", 
      "hint": "Destiny's jelly", 
      "description": "When you're not sure if the world is ready for this jelly" 
    },
    { 
      "front": "Lipp glawss", 
      "back": "Lip gloss", 
      "hint": "Shiny pout", 
      "description": "When your makeup is poppin' and so is your confidence" 
    },
    { 
      "front": "Tayk yore shurt awff", 
      "back": "Take your shirt off", 
      "hint": "Strip request", 
      "description": "When the temperature isn't the real reason" 
    },
    { 
      "front": "Inn thuh shah low", 
      "back": "In the shallow", 
      "hint": "Star is born", 
      "description": "When you're far from the shallow now but still can't swim" 
    },
    { 
      "front": "Wut uh wuhn der full werld", 
      "back": "What a wonderful world", 
      "hint": "Louis' view", 
      "description": "When you see trees of green and skies of blue and think 'nice'" 
    },
    { 
      "front": "Gett bak joe joe", 
      "back": "Get back Jojo", 
      "hint": "Beatles plea", 
      "description": "When you need to go back to where you once belonged" 
    },
    { 
      "front": "Eye dint git it frum az best ohs", 
      "back": "I didn't get it from asbestos", 
      "hint": "Health defense", 
      "description": "When you need to clarify the source of your problems" 
    },
    { 
      "front": "Awl eye doo iz winn", 
      "back": "All I do is win", 
      "hint": "Victory lap", 
      "description": "When modesty takes a vacation" 
    },
    { 
      "front": "Uh big lump wit knawbz itt haz thuh jooce", 
      "back": "A big lump with knobs it has the juice", 
      "hint": "Corn song", 
      "description": "When vegetables become TikTok famous" 
    },
    { 
      "front": "Yew n mee butt moast lee mee", 
      "back": "You and me but mostly me", 
      "hint": "Mormon ego", 
      "description": "When partnership means different things to different people" 
    },
    { 
      "front": "Iff eye had my thyme uh gen", 
      "back": "If I had my time again", 
      "hint": "Do-over dreams", 
      "description": "When hindsight is 20/20 but time machines don't exist" 
    },
    { 
      "front": "Al ex zan dur ham ill tun", 
      "back": "Alexander Hamilton", 
      "hint": "Founding father", 
      "description": "When your life story becomes a rap battle" 
    },
    { 
      "front": "Luv izz ann oh pun dore", 
      "back": "Love is an open door", 
      "hint": "Frozen hearts", 
      "description": "When your dating profile is actually a trap" 
    },
    { 
      "front": "Yew kant stahp thuh beet", 
      "back": "You can't stop the beat", 
      "hint": "Hairspray groove", 
      "description": "When rhythm wins against all odds" 
    },
    { 
      "front": "Wee dohnt diss krim in eight bayzd awn jen dur", 
      "back": "We don't discriminate based on gender", 
      "hint": "Equal rights", 
      "description": "When inclusion becomes a catchy tune" 
    },
    { 
      "front": "Downt bring mee heer ann ee more awl rite", 
      "back": "Don't bring me here anymore alright", 
      "hint": "Final visit", 
      "description": "When you've had enough of someone's favorite restaurant" 
    }
  ]
  
  return (
    <div className="grid grid-cols-2 gap-12 p-6 max-h-[calc(100vh-2rem)] overflow-y-auto print:grid print:grid-cols-2 print:gap-8 print:p-4">
      <style type="text/css" media="print">{`
        @page {
          size: letter portrait;
          margin: 0.5in;
        }
        @media print {
          body {
            margin: 0;
            padding: 0;
          }
          .grid {
            display: grid !important;
            grid-template-columns: repeat(2, 1fr) !important;
            grid-template-rows: repeat(4, 1fr) !important;
            gap: 2rem !important;
            page-break-after: always;
          }
          .grid > div:nth-child(8n) {
            page-break-after: always;
          }
          .grid > div {
            break-inside: avoid;
            page-break-inside: avoid;
          }
        }
      `}</style>
      {phrases?.map((phrase, index) => (
        <SimpleCard 
          key={index}
          gibberish={phrase.front}
        />
      ))}

      {phrases?.map((phrase, index) => (
        <DetailCard 
          key={index}  
          phrase={phrase.back}
          hint={phrase.hint}
          description={phrase.description}
        />
      ))}
    </div>
  );
};

export default CardDisplay;