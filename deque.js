"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Deque = exports.DequeNode = void 0;
// deque.ts
class DequeNode {
    constructor(value) {
        this.prev = null;
        this.next = null;
        this.value = value;
    }
}
exports.DequeNode = DequeNode;
class Deque {
    constructor() {
        this.head = null;
        this.tail = null;
        this._size = 0;
    }
    // adiciona no final (back)
    pushBack(value) {
        const node = new DequeNode(value);
        if (!this.tail) {
            this.head = this.tail = node;
        }
        else {
            node.prev = this.tail;
            this.tail.next = node;
            this.tail = node;
        }
        this._size++;
    }
    // adiciona no início (front)
    pushFront(value) {
        const node = new DequeNode(value);
        if (!this.head) {
            this.head = this.tail = node;
        }
        else {
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        }
        this._size++;
    }
    // remove e retorna do início (front)
    popFront() {
        if (!this.head)
            return undefined;
        const node = this.head;
        this.head = node.next;
        if (this.head)
            this.head.prev = null;
        else
            this.tail = null; // deque ficou vazio
        node.next = null; // limpa referências
        this._size--;
        return node.value;
    }
    // remove e retorna do final (back)
    popBack() {
        if (!this.tail)
            return undefined;
        const node = this.tail;
        this.tail = node.prev;
        if (this.tail)
            this.tail.next = null;
        else
            this.head = null;
        node.prev = null;
        this._size--;
        return node.value;
    }
    // apenas olha o primeiro sem remover
    peekFront() {
        return this.head ? this.head.value : undefined;
    }
    // apenas olha o último sem remover
    peekBack() {
        return this.tail ? this.tail.value : undefined;
    }
    get size() {
        return this._size;
    }
    isEmpty() {
        return this._size === 0;
    }
    clear() {
        // opcional: liberar referências para GC
        let cur = this.head;
        while (cur) {
            const next = cur.next;
            cur.prev = cur.next = null;
            cur = next;
        }
        this.head = this.tail = null;
        this._size = 0;
    }
    // retorna array (útil para depuração / testes)
    toArray() {
        const arr = [];
        let cur = this.head;
        while (cur) {
            arr.push(cur.value);
            cur = cur.next;
        }
        return arr;
    }
    // iterator para for..of
    *[Symbol.iterator]() {
        let cur = this.head;
        while (cur) {
            yield cur.value;
            cur = cur.next;
        }
    }
}
exports.Deque = Deque;
