interface Iterator<T> {
    next(): T;
    hasNext(): boolean;
}

interface Collection {
    createIterator(): Iterator<any>;
}

class ConcreteIterator implements Iterator<any> {
    private _collection: any[];
    private _index: number = 0;

    constructor(newCollection: any[]) {
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

class ConcreteCollection implements Collection {
    private _collection: any[] = [];

    constructor(collection: any[]) {
        this._collection = collection;
    }

    createIterator(): Iterator<any> {
        return new ConcreteIterator(this._collection);
    }
}