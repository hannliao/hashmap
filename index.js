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

console.log('clearing hashmap...');
hashmap.clear();
console.log(hashmap.entries()); // []
