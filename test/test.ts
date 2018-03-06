/// <reference path="../dev/factory.ts" />

class Espresso implements Coffee {
    getName(): String {
        return 'Espresso';
    }

    cost(): Number {
        return 2;
    }
}

import coffee from './coffee';
import {assert} from "chai";
// if you used the '@types/mocha' method to install mocha type definitions, uncomment the following line
import 'mocha';

describe('coffee function', () => {
    it('should return an function that returns an Espresso', () => {
        let createExpectedObject = function () {
            return new Espresso();
        };

        // let result = coffee;

        assert.isNotNull(coffee);
        assert.instanceOf(createExpectedObject(), Espresso);
    });
});