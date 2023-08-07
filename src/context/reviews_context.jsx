import React, { useEffect, useContext, useReducer } from "react";
import reducer from "../reducers/reviews_reducer";
import { SORT_REVIEWS, UPDATE_SORT, LOAD_PRODUCT, OPEN_NEW_AVALIATION, CLOSE_NEW_AVALIATION } from "../actions";
import { useState } from "react";

const initialState = {
  filtered_reviews: [],
  all_reviews: [],
  sort: "maior-nota",
  open_new_avaliation: false
};

const ReviewsContext = React.createContext();

// eslint-disable-next-line react/prop-types
export const ReviewsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    dispatch({ type: LOAD_PRODUCT, payload: product });
  }, [product]);

  useEffect(() => {
    dispatch({ type: SORT_REVIEWS });
  }, [product, state.sort]);

  const updateSort = (e) => {
    //const name = e.target.name
    const value = e.target.value;
    dispatch({ type: UPDATE_SORT, payload: value });
  };

  const openNewAvaliation = () => {
    dispatch({
      type: OPEN_NEW_AVALIATION
    })
  }

  const closeNewAvaliation = () => {
    dispatch({
      type: CLOSE_NEW_AVALIATION
    })
  }

  return (
    <ReviewsContext.Provider
      value={{
        ...state,
        updateSort,
        setProduct,
        openNewAvaliation,
        closeNewAvaliation
      }}
    >
      {children}
    </ReviewsContext.Provider>
  );
};
// make sure use
// eslint-disable-next-line react-refresh/only-export-components
export const useReviewsContext = () => {
  return useContext(ReviewsContext);
};
