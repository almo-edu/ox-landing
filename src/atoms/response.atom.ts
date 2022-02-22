import { IResponse } from "interfaces/response.interface";
import { atom } from "recoil";

export const responseState = atom<IResponse[]>({
    key: 'responses',
    default: []
})