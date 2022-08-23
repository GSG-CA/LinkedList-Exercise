class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor(array = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    if (Array.isArray(array)) {
      array.forEach((ele) => {
        this.push(ele);
      });
    }
  }

  push(val) {
    let newNode = new Node(val);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;

    return this;
  }

  unshift(val) {
    const newNode = new Node(val);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;

    return this;
  }

  insert(index, val) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }

    let newNode = new Node(val);

    let current = this.getNode(index - 1);

    newNode.next = current.next;
    current.next = newNode;

    return ++this.length;
  }

  getNode(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }

    let current = this.head;
    let counter = 0;
    while (current) {
      if (counter === index) {
        return current;
      }
      counter++;
      current = current.next;
    }
  }

  get(index) {
    const node = this.getNode(index);

    return node ? node.val : null;
  }

  set(index, newVal) {
    const node = this.getNode(index);

    if (node) {
      node.val = newVal;
      return true;
    }

    return false;
  }

  shift() {
    if (this.length <= 0) {
      return undefined;
    }

    let deleted = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let temp = this.head;
      this.head = this.head.next;
      temp.next = null;
    }

    this.length--;

    return deleted ? deleted.val : null;
  }

  pop() {
    let node = this.getNode(this.length - 2);

    if (!node) {
      return undefined;
    }

    let deleted = this.tail;

    node.next = null;
    this.tail = node;

    this.length--;

    return deleted.val;
  }

  remove(index) {
    let node = this.getNode(index - 1);

    if (!node) return undefined;

    let temp = node.next;
    node.next = node.next.next;
    temp.next = null;

    this.length--;

    return temp;
  }
}

const arr = [1, 3, 4, 5, 6];
const list = new SinglyLinkedList(arr);
list.unshift(10);
console.log(list);

module.exports = SinglyLinkedList;
