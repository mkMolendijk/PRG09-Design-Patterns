var _this = this;
var setMenu;
var placeOrder;
var orderContent;
var orderList = [];
var orderCost;
var placeOrderHandler;
var coffeeFactory = new CoffeeFactory();
var extraFactory = new Extras();
var menu = ['Espresso', 'Cappuccino', 'Latte Macchiato'];
var iterator = new ConcreteIterator(menu);
setMenu = (function () {
    var menuContainer = document.querySelector('#type');
    while (iterator.hasNext()) {
        var number = iterator.next();
        console.log("Logging: " + number.valueOf());
        var option = document.createElement('option');
        option.value = number.valueOf().toString().toLowerCase();
        option.appendChild(document.createTextNode(number.valueOf().toString()));
        menuContainer.appendChild(option);
    }
})();
placeOrder = (function () {
    var coffeeType = document.querySelector('#type').value;
    var coffeeExtra = document.querySelector('#extra').value;
    var coffee = coffeeFactory.createOrder(coffeeType);
    var extra = extraFactory.createOrder(coffee, coffeeExtra);
    _this.orderList.push(extra);
    orderContent();
    orderCost();
});
orderContent = (function () {
    var orderContainer = document.querySelector('.order-content');
    console.log(_this.orderList[0].cost());
    for (var i = 0; i < orderList.length; ++i) {
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(_this.orderList.splice(-1)[0].getName()));
        orderContainer.appendChild(li);
    }
});
placeOrderHandler = (function () {
    var orderButton = document.querySelector('.place-order');
    orderButton.addEventListener('click', placeOrder);
})();
//# sourceMappingURL=main.js.map