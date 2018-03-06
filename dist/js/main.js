var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Espresso = (function () {
    function Espresso() {
    }
    Espresso.prototype.getName = function () {
        return 'Espresso';
    };
    Espresso.prototype.cost = function () {
        return 2;
    };
    return Espresso;
}());
var Cappuccino = (function () {
    function Cappuccino() {
    }
    Cappuccino.prototype.getName = function () {
        return 'Cappuccino';
    };
    Cappuccino.prototype.cost = function () {
        return 2.3;
    };
    return Cappuccino;
}());
var Latte = (function () {
    function Latte() {
    }
    Latte.prototype.getName = function () {
        return 'Latte Macchiato';
    };
    Latte.prototype.cost = function () {
        return 2.3;
    };
    return Latte;
}());
var CoffeeExtraDecorator = (function () {
    function CoffeeExtraDecorator(Coffee) {
        this._coffee = Coffee;
    }
    CoffeeExtraDecorator.prototype.getName = function () {
        return this._coffee.getName();
    };
    CoffeeExtraDecorator.prototype.cost = function () {
        return this._coffee.cost();
    };
    return CoffeeExtraDecorator;
}());
var Sugar = (function (_super) {
    __extends(Sugar, _super);
    function Sugar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._price = 0.3;
        return _this;
    }
    Sugar.prototype.getName = function () {
        return _super.prototype.getName.call(this) + ' with sugar';
    };
    Sugar.prototype.cost = function () {
        return _super.prototype.cost.call(this).valueOf() + this._price.valueOf();
    };
    return Sugar;
}(CoffeeExtraDecorator));
var Milk = (function (_super) {
    __extends(Milk, _super);
    function Milk() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._price = 0.3;
        return _this;
    }
    Milk.prototype.getName = function () {
        return _super.prototype.getName.call(this) + ' with milk';
    };
    Milk.prototype.cost = function () {
        return _super.prototype.cost.call(this).valueOf() + this._price.valueOf();
    };
    return Milk;
}(CoffeeExtraDecorator));
var CoffeeFactory = (function () {
    function CoffeeFactory() {
    }
    CoffeeFactory.prototype.createOrder = function (name) {
        switch (name) {
            case 'espresso':
                return new Espresso();
            case 'cappuccino':
                return new Cappuccino();
            case 'latte':
                return new Latte();
            default:
                return null;
        }
    };
    return CoffeeFactory;
}());
var Extras = (function () {
    function Extras() {
    }
    Extras.prototype.createOrder = function (coffee, name) {
        switch (name) {
            case 'none':
                return new CoffeeExtraDecorator(coffee);
            case 'milk':
                return new Milk(coffee);
            case 'sugar':
                return new Sugar(coffee);
            default:
                return null;
        }
    };
    return Extras;
}());
var ConcreteIterator = (function () {
    function ConcreteIterator(newCollection) {
        this._index = 0;
        this._collection = newCollection;
    }
    ConcreteIterator.prototype.next = function () {
        var result = this._collection[this._index];
        this._index += 1;
        return result;
    };
    ConcreteIterator.prototype.hasNext = function () {
        return this._index < this._collection.length;
    };
    ConcreteIterator.prototype.log = function () {
        console.log("Logging " + this._collection[this._index]);
    };
    return ConcreteIterator;
}());
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
    console.log(_this.collection);
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
orderCost = (function () {
    var costContainer = document.querySelector('.order-total');
    for (var i = 0; i < orderList.length; ++i) {
        console.log(_this.orderList.splice(-1).cost());
    }
    costContainer.innerHTML = '€ ' + _this.orderList.splice(-1)[0].cost();
});
placeOrderHandler = (function () {
    var orderButton = document.querySelector('.place-order');
    orderButton.addEventListener('click', placeOrder);
})();
//# sourceMappingURL=main.js.map