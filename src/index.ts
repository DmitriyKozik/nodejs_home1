
console.time('get_product_init');

import { Products } from './products';

function get_product(product_number: number) {
    const result = Products(product_number);
    console.log(result);
}

console.timeEnd('get_product_init');


console.time('product_50');
get_product(50);
console.timeEnd('product_50');