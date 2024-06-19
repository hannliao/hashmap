class Node {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  prepend(value) {
    let temp = null;
    if (this.head != null) {
      temp = this.head;
    }
    this.head = new Node(value);
    this.head.next = temp;
  }

  size() {
    let count = 0;
    let current = this.head;
    while (current != null) {
      current = current.next;
      count++;
    }
    return count;
  }

  at(index) {
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
      if (current === null) return null;
    }
    return current.value[1];
  }

  contains(key) {
    let current = this.head;
    while (current != null) {
      if (current.value[0] === key) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  find(key) {
    let index = 0;
    let current = this.head;
    while (current != null) {
      if (current.value[0] === key) {
        return index;
      }
      current = current.next;
      index++;
    }
    return null;
  }

  getAll(type) {
    let all = [];
    let current = this.head;
    while (current !== null) {
      if (type == 'keys') {
        all.push(current.value[0]);
      } else if (type == 'values') {
        all.push(current.value[1]);
      } else {
        all.push(current.value);
      }
      current = current.next;
    }
    return all;
  }

  setNode(key, value) {
    let current = this.head;
    while (current != null) {
      if (current.value[0] === key) {
        current.value[1] = value;
        return;
      }
      current = current.next;
    }
    this.prepend(key, value);
  }

  removeAt(index) {
    let current = this.head;
    let prev = null;
    if (!current) return;
    for (let i = 0; i < index; i++) {
      prev = current;
      current = current.next;
      if (current === null) return;
    }
    prev.next = current.next;
  }
}

export default LinkedList;
