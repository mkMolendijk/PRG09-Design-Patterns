/// <reference path="factory.ts" />
/// <reference path="decorator.ts" />

let placeOrder: any;
let orderContent: any;
let orderList: Array<Object> = [];
let orderCost: any;
let placeOrderHandler: void;

let coffeeFactory = new CoffeeFactory();
let extraFactory = new Extras();

placeOrder = (() => {
    let coffeeType = (document.querySelector('#type') as HTMLSelectElement).value;
    let coffeeExtra = (document.querySelector('#extra') as HTMLSelectElement).value;

    let coffee = coffeeFactory.createOrder(coffeeType);
    let extra = extraFactory.createOrder(coffee, coffeeExtra);

    orderContent(extra);
    orderCost(extra);
});

orderContent = ((items) => {
    this.orderList.push(items);

    console.log(orderList);

    let orderContainer = document.querySelector('.order-content');

    for (let i in orderList) {
        orderContainer.innerHTML = '<li>' + orderList[i].valueOf().toString() + '</li>';
    }
});

orderCost = ((order) => {
    let costContainer = document.querySelector('.order-total');
    costContainer.innerHTML = '€ ' + order.cost();
});

placeOrderHandler = (() => {
    let orderButton = document.querySelector('.place-order');
    orderButton.addEventListener('click', placeOrder);
})();