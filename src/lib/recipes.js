export const recipes = [
    {
        id: "pancakes-moelleux",
        title: "Pancakes",
        image: "/images/pancakes.jpg",
        description: "Le petit-déjeuner américain par excellence.",
        prepTime: 10,
        cookTime: 20,
        difficulty: "Facile",
        budget: "Bas",
        categories: [
            "Desserts"
        ],
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
        prepTime: 15,
        cookTime: 10,
        difficulty: "Moyen",
        budget: "Moyen",
        categories: [
            "Plat principal"
        ],
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
        title: "Gâteau au Yaourt",
        image: "/images/gateau-yaourt.jpg",
        description: "Un grand classique simple, rapide et moelleux, idéal pour le goûter.",
        prepTime: 10,
        cookTime: 35,
        difficulty: "Facile",
        budget: "Bas",
        categories: [
            "Desserts"
        ],
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
        title: "Baguette de pain",
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
            "Ajoutez le sel puis incorporez la levure émiettée (si vous utilisez de la levure sèche, délayez-la d'abord dans un peu d’eau tiède).",
            "Pétrissez environ 5 minutes jusqu’à obtenir une pâte homogène.",
            "Couvrez la pâte d’un torchon humide et laissez-la lever 20 minutes à température ambiante.",
            "Sur un plan de travail fariné, étalez la pâte sans la déchirer, rabattez les bords au centre, remettez-la dans le bol et laissez lever encore 20 minutes.",
            "A nouveau étalez la pâte sans la déchirer, rabattez les bords au centre, puis laissez lever 2h pour que la pâte double de volume.",
            "Partagez la pâte en 6 pâtons égaux, formez des boules, puis laissez-les reposer 10 minutes sous un torchon.",
            "Façonnez chaque pâton en baguette allongée et laissez reposer 30 minutes pour l’apprêt.",
            "Préchauffez le four à 250 °C avec un petit récipient rempli d’eau pour créer de la vapeur.",
            "Entaillez chaque baguette avec une lame (2 à 3 incisions) puis enfournez environ 15 minutes jusqu’à ce que la croûte soit bien dorée."
        ]
    },
    {
        id: "veritable-moelleux-au-chocolat",
        title: "Moelleux au Chocolat",
        image: "/images/moelleux-chocolat.jpg",
        description: "Un gâteau au chocolat fondant et moelleux, parfait pour les amateurs de desserts chocolatés.",
        prepTime: 10,
        cookTime: 30,
        difficulty: "Facile",
        budget: "Bas",
        categories: [
            "Desserts"
        ],
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
    },
    {
        id: "galette-des-rois-frangipane",
        title: "Galette Frangipane",
        image: "/images/galette-des-rois-frangipane.jpg",
        description: "La traditionnelle galette des rois à la frangipane, croustillante et fondante.",
        prepTime: 20,
        cookTime: 30,
        difficulty: "Moyenne",
        budget: "Moyen",
        categories: [
            "Desserts",
            "Boulangerie"
        ],
        ingredients: [
            { name: "Pâte feuilletée", quantity: "2 rouleaux" },
            { name: "Poudre d’amandes", quantity: "125 g" },
            { name: "Sucre", quantity: "100 g" },
            { name: "Beurre", quantity: "100 g" },
            { name: "Oeufs", quantity: "2" },
            { name: "Jaune d’oeuf", quantity: "1 (pour la dorure)" },
            { name: "Extrait de vanille", quantity: "1 cuillère à café" },
            { name: "Rhum (optionnel)", quantity: "1 cuillère à soupe" }
        ],
        steps: [
            "Préchauffer le four à 180°C (thermostat 6).",
            "Dans un saladier, mélanger le beurre mou avec le sucre jusqu'à obtenir une texture crémeuse.",
            "Ajouter les oeufs un à un en mélangeant bien.",
            "Incorporer la poudre d’amandes, la vanille et le rhum si utilisé.",
            "Dérouler une pâte feuilletée sur une plaque recouverte de papier cuisson.",
            "Étaler la frangipane au centre en laissant environ 2 cm de bord.",
            "Placer la fève dans la crème.",
            "Humidifier légèrement les bords avec de l’eau.",
            "Recouvrir avec la seconde pâte feuilletée et souder les bords.",
            "Badigeonner le dessus avec le jaune d’oeuf.",
            "Dessiner des motifs sur la galette avec la pointe d’un couteau sans percer la pâte.",
            "Enfourner pendant environ 30 minutes jusqu'à ce que la galette soit bien dorée.",
            "Laisser tiédir avant de servir."
        ]
    },
    {
        id: "pate-pizza-epaisse-moelleuse",
        title: "Pâte à Pizza",
        image: "/images/pate-pizza-epaisse-moelleuse.jpg",
        description: "Une pâte à pizza maison épaisse et moelleuse, parfaite pour garnir selon vos envies.",
        prepTime: 20,
        cookTime: 0,
        difficulty: "Facile",
        budget: "Bas",
        categories: [
            "Plat principal",
        ],
        ingredients: [
            { "name": "Farine (type pâte à pain)", "quantity": "350 g" },
            { "name": "Farine pour travailler la pâte", "quantity": "100 g" },
            { "name": "Sel", "quantity": "2 cuillères à café" },
            { "name": "Levure boulangère", "quantity": "1 sachet" },
            { "name": "Huile d'olive", "quantity": "3 cuillères à soupe" },
            { "name": "Eau tiède", "quantity": "25 cl" }
        ],
        steps: [
            "Dans un grand saladier, mettre la farine (350 g), le sel, la levure boulangère et l'huile d'olive.",
            "Verser petit à petit l'eau tiède tout en mélangeant avec une cuillère en bois jusqu’à obtenir une pâte homogène qui se détache du saladier.",
            "Couvrir le saladier avec un torchon et laisser reposer la pâte pendant environ 1 heure dans un endroit chaud.",
            "Sur un plan de travail fariné (utiliser la farine restante), déposer et travailler la pâte comme pour une pâte à pain.",
            "Façonner la pâte aux dimensions de la plaque de cuisson (idéalement sur papier cuisson).",
            "Garnir la pâte selon vos envies (sauce tomate, fromage, ingrédients…).",
            "Cuire ensuite la pizza garnie au four selon la recette que vous utilisez pour votre garniture."
        ]
    },
    {
        id: "cookies-maison",
        title: "Cookies",
        image: "/images/cookies-maison.jpg",
        description: "De délicieux cookies maison aux pépites de chocolat, simples et rapides à préparer.",
        prepTime: 15,
        cookTime: 10,
        difficulty: "Facile",
        budget: "Bas",
        categories: [
            "Desserts",
            "Pâtisserie"
        ],
        ingredients: [
            { "name": "Beurre tendre", "quantity": "85 g" },
            { "name": "Sucre", "quantity": "85 g" },
            { "name": "Sucre vanillé", "quantity": "1 sachet" },
            { "name": "Farine", "quantity": "150 g" },
            { "name": "Chocolat noir (pépites ou haché)", "quantity": "100 g" },
            { "name": "Sel", "quantity": "1 pincée" },
            { "name": "Levure chimique", "quantity": "1 cuillère à café" },
            { "name": "Oeuf", "quantity": "1" }
        ],
        steps: [
            "Préchauffer le four à 180 °C (thermostat 6).",
            "Détailler le chocolat en pépites si nécessaire.",
            "Dans un saladier, mélanger le beurre tendre, le sucre, le sucre vanillé et l'oeuf avec une cuillère en bois.",
            "Ajouter progressivement la farine, la levure chimique, le sel et le chocolat, puis mélanger jusqu'à obtenir une pâte homogène.",
            "Sur une plaque recouverte de papier cuisson, former des petits tas de pâte avec deux cuillères à soupe en les espaçant bien.",
            "Enfourner pendant environ 10 minutes jusqu’à ce que les bords commencent à dorer.",
            "Laisser tiédir les cookies quelques minutes avant de les transférer sur une grille pour refroidir complètement."
        ]
    },
    {
        "id": "pate-a-crepes",
        "title": "Pâte à crêpes",
        "image": "/images/pate-a-crepes.jpg",
        "description": "Une pâte à crêpes classique, légère et parfumée au rhum, idéale pour des crêpes fines et dorées.",
        "prepTime": 10,
        "cookTime": 0,
        "difficulty": "Facile",
        "budget": "Bas",
        "categories": [
            "Desserts"
        ],
        "ingredients": [
            { "name": "Farine", "quantity": "300 g" },
            { "name": "Sucre", "quantity": "3 cuillères à soupe" },
            { "name": "Huile", "quantity": "2 cuillères à soupe" },
            { "name": "Beurre fondu", "quantity": "50 g" },
            { "name": "Rhum", "quantity": "5 cl" },
            { "name": "Oeufs entiers", "quantity": "3" },
            { "name": "Lait", "quantity": "60 cl" }
        ],
        "steps": [
            "Mettre la farine dans une terrine et former un puits.",
            "Y déposer les oeufs entiers, le sucre, l'huile et le beurre fondu.",
            "Mélanger délicatement avec un fouet en ajoutant au fur et à mesure le lait jusqu'à obtenir une pâte légèrement épaisse.",
            "Parfumer la pâte avec le rhum."
        ]
    },
    {
        "id": "madeleines",
        "title": "Madeleines",
        "image": "/images/madeleines.jpg",
        "description": "Des madeleines moelleuses et parfumées à la fleur d'oranger, parfaites pour le goûter ou le dessert.",
        "prepTime": 30,
        "cookTime": 15,
        "difficulty": "Facile",
        "budget": "Bas",
        "categories": [
            "Desserts",
            "Pâtisserie"
        ],
        "ingredients": [
            { "name": "Sucre", "quantity": "150 g" },
            { "name": "Farine", "quantity": "200 g" },
            { "name": "Eau de fleur d'oranger", "quantity": "2 cuillères à soupe" },
            { "name": "Levure chimique", "quantity": "8 g" },
            { "name": "Beurre fondu", "quantity": "100 g" },
            { "name": "Œufs", "quantity": "3" },
            { "name": "Lait", "quantity": "50 g" }
        ],
        "steps": [
            "Préchauffer le four à 240 °C et faire fondre le beurre à feu doux, puis réserver.",
            "Dans un saladier, mélanger les œufs avec le sucre jusqu’à ce que le mélange blanchisse.",
            "Ajouter la fleur d’oranger et 40 g de lait, puis mélanger.",
            "Incorporer la farine et la levure chimique, puis ajouter le beurre fondu et le reste du lait.",
            "Laisser reposer la préparation 15 minutes.",
            "Beurrer les moules à madeleines et y verser la pâte sans remplir jusqu’en haut (les madeleines vont gonfler).",
            "Enfourner à 240 °C et au bout de 5 minutes baisser la température à 200 °C, puis poursuivre la cuisson environ 10 minutes.",
            "Démouler les madeleines dès leur sortie du four."
        ]
    }
];