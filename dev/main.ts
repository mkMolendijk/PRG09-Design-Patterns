/// <reference path="factory.ts" />
/// <reference path="iterator.ts" />
/// <reference path="decorator.ts" />

let setMenu: any;
let placeOrder: any;
let orderContent: any;
let orderList: Array<Object> = [];
let orderCost: any;
let placeOrderHandler: void;

let coffeeFactory = new CoffeeFactory();
let extraFactory = new Extras();

let menu: Array<String> = ['Espresso', 'Cappuccino', 'Latte Macchiato'];
let iterator: Iterator<any> = new ConcreteIterator(menu);

setMenu = (() => {
    let menuContainer = document.querySelector('#type');
    while (iterator.hasNext()) {
        const number: Number = iterator.next();
        console.log(`Logging: ${number.valueOf()}`);

        let option = document.createElement('option');
        option.value = number.valueOf().toString().toLowerCase();
        option.appendChild(document.createTextNode(number.valueOf().toString()));

        menuContainer.appendChild(option);
    }


})();

placeOrder = (() => {
    let coffeeType = (document.querySelector('#type') as HTMLSelectElement).value;
    let coffeeExtra = (document.querySelector('#extra') as HTMLSelectElement).value;

    let coffee = coffeeFactory.createOrder(coffeeType);
    let extra = extraFactory.createOrder(coffee, coffeeExtra);

    this.orderList.push(extra);
    console.log(this.collection);
    orderContent();
    orderCost();
});

orderContent = (() => {
    let orderContainer = document.querySelector('.order-content');
    console.log(this.orderList[0].cost());

    for (let i = 0; i < orderList.length; ++i) {
        let li = document.createElement('li');

        li.appendChild(document.createTextNode(this.orderList.splice(-1)[0].getName()));

        orderContainer.appendChild(li);
    }
});

orderCost = (() => {
    let costContainer = document.querySelector('.order-total');

    for (let i = 0; i < orderList.length; ++i) {
        console.log(this.orderList.splice(-1).cost());
    }
    costContainer.innerHTML = '€ ' + this.orderList.splice(-1)[0].cost();
});

placeOrderHandler = (() => {
    let orderButton = document.querySelector('.place-order');
    orderButton.addEventListener('click', placeOrder);
})();
