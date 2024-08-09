const pizzaList = [
    {
        name: "Marguerite",
        description: "tomate, fromage",
        price: "8€",
        isVegetarian: true,
    },
    {
        name: "Fromagère",
        description:
            "tomate, bleu, gorgonzola, fromage, noix",
        price: "10,50€",
        isVegetarian: true,
    },
    {
        name: "Chèvre",
        description: "tomate, fromage, chèvre, noix",
        price: "10,50€",
        isVegetarian: true,
    },
    {
        name: "Végétarienne",
        description:
            "tomate, artichauts, poivrons, champignons, fromage",
        price: "9,50€",
        isVegetarian: true,
    },
    {
        name: "Peppone",
        description:
            "tomate, fromage, oignons, poivrons, champignons, gorgonzola, anchois ou lardons",
        price: "10,50€",
        isVegetarian: false,
    },
    {
        name: "Napolitaine",
        description:
            "tomate, oignons, anchois, fromage, olive",
        price: "9,00€",
        isVegetarian: false,
    },
    {
        name: "Pêcheur",
        description:
            "tomate, champignons, moules, crevettes, fromage, beurre persillé",
        price: "10,00€",
        isVegetarian: false,
    },
    {
        name: "Niçoise",
        description:
            "tomate, thon, champignons, poivrons, fromage",
        price: "10,00€",
        isVegetarian: false,
    },
    {
        name: "Capri",
        description: "tomate, jambon, fromage",
        price: "8,50€",
        isVegetarian: false,
    },
    {
        name: "Reine",
        description: "tomate, jambon, champignons, fromage",
        price: "9,00€",
        isVegetarian: false,
    },
    {
        name: "Campagnarde",
        description:
            "tomate, jambon, champignons, lardons, fromage",
        price: "10,00€",
        isVegetarian: false,
    },
    {
        name: "Andalouse",
        description:
            "tomate, poivrons, chorizo, champignons, fromage",
        price: "10,00€",
        isVegetarian: false,
    },
    {
        name: "Salami",
        description:
            "tomate, poivrons, salami, champignons, fromage",
        price: "10,00€",
        isVegetarian: false,
    },
    {
        name: "Forestière",
        description:
            "tomate, trompettes, lard, fromage, crème",
        price: "10,50€",
        isVegetarian: false,
    },
    {
        name: "Cèpes",
        description:
            "tomate, cèpes, lardons, fromage, crème, beurre persillé",
        price: "12,80€",
        isVegetarian: false,
    },
    {
        name: "Bolognaise",
        description:
            "tomate, boeuf, oignons, fromage, lardons, crème",
        price: "10,50€",
        isVegetarian: false,
    },
    {
        name: "Flam'",
        description: "crème, oignons, lardons",
        price: "8,50€",
        isVegetarian: false,
    },
    {
        name: "Flam'",
        description: "crème, oignons, lardons, fromage",
        price: "9,00€",
        isVegetarian: false,
    },
    {
        name: "Savoyarde",
        description:
            "crème, oignons, pomme de terre, lardons, fromage",
        price: "10,50€",
        isVegetarian: false,
    },
];

const pizzaMenu = document.querySelector(".js-pizza-menu");
const pizzaLine = pizzaMenu.querySelector(".js-pizza-line");

let isFirstPizza = true;

for (let pizzaItem of pizzaList) {
    const newPizza = isFirstPizza
        ? pizzaLine
        : pizzaLine.cloneNode(true);

    const pizzaName = newPizza.querySelector(
        ".js-pizza-name"
    );
    const pizzaDescription = newPizza.querySelector(
        ".js-pizza-description"
    );
    const pizzaPrice = newPizza.querySelector(
        ".js-pizza-price"
    );
    const pizzaIcon = newPizza.querySelector(
        ".js-pizza-icon"
    );

    pizzaName.innerHTML = pizzaItem.name;
    pizzaDescription.innerHTML = pizzaItem.description;
    pizzaPrice.innerHTML = pizzaItem.price;

    if (!pizzaItem.isVegetarian) {
        pizzaIcon.remove();
    }

    pizzaMenu.appendChild(newPizza);

    isFirstPizza = false;
}
