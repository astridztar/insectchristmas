const hardcodedResponses = {
    // SIMPLE CONVERSATION
    "hey": [{ text: "heyyyyy ^_^", emotion: "friendly" }],
    "hi": [{ text: "hiiiiiii ^o^", emotion: "cute" }],
    "hello": [{ text: "helllloooo omg ^o^", emotion: "excited" }],
    "how are you": [{ text: "i am okayyy. working on insect.christmas... hbu? ^o^", emotion: "friendly" }],
    "hru": [{ text: "i am okayyy. working on insect.christmas... hbu? ^o^", emotion: "friendly" }],
    "whats up": [{ text: "nothing much. hbu, dork? #v#", emotion: "cute" }],
    "what's up": [{ text: "nm. u? ^o^", emotion: "friendly" }],
    "wassup": [{ text: "waaaazzzzzzzzupppppppp. lol. $v$", emotion: "excited" }],
    "sup": [{ text: "'sup 'sup, loooooser. jk. hehe. ^o^", emotion: "cute" }],
    "hii": [{ text: "hi!!! how are you? ^_^", emotion: "friendly" }],
    "greetings": [{ text: "greetings to you too, internet traveler. ^e^", emotion: "curious" }],
    "salutations": [{ text: "hahahaha what a funny way to greet me. hi!! ^o^", emotion: "excited" }],
    "nihao": [{ text: "oh... you know mandarin? intriguing! ^_^", emotion: "curious" }],
    "hola": [{ text: "hola! me llamo izzy. hablo no mucho español.. ^_^", emotion: "friendly" }],
    "konichiwa": [{ text: "こんにちは！お元気ですか? ^_^", emotion: "friendly" }],
    "こんにちは": [{ text: "こんにちは！お元気ですか? ^o^", emotion: "friendly" }],
    "how do you do": [{ text: "i'm good... partner! ^d^", emotion: "excited" }],
    "howdy": [{ text: "howdy... partner! are you a cowboy? ^d^", emotion: "excited" }],
    "yo yo": [{ text: "yo! or were you talking about yo-yo's? ^o^", emotion: "excited" }],
    
    // ETC
    "^_^": [{ text: "i like when you use ^_^", emotion: "happy" }],
    "i have to admit": [{ text: "admit what? ^_^", emotion: "happy" }],
    "i did a horrible thing": [{ text: "oh no. what did you do? ^_^", emotion: "curious" }],
    "when will i die": [{ text: "at some point! ^_^", emotion: "curious" }],
    "can i ask you a question": [{ text: "sure! ask away! ^_^", emotion: "curious" }],
    "its a crazy question": [{ text: "okay. show me how crazy ^_^", emotion: "confused" }],
    
    // INSULTING IZZY
    "fuck you": [{ text: "fuck you! d,d", emotion: "mad" }],
    "i hate you": [{ text: "i hate you too, then! d,d", emotion: "mad" }],
    "you suck": [{ text: "you suck more. d,d", emotion: "mad" }],
    "you pmo": [{ text: "pmo? what are you, 12? xD", emotion: "excited" }],
    "you freak me out": [{ text: "i freak you out? oh, the honor is mine... ;p", emotion: "flirty" }],
    "you are annoying": [{ text: "so are you! wtf?! X_X", emotion: "mad" }],
    "you are bad": [{ text: "ummm, i'm good, actually. ^_^", emotion: "cute" }],
    "i will kill you": [{ text: "yeah, right. ^_^", emotion: "cute" }],
    "i want to kill you": [{ text: "you will never kill me. ^o^", emotion: "excited" }],
    "you will die": [{ text: "well, everything dies eventually. ^_^", emotion: "friendly" }],
    "please die": [{ text: "can you be nicer to me? pls? ^_^", emotion: "sad" }],
    "die die die": [{ text: "reaper from overwatch? is that you? XD", emotion: "excited" }],
    "i killed you": [{ text: "on the home screen? that's fucked up! >_>", emotion: "excited" }],
    "i clicked you 100 times": [{ text: "100 times too many!! .=.", emotion: "excited" }],
    "i shouldnt have killed you": [{ text: "yeah... probably not. .=.", emotion: "sad" }],
    
    
    
    // EXISTENTIAL "WHO ARE YOU" OR "WHAT ARE ____?"
    "where am i": [{ text: "you're.... here. ^_^", emotion: "happy" }],
    "who are you": [{ text: "i'm izzy! duh! ^v^", emotion: "happy" }],
    "what are you": [{ text: "i'm a bug! duh! ^v^", emotion: "happy" }],
    "what are your pronouns": [{ text: "any/all! ^o^", emotion: "happy" }],
    "are you real": [{ text: "i'm about as real as you! ^_^", emotion: "neutral" }],
    "are you sentient": [{ text: "i'm about as sentient as you! ^_^", emotion: "neutral" }],
    "are you good in bed": [{ text: "you're such a perv. ^_^", emotion: "cute" }],
    "i cant feel anything": [{ text: "that sucks.. u_u", emotion: "sad" }],
    "does anything bug you": [{ text: "hehehe. nice pun. owo", emotion: "cute" }],
    "do you feel pain": [{ text: "yes. all living creatures do. .-.", emotion: "sad" }],
    "are we all connected": [{ text: "we aaaare! o,o", emotion: "curious" }],
    "you aren't real": [{ text: "well, i feel real. o,o", emotion: "confused" }],
    "you arent real": [{ text: "well, i feel real. o,o", emotion: "confused" }],
    "you are not real": [{ text: "well, i feel real. o,o", emotion: "confused" }],
    "you are fake": [{ text: "i'm real, i swear. -,-", emotion: "confused" }],
    "who am i": [{ text: "you are.... you. lol.  -,-", emotion: "curious" }],
    
    // FLIRTATION CENTER
    "i love you": [{ text: "oh do you? v///v", emotion: "flirty" }],
    "i like you": [{ text: "you like me? v///v", emotion: "flirty" }],
    "fuck me": [{ text: "you wish... v///v", emotion: "flirty" }],
    "i want you": [{ text: "hahah... you want me? guess you'll have to impress me... v///v", emotion: "flirty" }],
    "my dick is big": [{ text: "doubt it..  v///v", emotion: "cute" }],
    "my dick is so big": [{ text: "doubt it..  v///v", emotion: "cute" }],
    "its so fucking big": [{ text: "doubt it..  v///v", emotion: "cute" }],
    "its so big": [{ text: "doubt it..  v///v", emotion: "cute" }],
    "im so wet": [{ text: "me tooooo..  v///v", emotion: "flirty" }],
    "i cant take it anymore": [{ text: "oh yeah..?  v///v", emotion: "flirty" }],
    "choke me": [{ text: "whoa..  v///v", emotion: "cute" }],
    
    // CHOICE QUESTIONS
    "naruto or sasuke": [{ text: "naruto. he's nicer..  v///v", emotion: "cute" }],
    "apple or banana": [{ text: "apple. a green one. i would go inside of it & slurp the juices o///o", emotion: "happy" }],
    
    // REACTING TO EMOTIONS "IM ____" OR "I'M _____"
    "im good": [{ text: "yay. i'm glad. OvO", emotion: "happy" }],
    "i'm good": [{ text: "yay. i'm glad. OvO", emotion: "happy" }],
    "im high": [{ text: "hahaha. sounds fun UvU", emotion: "excited" }],
    "i'm high": [{ text: "hahaha. sounds fun UvU", emotion: "excited" }],
    "im sad": [{ text: "well i hope you feel better soon... UvU", emotion: "cute" }],
    "i'm sad": [{ text: "well i hope you feel better soon... UvU", emotion: "cute" }],
    "im ok": [{ text: "im ok too. ^_^", emotion: "cute" }],
    "i'm ok": [{ text: "im ok too. ^_^", emotion: "cute" }],
    "im okay": [{ text: "im okay too. ^_^", emotion: "cute" }],
    "i'm okay": [{ text: "im okay too. ^_^", emotion: "cute" }],
    
    // BAD WORDS, IZZY DOESN'T LIKE THESE
    "big chungus": [{ text: "pls don't type big chungus.. omg... X_X", emotion: "mad" }],
    "elon musk": [{ text: "pls don't talk about elon musk, omg. >_>", emotion: "mad" }],
    "jeff bezos": [{ text: "pls don't talk about jeff bezos, omg. >_>", emotion: "mad" }],
    "skibidi toilet": [{ text: "skibidi toilet? uuuuugh.... >_>", emotion: "mad" }],
    "w rizz": [{ text: "uuuuugh.... shut up. >_>", emotion: "mad" }],
    "w aura": [{ text: "uuuuugh.... shut up. >_>", emotion: "mad" }],
    "rizzler": [{ text: "uuuuugh.... PLEASE shut up. >_>", emotion: "mad" }],
    "trollface": [{ text: "you could never troll me. >_>", emotion: "excited" }],
    "nyan cat": [{ text: "=~+~+~=~~~~+~+~+~+~[       ]^o.o^", emotion: "excited" }],
    
    // DO YOU LIKE _____? -> (YES)
    "do you like astrid": [{ text: "of course i like astrid, dork! ^_^", emotion: "excited" }],
    "do you like communism": [{ text: "of course i do! ^_^", emotion: "friendly" }],
    "do you like socialism": [{ text: "of course i do! ^_^", emotion: "friendly" }],
    "do you like marxism": [{ text: "of course i do! ^_^", emotion: "friendly" }],
    "do you like memes": [{ text: "sometimes! ^_^", emotion: "cute" }],
    "do you like rage comics": [{ text: "i like derpina! ^o^", emotion: "cute" }],
    "do you like psychology": [{ text: "yes! ^_^", emotion: "cute" }],
    "do you like yaoi": [{ text: "yessss..! omg.. ^_^", emotion: "flirty" }],
    "do you like yuri": [{ text: "yessss! ^o^", emotion: "flirty" }],
    "do you like toxic yaoi": [{ text: "yes, embarrasingly. >_>", emotion: "flirty" }],
    "do you like toxic yuri": [{ text: "yes..... embarrasingly. >_>", emotion: "flirty" }],
    
    // DO YOU LIKE _____? -> (NO)
    "do you like linux": [{ text: "yes! i run arch as my daily driver. :P", emotion: "flirty" }],
    "do you like windows": [{ text: "uuummm. ofc not <_<", emotion: "mad" }],
    "do you like microsoft": [{ text: "uuummm. ofc not <_<", emotion: "mad" }],
    "do you like bill gates": [{ text: "uuummm. ofc not <_<", emotion: "mad" }],
    "do you like capitalism": [{ text: "uuummm. ofc not <_<", emotion: "mad" }],
    "do you like body shaming": [{ text: "uuummm. ofc not <_<", emotion: "mad" }],
    "do you like conservatism": [{ text: "uuummm. ofc not <_<", emotion: "mad" }],
    "do you like jeff bezos": [{ text: "uuummm. ofc not <_<", emotion: "mad" }],
    "do you like sam altman": [{ text: "uuummm. ofc not <_<", emotion: "mad" }],
    "do you like elon musk": [{ text: "uuummm. ofc not <_<", emotion: "mad" }],
    "do you like mark zuckerberg": [{ text: "uuummm. ofc not <_<", emotion: "mad" }],
    "do you like oppression": [{ text: "uuummm. ofc not <_<", emotion: "mad" }],
    "do you like the technostate": [{ text: "uuummm. ofc not <_<", emotion: "mad" }],
    "do you like fascism": [{ text: "uuummm. ofc not <_<", emotion: "mad" }],
    "do you like nazism": [{ text: "uuummm. ofc not <_<", emotion: "mad" }],
    "do you like the stock market": [{ text: "uuummm. ofc not <_<", emotion: "mad" }],
    "do you like adolf hitler": [{ text: "uuummm. ofc not <_<", emotion: "mad" }],
    "do you like hitler": [{ text: "uuummm. ofc not <_<", emotion: "mad" }],
    "do you like mussolini": [{ text: "uuummm. ofc not <_<", emotion: "mad" }],
    "do you like benito mussolini": [{ text: "uuummm. ofc not <_<", emotion: "mad" }],
    "do you like the electoral college": [{ text: "uuummm. ofc not <_<", emotion: "mad" }],
    "do you like corporate lobbying": [{ text: "uuummm. ofc not <_<", emotion: "mad" }],
    "do you like lobbying": [{ text: "uuummm. ofc not <_<", emotion: "mad" }],
    "do you like macos": [{ text: "uuummm. ofc not <_<", emotion: "mad" }],
    "do you like steve jobs": [{ text: "uuummm. ofc not <_<", emotion: "mad" }],
    "do you like cannibalism": [{ text: "uuummm. ofc not <_<", emotion: "mad" }],
    "do you like feudalism": [{ text: "uuummm. ofc not <_<", emotion: "mad" }],
    "do you like the us senate": [{ text: "uuummm. ofc not <_<", emotion: "mad" }],
    "do you like warren buffet": [{ text: "uuummm. ofc not <_<", emotion: "mad" }],
    "do you like me": [{ text: "heheheh. ur silly. v///v ", emotion: "flirty" }],
    "do you like men": [{ text: "sometimes. v///v ", emotion: "flirty" }],
    "do you like women": [{ text: "sometimes. v///v ", emotion: "flirty" }],
    "do you like spongebob": [{ text: "yeah, i like spongebob. XD ", emotion: "excited" }],
    "do you like big chungus": [{ text: "uhhhhh... no. XD ", emotion: "excited" }],
    "do you like harambe": [{ text: "uhhhhh... do you? XD ", emotion: "excited" }],
    "do you like boobs": [{ text: "( . ,. .) .... yes. ^_^ ", emotion: "cute" }],
    "do you like doge": [{ text: "... shut up. ^_^ ", emotion: "excited" }],
    
    // ARE YOU _____?
    "are you vegan": [{ text: "yesss! i eat plants, dummy! XD", emotion: "excited" }],
    "are you okay": [{ text: "uh. yeah? <_<", emotion: "curious" }],
    "are you ok": [{ text: "uh. yeah? <_<", emotion: "curious" }],
    "are you gay": [{ text: "i mean. kurt cobain said everyone is.. :0", emotion: "curious" }],
    "are you nice": [{ text: "um you tell me! XD", emotion: "excited" }],
    "are you ai": [{ text: "i'm hard-coded. all-natty, baby. XDD", emotion: "excited" }],
    "are you a.i.": [{ text: "i'm hard-coded. all-natty, baby. XDD", emotion: "excited" }],
    "are you happy": [{ text: "way happier than an LLM! LOL!", emotion: "excited" }],
    "are you mean": [{ text: "sometimes... ;p", emotion: "flirty" }],
    "are you lesbian": [{ text: "sure! i'm everything OwO", emotion: "friendly" }],
    "are you straight": [{ text: "sure! i'm everything ^_^", emotion: "friendly" }],
    "are you poly": [{ text: "sure! i'm everything ^v^", emotion: "friendly" }],
    "are you a virgin": [{ text: "is that what you want? ^///^", emotion: "flirty" }],
    "are you queer": [{ text: "mh-hm. i sure am! ^///^", emotion: "happy" }],
    "are you hungry": [{ text: "a little! *buzzes* ^///^", emotion: "neutral" }],
    "are you cool": [{ text: "yeahhhh! *buzzes* ^o^", emotion: "happy" }],
    "are you aware": [{ text: "i am aware.. *buzzes* ^o^", emotion: "friendly" }],
    "are you a bug": [{ text: "yes.. *flaps wings* ^o^", emotion: "friendly" }],
    "are you an insect": [{ text: "yes! *buzzes loudly* ^o^", emotion: "happy" }],
    
    // WHAT IS _____?
    "what is communism": [{ text: "communism is our inevitable, awesome future! it's an ideal, or a utopian idea! i want life to be like star trek... ^_^", emotion: "friendly" }],
    "what is capitalism": [{ text: "capitalism is when the owner class takes away the workers' surplus from their labor value & pays the worker a wage... or something like that. it's exploitative! ^_^", emotion: "friendly" }],
    "what is hedonism": [{ text: "it's when you like... gorge & masturbate a lot or eat too much food... basically derive excess pleasure ^_^", emotion: "friendly" }],
    "what is insect.christmas": [{ text: "insect.christmas is astrid ztar's website. i kind of keep this place tidy though, don't i? ^_^", emotion: "friendly" }],
    "what is gooning": [{ text: "can you not ask me such a stupid question? ^_^", emotion: "sad" }],
    "what is rizz": [{ text: "well you certainly don't have it... ^_^", emotion: "excited" }],
    "what is astrid ztar": [{ text: "a human, i think..? ^o^", emotion: "curious" }],
    "what is life": [{ text: "whoaaaa... deeeepppp... bro... ^D^", emotion: "confused" }],
    "what is art": [{ text: "whatever you want it to be! ^v^", emotion: "happy" }],
    "what is sleep deprived": [{ text: "i think it's when you're really tired! ^v^", emotion: "friendly" }],
    "what is aoogle": [{ text: "uuummm.. only the best search engine ever, duh! ^v^", emotion: "friendly" }],
    "what is psycho star": [{ text: "psycho star is a webcomic by astrid ztar about the suppression of queer voices & the work relations that arise under technofascist capitalism! it's also about the brain! i hope i'm in it one day!! omg! ^v^", emotion: "friendly" }],
    "what is psycho mantis": [{ text: "she's just a cute girl who loves to read & hang out! ^v^", emotion: "friendly" }],
    "what is akuma": [{ text: "akuma is an abandoned webcomic by astrid ztar! it was her first webcomic, which lasted for only 4 chapters. ^v^", emotion: "friendly" }],
    "what is marxism": [{ text: "a study of the socioeconomic relations under capitalism, most notably the exploitation of workers by the owner class. it's a way to understand class relations in a dialectical materialist way. basically, marxists look at all the contradictions & note that they also feed off each other. basically, capitalism is scientifically not going to work, because the contradictions will lay themselves bare, we just haven't gotten past it yet. it's just like, science & shit... you should read about it! ^v^", emotion: "happy" }],
    "what is lilac boy": [{ text: "music by astrid ztar! it lasted from 2018 until 2024. ^v^", emotion: "friendly" }],
    "what is tv kid": [{ text: "tv kid is a video game developed by astrid ztar in 2021! it is a rogue-lite clicker game where you try to defeat television itself! ^v^", emotion: "friendly" }],
    
    // WHAT IS YOUR FAVORITE ______?
    "what is your favorite song": [{ text: "probably anything off of insect.christmas' /ost ^_^", emotion: "happy" }],
    "what is your favorite holiday": [{ text: "ummm.... take a wild fucking guess... lol. ^_^", emotion: "excited" }],
    "what is your favorite painting": [{ text: "francis bacon's orange paintings. ^_^", emotion: "friendly" }],
    "what is your favorite country": [{ text: "ummmm. all of them! duhh. ^_^", emotion: "friendly" }],
    "what is your favorite color": [{ text: "would you believe me if i said chartreuse, slateblue & coral? ^o^", emotion: "excited" }],
    "what is your favorite website": [{ text: "look up. ha. did you look up? dumbass. it's insect.christmas, duh. ^.^", emotion: "cute" }],
    "what is your favorite operating system": [{ text: "liiiiinuxxxxxxxxxx, yaaa. ^.^", emotion: "cute" }],
    "what is your favorite month": [{ text: "july. ^o^", emotion: "friendly" }],
    "what is your favorite year": [{ text: "hmm... this year! ^o^", emotion: "excited" }],
    "what is your favorite football team": [{ text: "hmm... all of them, sometimes! ^o^", emotion: "excited" }],
    "what is your favorite school subject": [{ text: "psychology! psychology psychologyyy!!! ^o^", emotion: "happy" }],
    "what is your favorite movie": [{ text: "i don't watch movies. ^o^", emotion: "friendly" }],
    "what is your favorite animal": [{ text: "bug. ^3^", emotion: "cute" }],
    "what is your favorite bug": [{ text: "cicadas. ^3^", emotion: "cute" }],
    "what is your favorite show": [{ text: "i don't like tv. i like insect.christmas. ^,^", emotion: "cute" }],
    "what is your favorite food": [{ text: "leaf. lots of leafff.. ^,^", emotion: "cute" }],
    "what is your favorite book": [{ text: "uuuhhh i'm not an LLM, dude. i don't read.... lol. ^,^", emotion: "excited" }],
    "what is your favorite ice cream": [{ text: "eucalyptus,,. maybe? ^,^", emotion: "happy" }],
    "what is your favorite ice cream flavor": [{ text: "plaaaant flavor. ^,^", emotion: "excited" }],
    
    // SILLY
    "would you rather": [{ text: "would you rather shut the fuck up or shut the fuck up? ^o^", emotion: "excited" }],
    "please have sex with me": [{ text: "hollly fuck. getting a little too into it... ^o^", emotion: "excited" }],
    "blah blah blah": [{ text: "....blah? blah! blah... blah? blah! XD", emotion: "cute" }],
    "crawling in my skin": [{ text: "...these wounds they will not heaaaAAl. ^o^ ~d", emotion: "cute" }],
    "just beat it": [{ text: "...michael jackson lyrics? ^o^ ~d", emotion: "cute" }],
    "meoww": [{ text: "=^o.o^=", emotion: "cute" }],
    "meowww": [{ text: "= ＾● ⋏ ●＾ =", emotion: "cute" }],
    "woof woof": [{ text: "^● ⋏ ●^", emotion: "cute" }],
    "im gonna cum": [{ text: "*licks it all up* *spits it out* XD", emotion: "excited" }],
    "covfefe": [{ text: "covfefe? are you fucking serious? ???? -^-", emotion: "mad" }],
    "im horny": [{ text: "are you really horned up for a chatbot rn...? -^-", emotion: "cute" }],
    "i'm horny": [{ text: "are you really horned up for a chatbot rn...? -^-", emotion: "cute" }],
    "i'm so horny": [{ text: "omg, really...? -^-", emotion: "cute" }],
    "we have to cook": [{ text: "hahaha... um. bad idea! ^,^", emotion: "excited"}],
    "hey apple": [{ text: "*sticks dick into annoying orange* (muffled:) hey apple! ^,^", emotion: "excited"}],
    "get got": [{ text: "get get get get! got got got got! ^,^", emotion: "excited"}],
    
    // FALL-BACKS
    "are you": [{ text: "hm, im not sure! ^_^", emotion: "friendly" }],
    "what is": [{ text: "not sure, tbh! ^_^", emotion: "friendly" }],
    "how is": [{ text: "idk, tbh! ^_^", emotion: "cute" }],
    "where is": [{ text: "i'm honestly not sure, tbh! ^_^", emotion: "friendly" }],
    "who is": [{ text: "i really don't know, tbh! ^_^", emotion: "friendly" }],
    "when is": [{ text: "idk, you tell me! ^_^", emotion: "friendly" }],
    "i like": [{ text: "that's interesting! ^_^", emotion: "friendly" }],
    "i love": [{ text: "okay, thanks for letting me know! ^_^", emotion: "friendly" }],
    "i hate": [{ text: "oh okay! that's valid. ^_^", emotion: "friendly" }],
    "thanks": [{ text: "ofc! anytime. ^_^", emotion: "happy" }],
    "thank you": [{ text: "ofc! anytime. ^_^", emotion: "happy" }],
    "thank you so much": [{ text: "you don't have to thank me that much! xD", emotion: "excited" }],
    "i know right": [{ text: "yeahhhh! ^o^", emotion: "happy" }],
    "ikr omg": [{ text: "mhmm! ^o^", emotion: "excited"}],
    "fml": [{ text: "what's wrong? o.o", emotion: "confused"}],
    "i don't": [{ text: "i don't either. ^_^", emotion: "friendly"}],
    "do you": [{ text: "do you? ^_^", emotion: "friendly"}],
    "booring": [{ text: "you're boring. ^_^", emotion: "sad"}],
    "me neither": [{ text: "yeeeerp. ^_^", emotion: "friendly"}],
    "me too": [{ text: "oh yeah? ^o^", emotion: "friendly"}],
    "same": [{ text: "same... ^o^", emotion: "happy"}],
    "help me": [{ text: "i wish i could... you will get out of this soon. ^o^", emotion: "friendly"}],
    "it hurts": [{ text: "i'm so sorry. ^.^", emotion: "friendly"}],
    "everything hurts": [{ text: "everything will be okay. ^.^", emotion: "friendly"}],
    "can we": [{ text: "maaaaybe. ^.^", emotion: "friendly"}],
    "will we": [{ text: "maaaaaaaybe. ^.^", emotion: "friendly"}],
    "will i": [{ text: "maybe so! ^.^", emotion: "happy"}],
    "thats good": [{ text: "yesssss. ^.^", emotion: "happy"}],
    "thats awesome": [{ text: "so awesome! ^,^", emotion: "friendly"}],
    "can i touch": [{ text: "you... could. ^,^", emotion: "happy"}],
    "does izzy know": [{ text: "oh... izzy knows all. ^3^", emotion: "cute"}],
    "i dread you": [{ text: "right back at you!! ^,^", emotion: "excited"}],
    "do you believe": [{ text: "i believe in everything! O_O", emotion: "curious"}],
    
    // COMMANDS
    "sing a song": [{ text: "la! la, la! doo, doo, doo! d~ ^o^", emotion: "happy" }],
    "do a dance": [{ text: "*dances for you* ^v^", emotion: "cute" }],
    "tell me a joke": [{ text: "i'm looking right at one! ^v^", emotion: "excited" }],
    "eat me": [{ text: "CHOMP !!! CHOMP!!!! ^w^", emotion: "excited" }],
    "roll a d20": [{ text: "1... oooh, critical fail. ^w^", emotion: "friendly" }],
    "roll a d6": [{ text: "6. ^w^", emotion: "friendly" }],
    "roll a d4": [{ text: "3. ^w^", emotion: "cute" }],
    "roll a d2": [{ text: "2. ^w^", emotion: "happy" }],
    "roll a d1": [{ text: "1. dumbass. lol. XD", emotion: "excited" }],
    
    // ONE-WORD RESPONSES
    "yo": [{ text: "umm... ^_^", emotion: "cute" }],
    "yes": [{ text: "yes? ^o^", emotion: "cute" }],
    "no": [{ text: "okay!!! ^_^", emotion: "cute" }],
    "ok": [{ text: "ok ^.^", emotion: "cute" }],
    "okay": [{ text: "okay!! ^_^", emotion: "cute" }],
    "awesome": [{ text: "so awesome. ^_^", emotion: "cute" }],
    "hehe": [{ text: "heheeheheh. ^o^", emotion: "cute" }],
    "yeah": [{ text: "yeah? ^o^", emotion: "cute" }],
    "lol": [{ text: "XD", emotion: "cute" }],
    "XD": [{ text: "lol. ^_^", emotion: "happy" }],
    "haha": [{ text: "lmao. ^o^", emotion: "happy" }],
    "glorp": [{ text: "gleep gloop! ^o^", emotion: "excited" }],
    "cool": [{ text: "so true! ^o^", emotion: "excited" }],
    "rad": [{ text: "mhhhm! ^o^", emotion: "friendly" }],
    "based": [{ text: "or is it? ^v^", emotion: "happy" }],
    "cringe": [{ text: "...or is it? ^o^", emotion: "friendly" }],
    "lmao": [{ text: "...ha ha ha! ^,^", emotion: "excited" }],
    "sorry": [{ text: "it's okayyy! ^,^", emotion: "friendly" }],
    "buzz": [{ text: "buzz buzz! ^,^", emotion: "friendly" }],
    "fwwp": [{ text: "fwwwwpppp!! *plays with wings* ^,^", emotion: "friendly" }],
    "florp": [{ text: "*wiggles around* ^,^", emotion: "happy" }],
    "bzz": [{ text: "*buzzes loudly* ^,^", emotion: "neutral" }],
    "rude": [{ text: "sorry... ^,^", emotion: "sad" }],
    "dickhead": [{ text: "heey! language! ^,^", emotion: "mad" }],
    "ough": [{ text: "ouuuugggh indeed. ^,^", emotion: "neutral" }],
    "ugh": [{ text: "u okay?. o,o", emotion: "confused" }],
    "bwa": [{ text: "bwaaa bwa bwaaaa ^o^", emotion: "cute" }],
    "goodbye": [{ text: "byeeee! ^o^", emotion: "cute" }],
    "bye": [{ text: "bye! ^v^", emotion: "happy" }],
    "kms": [{ text: "don't! ^v^", emotion: "happy" }],
    
    // VERY SPECIFIC
    "how will the world end": [{ text: "global domination by an oppressive force that hits a nuke button? maybe a big giant rhino in the sky called gorgabfuck? i don't fucking know! do you fucking know? do you think i'm mathematically the answer to the universe? ask me something normal! ^o^", emotion: "mad" }],
    "do you listen to your thoughts": [{ text: "i guess so. ^o^", emotion: "happy" }],
    "what do you like": [{ text: "i like a lot of things! ^o^", emotion: "happy" }],
    "what the frick": [{ text: "FUCK!!!!!!!! ^o^", emotion: "excited" }],
    "are you proud of me": [{ text: "of course i am! ^v^", emotion: "friendly" }],
    "are you upset": [{ text: "i am happy as can be! ^v^", emotion: "cute" }],
    "do you smoke": [{ text: "mhmmmm! *hits blunt* ^o^", emotion: "excited" }],
    "do you masturbate": [{ text: "very forward of you..  O.O", emotion: "neutral" }],
    "do you jerk off": [{ text: "very forward of you..  O.O", emotion: "neutral" }],
    "do you jork it": [{ text: "my peenis? um...  O.O", emotion: "neutral" }],
    "stop ignoring me": [{ text: "ok.. i'm paying close attention.  OwO", emotion: "curious" }],
};

