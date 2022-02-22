import { db } from "api/config";
import { collection, addDoc } from "firebase/firestore";

export const register_api = async (tel: string, subjects:string[], grade:string) => {
    try {
        await addDoc(collection(db, "registers"), {
            tel,
            subjects,
            grade,
            createdAt: new Date().getTime()
        });
    } catch (e) {
    }   
    
}