const questions = [
    {
        question: "Co je to za zvíře?",
        options: ["Medvěd polární", "Panda", "Tygr", "Slon"],
        answer: 1,
        difficulty: "lehká",
        image: "panda.jpeg"
    },
    {
        question: "Co je to za zvíře?",
        options: ["Medvěd polární", "Krokodýl", "Tygr", "Slon"],
        answer: 2,
        difficulty: "lehká",
        image: "tygr.jpeg"
    },
    {
        question: "Co je to za zvíře?",
        options: ["Slon africký", "Tygr bengálský", "Lev africký", "Vlk obecný"],
        answer: 1,
        difficulty: "lehká",
        image: "slon.jpeg"
    },
    {
        question: "Co je to za zvíře?",
        options: ["Lev africký", "Osel domácí", "Kočka divoká", "Veverka"],
        answer: 1,
        difficulty: "lehká",
        image: "lev.jpeg"
    },    
    {
        question: "Co je to za zvíře?",
        options: ["Vlk obecný", "Nosorožec bílý", "Koala", "Žirafa"],
        answer: 1,
        difficulty: "lehká",
        image: "vlk.jpeg"
    },    
    {
        question: "Co je to za zvíře?",
        options: ["Panda obrovská", "Kočka domácí", "Delfín skákavý", "Krokodýl nilský"],
        answer: 1,
        difficulty: "lehká",
        image: "panda.jpeg"
    },    
    {
        question: "Co je to za zvíře?",
        options: ["Panda obrovská", "Kočka domácí", "Delfín skákavý", "Krokodýl nilský"],
        answer: 1,
        difficulty: "lehká",
        image: "panda.jpeg"
    },
    {
        question: "Co je to za zvíře?",
        options: ["Koala", "Veverka", "Osel domácí", "Klokánek rudý"],
        answer: 1,
        difficulty: "lehká",
        image: "koala.jpeg"
    },
    {
        question: "9 Co je to za zvíře?",
        options: ["Medvěd polární", "Krokodýl", "Tygr", "Slon"],
        answer: 0,
        difficulty: "lehká",
        image: "panda.jpeg"
    },
    {
        question: "10 Co je to za zvíře?",
        options: ["Medvěd polární", "Krokodýl", "Tygr", "Slon"],
        answer: 0,
        difficulty: "lehká",
        image: "panda.jpeg"
    },
    {
        question: "11 Co je to za zvíře?",
        options: ["Medvěd polární", "Krokodýl", "Tygr", "Slon"],
        answer: 0,
        difficulty: "lehká",
        image: "panda.jpeg"
    },
    {
        question: "1 Jaký pták neumí létat?",
        options: ["Pštros", "Kondor", "Vlaštovka", "Sokol"],
        answer: 0,
        difficulty: "střední",
        image: "tygr.jpeg"
    },
    {
        question: "2 Jaký pták neumí létat?",
        options: ["Pštros", "Kondor", "Vlaštovka", "Sokol"],
        answer: 0,
        difficulty: "střední",
        image: "tygr.jpeg"
    },
    {
        question: "3 Jaký pták neumí létat?",
        options: ["Pštros", "Kondor", "Vlaštovka", "Sokol"],
        answer: 0,
        difficulty: "střední",
        image: "tygr.jpeg"
    },
    {
        question: "4 Jaký pták neumí létat?",
        options: ["Pštros", "Kondor", "Vlaštovka", "Sokol"],
        answer: 0,
        difficulty: "střední",
        image: "tygr.jpeg"
    },
    {
        question: "5 Jaký pták neumí létat?",
        options: ["Pštros", "Kondor", "Vlaštovka", "Sokol"],
        answer: 0,
        difficulty: "střední",
        image: "tygr.jpeg"
    },
    {
        question: "6 Jaký pták neumí létat?",
        options: ["Pštros", "Kondor", "Vlaštovka", "Sokol"],
        answer: 0,
        difficulty: "střední",
        image: "tygr.jpeg"
    },
    {
        question: "7 Jaký pták neumí létat?",
        options: ["Pštros", "Kondor", "Vlaštovka", "Sokol"],
        answer: 0,
        difficulty: "střední",
        image: "tygr.jpeg"
    },

    {
        question: "8 Jaký pták neumí létat?",
        options: ["Pštros", "Kondor", "Vlaštovka", "Sokol"],
        answer: 0,
        difficulty: "střední",
        image: "tygr.jpeg"
    },
    {
        question: "9 Jaký pták neumí létat?",
        options: ["Pštros", "Kondor", "Vlaštovka", "Sokol"],
        answer: 0,
        difficulty: "střední",
        image: "tygr.jpeg"
    },
    {
        question: "Který druh žraloka je největší?",
        options: ["Žralok bílý", "Žralok veliký", "Žralok obrovský", "Žralok makoa"],
        answer: 2,
        difficulty: "střední"
    },  
    {
        question: "Které zvíře je symbolem Austrálie?",
        options: ["Klokan", "Koala", "Emu", "Platypus"],
        answer: 0,
        difficulty: "střední"
    },
    {
        question: "Kolik noh má pavouk?",
        options: ["4", "6", "8", "10"],
        answer: 2,
        difficulty: "těžká"
    },
    {
        question: "Který had je známý svými smrtelnými jedovatými kusadly?",
        options: ["Hroznýš brazilský", "Kobra indická", "Vodní had", "Diamantový had"],
        answer: 1,
        difficulty: "těžká"
    },
    {
        question: "Kolik druhů želv je známo?",
        options: ["7", "250", "360", "500+"],
        answer: 3,
        difficulty: "těžká"
    },
    {
        question: "Který druh chobotnice je schopný měnit barvu?",
        options: ["Chobotnice velká", "Kohoutková krakatice", "Chobotnice globová", "Chobotnice mimikri"],
        answer: 1,
        difficulty: "těžká"
    },
    {
        question: "4 Který druh chobotnice je schopný měnit barvu?",
        options: ["Chobotnice velká", "Kohoutková krakatice", "Chobotnice globová", "Chobotnice mimikri"],
        answer: 1,
        difficulty: "těžká"
    },
    {
        question: "5 Který druh chobotnice je schopný měnit barvu?",
        options: ["Chobotnice velká", "Kohoutková krakatice", "Chobotnice globová", "Chobotnice mimikri"],
        answer: 1,
        difficulty: "těžká"
    },
    {
        question: "6 Který druh chobotnice je schopný měnit barvu?",
        options: ["Chobotnice velká", "Kohoutková krakatice", "Chobotnice globová", "Chobotnice mimikri"],
        answer: 1,
        difficulty: "těžká"
    },
    {
        question: "7 Který druh chobotnice je schopný měnit barvu?",
        options: ["Chobotnice velká", "Kohoutková krakatice", "Chobotnice globová", "Chobotnice mimikri"],
        answer: 1,
        difficulty: "těžká"
    },
    {
        question: "8 Který druh chobotnice je schopný měnit barvu?",
        options: ["Chobotnice velká", "Kohoutková krakatice", "Chobotnice globová", "Chobotnice mimikri"],
        answer: 1,
        difficulty: "těžká"
    },
    {
        question: "9 Který druh chobotnice je schopný měnit barvu?",
        options: ["Chobotnice velká", "Kohoutková krakatice", "Chobotnice globová", "Chobotnice mimikri"],
        answer: 1,
        difficulty: "těžká"
    },
    {
        question: "10 Který druh chobotnice je schopný měnit barvu?",
        options: ["Chobotnice velká", "Kohoutková krakatice", "Chobotnice globová", "Chobotnice mimikri"],
        answer: 1,
        difficulty: "těžká"
    },
    {
        question: "11 Který druh chobotnice je schopný měnit barvu?",
        options: ["Chobotnice velká", "Kohoutková krakatice", "Chobotnice globová", "Chobotnice mimikri"],
        answer: 1,
        difficulty: "těžká"
    },
];