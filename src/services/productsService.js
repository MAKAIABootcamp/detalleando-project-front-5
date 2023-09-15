import { collection, getDocs } from "firebase/firestore";
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
}