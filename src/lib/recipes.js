export const recipes = [
    {
        id: "pancakes-moelleux",
        title: "Pancakes Moelleux",
        image: "/images/pancakes.jpg",
        description: "Le petit-déjeuner américain par excellence.",
        // --- Nouveaux attributs ---
        prepTime: "10 min",
        cookTime: "20 min",
        difficulty: "Facile",
        budget: "Bas", 
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
        prepTime: "15 min",
        cookTime: "10 min",
        difficulty: "Moyen",
        budget: "Moyen",
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
    }
];