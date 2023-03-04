class Stack {
	constructor() {
		this.queue1 = [];
		this.queue2 = [];
	}

	push(value) {

		// Push x first in isEmpty q2
		this.queue2.push(value);
		// Push all the remaining
		// elements in q1 to q2.
		while (this.queue1.length != 0) {
			this.queue2.push(this.queue1[0]);
			this.queue1.shift();
		}

		// swapping the names of two queues
		this.queue = this.queue1;
		this.queue1 = this.queue2;
		this.queue2 = this.queue;
	}

	pop() {
		if (this.queue1.length == 0)
			return;
        
		this.queue1.shift();
	}

	top() {
		if (this.queue1.length == 0)
			return -1;
		return this.queue1[0];
	}

	size() {
		console.log(this.queue1.length);
	}

	isEmpty() {
		// return true if the queue is empty and false if the queue is not exmpty.
		return this.queue1.length == 0;
	}

	front() {
		return this.queue1[0];
	}
}

let s = new Stack();
s.push(1);
s.push(2);
s.push(3);
s.push(4);
s.push(5);
s.push(6);

console.log("Executing push: ");
console.log("current size of the stack is: ");
s.size();

console.log("Executing top and pop: ");
console.log(s.top());
s.pop();
console.log(s.top());
s.pop();
console.log(s.top());

console.log("current size of the stack is: ");
s.size();

console.log("Is the stack empty: "+ s.isEmpty());
