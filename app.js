var products = [
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

// DO NOT EDIT THE ARRAY TO COMPLETE THE ASSIGNMENT


// Create a div and give it a class of "popUp". Append that div to the body

const box = [];

function fruit(item) {
    const that = this;
    this.id = item.id;
    this.name = item.name;
    this.price = item.price;
    this.image = item.image;
    this.color = item.color;

    this.ele = document.createElement("div");
    this.ele.classList.add("product");
// Create a div for each item in the array above

    this.nameEle = document.createElement("h5");
    this.priceEle = document.createElement("h5");
    this.imageEle = document.createElement("img");
    this.colorEle = document.createElement("div");

    this.popUp = document.createElement("div")
    this.popUp.classList.add("popUp");
// inside of each div, the prodcut Name and Price should be written as "Name: value" and "Price: $#.##";
    this.imageEle.src = item.image;
    this.nameEle.innerHTML = "Name: " + item.name;
    this.priceEle.innerHTML = "Price: $" + item.price;
    //this.imageEle.innerHTML = "<img src = '" +item.image +"'/>";
    this.colorEle.innerHTML = item.color;
// inside of each div, the product's image should be on top of the text
    this.ele.appendChild(this.imageEle);
    this.ele.appendChild(this.nameEle);
    this.ele.appendChild(this.priceEle);


// If I click on the popUp div, it should hide it
    document.body.appendChild(this.popUp)
    this.popUp.style.display = "none";
// When Clicking on a product, it should display the popUp Menu over all the content

    this.ele.addEventListener("click", function() {

            that.popUp.appendChild(that.imageEle);

            that.popUp.appendChild(that.nameEle);
            that.popUp.appendChild(that.priceEle);
            that.popUp.style.display = "flex";

            that.popUp.appendChild(that.imageEle);

            that.popUp.appendChild(that.nameEle);
            that.popUp.appendChild(that.priceEle);
            that.popUp.style.display = "flex";

            that.popUp.appendChild(that.imageEle);

            that.popUp.appendChild(that.nameEle);
            that.popUp.appendChild(that.priceEle);
            that.popUp.style.display = "flex";

    });
// When clicking on the paticular product, that products image, name, and price should be displayed inside the popUp div just like it does in its own product div. No other products information shold be shown.

    this.popUp.addEventListener("click", function() {

            that.popUp.style.display = "none";
            that.popUp.appendChild(that.nameEle);
            that.popUp.appendChild(that.imageEle);
            that.popUp.appendChild(that.priceEle);


            that.popUp.style.display = "none";
            that.popUp.appendChild(that.nameEle);
            that.popUp.appendChild(that.imageEle);
            that.popUp.appendChild(that.priceEle);


            that.popUp.style.display = "none";
            that.popUp.appendChild(that.nameEle);
            that.popUp.appendChild(that.imageEle);
            that.popUp.appendChild(that.priceEle);

    });
// when hovering over a product, its border color should change to the "color" of that product. Once you hover off, it should return to black

    this.ele.addEventListener("mouseover", function(){
        that.ele.style.borderColor = item.color
    });

    this.ele.addEventListener("mouseout", function(){
        that.ele.style.borderColor = ""
    });



    document.body.appendChild(this.ele);
}
for(var i=0; i <products.length; i++){
    box.push(new fruit(products[i]));
}