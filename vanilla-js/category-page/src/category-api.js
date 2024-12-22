export class CategoryApi {
  static async getProducts(categoryInfoObject) {
    const res = await fetch("/data/products.json");
    const parsedRes = await res.json();

    if (categoryInfoObject.category) {
      return parsedRes.filter(
        (product) => product.category === categoryInfoObject.category
      );
    }

    if (categoryInfoObject.subcategory) {
      return parsedRes.filter(
        (product) => product.subCategory === categoryInfoObject.subcategory
      );
    }
  }
}
