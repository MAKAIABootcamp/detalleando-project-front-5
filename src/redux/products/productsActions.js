import { addDoc, collection, deleteDoc, doc } from "firebase/firestore";
import {
  getProductsFromCollection,
  getStoreProducts,
} from "../../services/productsService";
import { addProduct, deleteProduct, setError, setProducts } from "./productsReducer";
import { fireStore } from "../../firebase/firebaseConfig";

export const fillProductsFromCollection = () => async (dispatch) => {
  try {
    const products = await getProductsFromCollection();
    dispatch(setProducts(products));
    dispatch(setError(false));
  } catch (error) {
    console.log(error);
    dispatch(
      setError({
        error: true,
        code: error.code,
        message: error.message,
      })
    );
  }
};

export const getShopProductFromCollection = (idShop) => async (dispatch) => {
  try {
    const products = await getStoreProducts(idShop);
    dispatch(setProducts(products));
    dispatch(setError(false));
  } catch (error) {
    console.log(error);
    dispatch(
      setError({
        error: true,
        code: error.code,
        message: error.message,
      })
    );
  }
};

export const createProduct = (newProduct) => {
  return async (dispatch) => {
    try {
      const collectionName = "products";
      const collectionRef = collection(fireStore, collectionName);
      const querySnapshot = await addDoc(collectionRef, newProduct);
      dispatch(addProduct(newProduct));
      dispatch(setError(false));
    } catch (error) {
      console.log(error);
      dispatch(
        setError({
          error: true,
          code: error.code,
          message: error.message,
        })
      );
    }
  };
};

export const deleteProductFronCollection = (id, index) => {
  return async (dispatch) => {
    try {
      const collectionName = "products";
      const collectionRef = doc(fireStore, collectionName, id);
      await deleteDoc(collectionRef);
      dispatch(deleteProduct(index));
    } catch (error) {
      console.log(error);
      dispatch(
        setError({
          error: true,
          code: error.code,
          message: error.message,
        })
      );
    }
  };
};
