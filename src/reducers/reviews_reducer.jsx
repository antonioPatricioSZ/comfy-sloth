import {
  UPDATE_SORT,
  SORT_REVIEWS,
  LOAD_PRODUCT,
  OPEN_NEW_AVALIATION,
  CLOSE_NEW_AVALIATION
} from "../actions";

const reviews_reducer = (state, action) => {

  switch (action.type) {

    case LOAD_PRODUCT:
      // eslint-disable-next-line no-case-declarations
      const reviews = action.payload?.productReviews || [];
      return {
        ...state,
        all_reviews: [...reviews],
        filtered_reviews: [...reviews], // estou apenas copiando os valores assim não terá conflito pois não estão usando o mesmo espaço na memória
      };

    case OPEN_NEW_AVALIATION:
      return { ...state, open_new_avaliation: true };

    case CLOSE_NEW_AVALIATION:
      return { ...state, open_new_avaliation: false };

    case UPDATE_SORT:
      return {
        ...state,
        sort: action.payload,
      };

    case SORT_REVIEWS:
      const { sort, filtered_reviews } = state;
      // eslint-disable-next-line no-case-declarations
      let tempProducts = [...filtered_reviews];

      switch (sort) {
        case "maior-nota":
          tempProducts = tempProducts.sort((a, b) => b.rating - a.rating);
          break;

        case "menor-nota":
          tempProducts = tempProducts.sort((a, b) => a.rating - b.rating);
          break;

        case "name-a":
          tempProducts = tempProducts.sort((a, b) => {
            return a?.title?.localeCompare(b.name);
          });
          break;

        case "name-z":
          tempProducts = tempProducts.sort((a, b) => {
            return b?.title?.localeCompare(a.name);
          });
          break;
        default:
          break;
      }
      return {
        ...state,
        filtered_reviews: tempProducts,
      };
  }
};

export default reviews_reducer;
