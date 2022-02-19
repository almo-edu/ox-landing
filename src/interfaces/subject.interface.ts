import { IProblem } from "./problem.interface";

export interface ISubject {
    name: string
    code: string
    problems: IProblem[]
}