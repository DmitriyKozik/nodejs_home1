export function Products() {
    const fs = require('fs');

    const filePath = "src/products.json";
    const products_content = fs.readFileSync(filePath, "utf8");
    const products = JSON.parse(products_content);

    return products;
}
