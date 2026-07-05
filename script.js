

const bakeryProducts =
[
    {id:1,name:"Chocolate Cupcake",price:350,image:"chocolate-cupcake.webp"},
    {id:2,name:"Vanilla Cupcake",price:350,image:"vanila-cupcake.webp"},
    {id:3,name:"Strawberry Cupcake",price:380,image:"strawberry-cupcake.jpg"},
    {id:4,name:"Red Velvet Cupcake",price:400,image:"redvelvet-cupcake.jpg"},
    {id:5,name:"Lotus Cupcake",price:450,image:"lotus-cupcake.jpg"},



    {id:6,name:"Chocolate Cake",price:2500,image:"chocolate-cake.webp"},
    {id:7,name:"Vanilla Cake",price:2200,image:"vanila-cake.webp"},
    {id:8,name:"Red Velvet Cake",price:2800,image:"redvelvet-cake.webp"},
    {id:9,name:"Lotus Cake",price:3000,image:"lotus-cake.jpg"},
    {id:10,name:"Oreo Cake",price:2900,image:"oreo-cake.webp"},


    {id:11,name:"Fudge Brownie",price:300,image:"fudge-brownie.webp"},
    {id:12,name:"Walnut Brownie",price:350,image:"walnut-brownie.webp"},
    {id:13,name:"Caramel Brownie",price:350,image:"caramel-brownie.webp"},
    {id:14,name:"Chocolate Brownie",price:320,image:"chocolate-brownie.webp"},
    {id:15,name:"Nutella Brownie",price:400,image:"nutella-brownie.webp"},

    {id:16,name:"Chocolate Bread",price:180,image:"chocolate-bread.webp"},
    {id:17,name:"Milk Bread",price:150,image:"milk-bread.webp"},
    {id:18,name:"Brown Bread",price:170,image:"brown-bread.webp"},
    {id:19,name:"Cheese Bread",price:220,image:"cheese-bread.webp"},
    {id:20,name:"French Bread",price:250,image:"french-bread.jpg"},



    {id:21,name:"Lotus Cheesecake",price:1200,image:"lotus-cake.jpg"},
    {id:22,name:"Oreo Cheesecake",price:1200,image:"oreo-cheesecake.webp"},
    {id:23,name:"Blueberry Cheesecake",price:1300,image:"blueberry-cheesecake.webp"},
    {id:24,name:"Strawberry Cheesecake",price:1300,image:"strawberry-cheesecake.webp"},
    {id:25,name:"Mango Cheesecake",price:1350,image:"mango-cheesecake.webp"},




    {id:26,name:"Kunafa",price:500,image:"kunafa.webp"},
    {id:27,name:"Cookies",price:250,image:"cookie.webp"},
    {id:28,name:"Donuts",price:200,image:"donut.webp"},
    {id:29,name:"Macarons",price:450,image:"macrons.webp"},
    {id:30,name:"Croissant",price:300,image:"crossint.webp"}
];


const container = document.getElementById("productsContainer");

function displayProducts(items){

    container.innerHTML = "";

    items.forEach(function(product){

        container.innerHTML += `
            <div class="card animate__animated animate__zoomIn">

                <img src="${product.image}" alt="${product.name}">

                <h3>${product.name}</h3>

                <p>Rs ${product.price}</p>

                <button onclick="showDetails(${product.id})">
                    View Details
                </button>

            </div>
        `;
    });
}

displayProducts(bakeryProducts);

function searchProducts(){

    let value = document
        .getElementById("searchInput")
        .value
        .toLowerCase();

    let filtered = bakeryProducts.filter(function(product){

        return product.name
            .toLowerCase()
            .includes(value);

    });

    displayProducts(filtered);
}

function filterCategory(){

    let category = document
        .getElementById("categorySelect")
        .value
        .toLowerCase();

    if(category === "all"){
        displayProducts(bakeryProducts);
        return;
    }

    let filtered;

    if(category === "other"){

        filtered = bakeryProducts.filter(function(product){

            return !product.name.toLowerCase().includes("cupcake")
             &&
                   !product.name.toLowerCase().includes("cake")
                    &&
                   !product.name.toLowerCase().includes("brownie") 
                   &&
                   !product.name.toLowerCase().includes("bread") 
                   &&
                   !product.name.toLowerCase().includes("cheesecake");

        });



    }else{

        filtered = bakeryProducts.filter(function(product){

            return product.name
                .toLowerCase()
                .includes(category);

        });

    }



    displayProducts(filtered);
}



function showDetails(id){

    let product = bakeryProducts.find(function(item){

        return item.id === id;

    });

    Swal.fire({
        title: product.name,
        html: `
        <p>Order now</p>
            <img src="${product.image}" width="200">
            <p><b>Price:</b> Rs ${product.price}</p>
            <p>Freshly baked and made with premium ingredients.</p>
        `,
        icon: "info",
        confirmButtonText: "Order Now "
    });
}