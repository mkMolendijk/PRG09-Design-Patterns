interface Factory {
    createOrder(coffee, name): Object;
}

class CoffeeFactory implements Factory {
    createOrder(name): Object  {
        switch(name) {
            case 'espresso':
                return new Espresso();
            case 'cappuccino':
                return new Cappuccino();
            case 'latte':
                return new Latte();
            default:
                return null;
        }
    }
}

class Extras implements Factory {
    createOrder(coffee, name): Object {
        switch(name) {
            case 'none':
                return new CoffeeExtraDecorator(coffee);
            case 'milk':
                return new Milk(coffee);
            case 'sugar':
                return new Sugar(coffee);
            default:
                return null;
        }
    }
}