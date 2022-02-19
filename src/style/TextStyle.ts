import { css, FlattenSimpleInterpolation } from "styled-components"

const H1 = css`
  font-family: 'Apple SD Gothic Neo', sans-serif;  
  font-weight: bold;
  color: #060607;
  font-size: 22px;
  line-height: 30px;
  height: 26px;
`

const H2 = css`
  font-family: 'Apple SD Gothic Neo', sans-serif;
  color: #060607;
  font-weight: bold;
  font-size: 20px;
  line-height: 26px;
  height: 24px;
`

const P1 = css`
  font-family: 'Apple SD Gothic Neo', sans-serif;
  font-size: 15px;
  color: #060607;
`

 const P2 = css`
  font-family: 'Apple SD Gothic Neo', sans-serif;  
  font-size: 13px;
  color: #060607;
`

 const D1 = css`
  font-family: 'Apple SD Gothic Neo', sans-serif;  
  font-size: 12px;
  color: #748089;
`
 const D2 = css`
  font-family: 'Apple SD Gothic Neo', sans-serif;  
  font-size: 11px;
  color: #748089;
`

export type facetype = "H1" | "H2" | "P1" | "P2" | "D1" | "D2";
type ITypeFace = {
    [key in facetype]: FlattenSimpleInterpolation
}
export const FaceTypes:ITypeFace = {H1,H2,P1,P2,D1,D2}