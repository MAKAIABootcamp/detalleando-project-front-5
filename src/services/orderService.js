import { addDoc, collection, getDocs } from "firebase/firestore";
import { fireStore } from "../firebase/firebaseConfig";

const collectionName = "orders-history";
const collectionRef = collection(fireStore, collectionName)

export const getOrdersFromCollection = async () => {
    const orders = [];
    try {
        const querySnapshot = await getDocs(collectionRef);
        querySnapshot.forEach((doc) => {
            orders.push({
                id: doc.id,
                ...doc.data()
            })
        });
        return orders;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export const createAnOrderInCollection = async (newOrder) => {
    try {
        const order = await addDoc(collectionRef, newOrder);
        return {
            id: order.id,
            ...newOrder
        }
    } catch (error) {
        console.log(error);
        return error;
    }
}