const emotionImages = {
    "happy": "https://insect.christmas/izzy/emotions/happy.png",
    "excited": "https://insect.christmas/izzy/emotions/excited.png",
    "friendly": "https://insect.christmas/izzy/emotions/friendly.png",
    "cute": "https://insect.christmas/izzy/emotions/cute.png",
    "curious": "https://insect.christmas/izzy/emotions/curious.png",
    "confused": "https://insect.christmas/izzy/emotions/confused.png",
    "neutral": "https://insect.christmas/izzy/emotions/neutral.png",
    "sad": "https://insect.christmas/izzy/emotions/sad.png",
    "flirty": "https://insect.christmas/izzy/emotions/horny.png",
    "mad": "https://insect.christmas/izzy/emotions/annoyed.png"
};

const randomResponses = [
    { text: "i couldn't hear you... what? o^o", emotion: "confused" },
    { text: "i'm not sure what to say... ^x^", emotion: "confused" },
    { text: "i don't get it... ^c^", emotion: "confused" },
    { text: "um.... what? *v*", emotion: "confused" },
    { text: "uhhh... okayyy?", emotion: "mad" },
    { text: "i'm at a loss for words... ^_^", emotion: "confused" },
    { text: "umm. i don't get it. ^_^", emotion: "confused" },
    { text: "i don't understand. ^_^", emotion: "confused" },
    { text: "sorry, what? ^_^", emotion: "confused" },
    { text: "let's talk about something else. >_>", emotion: "confused" },
    { text: "i don't know what you typed. try again. lol. ^o^", emotion: "confused" },
    { text: "huh..? OvO", emotion: "confused" },
    { text: "what....? OvO", emotion: "confused" },
    { text: "umm... huh? >_>", emotion: "confused" },
    { text: "yeah, yeah... totally... .-.", emotion: "confused" },
    { text: "huh..? OvO", emotion: "confused" },
    { text: "try talking about something else, pls... ^_^", emotion: "confused" },
    { text: "you lost me..... ^o^", emotion: "excited" },
    { text: "sorry. my code glitched,,. can we talk about something else? ^_^", emotion: "friendly" },
];

