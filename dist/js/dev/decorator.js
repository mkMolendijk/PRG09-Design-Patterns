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
//# sourceMappingURL=decorator.js.map