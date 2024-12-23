document.querySelector("#year").innerText = new Date().getFullYear();

document
  .querySelector("#category-link")
  .addEventListener("click", () =>
    localStorage.setItem(
      "categoryInfo",
      JSON.stringify({ category: "Laptops" })
    )
  );
