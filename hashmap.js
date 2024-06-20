import LinkedList from './linked-list.js';

export default class HashMap {
  constructor(capacity = 16) {
    this.capacity = capacity;
    this.loadFactor = 0.75;
    this.table = new Array(this.capacity).fill(null);
  }

  hash(key) {
    let hashCode = 0;
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
    }
    return hashCode;
  }

  resize() {
    const entries = this.entries();
    this.capacity *= 2;
    this.table = new Array(this.capacity).fill(null);
    entries.forEach((pair) => {
      this.set(pair[0], pair[1]);
    });
  }

  set(key, value) {
    const index = this.getIndex(key);
    let bucket = this.table[index];

    if (this.length() >= this.capacity * this.loadFactor) {
      this.resize();
    }

    if (!bucket) {
      bucket = new LinkedList();
      this.table[index] = bucket;
      bucket.prepend(key, value);
    } else {
      bucket.setNode(key, value);
    }
  }

  get(key) {
    const index = this.getIndex(key);
    const bucket = this.table[index];
    if (!bucket) return null;
    const keyIndex = bucket.find(key);
    return bucket.at(keyIndex);
  }

  has(key) {
    const index = this.getIndex(key);
    const bucket = this.table[index];
    if (!bucket) return false;
    return bucket.contains(key);
  }

  remove(key) {
    const index = this.getIndex(key);
    let bucket = this.table[index];

    if (!bucket) return false;
    if (bucket.size() === 1) {
      this.table[index] = null;
    } else {
      const keyIndex = bucket.find(key);
      bucket.removeAt(keyIndex);
      this.table[index] = bucket;
    }
    return true;
  }

  length() {
    return this.table.filter((bucket) => bucket !== null).length;
  }

  clear() {
    this.table.fill(null);
  }

  keys() {
    return this.table
      .filter((bucket) => bucket !== null)
      .flatMap((bucket) => bucket.getAll('keys'));
  }

  values() {
    return this.table
      .filter((bucket) => bucket !== null)
      .flatMap((bucket) => bucket.getAll('values'));
  }

  entries() {
    return this.table
      .filter((bucket) => bucket !== null)
      .flatMap((bucket) => bucket.getAll('entries'));
  }

  getIndex(key) {
    const index = this.hash(key);
    if (index < 0 || index >= this.table.length) {
      throw new Error('Trying to access index out of bound');
    }
    return index;
  }
}
