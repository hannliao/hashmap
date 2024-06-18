import LinkedList from './linked-list.js';

export default class HashMap {
  constructor(capacity = 16) {
    this.capacity = capacity;
    this.table = new Array(16).fill(null);
  }

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
    }
    return hashCode;
  }

  set(key, value) {
    const index = this.hash(key);
    let bucket = this.table[index];

    if (index < 0 || index >= this.table.length) {
      throw new Error('Trying to access index out of bound');
    }

    if (bucket == null) {
      bucket = new LinkedList();
      this.table[index] = bucket;
      bucket.prepend([key, value]);
    } else {
      let current = bucket.getHead();
      let found = false;
      while (current != null) {
        if (current.value[0] === key) {
          current.value[1] = value;
          found = true;
          break;
        }
        current = current.next;
      }
      if (!found) {
        bucket.prepend([key, value]);
      }
    }
  }

  get(key) {
    const index = this.hash(key);
    let bucket = this.table[index];

    if (bucket !== null) {
      const i = bucket.find(key);
      return bucket.at(i);
    }
    return null;
  }

  has(key) {
    const index = this.hash(key);
    let bucket = this.table[index];

    if (bucket !== null) {
      return bucket.contains(key);
    }
    return false;
  }

  remove(key) {
    const index = this.hash(key);
    let bucket = this.table[index];

    if (bucket !== null) {
      if (bucket.size() === 1) {
        this.table[index] = null;
      } else {
        const i = bucket.find(key);
        bucket.removeAt(i);
        this.table[index] = bucket;
      }
      return true;
    }
    return false;
  }

  length() {
    return this.table.reduce(
      (count, item) => (item !== null ? count + 1 : count),
      0
    );
  }

  clear() {
    this.table.fill(null);
  }

  keys() {
    return this.table
      .filter((bucket) => bucket !== null)
      .flatMap((bucket) => bucket.get('keys'));
  }

  values() {
    return this.table
      .filter((bucket) => bucket !== null)
      .flatMap((bucket) => bucket.get('values'));
  }

  entries() {
    return this.table
      .filter((bucket) => bucket !== null)
      .flatMap((bucket) => bucket.get('entries'));
  }
}
