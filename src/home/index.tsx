import { Advantages } from "./Advantages"
import { ComingSoon } from "./ComingSoon"
import { Comments } from "./Comments"
import { Contact } from "./Contact"
import { Feature } from "./Feature"

export function Home(){
    return (
        <div>
            <Feature />
            <Advantages />
            <Comments />
            <ComingSoon />
            <Contact />
        </div>
    )
}