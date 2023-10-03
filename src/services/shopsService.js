import { collection, doc, getDoc, getDocs} from "firebase/firestore";
import { fireStore } from "../firebase/firebaseConfig";

const collectionName = "sellersUsers";
const collectionRef = collection(fireStore, collectionName);

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

export const getShopById = async (idShop) => {
    try {
        const q = doc(collectionRef, idShop);
        const querySnapshot = await getDoc(q);
        const shop = querySnapshot.data();
        return shop;
    } catch (error) {
     console.log(error);
     return null;   
    }
}