import { FIND_PRODUCT_FAILURE, FIND_PRODUCT_REQUEST, FIND_PRODUCT_SUCCESS ,FIND_PRODUCT_BY_ID_REQUEST, FIND_PRODUCT_BY_ID_SUCCESS, FIND_PRODUCT_BY_ID_FAILURE} from "./Action.Type";
import { api } from "../../config/apiConfig";

export const findProducts = (reqData) => async (dispatch) => {
  dispatch({ type: FIND_PRODUCT_REQUEST });
  const {
    colors,
    sizes,
    minPrice,
    maxPrice,
    minDiscount,
    category,
    stock,
    sort,
    pageNumber,
    pageSize,
  } = reqData;
  try {
    const { data } = api.get(`/api/products?
        color=${colors}&
        size=${sizes}&
        minPrice=${minPrice}&
        maxPrice=${maxPrice}&
        minDiscount=${minDiscount}&
        category=${category}&
        stock=${stock}&
        sort=${sort}&
        pageNumber=${pageNumber}&
        pageSize=${pageSize}`);

        dispatch({type:FIND_PRODUCT_SUCCESS,payload:data})

  } catch (error) {
    dispatch({type:FIND_PRODUCT_FAILURE,payload:error?.message})
  }
  pageSize;
};

export const findProductById = (reqData) => async (dispatch) => {
    dispatch({ type: FIND_PRODUCT_BY_ID_REQUEST });
    const {
      productId
    } = reqData;
    try {
      const { data } = api.get(`/api/products/id/${productId}`);
  
          dispatch({type:FIND_PRODUCT_BY_ID_SUCCESS,payload:data})
  
    } catch (error) {
      dispatch({type:FIND_PRODUCT_BY_ID_FAILURE,payload:error?.message})
    }
    pageSize;
};
  