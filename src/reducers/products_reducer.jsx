import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from '../actions'

const products_reducer = (state, action) => {

  switch (action.type) {

    case SIDEBAR_OPEN:
      return { ...state, isSidebarOpen: true }

    case SIDEBAR_CLOSE:
      return { ...state, isSidebarOpen: false }

    case GET_PRODUCTS_BEGIN:
      return { ...state, products_loading: true }

    case GET_PRODUCTS_SUCCESS:
      // eslint-disable-next-line no-case-declarations
      const featured_products = action.payload.data.filter((product) => {
        return product.featured === true
      })
     
      return { 
        ...state, 
        products_loading: false, 
        products: action.payload.data, 
        featured_products: featured_products 
      }

    case GET_PRODUCTS_ERROR:
      return { 
        ...state,
        products_loading: false,
        products_error: true
      }

    case GET_SINGLE_PRODUCT_BEGIN:
      return {
        ...state,
        single_product_loading: true,
        single_product_error: false
      }

      case GET_SINGLE_PRODUCT_SUCCESS:
      console.log(action.payload)
        return {
          ...state,
          single_product_loading: false,
          single_product: action.payload
        }

      case GET_SINGLE_PRODUCT_ERROR:
        return {
          ...state,
          single_product_loading: false,
          single_product_error: true
        }

    default:
      break;
      
  }
  
}

export default products_reducer
