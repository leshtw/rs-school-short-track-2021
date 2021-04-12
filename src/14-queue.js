const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.newList = null;
  }

  get size() {
    const getLength = (node, count = 0) => ((node.next) ? getLength(node.next, count + 1) : count);

    return getLength(this.newList);
  }

  enqueue(element) {
    const newNode = new ListNode(element);
    if (!this.newList) {
      this.newList = newNode;
    } else {
      let lastNode = this.newList;
      while (lastNode.next) {
        lastNode = lastNode.next;
      }
      lastNode.next = newNode;
    }
  }

  dequeue() {
    if (this.newList) {
      const newValue = this.newList.value;
      this.newList = this.newList.next;
      return newValue;
    }
    return null;
  }
}

module.exports = Queue;
