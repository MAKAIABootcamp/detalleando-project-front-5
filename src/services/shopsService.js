import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../firebase/firebaseConfig";

const collectionName = "sellersUsers";
const collectionRef = collection(firestore, collectionName)

export const getShopsFromCollection = async () => {
    const shops = [];
    try {
        const querySnapshot = await getDocs(collectionRef);
        querySnapshot.forEach((doc) => {
            shops.push({
                id: doc.id,
                ...doc.data()
            })
        });
        return shops;
    } catch (error) {
        console.log(error);
        return null;
    }
}