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
        // this.head = new Node(data, this.head);
        this.insertAt(data, 0);
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
        // return this.head;
        return this.getAt(0);
    }

    getLast() {
        // if(!this.head) return null;
        // let node = this.head;

        // while(node){
        //     if(node.next){
        //       node = node.next;
        //     } else {
        //         return node;
        //     }
        // }
        return this.getAt(this.size() - 1);
    }

    clear() {
        this.head = null;
    }

    removeFirst() {
        // if(!this.head) return;
        // this.head = this.head.next;
        this.removeAt(0);
    }

    removeLast() {
        // if(!this.head) return;
        // if(!this.head.next){
        //     this.head = null;
        //     return;
        // }
        // let previous = this.head;
        // let node = this.head.next;
        
        // while(node.next) {
        //     previous = node;
        //     node = node.next;
        // } 
        // previous.next = null;
        this.removeAt(this.size() - 1);
    }

    insertLast(data) {
        // const last = this.getLast();

        // if(last){
        //     last.next = new Node(data);
        // } else {
        //     this.head = new Node(data);
        // }
        this.insertAt(data, this.size());
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
            return;
        }
        const before= this.getAt(int-1);
        if(!before || !before.next) return;
    
        before.next = before.next.next;
    }

    insertAt(data, int) {
        if(!this.head){
            this.head = new Node(data);
            return;
        } else if(int === 0){
            this.head = new Node(data, this.head);
            return;
        }
        let before = this.getAt(int-1);
        let existing = this.getAt(int);
        if(!existing) {
            let last = this.getAt(this.size() - 1);
            last.next = new Node(data);
            return;
        }
        before.next = new Node(data, existing);
    }

    forEach() {
        let node = this.head;
        while(node) {
            node.data += 10;
            node = node.next
        }
        return;
    }
}

module.exports = { Node, LinkedList };
