import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";
import { fireStore } from "../firebase/firebaseConfig";


const collectionName = "products";
const collectionRef = collection(fireStore, collectionName)

export const getProductsFromCollection = async () => {
    const products = [];
    try {
        const querySnapshot = await getDocs(collectionRef);
        querySnapshot.forEach((doc) => {
            products.push({
                id: doc.id,
                ...doc.data()
            })
        });
        return products;
    } catch (error) {
        console.log(error);
        return null;
    }
};

export const getStoreProducts = async (idStore) => {
    const products = [];
    try {
        const q = query(collectionRef, where("shopId", "==", idStore));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            products.push({
                id: doc.id,
                ...doc.data()
            });
        });
        return products;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export const getProductById = async(idProduct) => {
    try {
        const q = doc(collectionRef, idProduct);
        const querySnapshot = await getDoc(q);
        const product = querySnapshot.data();
        return product;
    } catch (error) {
        console.log(error);
        return null;
    }
}