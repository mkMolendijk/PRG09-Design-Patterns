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
//# sourceMappingURL=iterator.js.map