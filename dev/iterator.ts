interface Iterator<T> {
    next(): T;
    hasNext(): boolean;
}

class ConcreteIterator implements Iterator<any> {
    private _collection: any[];
    private _index: number = 0;

    constructor(newCollection: String[]) {
        this._collection = newCollection;
    }

    next(): any {
        const result = this._collection[this._index];
        this._index += 1;
        return result;
    }

    hasNext(): boolean {
        return this._index < this._collection.length;
    }

    private log(): void {
        console.log(`Logging ${this._collection[this._index]}`);
    }
}