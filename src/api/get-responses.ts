import { db } from "api/config";
import { collection, getDocs } from "firebase/firestore";
import { IResponse } from "interfaces/response.interface";


export const get_response_api = async () => {
    const querySnapshot = await getDocs(collection(db, "registers"));  
    const res = querySnapshot.docs.map(d => d.data() as IResponse)
    return res;
}