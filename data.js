// data.js
const commanderData = [
        { rank: 1, name: "The Ur-Dragon", colors: "WUBRG", logic: "Use the Eminence ability to cheat out Dragons a turn earlier. Prioritize dragons that generate card advantage or mana on attack.", picks: ["Roaming Throne", "Lathliss, Dragon Queen", "Old Gnawbone", "Utvara Hellkite"] },
        { rank: 2, name: "Edgar Markov", colors: "Mardu", logic: "Quantity over quality. Every Vampire you cast generates a free 1/1 body. Draft low-CMC Vampires and high-impact 'Anthem' effects.", picks: ["Shared Animosity", "Skullclamp", "Blood Artist", "Vito, Thorn of the Dusk Rose"] },
        { rank: 3, name: "Atraxa, Praetors' Voice", colors: "Witch-Maw", logic: "The ultimate engine. Whether you draft +1/+1 counters or Superfriends, maximize the end-step Proliferate trigger.", picks: ["Harden Scales", "Tekuthal, Inquiry Dominus", "Evolution Sage", "Thrummingbird"] },
        { rank: 4, name: "Y'shtola, Night's Blessed", colors: "Esper", logic: "Control the flow of attacks with enchantments while killing larger threats with targeted removal", picks: ["Snuff Out", "Dismemeber", "Propaganda", "Ghostly Prison"] },
        { rank: 5, name: "Krenko, Mob Boss", colors: "Mono-Red", logic: "Krenko is an exponential threat. Prioritize Goblins, Haste enablers, and untap effects.", picks: ["Krenko, Tin Street Kingpin", "Impact Tremors", "Staff of Domination", "Hexing Squelcher"] },
        { rank: 6, name: "Kaalia of the Vast", colors: "Mardu", logic: "Cheat high-cost flyers into play by attacking. You must prioritize protection (Swiftfoot Boots) and Haste.", picks: ["Avacyn, Angel of Hope", "Lord of the Void", "Ancient Silver Dragon", "Lightning Greaves"] },
        { rank: 7, name: "Sauron, the Dark Lord", colors: "Grixis", logic: "Control the board while Amassing Orcs. Sauron punishes opponents for casting spells while filling your hand.", picks: ["Roaming Throne", "Call of the Ring", "Orcish Bowmasters", "The Meathook Massacre"] },
        { rank: 8, name: "Ms. Bumbleflower", colors: "Bant", logic: "Group hug politics that masks a massive +1/+1 counter engine. Give opponents small gifts to trigger your card draw.", picks: ["Smothering Tithe", "Consecrated Sphinx", "Wizard Class", "The Great Henge"] },
        { rank: 9, name: "Pantlaza, Sun-Favored", colors: "Naya", logic: "Chain free spells through the Discover mechanic. Draft high-toughness Dinosaurs to maximize Discover triggers.", picks: ["The Great Henge", "Roaming Throne", "Gishath, Sun's Avatar", "Etali, Primal Storm"] },
        { rank: 10, name: "Vivi Ornitier", colors: "Izzet", logic: "A spellslinger's dream. Use low-cost cantrips to fuel Vivi's ability to double your most impactful instants or sorceries.", picks: ["Thousand-Year Storm", "Veyran, Voice of Duality", "Harmonic Prodigy", "Jeska's Will"] },
{ rank: 11, name: "Teval, the Balanced Scale", colors: "Sultai", logic: "Slow the game to a crawl. Prevent opponents from going off while you build a late-game card-draw engine.", picks: ["Smothering Tithe", "Rhystic Study", "Drannith Magistrate", "Teferi, Time Raveler"] },
        { rank: 12, name: "Lathril, Blade of the Elves", colors: "Golgari", logic: "Go wide with Elves, then win through Lathril's tap ability or a massive anthem. Prioritize mana dorks.", picks: ["Elvish Archdruid", "Staff of Domination", "Beast Whisperer", "Craterhoof Behemoth"] },
        { rank: 13, name: "The Wise Mothman", colors: "Sultai", logic: "Mill your opponents to spread Rad counters, then grow your board as Mothman sees non-land cards hit graveyards.", picks: ["Evolution Sage", "Thrummingbird", "Roaming Throne", "The Great Henge"] },
        { rank: 14, name: "Giada, Font of Hope", colors: "Mono-White", logic: "Cast Giada on Turn 2 to ramp into a flying army. Every Angel you play enters with extra counters.", picks: ["Roaming Throne", "The Book of Exalted Deeds", "Lyra Dawnbringer", "Akroma's Will"] },
        { rank: 15, name: "Yuriko, the Tiger's Shadow", colors: "Dimir", logic: "Ninjutsu Yuriko early and often. Draft unblockable creatures and high-CMC spells to reveal for burn damage.", picks: ["Scroll Rack", "Brainstorm", "Changeling Outcast", "Fallen Shinobi"] },
        { rank: 16, name: "Kenrith, the Returned King", colors: "5-Color", logic: "The ultimate toolbox. Prioritize mana fixing and cost-reduction (Training Grounds). Use abilities for political leverage.", picks: ["Training Grounds", "Zirda, the Dawnwaker", "Smothering Tithe", "Seedborn Muse"] },
        { rank: 17, name: "Jodah, the Unifier", colors: "5-Color", logic: "Legendary Tribal. Every spell you cast should be Legendary to trigger Jodah's pseudo-cascade and massive buffs.", picks: ["Jhoira Weatherlight Captain", "Sisay, Weatherlight Captain", "Esika, God of the Tree", "Flowering of the White Tree"] },
        { rank: 18, name: "Fire Lord Azula", colors: "Grixis", logic: "Aggressive spellslinging. Attack to generate mana and trigger Azula's spell-copying ability. Keep your hand fueled.", picks: ["Jeska's Will", "Thousand-Year Storm", "Storm-kiln Artist", "Electrodominance"] },
        { rank: 19, name: "Nekusar, the Mindrazer", colors: "Grixis", logic: "Force your opponents to draw cards and take damage. Draft 'Wheels' (Windfall) and forced-draw effects.", picks: ["Windfall", "Wheel of Fortune", "Teferi's Puzzle Box", "Sheoldred, the Apocalypse"] },
        { rank: 20, name: "Ulalek, Fused Atrocity", colors: "5-Color", logic: "Eldrazi trigger stacking. Cast Eldrazi spells and pay the colorless cost to copy everything on the stack.", picks: ["Zhulodok, Void Slicer", "Roaming Throne", "Echoes of Eternity", "Forsaken Monument"] },
        { rank: 21, name: "Isshin, Two Heavens as One", colors: "Mardu", logic: "Double all attack triggers. Every 'When a creature attacks' ability on your permanents triggers twice.", picks: ["Adeline, Resplendent Cathar", "Krenko, Tin Street Kingpin", "Shared Animosity", "Etali, Primal Storm"] },
        { rank: 22, name: "Baylen, the Haymaker", colors: "Naya", logic: "Turn your tokens into mana, card draw, or massive power. You don't need to attack with tokens to get value.", picks: ["Mondrak, Glory Dominus", "Anointed Procession", "Doubling Season", "Jetmir, Nexus of Revels"] },
        { rank: 23, name: "Miirym, Sentinel Wyrm", colors: "Temur", logic: "Create non-legendary token copies of every Dragon you cast. Drops a single Dragon that effectively becomes two threats.", picks: ["Roaming Throne", "Lathliss, Dragon Queen", "Old Gnawbone", "Terror of the Peaks"] },
        { rank: 24, name: "Valgavoth, Harrower of Souls", colors: "Rakdos", logic: "Grow Valgavoth and draw cards by dealing damage on opponents' turns. Prioritize 'group slug' passive damage.", picks: ["Orcish Bowmasters", "Rampaging Ferocidon", "Bloodchief Ascension", "Massacre Wurm"] },
        { rank: 25, name: "Chatterfang, Squirrel General", colors: "Golgari", logic: "For every token you create, you get a Squirrel. Use Squirrels as removal fuel or sacrifice fodder.", picks: ["Pitiless Plunderer", "Skullclamp", "Parallel Lives", "Yawgmoth, Thran Physician"] },
        { rank: 26, name: "Toph, the First Metalbender", colors: "Naya", logic: "Focus on land-based ramp and 'Landfall' triggers. Toph rewards putting lands into play with aggressive stats.", picks: ["Lotus Cobra", "Scute Swarm", "Ancient Greenwarden", "Tireless Provisioner"] },
        { rank: 27, name: "Bello, Bard of the Brambles", colors: "Gruul", logic: "Turn your high-CMC artifacts/enchantments into 4/4 indestructible elementals during your turn.", picks: ["The Great Henge", "Unnatural Growth", "Guardian Project", "Rhythm of the Wild"] },
        { rank: 28, name: "Kefka, Court Mage", colors: "Grixis", logic: "Chaos-based spellslinging. Prioritize spells that copy or double triggers. Lean into Grixis unpredictability.", picks: ["Thousand-Year Storm", "Mizzix's Mastery", "Display of Power", "Veyran, Voice of Duality"], back: true },
{ rank: 29, name: "Sephiroth, Fabled SOLDIER", colors: "Mono-Black", logic: "Aristocrat style. Sacrifice recurring or token creatures to draw cards and flip Sephiroth.", picks: ["Gravecrawler", "Ophiomancer", "Grave Titan", "Pitiless Plunderer"], back: true },
       { rank: 30, name: "The Necrobloom", colors: "Abzan", logic: "Landfall and Dredge. Lands in your graveyard are resources. Create a massive army of tokens from the bin.", picks: ["Crucible of Worlds", "Life from the Loam", "Scute Swarm", "The Gitrog Monster"] },
        { rank: 31, name: "Cloud, Ex-SOLDIER", colors: "Naya", logic: "Equipment and Haste. Cloud wants to be suited up and swinging. Focus on equipment that provides protection/evasion.", picks: ["Puresteel Paladin", "Sigarda's Aid", "The Reaver Cleaver", "Akroma's Will"] },
        { rank: 32, name: "Hearthhull, the Worldseed", colors: "Jund", logic: "Big mana and recursion. Use Sultai ramp to cast Hearthhull, then use the seed ability to cheat out massive permanents.", picks: ["Avenger of Zendikar", "Craterhoof Behemoth", "The Great Henge", "Hullbreaker Horror"] },
        { rank: 33, name: "Esika, God of the Tree", colors: "WUBRG", logic: "Legendary value. Use the Bridge (back side) to cheat legendary creatures or planeswalkers into play every upkeep.", picks: ["Jodah, the Unifier", "Selvala, Heart of the Wilds", "Seedborn Muse", "The Kami War"], back: true },
        { rank: 34, name: "Hakbal of the Surging Soul", colors: "Simic", logic: "Merfolk Tribal and Exploration. Every Merfolk helps you ramp and grow your team. Prioritize Merfolk and extra lands.", picks: ["Roaming Throne", "Thrummingbird", "Simic Ascendancy", "Kindred Discovery"] },
        { rank: 35, name: "Hashaton, Scarab's Fist", colors: "Orzhov", logic: "Zombie Tribal and Reanimation. Focus on filling your graveyard with high-value targets to bring back as aggressive threats.", picks: ["The Scarab God", "Wilhelt, the Rotcleaver", "Gravecrawler", "The Meathook Massacre"] },
        { rank: 36, name: "Muldrotha, the Gravetide", colors: "Sultai", logic: "Ultimate graveyard toolbox. Draft permanents with sacrifice or ETB effects that you can recast every turn.", picks: ["Spore Frog", "Sakura-Tribe Elder", "Yawgmoth, Thran Physician", "Dictate of Erebos"] },
        { rank: 37, name: "Flubs, the Fool", colors: "Temur", logic: "Empty-hand value. Flubs rewards you for playing cards as fast as possible. Draft low-cost spells and extra land effects.", picks: ["Exploration", "Azusa, Lost but Seeking", "Birgi, God of Storytelling", "Song of Creation"] },
        { rank: 38, name: "Frodo // Sam (Partners)", colors: "Abzan", logic: "Food tokens and Ring-tempting. Use Sam to make Food cheap and Frodo to gain value from the Ring.", picks: ["Mirkwood Bats", "Peregrin Took", "Academy Manufactor", "Delney, Streetwise Lookout"], back: true },
        { rank: 39, name: "Animar, Soul of Elements", colors: "Temur", logic: "Creature-based combo/ramp. Every creature you cast makes the next one cheaper. Focus on 'colorless' creatures.", picks: ["The Great Henge", "Ancestral Statue", "Roaming Throne", "Mulldrifter"] },
        { rank: 40, name: "Arcades, the Strategist", colors: "Bant", logic: "Walls/Toughness Matters. Draft high-toughness Defenders which Arcades turns into cheap, massive attackers.", picks: ["Wall of Omens", "Tetsuko Umezawa, Fugitive", "Elesh Norn, Mother of Machines", "Rhystic Study"] },
        { rank: 41, name: "Glarb, Calamity's Augur", colors: "Sultai", logic: "Top-deck manipulation. Glarb lets you cast high-CMC cards from the top of your library. Focus on 4+ mana permanents.", picks: ["The Great Henge", "Sensei's Divining Top", "Muldrotha, the Gravetide", "Bolas's Citadel"] },
        { rank: 42, name: "Ygra, Eater of All", colors: "Golgari", logic: "Food board control. Ygra turns all other creatures into Food. Prioritize artifact destruction to grow Ygra to lethal size.", picks: ["Mirkwood Bats", "Marionette Master", "Chatterfang, Squirrel General", "Pestilence"] },
        { rank: 43, name: "Wilhelt, the Rotcleaver", colors: "Dimir", logic: "Zombie Aristocrats. Sacrifice zombies to draw cards and generate Decayed tokens. Wins through steady drain effects.", picks: ["Gravecrawler", "The Scarab God", "Poppet Stitcher", "Dictate of Erebos"] },
        { rank: 44, name: "Caesar, Legion's Emperor", colors: "Mardu", logic: "Aggressive token sacrifice. Attack with a wide board, then sacrifice tokens to draw cards or drain opponents.", picks: ["Isshin, Two Heavens as One", "Mondrak, Glory Dominus", "Skullclamp", "Anointed Procession"] },
        { rank: 45, name: "Rin and Seri, Inseparable", colors: "Naya", logic: "Cat and Dog tribal. Every spell of one type gives you a token of the other. Focus on a balanced mix for the activated burn.", picks: ["Roaming Throne", "Anointed Procession", "Jetmir, Nexus of Revels", "Shared Animosity"] },
        { rank: 46, name: "Mr. House, President and CEO", colors: "Mardu", logic: "Dice rolling and Treasure. Prioritize cards that let you roll dice or flip coins. Treasures fuel your high-cost spells.", picks: ["Ancient Copper Dragon", "Revel in Riches", "Professional Face-Breaker", "Delina, Wild Mage"] },
        { rank: 47, name: "Aragorn, the Uniter", colors: "Ink-Treader", logic: "Multi-color Goodstuff. Every colored spell triggers a different effect. Draft multi-colored spells to maximize value.", picks: ["Jodah, the Unifier", "Chandra, Hope's Beacon", "The Great Henge", "Faeburrow Elder"] },
        { rank: 48, name: "Breya, Etherium Shaper", colors: "Yore-Tiller", logic: "Artifact Combo/Value. Flexible tool to remove threats, gain life, or burn. Focus on recursive artifact loops.", picks: ["Ashnod's Altar", "Urza, Lord High Artificer", "Skullclamp", "Marionette Master"] },
        { rank: 49, name: "Meren of Clan Nel Toth", colors: "Golgari", logic: "Graveyard Attrition. Sacrifice creatures to build experience, then bring them back for free. Loop powerful ETB triggers.", picks: ["Spore Frog", "Sakura-Tribe Elder", "Yawgmoth, Thran Physician", "Dictate of Erebos"] },
        { rank: 50, name: "Zhulodok, Void Gorger", colors: "Colorless", logic: "Colorless Cascade. Focus on casting spells with 7+ mana value to trigger double cascade into Eldrazi.", picks: ["Forsaken Monument", "Echoes of Eternity", "Ugin, the Spirit Dragon", "Void Winnower"] },
        { rank: 51, name: "Gishath, Sun's Avatar", colors: "Naya", logic: "Dinosaur Stompy. You must connect with Gishath. Prioritize haste and double strike to cheat your library into play.", picks: ["Pantlaza, Sun-Favored", "Etali, Primal Conqueror", "Akroma's Will", "Zacama, Primal Calamity"] },
        { rank: 52, name: "Teysa Karlov", colors: "Orzhov", logic: "Death Trigger Doubler. Every 'When a creature dies' ability triggers twice. Focus on token generators and drain effects.", picks: ["Mondrak, Glory Dominus", "Skullclamp", "Pitiless Plunderer", "The Meathook Massacre"] },
        { rank: 53, name: "Oloro, Ageless Ascetic", colors: "Esper", logic: "Passive Lifegain and Control. Oloro provides life from the Command Zone. Use that life as a cushion or for 'Pay Life' spells.", picks: ["Aetherflux Reservoir", "Bolas's Citadel", "Rhystic Study", "Sheoldred, the Apocalypse"] },
        { rank: 54, name: "Shorikai, Genesis Engine", colors: "Azorius", logic: "Vehicle and Card Draw Engine. Shorikai isn't a creature. Use abilities to cycle cards and create pilots for vehicles.", picks: ["Unwinding Clock", "Smothering Tithe", "Kitt Kanto, Mayhem Diva", "Cyberdrive Awakener"] },
        { rank: 55, name: "Ashling, the Limitless", colors: "WUBRG", logic: "Elemental tribal. Prioritize elemental creatures with enter effects to double up.", picks: ["Maelstrom Wanderer", "Mulldrifter", "Omnath, Locus of Rage", "Avenger of Zendikar"] },
        { rank: 56, name: "Arabella, Abandoned Doll", colors: "Boros", logic: "Low-Power Aggro. Arabella drains based on the number of Power 2 or less creatures you attack with. Go wide.", picks: ["Delney, Streetwise Lookout", "Shared Animosity", "Adeline, Resplendent Cathar", "Skullclamp"] },
        { rank: 57, name: "Go-Shintai of Life's Origin", colors: "WUBRG", logic: "Shrine Tribal. More Shrines make each one stronger. Focus on enchantress synergies and board protection.", picks: ["Sythis, Harvest's Hand", "Sterling Grove", "Enchanted Evening", "Sphere of Safety"] },
        { rank: 58, name: "Korvold, Fae-Cursed King", colors: "Jund", logic: "Sacrifice for Power. Korvold is a fast threat. Sacrifice lands, treasures, or creatures to make Korvold a one-hit-kill.", picks: ["Pitiless Plunderer", "Mayhem Devil", "Dockside Extortionist", "Scapeshift"] },
        { rank: 59, name: "K'rrik, Son of Yawgmoth", colors: "Mono-Black", logic: "Life as Mana. Pay life instead of black mana. High-risk, high-reward. Draft lifegain and 'Pay Life' finishers.", picks: ["Bolas's Citadel", "Aetherflux Reservoir", "Sheoldred, the Apocalypse", "Vilis, Broker of Blood"] },
        { rank: 60, name: "Ghyrson Starn, Kelermorph", colors: "Izzet", logic: "1-Damage Pings. Any time a source deals exactly 1 damage, Ghyrson deals 2 more. Draft low-power pinger tokens.", picks: ["Impact Tremors", "Purphoros, God of the Forge", "The Locust God", "Ojer Axonil, Deepest Might"] },
        { rank: 61, name: "Kinnan, Bonder Prodigy", colors: "Simic", logic: "Extreme mana acceleration. Draft non-land mana sources to double production, then cheat massive threats out.", picks: ["Basalt Monolith", "Birds of Paradise", "Hullbreaker Horror", "The Great Henge"] },
        { rank: 62, name: "Tom Bombadil", colors: "WUBRG", logic: "Saga Tribal. Tom cascades into more Sagas every time one completes, creating an unstoppable chain of story value.", picks: ["The Kami War", "Jodah, the Unifier", "Enchanted Evening", "Sterling Grove"] },
        { rank: 63, name: "Atla Palani, Nest Tender", colors: "Naya", logic: "Egg-based gambling. Create eggs and sacrifice them to cheat the biggest creatures in your deck into play.", picks: ["Skullclamp", "Ashnod's Altar", "Mirror Entity", "Roaming Throne"] },
        { rank: 64, name: "Ezio Auditore da Firenze", colors: "WUBRG", logic: "Assassin Tribal. Use the Freerunning mechanic to play high-cost Assassins for cheap. Threaten player loss at low life.", picks: ["Mari, the Killing Quill", "Ramses, Assassin Lord", "Scarblade Elite", "Kindred Discovery"] },
        { rank: 65, name: "Urza, Lord High Artificer", colors: "Mono-Blue", logic: "Artifact Overlord. Every artifact becomes a mana rock. Use mana to fuel Urza’s ability to play the deck for free.", picks: ["Unwinding Clock", "Skullclamp", "The Reality Chip", "Cyberdrive Awakener"] },
        { rank: 66, name: "Xyris, the Writhing Storm", colors: "Temur", logic: "Forced draw and snakes. Use 'Wheel' effects to generate a massive army of 1/1 snakes for mana or lethal swings.", picks: ["Windfall", "Purphoros, God of the Forge", "Impact Tremors", "Shared Animosity"] },
        { rank: 67, name: "Zaxara, the Exemplary", colors: "Sultai", logic: "X-Spell Tribal. Every 'X' spell generates a Hydra token. Focus on picking up X-spells.", picks: ["The Ozolith", "Finale of Devastation", "Exsanguinate", "Green Sun's Zenith"] },
        { rank: 68, name: "Helga, Skittish Seer", colors: "Bant", logic: "Cast big spells to draw cards. Helga rewards casting creatures with power 4+ to keep your hand full.", picks: ["The Great Henge", "Guardian Project", "Chulane, Teller of Tales", "Kinnan, Bonder Prodigy"] },
        { rank: 69, name: "The First Sliver", colors: "WUBRG", logic: "Sliver Cascade. Every Sliver spell brings another one from the deck for free. Creates an unstoppable snowballing army.", picks: ["Sliver Overlord", "Roaming Throne", "The World Tree", "Herald's Horn"] },
        { rank: 70, name: "Ureni of the Unwritten", colors: "Temur", logic: "Creature storytelling. Focus on creatures with unique ETB effects or those that care about the number of creatures you control.", picks: ["Roaming Throne", "Panharmonicon", "Guardian Project", "Beast Whisperer"] },
        { rank: 71, name: "Voja, Jaws of the Conclave", colors: "Naya", logic: "Wolf and Elf synergy. Grows your team based on Elves and draws based on Wolves. Voja is a one-hit-kill machine.", picks: ["Roaming Throne", "Allosaurus Shepherd", "Lathril, Blade of the Elves", "Shared Animosity"] },
        { rank: 72, name: "Eriette of the Charmed Apple", colors: "Orzhov", logic: "Aura politics. Enforce a 'can't attack me' rule by enchanting opponents. Win by draining the table via Auras.", picks: ["Sphere of Safety", "Sram, Senior Edificer", "Light-Paws, Emperor's Voice", "Killian, Ink Duelist"] },
        { rank: 73, name: "Henzie 'Toolbox' Torre", colors: "Jund", logic: "Blitz for value. Play high-cost creatures early to hit hard, draw a card, and trigger 'when this creature dies' effects.", picks: ["Etali, Primal Storm", "Grave Titan", "Massacre Wurm", "Garruk's Uprising"] },
        { rank: 74, name: "Zinnia, Valley's Voice", colors: "Jeskai", logic: "Offspring and ETB triggers. Give creatures 'Offspring' for 1/1 copies. Focus on powerful Enter the Battlefield effects.", picks: ["Panharmonicon", "Elesh Norn, Mother of Machines", "Purphoros, God of the Forge", "Impact Tremors"] },
        { rank: 75, name: "Zurgo Stormrender", colors: "Mardu", logic: "Aggressive Dragon-riding. Use Dash to avoid board wipes and keep the pressure high with Mardu support spells.", picks: ["Roaming Throne", "Lathliss, Dragon Queen", "Shared Animosity", "The Ur-Dragon"] },
        { rank: 76, name: "Omnath, Locus of Creation", colors: "Ink-Treader", logic: "Landfall value. Lands give life, mana, then damage. Use 'extra land' effects to trigger all three modes every turn.", picks: ["Lotus Cobra", "Ancient Greenwarden", "Scute Swarm", "Dryad of the Ilysian Grove"] },
        { rank: 77, name: "Obeka, Splitter of Seconds", colors: "Grixis", logic: "Upkeep manipulation. Use Obeka to skip your end steps or 'lose the game' triggers. Keep 'temporary' tokens permanently.", picks: ["The Initiative", "Court of Ambition", "Mechanized Production", "Thrummingbird"] },
        { rank: 78, name: "Sidar Jabari of Zhalfir", colors: "Esper", logic: "Knight Tribal/Reanimation. Use Eminence to loot, dumping high-cost Knights to reanimate when Jabari deals damage.", picks: ["The Circle of Loyalty", "Knight Exemplar", "Haakon, Stromgald Scourge", "Roaming Throne"] },
        { rank: 79, name: "Kuja, Genome Sorcerer", colors: "Rakdos", logic: "Spell-copying and tokens. Rewards casting instants/sorceries by creating copies or generating board presence.", picks: ["Thousand-Year Storm", "Veyran, Voice of Duality", "Shark Typhoon", "Talrand, Sky Omnipotent"], back: true },
        { rank: 80, name: "Sisay, Weatherlight Captain", colors: "WUBRG", logic: "Legendary Toolbox. Sisay tutors any legendary permanent. Focus on a high density of legendary cards to keep her power high.", picks: ["Jodah, the Unifier", "The World Tree", "Selvala, Heart of the Wilds", "Flowering of the White Tree"] },
        { rank: 81, name: "Captain N'ghathrod", colors: "Dimir", logic: "Horror Tribal and Mill. Combat damage mills opponents and steals artifacts or creatures from their graveyard.", picks: ["Zellix, Sanity Flayer", "Hullbreaker Horror", "Mesmeric Orb", "The Meathook Massacre"] },
        { rank: 82, name: "Maralen, Fae Ascendant", colors: "Sultai", logic: "Anti-Draw / Tutor Lock. Maralen stops all drawing. Focus on punishing searching while you find your win-con.", picks: ["Opposition Agent", "Sheoldred, the Apocalypse", "Ob Nixilis, Unshackled", "Psychic Surgery"] },
        { rank: 83, name: "Felothar the Steadfast", colors: "Abzan", logic: "Resilient Midrange. Rewards a balanced board and offers protection. Use Sultai recursion to keep buffs on the board.", picks: ["The Great Henge", "Roaming Throne", "Guardian Project", "Muldrotha, the Gravetide"] },
        { rank: 84, name: "Urtet, Remnant of Memnarch", colors: "WUBRG", logic: "Myr Tribal. Every Myr generates another. Use activated ability to turn a swarm into a lethal, counter-boosted army.", picks: ["Forsaken Monument", "Skullclamp", "Mystic Forge", "Anointed Procession"] },
        { rank: 85, name: "Atraxa, Grand Unifier", colors: "Witch-Maw", logic: "Massive Value / Digging. Refill your hand with diverse card types. Focus on 'Blink' effects to trigger the search repeatedly.", picks: ["Ephemerate", "Panharmonicon", "Elesh Norn, Mother of Machines", "Displaced Dinosaurs"] },
        { rank: 86, name: "Kotis, the Fangkeeper", colors: "Sultai", logic: "Snake Tribal / Deathtouch. Focus on deathtouch synergy. Rewards making contact by generating resources or tokens.", picks: ["Ohran Frostfang", "Fynn, the Fangbearer", "Toski, Bearer of Secrets", "Parallel Lives"] },
        { rank: 87, name: "Queen Marchesa", colors: "Mardu", logic: "The Monarch / Politics. Introduce the Monarch early. Use Mardu defense to keep it, or let others take it and punish them.", picks: ["Courts of Ambition", "Solitary Confinement", "Smothering Tithe", "Teysa Karlov"] },
        { rank: 88, name: "Choco, Seeker of Paradise", colors: "Bant", logic: "Exploration and Tokens. Find specific lands or generate tokens when you explore. High synergy with Landfall.", picks: ["The Great Henge", "Topiary Stomper", "Ancient Greenwarden", "Oracle of Mul Daya"] },
        { rank: 89, name: "Tidus, Yuna's Guardian", colors: "Bant", logic: "Blink and Protection. Safeguard key creatures. Focus on powerful ETB effects you can trigger repeatedly.", picks: ["Panharmonicon", "Elesh Norn, Mother of Machines", "Mulldrifter", "Agent of Treachery"] },
        { rank: 90, name: "Alela, Cunning Conqueror", colors: "Dimir", logic: "Faerie Tribal / Control. Cast spells on opponents' turns for tokens. Goad opponents' creatures to force combat.", picks: ["Scion of Oona", "Bitterblossom", "Kindred Discovery", "Skullclamp"] },
        { rank: 91, name: "Urza, Chief Artificer", colors: "Esper", logic: "Artifact Affinity / Constructs. Makes artifact creatures cheaper and creates a massive Construct every end step.", picks: ["Skullclamp", "Cyberdrive Awakener", "Unwinding Clock", "Kappa Cannoneer"] },
        { rank: 92, name: "Magda, Brazen Outlaw", colors: "Mono-Red", logic: "Dwarf Tribal / Treasure. Tap Dwarves to make Treasures, then sacrifice them to tutor Dragons directly to the board.", picks: ["Ancient Copper Dragon", "Roaming Throne", "Professional Face-Breaker", "Cloudstone Curio"] },
        { rank: 93, name: "The Wandering Minstrel", colors: "WUBRG", logic: "Storytelling value. Focus on Sagas and unique utility spells. Adapts to threats with Bant's flexibility.", picks: ["Tom Bombadil", "The Kami War", "Sterling Grove", "Enchanted Evening"] },
        { rank: 94, name: "Aminatou, Veil Piercer", colors: "Esper", logic: "Top-Deck Control / Enchantments. Cast enchantments for Miracle costs. Use manipulation to hit your high-CMC bombs.", picks: ["Sensei's Divining Top", "Enchanted Evening", "Sphere of Safety", "Scroll Rack"] },
        { rank: 95, name: "Marneus Calgar", colors: "Esper", logic: "Token Card Draw. Whenever you create tokens, draw a card. Focus on repeatable token generators.", picks: ["Smothering Tithe", "Anointed Procession", "The Meathook Massacre", "Mondrak, Glory Dominus"] },
        { rank: 96, name: "Niv-Mizzet, Parun", colors: "Izzet", logic: "Draw and Ping. Cast a volume of instants/sorceries. Every card drawn pings an opponent for damage.", picks: ["Curiosity", "Ophidian Eye", "Consecrated Sphinx", "Rhystic Study"] },
        { rank: 97, name: "Terra, Magical Adept", colors: "WUBRG", logic: "Spellslinger / Ability Copying. Amplify non-creature spells. Double up on Jeskai control and burn resources.", picks: ["Thousand-Year Storm", "Veyran, Voice of Duality", "Jeska's Will", "Chandra, Hope's Beacon"], back: true },
        { rank: 98, name: "Alela, Artful Provocateur", colors: "Esper", logic: "Artifacts and Enchantments. Every artifact or enchantment creates a 1/1 flyer. Focus on 'Anthem' effects to buff the air.", picks: ["Smothering Tithe", "Anointed Procession", "Skullclamp", "Shared Animosity"] },
        { rank: 99, name: "Satya, Aetherflux Genius", colors: "Jeskai", logic: "Energy and Haste. Creates temporary copies of best creatures. Use Energy to keep copies permanently.", picks: ["Panharmonicon", "Aetherflux Reservoir", "Elesh Norn, Mother of Machines", "Roaming Throne"] },
        { rank: 100, name: "Aesi, Tyrant of Gyre Strait", colors: "Simic", logic: "Landfall and Card Draw. Play extra lands to draw extra cards. Overwhelm the board with raw value and sea monsters.", picks: ["Lotus Cobra", "Ancient Greenwarden", "Scute Swarm", "The Great Henge"] },
        { rank: 101, name: "Etali, Primal Conqueror", colors: "Gruul", logic: "Cheat and Transform. Cast the top card of everyone's library for free. Use Blink to trigger multiple times.", picks: ["Roaming Throne", "Panharmonicon", "Conjurer's Closet", "Akroma's Will"], back: true },
        { rank: 102, name: "Ragost, Deft Gastronaut", colors: "Boros", logic: "Food and Artifact Sacrifice. Use Grixis artifacts to fuel Ragost. Focus on drain effects when items leave play.", picks: ["Academy Manufactor", "Marionette Master", "Skullclamp", "The Meathook Massacre"] },
        { rank: 103, name: "Zur the Enchanter", colors: "Esper", logic: "Enchantment Toolbox. Zur tutors any 3-CMC or less enchantment directly to the field when attacking.", picks: ["Necropotence", "Rhystic Study", "Diplomatic Immunity", "Sphere of Safety"] },
        { rank: 104, name: "Avatar Aang", colors: "WUBRG", logic: "Ability Toolbox. Benefits from having diverse keywords across your board. Focus on legendary creatures.", picks: ["Jodah, the Unifier", "Odric, Lunarch Marshal", "Flowering White Tree", "Roaming Throne"], back: true },
        { rank: 105, name: "Betor, Ancestor's Voice", colors: "Abzan", logic: "Keyword Soup. Shares abilities among your creatures. Focus on creatures with high-impact keywords and counters.", picks: ["The Ozolith", "Akroma's Will", "Lux Artillery", "Roaming Throne"] },
        { rank: 106, name: "Deadpool, Trading Card", colors: "Rakdos", logic: "Chaos interactions. Focus on burn, chaos effects, and recursion to keep the 'Merc with a Mouth' active.", picks: ["Shared Animosity", "Vial Smasher the Fierce", "Mayhem Devil", "Lightning Greaves"], back: true },
        { rank: 107, name: "Terra, Herald of Hope", colors: "Mardu", logic: "Enchantment Protection. Focus on Bant enchantments for defensive layers while building to an aerial finish.", picks: ["Sythis, Harvest's Hand", "Enchanted Evening", "Sterling Grove", "Sphere of Safety"] },
        { rank: 108, name: "Kilo, Apogee Mind", colors: "Jeskai", logic: "Energy and Artifacts. Uses Energy to manipulate the board or draw cards. Prioritize Energy generators.", picks: ["Aetherworks Marvel", "Satya, Aetherflux Genius", "Gonti, Aether Heart", "Unwinding Clock"] },
        { rank: 109, name: "Azlask, the Swelling Scourge", colors: "WUBRG", logic: "Eldrazi Scions. Use tokens for ramp and sacrifice fodder. Turns tiny tokens into massive indestructible threats.", picks: ["Echoes of Eternity", "Forsaken Monument", "Anointed Procession", "Zhulodok, Void Slicer"] },
        { rank: 110, name: "Fynn, the Fangbearer", colors: "Mono-Green", logic: "Deathtouch / Poison. Every deathtouch creature deals 2 poison counters. Draft cheap 1-mana deathtouch creatures.", picks: ["Ohran Frostfang", "Toski, Bearer of Secrets", "Saryth, the Viper's Fang", "Heroic Intervention"] },
        { rank: 111, name: "Galadriel, Light of Valinor", colors: "Bant", logic: "ETB Multi-tool. First three creatures each turn grant mana, counters, or cards. Use token generators.", picks: ["Roaming Throne", "Anointed Procession", "The Great Henge", "Chulane, Teller of Tales"] },
        { rank: 112, name: "Hope Estheim", colors: "Azorius", logic: "Artifact Control. Mitigate damage and cycle cards. Focus on defensive artifacts and 'Stax' elements.", picks: ["Smothering Tithe", "Unwinding Clock", "Esper Sentinel", "Teferi, Time Raveler"] },
        { rank: 113, name: "Tovolar, Dire Overlord", colors: "Gruul", logic: "Werewolf Tribal. Keep your wolves flipped. Tovolar provides card draw when your wolves connect with opponents.", picks: ["The Great Henge", "Shared Animosity", "Roaming Throne", "Herald's Horn"], back: true },
        { rank: 114, name: "Auntie Ool, Cursewretch", colors: "Jund", logic: "Curse and Aristocrats. Rewards sacrificing permanents and cursing opponents. Use Jund recursion for the engine.", picks: ["Mayhem Devil", "Dictate of Erebos", "Skullclamp", "Korvold, Fae-Cursed King"] },
        { rank: 115, name: "Be'lakor, the Dark Master", colors: "Grixis", logic: "Demon Tribal / Burn. Demons entering deal damage and draw cards. Focus on high-power demons and cost reduction.", picks: ["Warstorm Surge", "Herald of Slaanesh", "Vilis, Broker of Blood", "Panharmonicon"] },
        { rank: 116, name: "Omo, Queen of Vesuva", colors: "Simic", logic: "Everything-Land. Give permanents all creature/land types. Unlocks Cloudpost mana or any tribal synergy.", picks: ["The World Tree", "Roaming Throne", "Dark Depths", "Sylvan Scrying"] },
        { rank: 117, name: "Morophon, the Boundless", colors: "WUBRG", logic: "Universal Tribal. Choose the strongest tribe in your pool. Reduces costs and acts as a bridge for niche strategies.", picks: ["The Ur-Dragon", "The First Sliver", "Herald's Horn", "Roaming Throne"] },
        { rank: 118, name: "Mendicant Core, Guidelight", colors: "Azorius", logic: "Equipment Tokens. Suit up small tokens with powerful gear. Focus on equipment with 'Free Equip' effects.", picks: ["Puresteel Paladin", "Sigarda's Aid", "The Reaver Cleaver", "Hammer of Nazahn"] },
        { rank: 119, name: "Storm, Force of Nature", colors: "Temur", logic: "Storm and Magecraft. Use low-cost spells to build storm count. Rewards the sheer volume of magic cast in a turn.", picks: ["Thousand-Year Storm", "Veyran, Voice of Duality", "Jeska's Will", "Mizzix's Mastery"], back: true },
        { rank: 120, name: "Zimone, Mystery Unraveler", colors: "Simic", logic: "Manifest Dread. Use Landfall to Manifest Dread. Flip creatures for free when a second land enters.", picks: ["Lotus Cobra", "Ancient Greenwarden", "Scroll Rack", "Ugin, the Spirit Dragon"] },
        { rank: 121, name: "Magus Lucea Kane", colors: "Temur", logic: "X-Spell Duplication. Copies next X-spell. Focus on Hydras and massive burn spells for double threats.", picks: ["Zaxara, the Exemplary", "Unbound Flourishing", "Nexos", "The Great Henge"] },
        { rank: 122, name: "Norman Osborn", colors: "Grixis", logic: "Artifact Transformation. Rewards flipping or sacrificing artifacts. Use Grixis control to protect the setup.", picks: ["Urza, Lord High Artificer", "Marionette Master", "Skullclamp", "Daretti, Scrap Savant"], back: true },
        { rank: 123, name: "Stella Lee, Wild Card", colors: "Izzet", logic: "Spellslinger Combo. Copy the third spell cast each turn. Focus on 'Twiddle' effects for infinite loops.", picks: ["Veyran, Voice of Duality", "Thousand-Year Storm", "Jeska's Will", "Birgi, Ghost of Steam"] },
        { rank: 124, name: "High Perfect Morcant", colors: "Golgari", logic: "Elf Death Triggers. Bridges Elf boards and Aristocrat strategies. Every falling Elf fuels your graveyard.", picks: ["Lathril, Blade of the Elves", "Skullclamp", "Beast Whisperer", "Dictate of Erebos"] },
        { rank: 125, name: "Omnath, Locus of All", colors: "WUBRG", logic: "Mana Banking. Keeps unspent mana as Black mana. Rewards playing spells with 3+ colored pips with card draw.", picks: ["Jodah, the Unifier", "The World Tree", "Faeburrow Elder", "Seedborn Muse"] },
        { rank: 126, name: "Satoru Umezawa", colors: "Dimir", logic: "Ninjutsu Anything. Gives every creature in hand Ninjutsu. Cheat massive threats into play mid-combat.", picks: ["Blightsteel Colossus", "Shadow of Mortality", "Changeling Outcast", "Baleful Strix"] },
        { rank: 127, name: "Eluge, the Shoreless Sea", colors: "Mono-Blue", logic: "Island Reduction. First instant/sorcery each turn is cheaper per Island. Cast massive spells while keeping mana open.", picks: ["Flowing Well", "High Tide", "Cyclonic Rift", "Hullbreaker Horror"] },
        { rank: 128, name: "Brago, King Eternal", colors: "Azorius", logic: "Pure Blink Value. Flickers any number of non-land permanents. Draft ETB effects that draw cards or reset rocks.", picks: ["Panharmonicon", "Elesh Norn, Mother of Machines", "Mulldrifter", "Agent of Treachery"] },
        { rank: 129, name: "Lord of the Nazgûl", colors: "Dimir", logic: "Wraith Tribal. Every instant/sorcery creates a 3/3 Wraith. Later, turn them all into 9/9 threats for the win.", picks: ["Nazgûl", "Roaming Throne", "Brainstorm", "Shark Typhoon"] },
        { rank: 130, name: "Sythis, Harvest's Hand", colors: "Selyesnya", logic: "Enchantment Engine. Every enchantment turns into a draw and lifegain trigger. Keep the curve low.", picks: ["Sterling Grove", "Enchanted Evening", "Sphere of Safety", "Sram, Senior Edificer"] },
        { rank: 131, name: "The Scarab God", colors: "Dimir", logic: "Upkeep Drain. Use opponents' graveyards to create 4/4 zombie copies. Late-game engine that wins via attrition.", picks: ["Training Grounds", "Wilhelt, the Rotcleaver", "Mesmeric Orb", "The Meathook Massacre"] },
        { rank: 132, name: "Marina Vendrell", colors: "WUBRG", logic: "Room Synergy. Manipulate Rooms. Focus on enchantment-heavy decks that utilize Room toolbox board states.", picks: ["Sythis, Harvest's Hand", "Enchanted Evening", "Jodah, the Unifier", "Sphere of Safety"] },
        { rank: 133, name: "Marrow-Gnawer", colors: "Mono-Black", logic: "Rat Tribal. Gives rats Fear and doubles rat count every turn. Focus on a high volume of small rats.", picks: ["Rat Colony", "Skullclamp", "Thrumming Stone", "Shared Animosity"] },
        { rank: 134, name: "Najeela, the Blade-Blossom", colors: "WUBRG", logic: "Warrior Aggro. Every warrior attack creates more warriors. Use 5-color mana for multiple combat steps.", picks: ["Derevi, Empyrial Tactician", "Nature's Will", "Druids' Repository", "Chatterfang, Squirrel General"] },
        { rank: 135, name: "Disa the Restless", colors: "Jund", logic: "Lhurgoyf Tribal. Cheats Lhurgoyfs from graveyard when they hit the bin. Prioritize milling and tokens.", picks: ["Tarmogoyf", "Pyrogoyf", "Mesmeric Orb", "The Great Henge"] },
        { rank: 136, name: "Prosper, Tome-Bound", colors: "Rakdos", logic: "Exile Casting. Every card played from exile generates a Treasure. Focus on Impulse Draw effects.", picks: ["Professional Face-Breaker", "Birgi, God of Storytelling", "Revel in Riches", "Passionari, Canny Acquisitor"] },
        { rank: 137, name: "Éowyn, Shieldmaiden", colors: "Jeskai", logic: "Human Tribal. If a Human enters, creates two 2/2 knights and draws a card. Pure aggressive engine.", picks: ["Adeline, Resplendent Cathar", "Roaming Throne", "Shared Animosity", "Coppercoat Vanguard"] },
        { rank: 138, name: "Kykar, Wind's Fury", colors: "Jeskai", logic: "Spellslinger Spirits. Non-creature spells create 1/1 Spirits you can sacrifice for Red mana.", picks: ["Veyran, Voice of Duality", "Thousand-Year Storm", "Anointed Procession", "Skullclamp"] },
        { rank: 139, name: "Kibo, Uktabi Prince", colors: "Gruul", logic: "Monkey Tribal. Gives everyone Bananas then grows your board when opponents' artifacts hit the graveyard.", picks: ["Roaming Throne", "Vandalblast", "Collector Ouphe", "Shared Animosity"] },
        { rank: 140, name: "Edward Kenway", colors: "Grixis", logic: "Pirate Theft. Rewards attacking with Pirates/Vehicles by creating Treasures and stealing from libraries.", picks: ["The Indomitable", "Malcolm, Keen-Eyed Navigator", "Revel in Riches", "Hullbreaker Horror"] },
        { rank: 141, name: "Sheoldred, the Apocalypse", colors: "Golgari", logic: "Draw Punisher. Gain life when you draw, Wheels to drain the table.", picks: ["Peer into the Abyss", "Teferi's Puzzle Box", "Lich's Tomb", "The One Ring"] },
        { rank: 142, name: "Wick, the Whorled Mind", colors: "Grixis", logic: "Rat/Snail Scaling. Every Rat grows your Snail token. Sacrifice Snail to deal massive damage and draw.", picks: ["Marrow-Gnawer", "Rat Colony", "Shared Animosity", "Skullclamp"] },
        { rank: 143, name: "Feather, the Redeemed", colors: "Boros", logic: "Cantrip Recursion. Instants that target your own creatures return to hand. Untouchable draw engine.", picks: ["Sunforger", "Zada, Hedron Grinder", "Beaming Defiance", "Aurelia's Fury"] },
        { rank: 144, name: "Captain America, First Avenger", colors: "Jeskai", logic: "Equipment Throwing. Deal damage based on equipment costs. Focus on high equip costs but low cast costs.", picks: ["Hammer of Nazahn", "Sigarda's Aid", "Puresteel Paladin", "The Reaver Cleaver"] },
        { rank: 145, name: "Inalla, Archmage Ritualist", colors: "Grixis", logic: "Wizard ETB. Use Eminence for token copies of Wizards for 1 mana. Focus on ETB trigger Wizards.", picks: ["Venser, Shaper Savant", "Naban, Dean of Iteration", "Panharmonicon", "Thassa's Oracle"] },
        { rank: 146, name: "Anikthea, Hand of Erebos", colors: "Abzan", logic: "Enchantment Reanimation. Turns graveyard enchantments into 3/3 Zombies. Focus on high-CMC enchantments.", picks: ["Enchanted Evening", "Sythis, Harvest's Hand", "Sphere of Safety", "Parallel Lives"] },
        { rank: 147, name: "Marchesa, the Black Rose", colors: "Grixis", logic: "Immortality. As long as a creature has a counter, it returns when it dies. Loop ETB triggers via sacrifice.", picks: ["Unspeakable Symbol", "Iron Apprentice", "The Meathook Massacre", "Mikaeus, the Unhallowed"] },
        { rank: 148, name: "Winota, Joiner of Forces", colors: "Boros", logic: "Human Cheat. Attack with non-humans to put massive Humans from deck onto field attacking.", picks: ["Adeline, Resplendent Cathar", "Rick, Steadfast Leader", "Blade Historian", "Loyal Apprentice"] },
        { rank: 149, name: "Tivit, Seller of Secrets", colors: "Esper", logic: "Voting Value. Generates Clues and Treasures. Ensure you get resources to fuel artifact finishers.", picks: ["Time Sieve", "Academy Manufactor", "Roaming Throne", "Marionette Master"] },
        { rank: 150, name: "Yarok, the Desecrated", colors: "Sultai", logic: "Double ETB. Every creature/land/artifact that enters triggers twice. Ultimate value engine.", picks: ["Panharmonicon", "Mulldrifter", "Agent of Treachery", "Avenger of Zendikar"] },
        { rank: 151, name: "Jin Sakai, Ghost of Tsushima", colors: "Esper", logic: "Stealth Strikes. Rewards attacking with lone creatures. Focus on Ninjutsu to keep opponents guessing.", picks: ["Satoru Umezawa", "Sword of Feast and Famine", "Quietus Spike", "Cyclonic Rift"] },
        { rank: 152, name: "Grand Arbiter Augustin IV", colors: "Azorius", logic: "Stax and Tax. Make your spells cheaper and opponents' expensive. Slow control strategy.", picks: ["Smothering Tithe", "Rhystic Study", "Esper Sentinel", "Teferi, Time Raveler"] },
        { rank: 153, name: "Tiamat", colors: "WUBRG", logic: "Dragon Tutor. When Tiamat enters, search for 5 other Dragons. One-card combo endgame setup.", picks: ["The Ur-Dragon", "Miirym, Sentinel Wyrm", "Old Gnawbone", "Roaming Throne"] },
        { rank: 154, name: "Vren, the Relentless", colors: "Dimir", logic: "Exile Rat Swarm. Exiles opponents' creatures when they die for 1/1 Rats. Keep board clear via removal.", picks: ["Marrow-Gnawer", "The Meathook Massacre", "Toxic Deluge", "Kindred Discovery"] },
        { rank: 155, name: "Temmet, Naktamun's Will", colors: "Esper", logic: "Token Voltron. Makes one token unblockable and +1/+1. Focus on one massive Construct or Clone.", picks: ["Anointed Procession", "Shorikai, Genesis Engine", "Helm of the Host", "Blade Splicer"] },
        { rank: 156, name: "Tifa Lockhart", colors: "Mono-Green", logic: "Combat Combo. Rewards high-speed combat. Use Extra Combat and Haste enablers to maximize damage output.", picks: ["Karlach, Fury of Avernus", "Shared Animosity", "The Great Henge", "Akroma's Will"] },
        { rank: 157, name: "Hazel of the Rootbloom", colors: "Golgari", logic: "Token Splicing. Tap tokens for mana and creates copies of tokens. Duplicate powerful creature tokens.", picks: ["Chatterfang, Squirrel General", "Parallel Lives", "Skullclamp", "Academy Manufactor"] },
        { rank: 158, name: "Liesa, Shroud of Dusk", colors: "Orzhov", logic: "Life-Tax. Punishes everyone for casting spells. Focus on lifegain to offset your own losses.", picks: ["Aetherflux Reservoir", "Kambal, Consul of Allocation", "Vito, Thorn of the Dusk Rose", "Smothering Tithe"] },
        { rank: 159, name: "Eshki, Temur's Roar", colors: "Temur", logic: "Aggressive ETB. Triggers roar when creatures with 4+ power enter. Keep the table on defensive.", picks: ["The Great Henge", "Rhythm of the Wild", "Garruk's Uprising", "Terror of the Peaks"] },
        { rank: 160, name: "Rocco, Street Chef", colors: "Naya", logic: "Exile Food. Get Food and counters when cards are played from exile. Group hug that grows you.", picks: ["Professional Face-Breaker", "Academy Manufactor", "The Great Henge", "Mirkwood Bats"] },
        { rank: 161, name: "Kynaios and Tiro of Meletis", colors: "Ink-Treader", logic: "Group Hug Landfall. Give resources but ensure you get double. Out-scale opponents for massive combos.", picks: ["Smothering Tithe", "The Great Henge", "Omnath, Locus of Creation", "Approach of the Second Sun"] },
        { rank: 162, name: "Rendmaw, Creaking Nest", colors: "Golgari", logic: "Forced Aggression. Gives everyone 2/2 Birds but they can't attack you. Force opponents to chip each other.", picks: ["Mirkwood Bats", "Poison-Tip Archer", "Dictate of Erebos", "Skullclamp"] },
        { rank: 163, name: "Hylda of the Icy Crown", colors: "Azorius", logic: "Tap Value. When you tap an opponent's creature, get a 4/4, a card, or counters. Keep board frozen.", picks: ["Opposition", "Verity Circle", "Gadwick, the Wizened", "Rhystic Study"] },
        { rank: 164, name: "Tergrid, God of Fright", colors: "Mono-Black", logic: "Sacrifice Theft. Every discarded/sacrificed permanent becomes yours. Seize control of the board.", picks: ["It That Betrays", "Pox", "Tinybones, Trinket Thief", "The Meathook Massacre"], back: true },
        { rank: 165, name: "Lightning, Army of One", colors: "Boros", logic: "Multi-hit Aggro. Use haste and multi-target strikes to pressure. Focus on combat damage equipment.", picks: ["The Reaver Cleaver", "Hammer of Nazahn", "Sigarda's Aid", "Akroma's Will"] },
        { rank: 166, name: "Iroh, Grand Lotus", colors: "Temur", logic: "Diplomacy Buffs. Rewards non-aggression with resources. Tactical Pillowfort for a one-blow win.", picks: ["Smothering Tithe", "Promising Cavalier", "Ghostly Prison", "Teferi's Protection"] },
        { rank: 167, name: "Sefris of the Hidden Ways", colors: "Esper", logic: "Dungeon Reanimation. Loot cards into graveyard to venture, then reanimate when you complete a crawl.", picks: ["Radiant Solar", "Hama Pashar, Ruin Seeker", "Dungeon Delver", "The Meathook Massacre"] },
        { rank: 168, name: "Thalia and The Gitrog Monster", colors: "Abzan", logic: "Stax Landfall. Slow opponents by making things enter tapped. Use extra lands to out-pace them.", picks: ["The Great Henge", "Crucible of Worlds", "Lotus Cobra", "Ancient Greenwarden"] },
        { rank: 169, name: "Zada, Hedron Grinder", colors: "Mono-Red", logic: "Spell Duplication. 1-mana buff on Zada copies for every creature. Draw 20+ cards for two mana.", picks: ["Skullclamp", "Ancestral Anger", "Young Pyromancer", "Purphoros, God of the Forge"] },
        { rank: 170, name: "Ramos, Dragon Engine", colors: "WUBRG", logic: "Counter Engine. Colored spells grow Ramos. Sacrifice counters for massive burst of WUBRG mana.", picks: ["Jodah, the Unifier", "The Kami War", "Conflux", "Roaming Throne"] },
        { rank: 171, name: "Judith, Carnage Connoisseur", colors: "Rakdos", logic: "Spellslinger Deathtouch. Give burn spells lifelink or deathtouch. 1-damage wipes the whole board.", picks: ["End the Festivities", "Blasphemous Act", "Veyran, Voice of Duality", "Solphim, Mayhem Dominus"] },
        { rank: 172, name: "Jon Irenicus, Shattered One", colors: "Dimir", logic: "Bad Gifts. Give opponents creatures with downsides that can't be sacrificed. Draw cards as they attack.", picks: ["Phage the Untouchable", "Lord of the Pit", "Ebon Drake", "Propaganda"] },
        { rank: 173, name: "Light-Paws, Emperor's Voice", colors: "Mono-White", logic: "Aura Toolbox. Every aura played lets you tutor another. Become an indestructible monster in two turns.", picks: ["Ethereal Armor", "All That Glitters", "Sage's Reverie", "Sram, Senior Edificer"] },
        { rank: 174, name: "Gonti, Canny Acquisitor", colors: "Sultai", logic: "Thievery. Cast opponents' spells for cheaper. Use evasive creatures to trigger combat damage theft.", picks: ["Ohran Frostfang", "Cunning Rhetoric", "Agent of Treachery", "Tasha, the Witch Queen"] },
        { rank: 175, name: "Derevi, Empyrial Tactician", colors: "Bant", logic: "Untap Abuse. Use combat damage to untap rocks or tap opponents. Ignores commander tax.", picks: ["The One Ring", "Stasis", "Birthing Pod", "Bloom Tender"] },
        { rank: 176, name: "Zedruu the Greathearted", colors: "Jeskai", logic: "Political Gifting. Give away permanents to draw/gain life. Use 'bad' gifts that cripple recipients.", picks: ["Nine Lives", "Illusions of Grandeur", "Smothering Tithe", "Steel Golem"] },
        { rank: 177, name: "Sheoldred, the Apocalypse", colors: "Mono-Black", logic: "Draw Punisher. Gain life when you draw, opponents lose when they draw. Use Wheels to drain the table.", picks: ["Peer into the Abyss", "Teferi's Puzzle Box", "Lich's Tomb", "The One Ring"] },
        { rank: 178, name: "The Mindskinner", colors: "Mono-Blue", logic: "Mill Aggro. Turn combat damage into mill. Aggressive blue creatures to empty libraries via pressure.", picks: ["Bruvac the Grandiloquent", "Maddening Cacophony", "Mesmeric Orb", "Thassa's Oracle"] },
        { rank: 179, name: "Yurlok of Scorch Thrash", colors: "Jund", logic: "Mana Burn. Force extra mana that deals damage if unspent. Group Hug mana speeds up the game.", picks: ["Belbe, Corrupted Observer", "Dictate of Karametra", "Mana Flare", "Klothys, God of Destiny"] },
        { rank: 180, name: "Kraum // Tymna (Partners)", colors: "Yore-Tiller", logic: "Card Advantage. Kraum punishes multiple spells, Tymna rewards attacking multiple players. Top-tier hand fill.", picks: ["Rhystic Study", "Esper Sentinel", "Smothering Tithe", "Adeline, Resplendent Cathar"], back: true },
        { rank: 181, name: "Varina, Lich Queen", colors: "Esper", logic: "Zombie Looting. Attack with zombies to filter hand. Exile graveyard to create more zombies. Discard payoffs.", picks: ["The Scarab God", "Wilhelt, the Rotcleaver", "Bone Miser", "Archfiend of Ifnir"] },
        { rank: 182, name: "Gev, Scaled Scorch", colors: "Rakdos", logic: "Lizard Tribal pings. Rewards non-combat damage by growing creatures as they enter. Prioritize 'pingers'.", picks: ["Roaming Throne", "Impact Tremors", "Agate Instigator", "Viper's Kiss"] },
        { rank: 183, name: "The Jolly Balloon Man", colors: "Boros", logic: "Token Duplication. Create 1/1 flying copies of best creatures. Focus on ETB or Dies trigger creatures.", picks: ["Panharmonicon", "Elesh Norn, Mother of Machines", "Sun Titan", "Solitude"] },
        { rank: 184, name: "Alania, Divergent Storm", colors: "Izzet", logic: "Spell Copying. Copy spells by giving opponents cards. Double up on burn or massive draw spells.", picks: ["Thousand-Year Storm", "Veyran, Voice of Duality", "Jeska's Will", "Chandra, Hope's Beacon"] },
        { rank: 185, name: "Dihada, Binder of Wills", colors: "Mardu", logic: "Legendary Ramp. Protects legends and generates treasures by milling. Cast high-CMC finishers early.", picks: ["Jodah, the Unifier", "Ratadrabik of Urborg", "Shanid, Sleepers' Scourge", "The Reaver Cleaver"] },
        { rank: 186, name: "Wolverine, Best There Is", colors: "Gruul", logic: "Regeneration Scaling. Doubles power when dealing damage. Focus on Fight spells and equipment.", picks: ["The Great Henge", "Halana and Alena, Partners", "Shadowspear", "Unnatural Growth"] },
        { rank: 187, name: "Veyran, Voice of Duality", colors: "Izzet", logic: "Magecraft Doubler. Every spell-cast trigger happens twice. Turns Prowess into lethal threats in one turn.", picks: ["Thousand-Year Storm", "Birgi, Ghost of Steam", "Krark, the Thumbless", "Archmage Emeritus"] },
        { rank: 188, name: "Thrasios // Tymna (Partners)", colors: "Witch-Maw", logic: "Infinite Mana Sink. Thrasios draws deck once combo is set. Tymna keeps hand full in early game.", picks: ["Seedborn Muse", "Training Grounds", "The One Ring", "Bloom Tender"], back: true },
        { rank: 189, name: "Shroofus Sproutsire", colors: "Mono-Green", logic: "Saproling Swarm. Rewards going wide with plant tokens. Focus on Doubling and overrun effects.", picks: ["Anointed Procession", "Doubling Season", "Tendershoot Dryad", "Skullclamp"] },
        { rank: 190, name: "Indoraptor, the Perfect Hybrid", colors: "Jund", logic: "Enrage Bloodthirst. Damage opponents to make Indoraptor massive then use Enrage to burn the table.", picks: ["Roaming Throne", "The Great Henge", "Mayhem Devil", "Rite of Passage"] },
        { rank: 191, name: "Narset, Enlightened Exile", colors: "Jeskai", logic: "Prowess Free Casting. Give team Prowess and cast non-creatures for free from graveyard on attack.", picks: ["Jeska's Will", "Adeline, Resplendent Cathar", "Mizzix's Mastery", "Akroma's Will"] },
        { rank: 192, name: "Arahbo, Roar of the World", colors: "Selyesnya", logic: "Cat Eminence. Buff a cat for free even from command zone. Focus on cheap, evasive cats.", picks: ["Roaming Throne", "Lost Leonin", "Mirri, Weatherlight Duelist", "The Great Henge"] },
        { rank: 193, name: "Ojer Axonil, Deepest Might", colors: "Mono-Red", logic: "Burn Amplification. Makes every 1-damage ping deal damage equal to his power. Group slug focus.", picks: ["Solphim, Mayhem Dominus", "Impact Tremors", "Purphoros, God of the Forge", "Chandra, Hope's Beacon"], back: true },
        { rank: 194, name: "Captain Howler, Sea Scourge", colors: "Grixis", logic: "Pirate Aggro Theft. Rewards attacking with pirates by stealing resources. Use opponents' decks.", picks: ["Malcolm, Keen-Eyed Navigator", "Revel in Riches", "Hullbreaker Horror", "The Indomitable"] },
        { rank: 195, name: "Fire Lord Zuko", colors: "Mardu", logic: "Aggressive Burn. Zuko rewards being the aggressor. Rakdos burn keeps opponents on heels as Zuko grows.", picks: ["Solphim, Mayhem Dominus", "Roiling Vortex", "Shared Animosity", "Bloodchief Ascension"] },
        { rank: 196, name: "Inspirit, Flagship Vessel", colors: "Jeskai", logic: "Vehicle Swarm. Buffs vehicles and helps crew. Focus on high-power vehicles and artifact creatures.", picks: ["Shorikai, Genesis Engine", "Unwinding Clock", "Cyberdrive Awakener", "Kappa Cannoneer"] },
        { rank: 197, name: "Ovika, Enigma Goliath", colors: "Izzet", logic: "High-CMC Goblins. Cast massive spells to generate 1/1 Goblins with Haste. Win in one turn.", picks: ["Purphoros, God of the Forge", "Shared Animosity", "Skullclamp", "Jeska's Will"] },
        { rank: 198, name: "Cosmic Spider-Man", colors: "WUBRG", logic: "Ability Sharing. Rewards diverse heroes. Use Spider-Sense to protect board while building keyword team.", picks: ["Roaming Throne", "Odric, Marshal", "Flowering White Tree", "Jodah, Unifier"] },
        { rank: 199, name: "Bria, Riptide Rogue", colors: "Izzet", logic: "Spellslinger Unblockable. Gives team Prowess and makes them unblockable when casting spells.", picks: ["Young Pyromancer", "Third Path Iconoclast", "Skullclamp", "Shared Animosity"] },
        { rank: 200, name: "Atreus // Kratos (Partners)", colors: "Boros", logic: "Father and Son Aggro. Kratos provides power/removal, Atreus provides utility and precision. Tactical sacrifice.", picks: ["Shared Animosity", "The Reaver Cleaver", "Akroma's Will", "Isshin, Two Heavens as One"], back: true },
    
  { 
    rank: 201, 
    name: "The Infamous Cruelclaw", 
    colors: "Rakdos", 
    logic: "Top-deck manipulation and high-CMC cheating. Discard synergies combined with massive nonland spells to cascade into for free off combat damage.", 
    picks: ["Worldspine Wurm", "Scroll Rack", "Insidiousness", "Animate Dead"] 
  },
  { 
    rank: 202, 
    name: "Witherbloom, the Balancer", 
    colors: "Golgari", 
    logic: "Aristocrats and high-volume lifegain. Sacrificing permanents for drain triggers while aiming for 5+ life a turn to spawn massive Pest Avatars.", 
    picks: ["Aetherflux Reservoir", "Blossoming Bogbeast", "Zulaport Cutthroat", "Bolas's Citadel"] 
  },
  { 
    rank: 203, 
    name: "Clavileño, First of the Blessed", 
    colors: "Orzhov", 
    logic: "Vampire tribal aggressive aristocrats. Attacking to turn smaller Vampires into Demons that draw cards and leave behind 4/3 flying tokens upon death.", 
    picks: ["Elenda, the Dusk Rose", "Skullclamp", "Bloodletter of Aclazotz", "Tevesh Szat, Doom of Fools"] 
  },
  { 
    rank: 204, 
    name: "Ziatora, the Incinerator", 
    colors: "Jund", 
    logic: "Flinging high-power creatures and Treasure generation. Focuses on temporary theft effects or recursion of high-power, low-cost threats.", 
    picks: ["Malignus", "Yargle and Multani", "Korvold, Fae-Cursed King", "Goldspan Dragon"] 
  },
  { 
    rank: 205, 
    name: "Child of Alara", 
    colors: "WUBRG", 
    logic: "5-Color board wipe control. Uses the commander as a repeatable nuclear option from the command zone alongside indestructible permanents or lands-matter themes.", 
    picks: ["High Market", "Heroic Intervention", "Maelstrom Wanderer", "Phyrexian Tower"] 
  },
  { 
    rank: 206, 
    name: "Kona, Rescue Beastie", 
    colors: "Mono-Green", 
    logic: "Tap-mechanic enablement (Survival) to cheat massive permanents into play. Needs reliable crew, attack, or tap enablers to trigger on the postcombat main phase.", 
    picks: ["Smuggler's Copter", "Apex Devastator", "Portal to Phyrexia", "Springleaf Drum"] 
  },
  { 
    rank: 207, 
    name: "Lord Windgrace", 
    colors: "Jund", 
    logic: "Classic Lands-matter value engine. Focuses on discarding lands for draw, reanimating them for landfall triggers, and destroying opposing boards.", 
    picks: ["The Gitrog Monster", "Scapeshift", "Crucible of Worlds", "Avenger of Zendikar"] 
  },
  { 
    rank: 208, 
    name: "Shilgengar, Sire of Famine", 
    colors: "Orzhov", 
    logic: "Blood token generation and mass Angel reanimation. Sacrifices cheap changelings or high-toughness Angels to trigger a devastating, game-ending mass resurrection.", 
    picks: ["Avacyn, Angel of Hope", "Inspiring Overseer", "Anje's Ravager", "Starnheim Unleashed"] 
  },
  { 
    rank: 209, 
    name: "Ob Nixilis, Captive Kingpin", 
    colors: "Rakdos", 
    logic: "Pingers, incremental pain, and impulse draw. Triggers massive growth and card advantage off exact 1-life loss loops from opponents.", 
    picks: ["Mayhem Devil", "Orcish Bowmasters", "Manabarbs", "Kediss, Emberclaw Familiar"] 
  },
  { 
    rank: 210, 
    name: "Umbris, Fear Manifest", 
    colors: "Dimir", 
    logic: "Tribal Nightmares/Horrors blended with heavy opponent exile mechanics. Elevates Umbris to one-shot commander damage potential very quickly.", 
    picks: ["Tasha's Hideous Laughter", "Dauthi Voidwalker", "Ravenous Chupacabra", "Gonti, Lord of Luxury"] 
  },
  { 
    rank: 211, 
    name: "Sliver Overlord", 
    colors: "WUBRG", 
    logic: "Sliver tribal toolbox tutoring. Draft highly impactful keyword Slivers and changelings, with an alternative theme of stealing opponent creatures via type-changing.", 
    picks: ["Amoeboid Changeling", "The First Sliver", "Sliver Legion", "Cloudshredder Sliver"] 
  },
  { 
    rank: 212, 
    name: "Orvar, the All-Form", 
    colors: "Mono-Blue", 
    logic: "Targeting-clones and token copy generation. Uses cheap, single-target instants/sorceries to duplicate lands, high-value permanents, and mana rocks.", 
    picks: ["Whim of Volrath", "Coveted Jewel", "Peregrine Drake", "Twiddle"] 
  },
  { 
    rank: 213, 
    name: "Golbez, Crystal Collector", 
    colors: "Dimir", 
    logic: "Artifact toolbox tutoring and sacrifice burn. Capitalizes on finding specific elemental crystal artifacts to feed into an ongoing life drain loop.", 
    picks: ["Trading Post", "Krark-Clan Ironworks", "Marionette Master", "Ichor Wellspring"] 
  },
  { 
    rank: 214, 
    name: "Doran, Besieged by Time", 
    colors: "Abzan", 
    logic: "Toughness-matters 'Butts' deck. Converts high-defense, low-power walls and treefolk into aggressive beaters while shutting down traditional power-buff decks.", 
    picks: ["Slagwurm Armor", "Assault Formation", "Tower Defense", "Sapling of Colfenor"] 
  },
  { 
    rank: 215, 
    name: "Arna Kennerüd, Skycaptain", 
    colors: "Esper", 
    logic: "Modified cloning value. Attacks with equipped, enchanted, or counter-heavy creatures to permanently multiply valuable equipment and status buffs.", 
    picks: ["Sword of Hearth and Home", "All That Glitters", "Blackblade Reforged", "An Offer You Can't Refuse"] 
  },
  { 
    rank: 216, 
    name: "Sonic the Hedgehog", 
    colors: "Jeskai", 
    logic: "Multikicker, artifact synergy, and extra combat steps. Thrives on generated mana to kick spells multiple times and unlock unblockable extra combat phases.", 
    picks: ["Apex of Power", "Karlach, Fury of Avernus", "Academy Manufactor", "Urza, Lord High Artificer"] 
  },
  { 
    rank: 217, 
    name: "Celes, Rune Knight", 
    colors: "Mardu", 
    logic: "Spell-countering control and +1/+1 counter growth. Functions as an oppressive counterspell threat sitting in the command zone that punishes instant/sorcery-heavy cubes.", 
    picks: ["Baral, Chief of Compliance", "The Ozolith", "Teferi, Time Raveler", "Wave Goodbye"] 
  },
  { 
    rank: 218, 
    name: "Volo, Guide to Monsters", 
    colors: "Simic", 
    logic: "Anti-tribal singleton creature casting. Rewards an incredibly diverse draft pool of unique creature types to gain duplicate copies of high-value ETB effects.", 
    picks: ["Amphin Mutineer", "Mulldrifter", "Scute Swarm", "End-Raze Forerunners"] 
  },
  { 
    rank: 219, 
    name: "Rakdos, Lord of Riots", 
    colors: "Rakdos", 
    logic: "Group slug leading to massive colorless creature discounts. Requires immediate enablers that deal direct damage to opponents to cheat out massive Eldrazi.", 
    picks: ["Cryptolith Fragment", "Ulamog, the Ceaseless Hunger", "Purphoros, God of the Forge", "Void Winnower"] 
  },
  { 
    rank: 220, 
    name: "Jetmir, Nexus of Revels", 
    colors: "Naya", 
    logic: "Wide board token swarm. Draft low-cost token generators to quickly reach the 9+ creature threshold for the ultimate trample/double strike finish.", 
    picks: ["Avenger of Zendikar", "Secure the Wastes", "Adeline, Resplendent Cathar", "Beastmaster Ascension"] 
  },
  { 
    rank: 221, 
    name: "Kastral, the Windcrested", 
    colors: "Azorius", 
    logic: "Bird tribal combat damage triggers. Focuses on evasive flyers to generate tokens, buff the squad, or reanimate high-value avian targets directly to the field.", 
    picks: ["Watcher for Tomorrow", "Kangee, Sky Warden", "Ledger Shredder", "Sephara, Sky's Blade"] 
  },
  { 
    rank: 222, 
    name: "Coram, the Undertaker", 
    colors: "Jund", 
    logic: "Graveyard self-mill and high-power scaling. Uses mill effects on all players to inherit massive power stats while stealing spells directly from the yards.", 
    picks: ["Lord of Extinction", "Life from the Loam", "Hermit Druid", "Yargle and Multani"] 
  },
  { 
    rank: 223, 
    name: "Kudo, King Among Bears", 
    colors: "Selesnya", 
    logic: "Symmetrical power equalization and tribal exploitation. Turns all creatures into 2/2 Bears, allowing you to use global -1/-1 effects or specific Bear anthems to skew the board.", 
    picks: ["Elesh Norn, Grand Cenobite", "Ayula, Queen Among Bears", "Night of Souls' Betrayal", "Linvala, Keeper of Silence"] 
  },
  { 
    rank: 224, 
    name: "Vihaan, Goldwaker", 
    colors: "Mardu", 
    logic: "Outlaw tribal value mixed with Treasure-based combat animation. Converts ramp resources into a sudden, hasty, vigilant army of 3/3 constructs.", 
    picks: ["Smothering Tithe", "Revel in Riches", "Magda, Brazen Outlaw", "Mari, the Killing Quill"] 
  },
  { 
    rank: 225, 
    name: "Shalai and Hallar", 
    colors: "Naya", 
    logic: "+1/+1 counter burning. Combines traditional counter-placement strategies with combos that trigger recursive counter generation to instantly machine-gun opponents.", 
    picks: ["The Red Terror", "Heliod, Sun-Crowned", "Hardened Scales", "Conclave Mentor"] 
  },
  { 
    rank: 226, 
    name: "Saruman, the White Hand", 
    colors: "Grixis", 
    logic: "Spellslinger Amass tech. Chains together instant and sorcery noncreature strings to build a massive Orc Army token while granting Goblins and Orcs ward protection.", 
    picks: ["Chandra's Incinerator", "Consider", "Third Path Iconoclast", "Widespread Brutality"] 
  },
    
  { 
    rank: 227, 
    name: "Okaun, Eye of Chaos // Zndrsplt, Eye of Wisdom", 
    colors: "Izzet", 
    logic: "Coin-flip chaos and explosive card draw. Combines random chance mechanics with high-reward triggers that can result in one-shot commander damage or massive card advantage.", 
    picks: ["Krark's Thumb", "Frenetic Efreet", "Chance Encounter", "Chandra's Ignition"],
      back: true
  },
  { 
    rank: 228, 
    name: "Yidris, Maelstrom Wielder", 
    colors: "Glint-Eye", 
    logic: "Spellslinger storm and mass cascade value. Requires connecting with combat damage to grant subsequent spells cascade, turning low-cost spells into high-tempo chains.", 
    picks: ["Brainstorm", "Frantic Search", "Aetherflux Reservoir", "Hypergenesis"] 
  },
  { 
    rank: 229, 
    name: "Raffine, Scheming Seer", 
    colors: "Esper", 
    logic: "Aggressive keyword soup and high-volume Connive filtering. Thrives on attacking with multiple cheap, evasive creatures to filter the hand and rapidly grow attackers.", 
    picks: ["Archfiend of Ifnir", "Containment Construct", "The Meathook Massacre", "Ledger Shredder"] 
  },
  { 
    rank: 230, 
    name: "Anti-Venom, Horrifying Healer", 
    colors: "Mono-White", 
    logic: "Inverted poison and status counter manipulation. Converts typical toxic or infect elements into explosive bursts of lifegain and target removal when curing permanents.", 
    picks: ["Phyrexian Swarmlord", "Venser, Corpse Puppet", "Contagion Clasp", "Sanguine Bond"] 
  },
  { 
    rank: 231, 
    name: "Roxanne, Starfall Savant", 
    colors: "Gruul", 
    logic: "Meteorite artifact token generation and ramp burn. Leverages continuous land and token drop triggers to ping down the board while generating double mana from tapped rocks.", 
    picks: ["Parallel Lives", "Panharmonicon", "Jaheira, Friend of the Forest", "Clockof Omens"] 
  },
  { 
    rank: 232, 
    name: "Ketramose, the New Dawn", 
    colors: "Selesnya", 
    logic: "Day/Night cycle mastery and token anthems. Uses consistent phase tracking to flood the board with custom tokens during the flip or maximize bonuses on the attack step.", 
    picks: ["Tovolar, Dire Overlord", "Immerwolf", "Moonmist", "Anointed Procession"] 
  },
  { 
    rank: 233, 
    name: "Mirko, Obsessive Theorist", 
    colors: "Dimir", 
    logic: "Surveil optimization and reanimation templates. Uses the graveyard as a secondary hand, bringing back mid-sized threats that scale off consistent deck filtering.", 
    picks: ["Doom Whisperer", "Enhanced Surveillance", "Animate Dead", "Reanimate"] 
  },
  { 
    rank: 234, 
    name: "Hazezon, Shaper of Sand", 
    colors: "Naya", 
    logic: "Desert landfall mechanics and Sand Warrior token generation. Relies on sacrificing, tutoring, and playing Desert cards from the graveyard to form a massive token army.", 
    picks: ["Scapeshift", "Crucible of Worlds", "Ramunap Excavator", "Purphoros, God of the Forge"] 
  },
  { 
    rank: 235, 
    name: "The Gitrog Monster", 
    colors: "Golgari", 
    logic: "Land sacrifice value and dredge combo engine. Exploits continuous land-to-graveyard triggers to create massive card-drawing chains and infinite mana loops.", 
    picks: ["Dakmor Salvage", "Life from the Loam", "Squandered Resources", "Barren Moor"] 
  },
  { 
    rank: 236, 
    name: "The Mycotyrant", 
    colors: "Golgari", 
    logic: "Self-mill, descend triggers, and Fungus token swarms. Creates massive boards of token threats scaled directly to the number of permanents entering your graveyard each turn.", 
    picks: ["Hermit Druid", "Mesmeric Orb", "Altar of Dementia", "Parallel Lives"] 
  },
  { 
    rank: 237, 
    name: "Chulane, Teller of Tales", 
    colors: "Bant", 
    logic: "Creature-casting value engine and explosive ramp. Chains cheap creature spells to repeatedly draw cards and drop extra lands, enabling endless bounce loops.", 
    picks: ["Aluren", "Whitemane Lion", "Shrieking Drake", "Lotus Cobra"] 
  },
  { 
    rank: 238, 
    name: "Omnath, Locus of Mana", 
    colors: "Mono-Green", 
    logic: "Mana-banking stompy value. Converts unspent green mana into an explosive power boost on the commander, setting up massive, explosive Hydra or X-spell finishes.", 
    picks: ["Doubling Cube", "Seedborn Muse", "Rishkar's Expertise", "Selvala, Heart of the Wilds"] 
  },
  { 
    rank: 239, 
    name: "Niko, Light of Hope", 
    colors: "Azorius", 
    logic: "Shard token generation and blink copy tricks. Turns generated enchantment tokens into temporary copies of high-value ETB legendary or nonlegendary threats.", 
    picks: ["Moon-Blessed Cleric", "Peregrine Drake", "Displaced Dinosaurs", "Teleportation Circle"] 
  },
  { 
    rank: 240, 
    name: "Nicol Bolas, the Ravager", 
    colors: "Grixis", 
    logic: "Hand disruption control leading into a game-ending planeswalker flip. Forces early opponent discards before transforming into a high-loyalty value engine.", 
    picks: ["The Eldest Reborn", "Tergrid, God of Fright", "Cyclonic Rift", "Bloodchief Ascension"] ,
      back: true
  },
  { 
    rank: 241, 
    name: "Skullbriar, the Walking Grave", 
    colors: "Golgari", 
    logic: "Voltron aggression tracking counter retention across zones. Combines counters of all varieties (+1/+1, keyword, ability) that stay on the commander even in the command zone.", 
    picks: ["The Ozolith", "Hardened Scales", "Drivnod, Carnage Dominator", "Unspeakable Symbol"] 
  },
  { 
    rank: 242, 
    name: "Dina, Soul Steeper", 
    colors: "Golgari", 
    logic: "Aristocrats combined with incremental life drain. Converts individual life-gained ticks into continuous opponent drain loops, utilizing cheap sacrifice outlets.", 
    picks: ["Exquisite Blood", "Essence Warden", "Prosperous Innkeeper", "Zulaport Cutthroat"] 
  },
  { 
    rank: 243, 
    name: "Jodah, Archmage Eternal", 
    colors: "WUBRG", 
    logic: "Alternative mana payment cheating. Replaces high casting costs with a flat WUBRG requirement, pushing early access to massive apex monsters and spells.", 
    picks: ["Fist of Suns", "Omniscience", "Morfong", "Apex Devastator"] 
  },
  { 
    rank: 244, 
    name: "Tinybones, Bauble Burglar", 
    colors: "Mono-Black", 
    logic: "Discard punishment and opponent graveyard theft. Punishes opponents for keeping small hands while allowing you to cast their discarded or milled nonland spells.", 
    picks: ["Waste Not", "Burglar Rat", "Megrim", "Oppression"] 
  },
  { 
    rank: 245, 
    name: "Sokka, Tenacious Tactician", 
    colors: "Jeskai", 
    logic: "Equipment synergy combined with combat-trick combat loops. Empowers non-bending or standard warrior tokens when high-value gear or low-cost buffs are committed to combat.", 
    picks: ["Hammer of Nazahn", "Kellan, the Fae-Blooded", "Lizard Blades", "Shadowspear"] 
  },
  { 
    rank: 246, 
    name: "Dogmeat, Ever Loyal", 
    colors: "Naya", 
    logic: "Aura and Equipment self-mill recursion. Mills cards upon entry to find gear, then provides junk token card advantage whenever modified creatures swing.", 
    picks: ["Puresteel Paladin", "Sram, Senior Edificer", "Mantle of the Ancients", "Open the Armory"] 
  },
  { 
    rank: 247, 
    name: "Rowan, Scion of War", 
    colors: "Rakdos", 
    logic: "Self-inflicted life loss converted into generic mana discounts. Uses black paint spells or high-cost activation damage to reduce huge X-cost burn spells down to single pips.", 
    picks: ["Necropotence", "Torment of Hailfire", "Crackle with Power", "Peer into the Abyss"] 
  },
  { 
    rank: 248, 
    name: "Rocco, Cabaretti Caterer", 
    colors: "Naya", 
    logic: "Creature toolbox tutoring from the command zone. Functions as a flexible X-spell that drops critical combo pieces or silver-bullet answers directly onto the board.", 
    picks: ["Wirewood Symbiote", "Dockside Extortionist", "Moon-Blessed Cleric", "Food Chain"] 
  },
  { 
    rank: 249, 
    name: "Brenard, Ginger Sculptor", 
    colors: "Bant", 
    logic: "Creature-to-Food artifact token reanimation. Saves dying nontoken creatures by sculpting them into 1/1 Food Golems that retain all original abilities and text.", 
    picks: ["Splicer's Skill", "Growing Ranks", "Academy Manufactor", "Jaheira, Friend of the Forest"] 
  },
  { 
    rank: 250, 
    name: "Saheeli, Radiant Creator", 
    colors: "Temur", 
    logic: "Thopter generation and artifact copying templates. Emphasizes tapping down non-creature artifacts to manifest fast-flying pressure or duplicate high-value mechanical pieces.", 
    picks: ["Sharding Sphinx", "Sai, Master Thopterist", "Skullclamp", "Cyberdrive Awakener"] 
  },
  { 
    rank: 251, 
    name: "Queza, Augur of Agonies", 
    colors: "Esper", 
    logic: "Card-draw drain engine. Converts every single card drawn into a targeted life drain utility loop, making standard wheels and brainstorms lethal weapons.", 
    picks: ["Lich's Mastery", "Peer into the Abyss", "Psychic Corrosion", "Well of Lost Dreams"] 
  },
  { 
    rank: 252, 
    name: "Alexios, Deimos of Kosmos", 
    colors: "Mono-Red", 
    logic: "Forced hot-potato goad aggression. Constantly passes control around the table, gaining massive power buffs and trampling through opponents without stopping to block.", 
    picks: ["Kediss, Emberclaw Familiar", "Assault Suit", "Shiny Impetus", "Bloodthirsty Blade"] 
  },
  { 
    rank: 253, 
    name: "Omnath, Locus of Rage", 
    colors: "Gruul", 
    logic: "Landfall Elemental token production. Rewards heavy land drops with 5/5 Elementals that punish board wipes by lightning-bolting targets when they die.", 
    picks: ["Scapeshift", "Perilous Forays", "Where Ancients Tread", "Oracle of Mul Daya"] 
  },
  { 
    rank: 254, 
    name: "Yuna, Grand Summoner", 
    colors: "Azorius", 
    logic: "Saga-based enchantment tutoring and Aeon counter pacing. Summons massive legendary avatar-style manifestations when enchantment chapters finish ticking down.", 
    picks: ["The Restoration of Eiganjo", "The Kami War", "Calix, Guided by Fate", "Eidolon of Blossoms"] 
  },
  { 
    rank: 255, 
    name: "Tatyova, Benthic Druid", 
    colors: "Simic", 
    logic: "Landfall life gain and direct card draw. Standard value engine that turns simple ramp spells or fetch lands into unpunishable card advantage loops.", 
    picks: ["Scapeshift", "Azusa, Lost but Seeking", "Ramunap Excavator", "Aesi, Tyrant of Gyre Strait"] 
  },
  { 
    rank: 256, 
    name: "Syr Gwyn, Hero of Ashvale", 
    colors: "Mardu", 
    logic: "Knight tribal combined with free Equipment equipping. Bypasses massive equip fees completely, loading up low-cost Knights with legendary weaponry.", 
    picks: ["Colossus Hammer", "Sunforger", "Puresteel Paladin", "Sigarda's Aid"] 
  },
  { 
    rank: 257, 
    name: "Phenax, God of Deception", 
    colors: "Dimir", 
    logic: "Toughness-based mill control. Uses indestructible defenders or high-defense blockers to chew through opponent libraries using their toughness value.", 
    picks: ["Consuming Aberration", "Eater of the Dead", "Tree of Perdition", "Bruvac the Grandiloquent"] 
  },
  { 
    rank: 258, 
    name: "Minsc & Boo, Timeless Heroes", 
    colors: "Gruul", 
    logic: "Hasty token production and card-drawing trample flings. Buffs Boo with +1/+1 counters before sacrificing him to draw raw cards and blast key targets.", 
    picks: ["Chandra's Ignition", "Hardened Scales", "The Ozolith", "Unnatural Growth"] 
  },
  { 
    rank: 259, 
    name: "Tannuk, Steadfast Second", 
    colors: "Mono-Red", 
    logic: "Partner-style anthem tracking and tactical support. Directs extra combat maneuvers, providing defensive warding or flanking options for primary attacking commanders.", 
    picks: ["Akroma's Will", "Karlach, Fury of Avernus", "Odric, Lunarch Marshal", "Aurelia, the Warleader"] 
  },
    
  { 
    rank: 260, 
    name: "Raggadragga, Goreguts Boss", 
    colors: "Gruul", 
    logic: "Mana-dork tribal aggression. Transforms utility mana-producers into massive, vigilant attackers and rewards casting high-CMC spells with explosive combat buffs.", 
    picks: ["Marwyn, the Nurturer", "Selvala, Heart of the Wilds", "Beast Whisperer", "Chandra's Ignition"] 
  },
  { 
    rank: 261, 
    name: "Athreos, God of Passage", 
    colors: "Orzhov", 
    logic: "Aggressive aristocrats tax recursion. Forces a lose-lose choice on opponents whenever your cheap, high-value creatures die, grinding out life totals or hand sizes.", 
    picks: ["Cruel Celebrant", "Skullclamp", "Plaguecrafter", "Lurrus of the Dream-Den"] 
  },
  { 
    rank: 262, 
    name: "Reaper King", 
    colors: "WUBRG", 
    logic: "Scarecrow and Changeling vindicate-style control. Capitalizes on casting cheap shapeshifters to trigger a repeatable targeted destruction engine.", 
    picks: ["Amoeboid Changeling", "Birthing Pod", "Panharmonicon", "Maskwood Nexus"] 
  },
  { 
    rank: 263, 
    name: "Betor, Kin to All", 
    colors: "Abzan", 
    logic: "Keyword sharing and undergrowth reanimation. Pools together unique evergreen combat keywords found across creatures in your graveyard to empower your board.", 
    picks: ["Buried Alive", "Cairn Wanderer", "Old Rutstein", "Eerie Ultimatum"] 
  },
  { 
    rank: 264, 
    name: "Brimaz, Blight of Oreskos", 
    colors: "Orzhov", 
    logic: "Phyrexian and Incubate token tribal. Rewards casting artifact or artifact-adjacent creature spells by populating the board with mutating incubate threats.", 
    picks: ["Norn's Inquisitor", " Mondrak, Glory Dominus", "Tezzeret's Gambit", "Collective Nightmare"] 
  },
  { 
    rank: 265, 
    name: "Goro-Goro and Satoru", 
    colors: "Grixis", 
    logic: "Ninjutsu and hasty combat damage tokens. Rewards swinging with creatures the turn they hit the board by printing 5/5 flying Dragon Spirit tokens.", 
    picks: ["Gingerbrute", "Yuriko, the Tiger's Shadow", "Professional Face-Breaker", "Lightning Greaves"] 
  },
  { 
    rank: 266, 
    name: "Gargos, Vicious Watcher", 
    colors: "Mono-Green", 
    logic: "Hydra tribal cost-reduction mixed with targeted spell bite triggers. Drastically slashes casting costs while fighting off opposing threats whenever you buff your pack.", 
    picks: ["The Ozolith", "Hydra Broodmaster", "Tamiyo's Safekeeping", "Unbound Flourishing"] 
  },
  { 
    rank: 267, 
    name: "Kalamax, the Stormsire", 
    colors: "Temur", 
    logic: "Instant-speed spell copying and combat growth. Relies on tapping the commander down safely to fork the first instant cast each turn, accumulating massive power counters.", 
    picks: ["Nexus of Fate", "Growth Spiral", "Twinning Staff", "Chandra's Ignition"] 
  },
  { 
    rank: 268, 
    name: "Slimefoot and Squee", 
    colors: "Jund", 
    logic: "Saproling token production and repeatable modular reanimation. Sacrifices its own token generation to pull high-impact threats out of the graveyard along with itself.", 
    picks: ["Phyrexian Altar", "Yargle and Multani", "Korvold, Fae-Cursed King", "Purphoros, God of the Forge"] 
  },
  { 
    rank: 269, 
    name: "Infinite Guideline Station", 
    colors: "WUBRG", 
    logic: "Modular artifact construction and energy production loops. Focuses on manipulating charge tokens and industrial nodes to assemble automated board states.", 
    picks: ["Aetherworks Marvel", "Traxos, Scourge of Kroog", "Mystic Forge", "Ugin, the Ineffable"] 
  },
  { 
    rank: 270, 
    name: "Toxrill, the Corrosive", 
    colors: "Dimir", 
    logic: "Slime-counter board wiping and card draw aristocrats. Slowly melts opposing creature lines to generate a wall of Slugs that feed your card draw engine.", 
    picks: ["Sludge Monster", "Konda's Banner", "Black Market", "Spark Double"] 
  },
  { 
    rank: 271, 
    name: "Talion, the Kindly Lord", 
    colors: "Dimir", 
    logic: "Symmetrical tax declaration and standard life draining. Names a mechanical card trait (like CMC 2 or 3) to sap opponent life totals and fuel your hand size.", 
    picks: ["Sheoldred, the Apocalypse", "Windfall", "Psychic Corrosion", "Consecrated Sphinx"] 
  },
  { 
    rank: 272, 
    name: "Shiko and Narset, Unified", 
    colors: "Jeskai", 
    logic: "Noncreature prowess mechanics mixed with combat-phase tutoring. Unites spell-slinging tempo strings with clean artifact or enchantment searching on clean attacks.", 
    picks: ["Monastery Mentor", "Whirlwind of Thought", "Venser's Journal", "Elsha of the Infinite"] 
  },
  { 
    rank: 273, 
    name: "Clement, the Worrywort", 
    colors: "Simic", 
    logic: "Frog tribal and creature bounce value loops. Uses ETB effects and creature bounce mechanics to turn small, amphibious utility drops into continuous ramp resources.", 
    picks: ["Grolnok, the Omnivore", "Panharmonicon", "Aluren", "Froghemoth"] 
  },
  { 
    rank: 274, 
    name: "Haldan, Avid Arcanist // Pako, Arcane Retriever", 
    colors: "Temur", 
    logic: "Aggressive top-deck exile and resource theft. Pako bites away at cards from all libraries to grow massive, while Haldan lets you safely play the stolen spells.", 
    picks: ["Bear Umbra", "Passion Channels", "Stubborn Denial", "Exploration"] ,
      back: true
  },
  { 
    rank: 275, 
    name: "Indominus Rex, Alpha", 
    colors: "Sultai", 
    logic: "Keyword counter discard integration. Drops down as a customized, unkillable apex threat by discarding high-utility keyword creature cards upon entry.", 
    picks: ["Zetalpa, Primal Dawn", "Rayami, First of the Fallen", "Kathril, Aspect Warper", "The Ozolith"] 
  },
  { 
    rank: 276, 
    name: "Braids, Arisen Nightmare", 
    colors: "Mono-Black", 
    logic: "Group sacrifice tax and explosive draw. Forces opponents into a tight corner by sacrificing card types they can't match, netting you massive card value.", 
    picks: ["Gravebreaker Lamia", "Mayhem Devil", "Bitterblossom", "Tergrid, God of Fright"] 
  },
  { 
    rank: 277, 
    name: "Tayam, Luminous Enigma", 
    colors: "Abzan", 
    logic: "Counter manipulation and low-CMC permanent recursion. Strips counters off your own creatures to fuel an un-counterable, instant-speed reanimation engine.", 
    picks: ["Good-Fortune Unicorn", "Devoted Druid", "Cathars' Crusade", "Ashnod's Altar"] 
  },
  { 
    rank: 278, 
    name: "Adrix and Nev, Twincasters", 
    colors: "Simic", 
    logic: "Linear token doubling multiplication. Passive parallel lives sitting directly in your command zone to double everything from clues to giant monsters.", 
    picks: ["Avenger of Zendikar", "Koma, Cosmos Serpent", "Helm of the Host", "Academic Manufactor"] 
  },
  { 
    rank: 279, 
    name: "Yuma, Proud Protector", 
    colors: "Naya", 
    logic: "Desert self-mill and 4/2 Plant Warrior token swarms. Uses land-to-grave triggers to reduce its own mana cost and create a hard-hitting army out of waste lands.", 
    picks: ["Scapeshift", "Titania, Protector of Argoth", "Life from the Loam", "Zuran Orb"] 
  },
  { 
    rank: 280, 
    name: "Kess, Dissident Mage", 
    colors: "Grixis", 
    logic: "Graveyard spellslinger value and storm setup. Grants your instants and sorceries an additional turn of utility by allowing them to be recast directly from the yard.", 
    picks: ["Demonic Tutor", "Frantic Search", "Aetherflux Reservoir", "Cyclonic Rift"] 
  },
  { 
    rank: 281, 
    name: "Aloy, Savior of Meridian", 
    colors: "Simic", 
    logic: "Artifact hunting and targeted weakness scanning. Uses precision tokens to mark opposing targets, breaking down high-toughness walls or defensive keywords with ease.", 
    picks: ["Kellan, the Fae-Blooded", "Shadowspear", "Rhythm of the Wild", "Lizard Blades"] 
  },
  { 
    rank: 282, 
    name: "Finneas, Ace Archer", 
    colors: "Selesnya", 
    logic: "Token counter anthems and low-to-the-ground go-wide strategies. Rewards attacking with a mixed token squad by dropping +1/+1 counters and drawing fresh gas.", 
    picks: ["Adeline, Resplendent Cathar", "Mondrak, Glory Dominus", "Toski, Bearer of Secrets", "Beastmaster Ascension"] 
  },
  { 
    rank: 283, 
    name: "Elas il-Kor, Sadistic Pilgrim", 
    colors: "Orzhov", 
    logic: "Deathtrap blocker combined with classic blood-artist drain loops. Acts as a highly efficient, cheap engine sitting in the command zone for sacrifice shells.", 
    picks: ["Zulaport Cutthroat", "Skullclamp", "Gravecrawler", "Lurrus of the Dream-Den"] 
  },
  { 
    rank: 284, 
    name: "Zoraline, Cosmos Caller", 
    colors: "Orzhov", 
    logic: "Bat tribal synergies and lifegain-gated permanent reanimation. Pays small amounts of life during attacks to retrieve low-CMC assets directly back to the board.", 
    picks: ["Starnheim Unleashed", "Vito, Thorn of the Dusk Rose", "Kambal, Consul of Allocation", "Sanguine Bond"] 
  },
  { 
    rank: 285, 
    name: "The Gitrog, Ravenous Ride", 
    colors: "Golgari", 
    logic: "Saddle mechanics mixed with high-power sacrifices. Rides over defensive walls via trample/haste, sacrificing the mount to draw a massive grip of cards.", 
    picks: ["Yargle and Multani", "Daemogoth Titan", "Life from the Loam", "Reliquary Tower"] 
  },
  { 
    rank: 286, 
    name: "Myrel, Shield of Argive", 
    colors: "Mono-White", 
    logic: "Grand Abolisher safety lock combined with Soldier token multiplication. Shuts down opponent interaction during your turn while growing a massive military presence.", 
    picks: ["Cathars' Crusade", "Anointed Procession", "Skullclamp", "Brimaz, King of Oreskos"] 
  },
  { 
    rank: 287, 
    name: "Ellivere of the Wild Court", 
    colors: "Selesnya", 
    logic: "Aura enchantments linked with Virtuous token scaling. Creates specialized roles for attacking creatures that match your total enchantment count.", 
    picks: ["Sythis, Harvest's Hand", "Sanctum Weaver", "Bear Umbra", "Eidolon of Blossoms"] 
  },
  { 
    rank: 288, 
    name: "Ghalta, Primal Hunger", 
    colors: "Mono-Green", 
    logic: "High-power cost reduction stompy. Uses efficient, early, high-stature bodies to drop a massive 12/12 trampler onto the field for a mere two green pips.", 
    picks: ["Rishkar's Expertise", "Selvala, Heart of the Wilds", "Greater Good", "Goreclaw, Terror of Qal Sisma"] 
  },
  { 
    rank: 289, 
    name: "Obeka, Brute Chronologist", 
    colors: "Grixis", 
    logic: "Turn-ending optimization to cheat negative end-step triggers. Permanently keeps sneak-attack targets, clone copies, or temporary steal targets on your board.", 
    picks: ["Sneak Attack", "Mimic Vat", "Ideas Unbound", "Final Fortune"] 
  },
  { 
    rank: 290, 
    name: "Rograkh, Son of Rohgahh // Silas Renn, Seeker Adept", 
    colors: "Grixis", 
    logic: "Grixis affinity, sacrifice, and aggressive Voltron. Uses a 0-CMC legendary creature as immediate fodder for deadly sacrificial values or early equipment targets while Silas loops artifacts from the yard.", 
    picks: ["Mox Amber", "Skullclamp", "Cranial Ram", "Diabolic Intent"] ,
      back: true
  },
  { 
    rank: 291, 
    name: "Marvo, Deep Operative", 
    colors: "Dimir", 
    logic: "Clash mechanic specialization and high-CMC spell cheating. Wins top-deck mana value guessing games to draw cards and drop massive sea monsters or bombs completely free.", 
    picks: ["Brainstorm", "Scroll Rack", "Venser's Journal", "Breaching Leviathan"] 
  },
  { 
    rank: 292, 
    name: "Codie, Vociferous Codex", 
    colors: "WUBRG", 
    logic: "Permanent-less spellslinger and cascading combos. Restricts the deck to instant and sorcery spells to hyper-accelerate mana loops and trigger explosive chain casts.", 
    picks: ["Profane Tutor", "Hypergenesis", "Bring to Light", "Inevitable Betrayal"] 
  },
  { 
    rank: 293, 
    name: "Winter, Misanthropic Guide", 
    colors: "Jund", 
    logic: "Group hug card draw subverted into a painful hand-size tax. Forces fast-paced, high-volume card draw while utilizing Delirium mechanics to aggressively limit opponent hand limits.", 
    picks: ["Howling Mine", "Megrim", "The Underworld Cookbook", "Mishra's Bauble"] 
  },
  { 
    rank: 294, 
    name: "Ardenn, Intrepid Archaeologist // Rograkh, Son of Rohgahh", 
    colors: "Boros", 
    logic: "Lightspeed Voltron gear assembly. Bypasses massive equip costs completely at the beginning of combat, instantly loading an unblockable, hasty 0-drop with lethal weapons.", 
    picks: ["Colossus Hammer", "Hammer of Nazahn", "Sunforger", "Blackblade Reforged"] ,
      back: true
  },
  { 
    rank: 295, 
    name: "Rograkh, Son of Rohgahh // Thrasios, Triton Hero", 
    colors: "Temur", 
    logic: "Defiant polymorph or rapid mid-range value. Uses the zero-mana commander as clean fodder for polymorph strategies to cheat out massive apex threats while banking on Thrasios for infinite mana sinks.", 
    picks: ["Polymorph", "Kinnan, Bonder Prodigy", "Seedborn Muse", "Tidespout Tyrant"] ,
      back: true
  },
 { rank: 296, name: "Norin the Wary", colors: "Mono-Red", logic: "Hyper-recursive flicker and ETB trigger chaos. Capitalizes on the constant blinking mechanics of Norin to fuel permanent token production and relentless burn triggers.", picks: ["Purphoros, God of the Forge", "Impact Tremors", "Genesis Chamber", "Confusion in the Ranks"] },
  { 
    rank: 297, 
    name: "Marwyn, the Nurturer", 
    colors: "Mono-Green", 
    logic: "Elf tribal swarm and explosive mana generation. Scales Marwyn's power rapidly with tribal drops, generating an ocean of mana to fuel game-ending X-spells or massive draw loops.", 
    picks: ["Staff of Domination", "Umbral Mantle", "Ezuri, Renegade Leader", "Rishkar's Expertise"] 
  }
];