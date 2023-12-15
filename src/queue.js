const { NotImplementedError, ListNode } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.head = null;
  }


  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {
    let h = this.head;
    if (!h) this.head = new ListNode(value);
    else {
      while (h.next !== null) 
        h = h.next;  
      h.next = new ListNode(value);
    }
  }

  dequeue() {
    let h = this.head;
    if (!h) throw new NotImplementedError('Not implemented');
    const val = h.value;
    this.head = h.next;
    return val;
    }
  }

module.exports = {
  Queue
};
