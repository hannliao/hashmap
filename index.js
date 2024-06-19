import HashMap from './hashmap.js';

const hashmap = new HashMap();

hashmap.set('key1', 'one');
hashmap.set('key2', 'two');
hashmap.set('key3', 'three');

console.log(hashmap.keys()); // [ 'key1', 'key2', 'key3' ]
console.log(hashmap.values()); // [ 'one', 'two', 'three' ]
console.log(hashmap.entries()); // [ [ 'key1', 'one' ], [ 'key2', 'two' ], [ 'key3', 'three' ] ]
console.log(hashmap.length()); // 3
console.log(hashmap.has('key3')); // true
console.log(hashmap.has('key4')); // false
console.log(hashmap.get('key2')); // two
console.log(hashmap.get('key4')); // null
console.log(hashmap.remove('key2')); // true
console.log(hashmap.remove('key4')); // false
console.log(hashmap.entries()); // [ [ 'key1', 'one' ], [ 'key3', 'three' ] ]
hashmap.set('key3', '3');
console.log(hashmap.entries()); // [ [ 'key1', 'one' ], [ 'key3', '3' ] ]

hashmap.set('key2', 'two');
hashmap.set('key4', 'four');
hashmap.set('key5', 'five');
hashmap.set('key6', 'six');
hashmap.set('key7', 'seven');
hashmap.set('key8', 'eight');
hashmap.set('key9', 'nine');
hashmap.set('key10', 'ten');
hashmap.set('key11', 'eleven');
hashmap.set('key12', 'twelve');
hashmap.set('key13', 'thirteen');

console.log(hashmap);
/*
HashMap {
  capacity: 32,
  loadFactor: 0.75,
  table: [
    LinkedList { head: [Node] },
    LinkedList { head: [Node] },
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    LinkedList { head: [Node] },
    LinkedList { head: [Node] },
    LinkedList { head: [Node] },
    LinkedList { head: [Node] },
    LinkedList { head: [Node] },
    LinkedList { head: [Node] },
    LinkedList { head: [Node] },
    LinkedList { head: [Node] },
    LinkedList { head: [Node] },
    null,
    null,
    null,
    LinkedList { head: [Node] },
    LinkedList { head: [Node] }
  ]
}
*/

hashmap.clear();
console.log(hashmap.entries()); // []
