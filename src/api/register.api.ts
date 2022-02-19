import { db } from "api/config";
import { collection, addDoc } from "firebase/firestore";

export const register_api = async (tel: string, subjects:string[]) => {
    try {
        const docRef = await addDoc(collection(db, "registers"), {
            tel,
            subjects
        });
    } catch (e) {
    }   
    
}