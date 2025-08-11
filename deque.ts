// deque.ts
export class DequeNode<T> {
    value: T;
    prev: DequeNode<T> | null = null;
    next: DequeNode<T> | null = null;
  
    constructor(value: T) {
      this.value = value;
    }
  }
  
  export class Deque<T> implements Iterable<T> {
    private head: DequeNode<T> | null = null;
    private tail: DequeNode<T> | null = null;
    private _size: number = 0;
  
    // adiciona no final (back)
    pushBack(value: T): void {
      const node = new DequeNode(value);
      if (!this.tail) {
        this.head = this.tail = node;
      } else {
        node.prev = this.tail;
        this.tail.next = node;
        this.tail = node;
      }
      this._size++;
    }
  
    // adiciona no início (front)
    pushFront(value: T): void {
      const node = new DequeNode(value);
      if (!this.head) {
        this.head = this.tail = node;
      } else {
        node.next = this.head;
        this.head.prev = node;
        this.head = node;
      }
      this._size++;
    }
  
    // remove e retorna do início (front)
    popFront(): T | undefined {
      if (!this.head) return undefined;
      const node = this.head;
      this.head = node.next;
      if (this.head) this.head.prev = null;
      else this.tail = null; // deque ficou vazio
      node.next = null; // limpa referências
      this._size--;
      return node.value;
    }
  
    // remove e retorna do final (back)
    popBack(): T | undefined {
      if (!this.tail) return undefined;
      const node = this.tail;
      this.tail = node.prev;
      if (this.tail) this.tail.next = null;
      else this.head = null;
      node.prev = null;
      this._size--;
      return node.value;
    }
  
    // apenas olha o primeiro sem remover
    peekFront(): T | undefined {
      return this.head ? this.head.value : undefined;
    }
  
    // apenas olha o último sem remover
    peekBack(): T | undefined {
      return this.tail ? this.tail.value : undefined;
    }
  
    get size(): number {
      return this._size;
    }
  
    isEmpty(): boolean {
      return this._size === 0;
    }
  
    clear(): void {
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
    toArray(): T[] {
      const arr: T[] = [];
      let cur = this.head;
      while (cur) {
        arr.push(cur.value);
        cur = cur.next;
      }
      return arr;
    }
  
    // iterator para for..of
    *[Symbol.iterator](): Iterator<T> {
      let cur = this.head;
      while (cur) {
        yield cur.value;
        cur = cur.next;
      }
    }
  }
  