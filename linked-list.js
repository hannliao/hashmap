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

  get(type) {
    let arr = [];
    let current = this.head;
    while (current !== null) {
      if (type == 'keys') {
        arr.push(current.value[0]);
      } else if (type == 'values') {
        arr.push(current.value[1]);
      } else {
        arr.push(current.value);
      }
      current = current.next;
    }
    return arr;
  }

  removeAt(index) {
    let current = this.head;
    let prev = null;
    if (current === null) {
      return;
    } else {
      for (let i = 0; i < index; i++) {
        prev = current;
        current = current.next;
        if (current === null) return;
      }
      prev.next = current.next;
    }
  }
}

export default LinkedList;
