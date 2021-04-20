var LinkNode = function(key,value){
    this.key = key;
    this.value = value;
    this.next = null;
    this.pre = null;
}
var DoubleLinkedList = function(){
    this.size = 0;
    this.head = new LinkNode();
    this.tail = new LinkNode();
    this.head.next = this.tail;
    this.tail.pre = this.head;
}

DoubleLinkedList.prototype.addNode = function(node){
    if (!(node instanceof LinkNode)) throw new Error('param must be a LinkNode');
    // 插入节点时，使用尾插法。这里可以利用双向链表一直在尾结点前驱插入节点。
    const preNode = this.tail.pre;
    const nextNode = this.tail.pre.next;
    node.pre = preNode;
    node.next = nextNode;
    preNode.next = node;
    nextNode.pre = node;
    this.size++;
}

DoubleLinkedList.prototype.deleteNode = function(node){
    if (!(node instanceof LinkNode)) throw new Error('param must be a LinkNode');
    // 将刚刚访问过的节点插入到链表最后一位。
    const preNode = node.pre;
    const nextNode = node.next;
    preNode.next = nextNode;
    nextNode.pre = preNode;
    this.size--;
}

DoubleLinkedList.prototype.refreshList = function(node){
    this.deleteNode(node);
    this.addNode(node);
}





/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.maxSize = capacity;
    this.map = new Map();
    this.doubleLinkedList = new DoubleLinkedList();
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (this.map.get(key) === undefined ) return false;
    const curNode = this.map.get(key);
    this.doubleLinkedList.refreshList(curNode);
    return curNode.value;
    
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    const newNode = new LinkNode(key,value);
    //  如果key已经存在，则变更其值
    if (this.map.get(key)) {
        this.doubleLinkedList.refreshList(this.map.get(key))
        return this.map.get(key).value = value;
    }
    if (this.map.size < this.maxSize) {
        this.doubleLinkedList.addNode(newNode);
    } else {
        // 需要清理链表中的首元节点,并将新节点插入到尾部
        const firstNode = this.doubleLinkedList.head.next;
        this.doubleLinkedList.deleteNode(firstNode);
        this.doubleLinkedList.addNode(newNode);
        // 同时需要清理掉散列表中的key
        this.map.delete(firstNode.key);
    }
    this.map.set(key,newNode);

};
export default LRUCache;