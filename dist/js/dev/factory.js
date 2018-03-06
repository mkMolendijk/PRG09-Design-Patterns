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
//# sourceMappingURL=factory.js.map