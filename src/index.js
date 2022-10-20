const $app = document.getElementById("app");
const API = "https://api.escuelajs.co/api/v1/products?offset=4&limit=10";

const main = async () => {
	const response = await fetch(API);
	const products = await response.json();

	// console.log(products);

	const output = products
		?.map((product) => {
			return `
      <article class="Card">
        <img src="${product.images[0]}">
        <h2>
          ${product.title} <small>Precio $${product.price}</small>
        </h2>
      </article>
    `;
		})
		.join("");

	let newItem = document.createElement("section");
	newItem.classList.add("Items");
	newItem.innerHTML = output;
	$app.appendChild(newItem);
};

main();

/*
{
    id: 12,
    title: 'producto112233',
    price: 200,
    description: 'The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality',
    category: {
      id: 4,
      name: 'Shoes',
      image: 'https://api.lorem.space/image/shoes?w=640&h=480&r=9470'
    },
    images: [ 'map_ancient.jpg' ],
    categoryId: 1
  },



*/
