export function Products(product_number: number) {
    const product_key = product_number-1;

    const fs = require('fs');

    const filePath = "src/products.json";
    const products_content = fs.readFileSync(filePath, "utf8");
    const products = JSON.parse(products_content);

    let result = products[product_key];

    return result;
}
