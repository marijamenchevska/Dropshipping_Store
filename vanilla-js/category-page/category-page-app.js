import { CategoryProdService } from "./src/category-products-service.js";

const categoryInfoObject = JSON.parse(localStorage.getItem("categoryInfo"));
const categoryPage = new CategoryProdService(categoryInfoObject);

await categoryPage.createFirstCategoryPage();

categoryPage.categoryEvents();
