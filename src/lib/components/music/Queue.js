export class Queue {

	_Node(value) {
		return {
			value,
			next: null,
		}
	}

	front;
	rear;
	size;

	constructor() {
		this.front = null;
		this.rear = null;
		this.size = 0;
	}

	enqueue(item) {
		const newNode = this._Node(item);

		if (this.size === 0) {
				this.rear = this.front = newNode;
		} else {
			this.rear.next = newNode;
			this.rear = newNode;
		}
	}

	enqueueArray(items) {
		if (!Array.isArray(items)) {
			console.error("function 'enqueueArray' must be passed an array as an argument");
			return;
		}

		if (this.size === 0) {
			this.rear = this.front = this._Node(items[0]);
			for (let i=1;i<items.length;i++) {
				this.enqueue(items[i]);
			}
		}
	}

	dequeue() {
		if (this.isEmpty) {
			return null;
		}

		this.size--;

		const dequeued = this.front.value;
		this.front = this.front.next;

		if (this.front === null) {
			this.rear = null;
			this.size = 0;
		}

		return dequeued;
	}

	peek() {
		if (this.isEmpty()) {
			return null;
		}
		return this.front.value;
	}

	isEmpty() {
		return this.size === 0;
	}
}