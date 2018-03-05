interface Coffee {
    cost(): Number;
}

class Espresso implements Coffee {
    cost(): Number {
        return 2;
    }
}

class Cappuccino implements Coffee {
    cost(): Number {
        return 2.3;
    }
}

class Latte implements Coffee {
    cost(): Number {
        return 2.3;
    }
}

class CoffeeExtraDecorator implements Coffee {
    private _coffee: Coffee;

    constructor(Coffee: any) {
        this._coffee = Coffee;
    }

    cost(): Number {
        return this._coffee.cost();
    }
}

class Sugar extends CoffeeExtraDecorator {
    private _price: Number = 0.3;

    cost(): Number {
        return super.cost().valueOf() + this._price.valueOf();
    }
}

class Milk extends CoffeeExtraDecorator {
    private _price: Number = 0.3;

    cost(): Number {
        return super.cost().valueOf() + this._price.valueOf();
    }
}