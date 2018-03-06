/// <reference path="../dev/factory.ts" />
import {CoffeeFactory} from "../dev/factory";

export function coffee() {
    let coffeeFactory = new CoffeeFactory();
    let espressoString = 'espresso';
    return coffeeFactory.createOrder(espressoString);
}

export default coffee;