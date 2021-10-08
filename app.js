// DO NOT EDIT THE ARRAY TO COMPLETE THE ASSIGNMENT
let products = [
    {
        id:0,
        name:"Apples",
        price:"2.99",
        image:"https://banner2.kisspng.com/20180310/jyw/kisspng-plum-tomato-apple-fuji-vector-two-apples-5aa49732abbf96.2950483615207360507035.jpg",
        color:"red"
    },
    {
        id:1,
        name:"Bananas",
        price:"2.50",
        image:"https://icon2.kisspng.com/20180125/cyq/kisspng-banana-powder-fruit-cavendish-banana-banana-5a6a705e555d06.3110857015169250223497.jpg",
        color:"gold"
    },
    {
        id:2,
        name:"oranges",
        price:"3.50",
        image: "https://icon2.kisspng.com/20180308/wlw/kisspng-south-africa-blood-orange-mandarin-orange-tangelo-south-africa-imports-of-oranges-5aa10d936cc6c7.6226563815205042114456.jpg",
        color:"orange"
    }
];

// Create a div and give it a class of "popUp". Append that div to the body
var eles=[];
function popUp(item) {

    const  that = this;

    this.popUpEle = document.createElement("div");
    this.popUpEle.classList.add("popUp")

    document.body.appendChild(this.popUpEle);
}

for(let i=0; i<this.products.length; i++){
    this.products[i].popUpEle.addEventListener("click", function() {
        eles.push(new popUp(products[i]));

    })
// If I click on the popUp div, it should hide it

// Create a div for each item in the array above
function product(name,price,image,color) {
    const that = this;

    this.name = name.item;
    this.price = price.item;
    this.image = image.item;
    this.color = color.item;

    this.itemEle = document.createElement("div")
    this.nameEle = document.createElement("h4")
    this.priceEle = document.createElement("div")
    this.imageEle = document.createElement("h4")
    this.colorEle = document.createElement("div")
}

// inside of each div, the prodcut Name and Price should be written as "Name: value" and "Price: $#.##";

    this.nameEle.innerHTML = "Name: "+this.name;
    this.priceEle.innerHTML = "Price: $"+this.price;

// inside of each div, the product's image should be on top of the text

// when hovering over a product, its border color should change to the "color" of that product. Once you hover off, it should return to black
    this.imageEle.addEventListener("mouseover", function() {
     that.imageEle.style.borderColor = color
    })
    document.body.appendChild(this.imageEle);
// When Clicking on a product, it should display the popUp Menu over all the content

// When clicking on the paticular product, that products image, name, and price should be displayed inside the popUp div just like it does in its own product div. No other products information shold be shown.
