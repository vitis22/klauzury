const questions = [
    // otázky pro lehkou obtížnost
    {
        question: "Co je to za zvíře?",
        options: ["Medvěd polární", "Panda", "Tygr", "Slon"],
        answer: 1,
        difficulty: "lehká",
        image: "panda.png"
    },
    {
        question: "Co je to za zvíře?",
        options: ["Medvěd polární", "Krokodýl", "Tygr", "Slon"],
        answer: 2,
        difficulty: "lehká",
        image: "tygr.png"
    },
    {
        question: "Co je to za zvíře?",
        options: ["Puma", "Gepard", "Lev", "Tygr"],
        answer: 1,
        difficulty: "lehká",
        image: "gepard.png"
    },
    {
        question: "Co je to za zvíře?",
        options: ["Komár", "Vosa", "Beruška", "Moucha"],
        answer: 2,
        difficulty: "lehká",
        image: "beruska.png"
    },    
    {
        question: "Co je to za zvíře?",
        options: ["Vlk", "Hyena", "Lasička", "Liška"],
        answer: 3,
        difficulty: "lehká",
        image: "liska.png"
    },    
    {
        question: "Co je to za zvíře?",
        options: ["Lasička", "Krysa", "Sysel", "Veverka"],
        answer: 3,
        difficulty: "lehká",
        image: "veverka.png"
    },    
    {
        question: "Co je to za zvíře?",
        options: ["Užovka", "Anakonda", "Krajta", "Kobra"],
        answer: 1,
        difficulty: "lehká",
        image: "anakonda.png"
    },
    {
        question: "Co je to za zvíře?",
        options: ["Bizon", "Kráva", "Buvol", "Býk"],
        answer: 0,
        difficulty: "lehká",
        image: "bizon.png"
    },
    {
        question: "Co je to za zvíře?",
        options: ["Srnka", "Gazela", "Antylopa", "Jelen"],
        answer: 1,
        difficulty: "lehká",
        image: "gazela.png"
    },
    {
        question: "Co je to za zvíře?",
        options: ["Orangutan", "Makak", "Šimpanz", "Gorila"],
        answer: 3,
        difficulty: "lehká",
        image: "gorila.png"
    },
    {
        question: "Co je to za zvíře?",
        options: ["Vlk", "Pes", "Hyena", "Kojot"],
        answer: 2,
        difficulty: "lehká",
        image: "hyena.png"
    },
    {
        question: "Co je to za zvíře?",
        options: ["Hroznýš", "Chřestíš", "Korálovka", "Užovka"],
        answer: 1,
        difficulty: "lehká",
        image: "chrestis.png"
    },
    {
        question: "Co je to za zvíře?",
        options: ["Klokan", "Wallaby", "Vombat", "Pes"],
        answer: 0,
        difficulty: "lehká",
        image: "klokan.png"
    },
    {
        question: "Co je to za zvíře?",
        options: ["Lenochod", "Koala", "Panda", "Orangutan"],
        answer: 1,
        difficulty: "lehká",
        image: "koala.png"
    },
    {
        question: "Co je to za zvíře?",
        options: ["Mamba", "Korálovec", "Užovka", "Kobra"],
        answer: 3,
        difficulty: "lehká",
        image: "kobra.png"
    },
    {
        question: "Co je to za zvíře?",
        options: ["Chameleon", "Ještěrka", "Krokodýl", "Varan"],
        answer: 2,
        difficulty: "lehká",
        image: "krokodil.png"
    },
    {
        question: "Co je to za zvíře?",
        options: ["Datel", "Špaček", "Papoušek", "Ledňáček"],
        answer: 3,
        difficulty: "lehká",
        image: "lednacek.png"
    },
    {
        question: "Co je to za zvíře?",
        options: ["Lev", "Levhart", "Tygr", "Puma"],
        answer: 0,
        difficulty: "lehká",
        image: "lev.png"
    },
    {
        question: "Co je to za zvíře?",
        options: ["Medvěd lední", "Medvěd grizly", "Medvěd hnědý", "Medvěd černý"],
        answer: 1,
        difficulty: "lehká",
        image: "medved.png"
    },
    {
        question: "Co je to za zvíře?",
        options: ["Medvěd lední", "Mrož", "Tuleň", "Medvěd grizly"],
        answer: 0,
        difficulty: "lehká",
        image: "ledni medved.png"
    },
    {
        question: "Co je to za zvíře?",
        options: ["Sokol", "Orel", "Káně", "Harpyje"],
        answer: 1,
        difficulty: "lehká",
        image: "orel.png"
    },
    {
        question: "Co je to za zvíře?",
        options: ["Mýval", "Koala", "Liška", "Panda červená"],
        answer: 3,
        difficulty: "lehká",
        image: "panda cervena.png"
    },
    {
        question: "Co je to za zvíře?",
        options: ["Kachna", "Labuť", "Páv", "Pelikán"],
        answer: 2,
        difficulty: "lehká",
        image: "pav.png"
    },
    {
        question: "Co je to za zvíře?",
        options: ["Osel", "Zebra", "Kůň", "Poník"],
        answer: 1,
        difficulty: "lehká",
        image: "zebra.png"
    },
    {
        question: "Co je to za zvíře?",
        options: ["Pštros", "Plameňák", "Volavka", "Slepice"],
        answer: 0,
        difficulty: "lehká",
        image: "pstros.png"
    },
    {
        question: "Co je to za zvíře?",
        options: ["Tygr", "Puma", "Jaguár", "Lvice"],
        answer: 1,
        difficulty: "lehká",
        image: "puma.png"
    },
    {
        question: "Co je to za zvíře?",
        options: ["Tapír", "Hroch", "Nosorožec", "Slon"],
        answer: 3,
        difficulty: "lehká",
        image: "slon.png"
    },
    {
        question: "Co je to za zvíře?",
        options: ["Sup", "Harpyje", "Sova", "Kondor"],
        answer: 2,
        difficulty: "lehká",
        image: "sova.png"
    },
    {
        question: "Co je to za zvíře?",
        options: ["Vlk", "Pes", "Kajot", "Šakal"],
        answer: 0,
        difficulty: "lehká",
        image: "vlk.png"
    },
    {
        question: "Co je to za zvíře?",
        options: ["Slon", "Kůň", "Zebra", "Žirafa"],
        answer: 3,
        difficulty: "lehká",
        image: "zirafa.png"
    },


    // otázky pro střední obtížnost

    {
        question: "Co je to za zvíře?",
        options: ["Medvěd polární", "Panda", "Tygr", "Slon"],
        answer: 1,
        difficulty: "střední",
        image: "1_panda.png"
    },
    {
        question: "Co je to za zvíře?",
        options: ["Medvěd polární", "Krokodýl", "Tygr", "Slon"],
        answer: 2,
        difficulty: "střední",
        image: "1_tygr.png"
    },
    {
        question: "Co je to za zvíře?",
        options: ["Puma", "Gepard", "Lev", "Tygr"],
        answer: 1,
        difficulty: "střední",
        image: "1_gepard.png"
    },
    {
        question: "Co je to za zvíře?",
        options: ["Komár", "Vosa", "Beruška", "Moucha"],
        answer: 2,
        difficulty: "střední",
        image: "1_beruska.png"
    },
    {
        question: "Co je to za zvíře?",
        options: ["Vlk", "Hyena", "Lasička", "Liška"],
        answer: 3,
        difficulty: "střední",
        image: "1_liska.png"
    },
    {
        question: "Co je to za zvíře?",
        options: ["Lasička", "Krysa", "Sysel", "Veverka"],
        answer: 3,
        difficulty: "střední",
        image: "1_veverka.png"
    },
    {
        question: "Co je to za zvíře?",
        options: ["Užovka", "Anakonda", "Krajta", "Kobra"],
        answer: 1,
        difficulty: "střední",
        image: "1_anakonda.png"
    },
    {
        question: "Co je to za zvíře?",
        options: ["Bizon", "Kráva", "Buvol", "Býk"],
        answer: 0,
        difficulty: "střední",
        image: "1_bizon.png"
    },
    {
        question: "Co je to za zvíře?",
        options: ["Srnka", "Gazela", "Antylopa", "Jelen"],
        answer: 1,
        difficulty: "střední",
        image: "1_gazela.png"
    },
    {
        question: "Co je to za zvíře?",
        options: ["Orangutan", "Makak", "Šimpanz", "Gorila"],
        answer: 3,
        difficulty: "střední",
        image: "1_gorila.png"
    },
    {
        question: "Co je to za zvíře?",
        options: ["Vlk", "Pes", "Hyena", "Kojot"],
        answer: 2,
        difficulty: "střední",
        image: "1_hyena.png"
    },
    {
        question: "Co je to za zvíře?",
        options: ["Hroznýš", "Chřestíš", "Korálovka", "Užovka"],
        answer: 1,
        difficulty: "střední",
        image: "1_chrestis.png"
    },
    {
        question: "Co je to za zvíře?",
        options: ["Klokan", "Wallaby", "Vombat", "Pes"],
        answer: 0,
        difficulty: "střední",
        image: "1_klokan.png"
    },
    {
        question: "Co je to za zvíře?",
        options: ["Lenochod", "Koala", "Panda", "Orangutan"],
        answer: 1,
        difficulty: "střední",
        image: "1_koala.png"
    },
    {
        question: "Co je to za zvíře?",
        options: ["Mamba", "Korálovec", "Užovka", "Kobra"],
        answer: 3,
        difficulty: "střední",
        image: "1_kobra.png"
    },
    {
        question: "Co je to za zvíře?",
        options: ["Chameleon", "Ještěrka", "Krokodýl", "Varan"],
        answer: 2,
        difficulty: "střední",
        image: "1_krokodil.png"
    },
    {
        question: "Co je to za zvíře?",
        options: ["Datel", "Špaček", "Papoušek", "Ledňáček"],
        answer: 3,
        difficulty: "střední",
        image: "1_lednacek.png"
    },
    {
        question: "Co je to za zvíře?",
        options: ["Lev", "Levhart", "Tygr", "Puma"],
        answer: 0,
        difficulty: "střední",
        image: "1_lev.png"
    },
    {
        question: "Co je to za zvíře?",
        options: ["Medvěd lední", "Medvěd grizly", "Medvěd hnědý", "Medvěd černý"],
        answer: 1,
        difficulty: "střední",
        image: "1_medved.png"
    },
    {
        question: "Co je to za zvíře?",
        options: ["Medvěd lední", "Mrož", "Tuleň", "Medvěd grizly"],
        answer: 0,
        difficulty: "střední",
        image: "1_ledni medved.png"
    },
    {
        question: "Co je to za zvíře?",
        options: ["Sokol", "Orel", "Káně", "Harpyje"],
        answer: 1,
        difficulty: "střední",
        image: "1_orel.png"
    },
    {
        question: "Co je to za zvíře?",
        options: ["Mýval", "Koala", "Liška", "Panda červená"],
        answer: 3,
        difficulty: "střední",
        image: "1_panda cervena.png"
    },
    {
        question: "Co je to za zvíře?",
        options: ["Kachna", "Labuť", "Páv", "Pelikán"],
        answer: 2,
        difficulty: "střední",
        image: "1_pav.png"
    },
    {
        question: "Co je to za zvíře?",
        options: ["Osel", "Zebra", "Kůň", "Poník"],
        answer: 1,
        difficulty: "střední",
        image: "1_zebra.png"
    },
    {
        question: "Co je to za zvíře?",
        options: ["Pštros", "Plameňák", "Volavka", "Slepice"],
        answer: 0,
        difficulty: "střední",
        image: "1_pstros.png"
    },
    {
        question: "Co je to za zvíře?",
        options: ["Tygr", "Puma", "Jaguár", "Lvice"],
        answer: 1,
        difficulty: "střední",
        image: "1_puma.png"
    },
    {
        question: "Co je to za zvíře?",
        options: ["Tapír", "Hroch", "Nosorožec", "Slon"],
        answer: 3,
        difficulty: "střední",
        image: "1_slon.png"
    },
    {
        question: "Co je to za zvíře?",
        options: ["Sup", "Harpyje", "Sova", "Kondor"],
        answer: 2,
        difficulty: "střední",
        image: "1_sova.png"
    },
    {
        question: "Co je to za zvíře?",
        options: ["Vlk", "Pes", "Kajot", "Šakal"],
        answer: 0,
        difficulty: "střední",
        image: "1_vlk.png"
    },
    {
        question: "Co je to za zvíře?",
        options: ["Slon", "Kůň", "Zebra", "Žirafa"],
        answer: 3,
        difficulty: "střední",
        image: "1_zirafa.png"
    },

    // otázky pro těžkou obtížnost

    {
        question: "Jaký pták neumí létat?",
        options: ["Pštros", "Kondor", "Vlaštovka", "Sokol"],
        answer: 0,
        difficulty: "těžká"
    },
    {
        question: "Jaký je nejjedovatější had na světě?",
        options: ["Hroznýš", "Kobra", "Zmije", "Taipan"],
        answer: 3,
        difficulty: "těžká"
    },
    {
        question: "Kolik druhů želv je známo?",
        options: ["7", "250", "360", "500+"],
        answer: 3,
        difficulty: "těžká"
    },
    {
        question: "Které zvíře má nejsilnější stisk?",
        options: ["Gepard", "Lev", "Hyena", "Tygr"],
        answer: 2,
        difficulty: "těžká"
    },
    {
        question: "Které zvíře ma největší vytrvalost?",
        options: ["Vlk", "Medvěd", "Slon", "Gazela"],
        answer: 0,
        difficulty: "těžká"
    },
    {
        question: "Kolik druhů hadů existuje?",
        options: ["2 800", "3 600", "1 400", "800"],
        answer: 1,
        difficulty: "těžká"
    },
    {
        question: "Jaký je nejjedovatější škorpion na světě?",
        options: ["Štír tlustorepý", "Štír samičí", "Štír bahijský", "Štír smrtonoš"],
        answer: 3,
        difficulty: "těžká"
    },
    {
        question: "Kolik váží slon africký?",
        options: ["8t", "4t", "6t", "5,5t"],
        answer: 2,
        difficulty: "těžká"
    },
    {
        question: "Keré zvíře je na pokraji vyhinutí?",
        options: ["Nosorožec tuponosý severní", "Tygr indický", "Panda červená", "Levhart sněžný"],
        answer: 0,
        difficulty: "těžká"
    },
    {
        question: "Které zvíře má 4 žaludky?",
        options: ["Pštros", "Žirafa", "Kráva", "Lemur"],
        answer: 2,
        difficulty: "těžká"
    },
    {
        question: "Kolik má moucha očí?",
        options: ["850", "2", "1000+", "400"],
        answer: 1,
        difficulty: "těžká"
    },
    {
        question: "Které zvíře je označováno za nejrychlejšího tvora na světě?",
        options: ["Gepard", "Puma", "Sokol stěhovavý", "Gazela"],
        answer: 2,
        difficulty: "těžká"
    },
    {
        question: "Jaký je největší druh medvěda?",
        options: ["Medvěd kodiak", "Medvěd hnědý", "Medvěd malajský", "Medvěd lední"],
        answer: 0,
        difficulty: "těžká"
    },
    {
        question: "Jak se jmenuje největší druh želvy?",
        options: ["Želva žlutohnědá", "Kožatka velká", "Želva stepní", "Kareta obrovská"],
        answer: 1,
        difficulty: "těžká"
    },
    {
        question: "Jaký je největší druh ptáka na světě?",
        options: ["Plameňák", "Orel mořský", "Harpyje", "Pštros"],
        answer: 3,
        difficulty: "těžká"
    },
    {
        question: "Kolik zubů má dospělý krokodýl?",
        options: ["50", "100", "60", "80"],
        answer: 2,
        difficulty: "těžká"
    },
    {
        question: "Který druh králíka má nejdelší uši?",
        options: ["Králík domácí", "Angorský králík", "Kalifornský králík", "Anglický beran"],
        answer: 3,
        difficulty: "těžká"
    },
    {
        question: "Jaká je nejvyšší rychlost, které může dosáhnout gepard?",
        options: ["100 km/h", "120 km/h", "80 km/h", "50 km/h"],
        answer: 0,
        difficulty: "těžká"
    },
    {
        question: "Který savec má nejlepší čich na světě?",
        options: ["Medvěd", "Slon", "Pes", "Kočka"],
        answer: 1,
        difficulty: "těžká"
    },
    {
        question: "Který zvířecí druh je známý svým výrazným pruhováním?",
        options: ["Zebra", "Gepard", "Tygr", "Žirafa"],
        answer: 0,
        difficulty: "těžká"
    },
    {
        question: "Který savec je největší na světě?",
        options: ["Nilský krokodýl", "Žirafa", "Slon", "Plejtvák obrovský"],
        answer: 3,
        difficulty: "těžká"
    },
    {
        question: "Která je největší kočkovitá šelma na světě?",
        options: ["Gepard", "Lev", "Tygr", "Puma"],
        answer: 2,
        difficulty: "těžká"
    },
    {
        question: "Jaký je nejtěžší had na světě?",
        options: ["Anakonda", "Korálovec", "Krajta", "Kobra královská"],
        answer: 0,
        difficulty: "těžká"
    },
    {
        question: "Který druh krokodýla je největší na světě?",
        options: ["Krokodýl siamský", "Kajmanský krokodýl", "Mořský krokodýl", "Krokodýl nilský"],
        answer: 2,
        difficulty: "těžká"
    },
    {
        question: "Které zvíře je známé svým dlouhým krkem?",
        options: ["Gazela", "Žirafa", "Zebra", "Slon"],
        answer: 1,
        difficulty: "těžká"
    },
    {
        question: "Jaký je největší pavouk na světě?",
        options: ["Slíďák tatarský", "Tarantule", "Černá vdova", "Sklípkan největší"],
        answer: 3,
        difficulty: "těžká"
    },
    {
        question: "Který savec dokáže létat?",
        options: ["Netopýr", "Špaček", "Svišť", "Sokol"],
        answer: 0,
        difficulty: "těžká"
    },
    {
        question: "Jaký pták je zbarvený do růžova?",
        options: ["Káně", "Sojka", "Volavka", "Plameňák"],
        answer: 3,
        difficulty: "těžká"
    },
    {
        question: "Jaké zvíře dovede měnit svoji barvu?",
        options: ["Kanárek", "Chameleon", "Had", "Leguán"],
        answer: 1,
        difficulty: "těžká"
    },
    {
        question: "Který druh opice je nejmenší na světě?",
        options: ["Gibon", "Tamarin", "Kosman zakrslý", "Makak"],
        answer: 1,
        difficulty: "těžká"
    },
];