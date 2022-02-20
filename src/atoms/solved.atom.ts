
import { SUBJECTS } from 'data/subjects.data'
import { IProblem } from 'interfaces/problem.interface'
import { atom, useRecoilState } from 'recoil'
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist({
    key: 'recoil-persist', // this key is using to store data in local storage
    storage: sessionStorage 
})

export const solvedState = atom<boolean[]>({
    key: 'solved/problems',
    default: [],
    effects_UNSTABLE: [persistAtom]
})

// 문제 푸는 화면에서 사용하는 hook
export const useSolvedProblemInfo = (subjectCode:string) => {
    const [solved, setSolved] = useRecoilState(solvedState)
    const subject = SUBJECTS.find(s => s.code === subjectCode)
    const getNextProblem = ():(IProblem | null) => {
        if(!subject)
            return null
        const countSolved = solved.length
        if(countSolved >= subject.problems.length)
            return null
        else
            return subject.problems[countSolved]
    }

    const getScore = () => {
        return {
            ok: solved.filter(s => s).length,
            total: solved.length
        }
    }

    const solve = (answer: boolean) => {
        const problem = getNextProblem()
        if(!problem)
            return
        setSolved(prev => [...prev, (problem.answer === answer)])
    }

    return {
        getNextProblem,
        getScore,
        solve
    }
}

