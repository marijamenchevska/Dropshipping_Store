const Laptop = document.getElementById("laptops");
const Gpu = document.getElementById("graphicsCards");
const Cpu = document.getElementById("processors");
const Ram = document.getElementById("ram");
const Tv = document.getElementById("tvs");
const Cams = document.getElementById("cameras");
const ActionCaM = document.getElementById("actionCameras");
const Drones = document.getElementById("drones");
const GamingChair = document.getElementById("gamingChair");
const Keyboards = document.getElementById("keyboard");
const GamingMice = document.getElementById("mouse");
const MousePads = document.getElementById("mousePads");
const Games = document.getElementById("games");
const Controllers = document.getElementById("controllers");
const components = document.getElementById("pc-components");
const laptopsMain = document.getElementById("laptops-main");
const tvsMain = document.getElementById("tv-main");
const photos = document.getElementById("photos");
const accessories = document.getElementById("accessories");
const gaming = document.getElementById("gaming");

gaming.addEventListener("click", function (event) {
  event.preventDefault();
  localStorage.setItem("categoryInfo", JSON.stringify({ category: "Gaming" }));
  window.location.href = "../category-page/category-page.html";
});

accessories.addEventListener("click", function (event) {
  event.preventDefault();
  localStorage.setItem(
    "categoryInfo",
    JSON.stringify({ category: "Accessories" })
  );
  window.location.href = "../category-page/category-page.html";
});

photos.addEventListener("click", function (event) {
  event.preventDefault();
  localStorage.setItem(
    "categoryInfo",
    JSON.stringify({ category: "Photo, video and drones" })
  );
  window.location.href = "../category-page/category-page.html";
});

tvsMain.addEventListener("click", function (event) {
  event.preventDefault();
  localStorage.setItem("categoryInfo", JSON.stringify({ category: "TVs" }));
  window.location.href = "../category-page/category-page.html";
});

laptopsMain.addEventListener("click", function (event) {
  event.preventDefault();
  localStorage.setItem("categoryInfo", JSON.stringify({ category: "Laptops" }));
  window.location.href = "../category-page/category-page.html";
});

components.addEventListener("click", function (event) {
  event.preventDefault();
  localStorage.setItem(
    "categoryInfo",
    JSON.stringify({ category: "PC Components" })
  );
  window.location.href = "../category-page/category-page.html";
});

// ==================== LAPTOPS ====================
Laptop.addEventListener("click", function (event) {
  event.preventDefault();
  localStorage.setItem("categoryInfo", JSON.stringify({ category: "Laptops" }));
  window.location.href = "../category-page/category-page.html";
});

// ==================== GRAPHICS CARDS ====================
Gpu.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("hi");
  localStorage.removeItem("categoryInfo");
  localStorage.setItem(
    "categoryInfo",
    JSON.stringify({ subcategory: "Graphics Cards" })
  );
  window.location.href = "../category-page/category-page.html";
});

// ==================== PROCESSORS ====================
Cpu.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("hi");
  localStorage.removeItem("categoryInfo");
  localStorage.setItem(
    "categoryInfo",
    JSON.stringify({ subcategory: "Processors" })
  );
  window.location.href = "../category-page/category-page.html";
});

// ==================== RAM ====================
Ram.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("hi");
  localStorage.removeItem("categoryInfo");
  localStorage.setItem("categoryInfo", JSON.stringify({ subcategory: "RAM" }));
  window.location.href = "../category-page/category-page.html";
});

// ==================== TVS ====================
Tv.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("hi");
  localStorage.removeItem("categoryInfo");
  localStorage.setItem("categoryInfo", JSON.stringify({ category: "TVs" }));
  window.location.href = "../category-page/category-page.html";
});

// ==================== CAMERAS ====================
Cams.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("hi");
  localStorage.removeItem("categoryInfo");
  localStorage.setItem(
    "categoryInfo",
    JSON.stringify({ subcategory: "Cameras" })
  );
  window.location.href = "../category-page/category-page.html";
});

// ==================== ACTION CAMERAS ====================
ActionCaM.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("hi");
  localStorage.removeItem("categoryInfo");
  localStorage.setItem(
    "categoryInfo",
    JSON.stringify({ subcategory: "Action Cameras" })
  );
  window.location.href = "../category-page/category-page.html";
});

// ==================== DRONES ====================
Drones.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("hi");
  localStorage.removeItem("categoryInfo");
  localStorage.setItem(
    "categoryInfo",
    JSON.stringify({ subcategory: "Drones" })
  );
  window.location.href = "../category-page/category-page.html";
});

// ==================== GAMING CHAIRS ====================
GamingChair.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("hi");
  localStorage.removeItem("categoryInfo");
  localStorage.setItem(
    "categoryInfo",
    JSON.stringify({ subcategory: "Gaming Chair" })
  );
  window.location.href = "../category-page/category-page.html";
});

// ==================== KEYBOARDS ====================
Keyboards.addEventListener("click", function (event) {
  console.log("hi");
  event.preventDefault();
  console.log("hi");
  localStorage.removeItem("categoryInfo");
  localStorage.setItem(
    "categoryInfo",
    JSON.stringify({ subcategory: "Keyboard" })
  );
  window.location.href = "../category-page/category-page.html";
});

// ==================== MOUSE ====================
GamingMice.addEventListener("click", function (event) {
  console.log("hi");
  event.preventDefault();
  console.log("hi");
  localStorage.removeItem("categoryInfo");
  localStorage.setItem(
    "categoryInfo",
    JSON.stringify({ subcategory: "Mouse" })
  );
  window.location.href = "../category-page/category-page.html";
});

// ==================== MOUSE PADS ====================
MousePads.addEventListener("click", function (event) {
  console.log("hi");
  event.preventDefault();
  console.log("hi");
  localStorage.removeItem("categoryInfo");
  localStorage.setItem(
    "categoryInfo",
    JSON.stringify({ subcategory: "Mouse Pads" })
  );
  window.location.href = "../category-page/category-page.html";
});

// ==================== GAMES ====================
Games.addEventListener("click", function (event) {
  console.log("hi");
  event.preventDefault();
  console.log("hi");
  localStorage.removeItem("categoryInfo");
  localStorage.setItem(
    "categoryInfo",
    JSON.stringify({ subcategory: "Games" })
  );
  window.location.href = "../category-page/category-page.html";
});

// ==================== CONTROLLERS ====================
Controllers.addEventListener("click", function (event) {
  console.log("hi");
  event.preventDefault();
  console.log("hi");
  localStorage.removeItem("categoryInfo");
  localStorage.setItem(
    "categoryInfo",
    JSON.stringify({ subcategory: "Controllers" })
  );
  window.location.href = "../category-page/category-page.html";
});
