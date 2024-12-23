import { CategoryCards } from "../common/src/cards.js";
import { EventFunctions } from "../common/src/event-functions.js";

export class FavouritesPageService {
  constructor() {
    this.favouritesPageContainer = document.getElementById(
      "favourites-page-container"
    );
    this.emptyFavourites = document.getElementById("empty-favourites");
    this.favouriteItems = JSON.parse(localStorage.getItem("favItems"));
  }

  createFirstFavPage() {
    if (!this.favouriteItems || this.favouriteItems.length === 0) {
      this.emptyFavourites.style.display = "flex";
      this.favouritesPageContainer.classList.remove(
        "favourites-page-container-full"
      );
      return;
    }

    CategoryCards.createCards(
      this.favouriteItems,
      this.favouritesPageContainer
    );
  }

  favouritesEvents() {
    document.addEventListener("click", (e) => {
      const oldFavItems = JSON.parse(localStorage.getItem("favItems"));
      EventFunctions.cardBtnsClick(oldFavItems, e.target);

      this.removeFavourites();
    });

    window.addEventListener("storage", () => this.removeFavourites());
  }

  removeFavourites() {
    const newFavItems = JSON.parse(localStorage.getItem("favItems"));

    if (newFavItems.length === 0) {
      this.favouritesPageContainer.innerHTML = "";
      this.favouritesPageContainer.classList.remove(
        "favourites-page-container-full"
      );
      this.emptyFavourites.style.display = "flex";
      return;
    }

    this.emptyFavourites.style.display = "none";
    CategoryCards.createCards(newFavItems, this.favouritesPageContainer);
  }
}

const favPage = new FavouritesPageService();
favPage.createFirstFavPage();
favPage.favouritesEvents();
