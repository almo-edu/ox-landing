import { db } from "api/config";
import dayjs from "dayjs";
import { collection, getDocs } from "firebase/firestore";
import { IResponse } from "interfaces/response.interface";


export const get_response_api = async () => {
    const querySnapshot = await getDocs(collection(db, "registers"));  
    const res = querySnapshot
        .docs
        .map(d => d.data() as IResponse)
        .sort((a, b) => (b.createdAt||0) - (a.createdAt||0))  // 시간 순으로 정렬
        .filter((row, index, arr) => {
            return arr.findIndex(item => item.tel === row.tel) === index;   // 중복 제거
        });
    // console.log(
    //     res.map(obj => `${obj.createdAt ? dayjs(obj.createdAt).format('MM-DD_HH:mm') : '-'} ${obj.tel} ${obj.grade} ${obj.subjects}`).join('\n')
    // )
    return res;
}