"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.time('get_product_init');
const products_1 = require("./products");
function get_product(product_number) {
    const result = products_1.Products(product_number);
    console.log(result);
}
console.timeEnd('get_product_init');
console.time('product_50');
get_product(50);
console.timeEnd('product_50');
//# sourceMappingURL=index.js.map