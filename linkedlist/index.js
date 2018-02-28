// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(data) {
        this.head = new Node(data, this.head);
    }

    size() {
        let count = 0;
        let node = this.head;

        while (node) {
            count++;
            node = node.next;
        }
        return count;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        if(!this.head) return null;
        let node = this.head;

        while(node){
            if(node.next){
              node = node.next;
            } else {
                return node;
            }
        }
    }

    clear() {
        this.head = null;
    }

    removeFirst() {
        if(!this.head) return;
        this.head = this.head.next;
    }

    removeLast() {
        if(!this.head) return;
        if(!this.head.next){
            this.head = null;
            return;
        }
        let previous = this.head;
        let node = this.head.next;
        
        while(node.next) {
            previous = node;
            node = node.next;
        } 
        previous.next = null;
    }

    insertLast(data) {
        const last = this.getLast();

        if(last){
            last.next = new Node(data);
        } else {
            this.head = new Node(data);
        }
    }

    getAt(int) {
        let node = this.head;
        for(let i = 0; i<int; i++) {
            if(!node) return null;
            node = node.next
        }
        return node;
    }

    removeAt(int) {
        if(!this.head)return;
        if(int === 0){
            this.head = this.head.next;
        }
        let before= this.getAt(int-1);
        const node = this.getAt(int);
        if(!node)return;
        if(!node.next){
            before.next = null;
        }
        before.next = node.next;
    }
}

// const list = new LinkedList();
// list.insertFirst()
// list.head = new Node(10);

module.exports = { Node, LinkedList };
