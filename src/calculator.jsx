
import { Screen } from "./calc-parts/screen";
import { Top } from "./calc-parts/buttons-sections/top";
import { Middle } from "./calc-parts/buttons-sections/middle";
import { Bottom } from "./calc-parts/buttons-sections/buttom";
// import { useDispatch, useSelector } from "react-redux";

export function Calculator() {
    return (
        <div id="calculator">
            <Screen />
            <Top />
            <Middle />
            <Bottom />
        </div>
    )
}