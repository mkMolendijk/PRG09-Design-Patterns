"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var coffee_1 = require("./coffee");
var Chai_1 = require("~chai/lib/Chai");
describe('coffee function', function () {
    it('should return an Espresso', function () {
        var createExpectedObject = function () {
            return new Espresso();
        };
        var result = coffee_1.default;
        Chai_1.assert.isNotNull(result);
        Chai_1.assert.instanceOf(result, createExpectedObject);
    });
});
//# sourceMappingURL=test.js.map