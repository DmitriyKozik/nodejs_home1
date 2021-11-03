import { Products } from './products';

console.time('products_init');
const products = Products();
console.timeEnd('products_init');

console.time('product_50');
console.log(products[(50 - 1)]);
console.timeEnd('product_50');