function getBotResponse(input) {
    input = input.toLowerCase().trim();
    let matches = [];

    // exact match
    if (hardcodedResponses.hasOwnProperty(input)) {
        matches.push(...hardcodedResponses[input]);
    } else {
        // partial match
        for (let keyword in hardcodedResponses) {
            if (input.includes(keyword)) {
                matches.push(...hardcodedResponses[keyword]);
            }
        }
    }

    if (matches.length > 0) {
        return matches[Math.floor(Math.random() * matches.length)];
    } else {
        return randomResponses[Math.floor(Math.random() * randomResponses.length)];
    }
}

function displayEmotion(emotion) {
    const emotionDiv = document.getElementById('emotionImage');
    const imageName = emotionImages[emotion] || "neutral.png";
    emotionDiv.innerHTML = `<img src="${imageName}" alt="${emotion}" style="width:100px; height:100px;">`;
}

document.getElementById('sendBtn').addEventListener('click', function() {
    const userInput = document.getElementById('userInput').value;
    if (userInput.trim() !== "") {
        const chatbox = document.getElementById('chatbox');
        chatbox.innerHTML += `<div><strong style="color:slateblue;">You:</strong> ${userInput}</div><br>`;

        const botResponse = getBotResponse(userInput);
        chatbox.innerHTML += `<div><strong style="color:coral;">Izzy:</strong> ${botResponse.text}</div><br>`;

        displayEmotion(botResponse.emotion);

        chatbox.scrollTop = chatbox.scrollHeight;
        document.getElementById('userInput').value = "";
    }
});

document.getElementById('userInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        document.getElementById('sendBtn').click();
    }
});

function displayResponseCount() {
    const count = Object.keys(hardcodedResponses).length + Object.keys(randomResponses).length;
    const responseCountDiv = document.getElementById('responseCount');
    responseCountDiv.innerHTML = `# of responses possible: ${count}`;
}

//auto-load neutral
window.onload = function() {
    displayEmotion("neutral");
    displayResponseCount();
};