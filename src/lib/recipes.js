export const recipes = [
    {
        id: "pancakes-moelleux",
        title: "Pancakes Moelleux",
        image: "/images/pancakes.jpg",
        description: "Le petit-déjeuner américain par excellence.",
        prepTime: 10,
        cookTime: 20,
        difficulty: "Facile",
        budget: "Bas",
        categories: [
            "Desserts"
        ],
        // --------------------------
        ingredients: [
            { name: "Farine", quantity: "250g" },
            { name: "Oeufs", quantity: "2" },
            { name: "Lait", quantity: "40 cl" },
            { name: "Beurre fondu", quantity: "50g" },
            { name: "Sucre", quantity: "50g" },
            { name: "Levure chimique", quantity: "1 sachet" }
        ],
        steps: [
            "Mélanger la farine, le sucre et la levure dans un grand saladier.",
            "Faire un puits et ajouter les oeufs entiers.",
            "Incorporer le lait petit à petit en fouettant pour éviter les grumeaux.",
            "Ajouter le beurre fondu et laisser reposer la pâte 30 minutes.",
            "Faire chauffer une poêle beurrée et verser une louche de pâte.",
            "Laisser cuire 2 minutes par face jusqu'à ce que ce soit doré."
        ]
    },
    {
        id: "pates-carbo",
        title: "Pâtes Carbonara",
        image: "/images/carbonara.jpg",
        description: "La vraie recette italienne, sans crème !",
        // --- Nouveaux attributs ---
        prepTime: 15,
        cookTime: 10,
        difficulty: "Moyen",
        budget: "Moyen",
        categories: [
            "Plat principal"
        ],
        // --------------------------
        ingredients: [
            { name: "Spaghetti", quantity: "400g" },
            { name: "Guanciale (ou lardons)", quantity: "200g" },
            { name: "Jaunes d'oeufs", quantity: "4" },
            { name: "Pecorino (ou Parmesan)", quantity: "100g" },
            { name: "Poivre noir", quantity: "Abondant" }
        ],
        steps: [
            "Faire bouillir une grande casserole d'eau salée.",
            "Faire revenir le guanciale dans une poêle sans matière grasse jusqu'à ce qu'il soit croustillant (environ 10 minutes).",
            "Mélanger les jaunes d'oeufs avec le fromage râpé et beaucoup de poivre pour obtenir une pâte.",
            "Cuire les pâtes al dente (environ 9 minutes). Garder une louche d'eau de cuisson.",
            "Mélanger les pâtes avec le guanciale, puis hors du feu, ajouter le mélange oeufs/fromage et un peu d'eau de cuisson pour créer une émulsion crémeuse."
        ]
    },
    {
        id: "gateau-au-yaourt-facile",
        title: "Gâteau au Yaourt Facile",
        image: "/images/gateau-yaourt.jpg",
        description: "Un grand classique simple, rapide et moelleux, idéal pour le goûter.",
        prepTime: 10,
        cookTime: 35,
        difficulty: "Facile",
        budget: "Bas",
        categories: [
            "Desserts"
        ],
        // --------------------------
        ingredients: [
            { name: "Yaourt nature", quantity: "1 pot" },
            { name: "Sucre", quantity: "2 pots" },
            { name: "Farine", quantity: "3 pots" },
            { name: "Huile végétale", quantity: "1/2 pot" },
            { name: "Oeufs", quantity: "3" },
            { name: "Levure chimique", quantity: "1 sachet" },
            { name: "Sucre vanillé", quantity: "1 sachet" }
        ],
        steps: [
            "Préchauffer le four à 180°C (thermostat 6).",
            "Verser le yaourt dans un saladier et utiliser le pot comme mesure.",
            "Ajouter le sucre et le sucre vanillé, puis mélanger.",
            "Incorporer les oeufs un à un en mélangeant bien.",
            "Ajouter la farine et la levure, puis mélanger jusqu'à obtenir une pâte homogène.",
            "Verser l'huile et mélanger à nouveau.",
            "Beurrer et fariner un moule, puis y verser la pâte.",
            "Enfourner pendant environ 35 minutes.",
            "Vérifier la cuisson avec la pointe d'un couteau : elle doit ressortir sèche.",
            "Laisser refroidir avant de démouler."
        ]
    },
    {
        id: "baguette-tradition-francaise",
        title: "Baguette Tradition Française",
        image: "/images/baguette-tradition.jpg",
        description: "La fameuse baguette de tradition française, croustillante à l'extérieur et moelleuse à l'intérieur.",
        prepTime: 30,
        cookTime: 15,
        difficulty: "Moyen",
        budget: "Moyen",
        categories: [
            "Boulangerie",
        ],
        ingredients: [
            { name: "Farine T65", quantity: "1000g" },
            { name: "Eau", quantity: "700g" },
            { name: "Levure fraîche", quantity: "16g" },
            { name: "Levure de boulanger sèche", quantity: "8g (optionnelle)" },
            { name: "Sel", quantity: "22g" }
        ],
        steps: [
            "Dans le bol de votre robot ou un grand saladier, mélangez la farine et l'eau à vitesse lente pour humidifier la farine (frasage).",
            "Ajoutez le sel puis incorporez la levure émiettée (si vous utilisez de la levure sèche, délayez-la d'abord dans un peu d’eau tiède). Pétrissez environ 5 minutes jusqu’à obtenir une pâte homogène. :contentReference[oaicite:1]{index=1}",
            "Couvrez la pâte d’un torchon humide et laissez-la lever 20 minutes à température ambiante. :contentReference[oaicite:2]{index=2}",
            "Sur un plan de travail fariné, étalez la pâte sans la déchirer, rabattez les bords au centre, remettez-la dans le bol et laissez lever encore 20 minutes. Répétez cette étape une troisième fois puis laissez lever 2h pour que la pâte double de volume. :contentReference[oaicite:3]{index=3}",
            "Partagez la pâte en 6 pâtons égaux, formez des boules, puis laissez-les reposer 10 minutes sous un torchon. :contentReference[oaicite:4]{index=4}",
            "Façonnez chaque pâton en baguette allongée et laissez reposer 30 minutes pour l’apprêt. :contentReference[oaicite:5]{index=5}",
            "Préchauffez le four à 250 °C avec un petit récipient rempli d’eau pour créer de la vapeur. :contentReference[oaicite:6]{index=6}",
            "Entaillez chaque baguette avec une lame (2 à 3 incisions) puis enfournez environ 15 minutes jusqu’à ce que la croûte soit bien dorée. :contentReference[oaicite:7]{index=7}"
        ]
    },
    {
        id: "veritable-moelleux-au-chocolat",
        title: "Véritable Moelleux au Chocolat",
        image: "/images/moelleux-chocolat.jpg",
        description: "Un gâteau au chocolat fondant et moelleux, parfait pour les amateurs de desserts chocolatés.",
        prepTime: 10,
        cookTime: 30,
        difficulty: "Facile",
        budget: "Bas",
        categories: [
            "Desserts"
        ],
        // --------------------------
        ingredients: [
            { name: "Farine", quantity: "125g" },
            { name: "Beurre doux", quantity: "125g" },
            { name: "Sucre semoule", quantity: "250g" },
            { name: "Chocolat noir", quantity: "200g" },
            { name: "Levure chimique", quantity: "0.5 sachet" },
            { name: "Œufs", quantity: "4" }
        ],
        steps: [
            "Préchauffer le four à 180°C (thermostat 6).",
            "Faire fondre le chocolat dans une casserole.",
            "Hors du feu, ajouter le beurre et mélanger jusqu’à ce qu’il soit fondu.",
            "Ajouter la farine et la levure, puis mélanger.",
            "Fouetter les jaunes d’œufs avec le sucre et un peu d’eau pour faire mousser.",
            "Ajouter cette préparation à la préparation chocolatée.",
            "Battre les blancs en neige et les incorporer délicatement à la préparation.",
            "Verser la pâte dans un moule beurré à bords hauts.",
            "Enfourner pendant environ 30 minutes jusqu’à ce que le moelleux soit cuit.",
            "Laisser tiédir avant de démouler.",
            "Optionnel : décorer avec du sucre glace ou du chocolat fondu."
        ]
    }

];