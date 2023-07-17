import {
  LOAD_PRODUCTS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from '../actions'

const filter_reducer = (state, action) => {

  switch (action.type) {
    case LOAD_PRODUCTS:

      // eslint-disable-next-line no-case-declarations
      let max_price = action.payload.map((product) => product.price)
      max_price = Math.max(...max_price)

      return {
        ...state,
        all_products: [...action.payload],
        filtered_products: [...action.payload], // estou apenas copiando os valores assim não terá conflito pois não estão usando o mesmo espaço na memória
        filters: { ...state.filters, max_price: max_price, price: max_price }
      }

    case SET_GRIDVIEW:
      return {
        ...state,
        grid_view: true
      }

    case SET_LISTVIEW:
      return {
        ...state,
        grid_view: false 
      }

    case UPDATE_SORT:
      return {
        ...state,
        sort: action.payload 
      }

    case SORT_PRODUCTS:
      // eslint-disable-next-line no-case-declarations
      const { sort, filtered_products } = state
      // eslint-disable-next-line no-case-declarations
      let tempProducts = [...filtered_products]

      switch (sort) {
        
        case "price-lowest":
          tempProducts = tempProducts.sort((a, b) => a.price - b.price)
          break;

        case "price-highest":
          tempProducts = tempProducts.sort((a, b) => b.price - a.price)
          break;

        case "name-a":
          tempProducts = tempProducts.sort((a, b) => {
            return a?.name?.localeCompare(b.name)
          })
          break;

        case "name-z":
          tempProducts = tempProducts.sort((a, b) => {
            return b?.name?.localeCompare(a.name)
          })
          break;
      
        default:
          break;
      }

      return {
        ...state,
        filtered_products: tempProducts 
      }

    case UPDATE_FILTERS:
      // eslint-disable-next-line no-case-declarations
      const { name, value } = action.payload
      return {
        ...state,
        filters: {...state.filters, [name]: value}
        // [name]: text === text: value; name é o text
      }

    case FILTER_PRODUCTS:
      
      // eslint-disable-next-line no-case-declarations
      const { all_products } = state
      // eslint-disable-next-line no-case-declarations
      const { text, company, category, color, price, shipping } = state.filters
      // eslint-disable-next-line no-case-declarations
      let tempAllProducts = [...all_products]
      if(text) {
        tempAllProducts = tempAllProducts.filter((product) => {
          return product.name?.toLowerCase().startsWith(text)
        })
      }
      if(category !== "all") {
        tempAllProducts = tempAllProducts.filter((product) => {
          return product.category === category
        })
      }

      if(company !== "all") {
        tempAllProducts = tempAllProducts.filter((product) => {
          return product.company === company
        })
      }

      if(color !== "all") {
        tempAllProducts = tempAllProducts.filter((product) => {
          return product.colors.find((cor) => cor === color)
        })
      }

      if(shipping) {
        tempAllProducts = tempAllProducts.filter((product) => {
          return product.freeShipping === true
        })
      }

      tempAllProducts = tempAllProducts.filter((product) => {
        return product.price <= price
      })

      return {
        ...state,
        filtered_products: tempAllProducts
      }

    case CLEAR_FILTERS:
      return {
        ...state,
        filters: {
          ...state.filters,
          text: "",
          company: "all",
          category: "all",
          color: "all",
          price: state.filters.max_price,
          shipping: false
        }
      }

  }

}

export default filter_reducer
