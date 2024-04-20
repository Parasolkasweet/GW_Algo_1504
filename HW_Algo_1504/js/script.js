class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class MyLinkedList {
    constructor() {
        this.head = null;
    }

    append(value) {
        const newNode = new ListNode(value);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }

    detectLoop() {
        let slowPointer = this.head;
        let fastPointer = this.head;

        while (fastPointer && fastPointer.next) {
            slowPointer = slowPointer.next;
            fastPointer = fastPointer.next.next;

            if (slowPointer === fastPointer) {
                return true; 
            }
        }

        return false; 
    }
}


const linkedList = new MyLinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(4);
linkedList.append(5);


let current = linkedList.head;
while (current.next) {
    current = current.next;
}
current.next = linkedList.head;

console.log(linkedList.detectLoop()); 