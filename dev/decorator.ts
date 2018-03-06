interface Coffee {
    getName(): String;

    cost(): Number;
}

class Espresso implements Coffee {
    getName(): String {
        return 'Espresso';
    }

    cost(): Number {
        return 2;
    }
}

class Cappuccino implements Coffee {
    getName(): String {
        return 'Cappuccino';
    }

    cost(): Number {
        return 2.3;
    }
}

class Latte implements Coffee {
    getName(): String {
        return 'Latte Macchiato';
    }

    cost(): Number {
        return 2.3;
    }
}

class CoffeeExtraDecorator implements Coffee {
    private _coffee: Coffee;

    constructor(Coffee: any) {
        this._coffee = Coffee;
    }

    getName(): String {
        return this._coffee.getName();
    }

    cost(): Number {
        return this._coffee.cost();
    }
}

class Sugar extends CoffeeExtraDecorator {
    private _price: Number = 0.3;

    getName(): String {
        return super.getName() + ' with sugar';
    }

    cost(): Number {
        return super.cost().valueOf() + this._price.valueOf();
    }
}

class Milk extends CoffeeExtraDecorator {
    private _price: Number = 0.3;

    getName(): String {
        return super.getName() + ' with milk';
    }

    cost(): Number {
        return super.cost().valueOf() + this._price.valueOf();
    }
}