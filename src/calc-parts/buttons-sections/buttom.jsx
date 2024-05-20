import { useDispatch, useSelector } from "react-redux";
import { calcAction, numAction } from "../../redux/actions";
import { evaluateExpression } from "../qalqulations";
import { EQUAL } from "../../redux/actions";

export function Bottom() {
  const expression = useSelector(state => state.result);

  const dispatch = useDispatch();

  const handleClickNum = (key) => {
    dispatch(numAction(key));
  };

  const handleClickExp = (key) => {
    dispatch(calcAction(key));
  };

  const handleEqual = () => {
    try {
        if (!expression.trim()) {
            return;
        }

        const result = evaluateExpression(expression);

        dispatch({ type: EQUAL, result });

    } catch (error) {
        console.error('Error while evaluating expression:', error.message);
    }
};
  return (
    <div id="bottom-btns">
      <div className="btn" onClick={() => handleClickNum('0')} id="zero">0</div>
      <div className="btn" onClick={() => handleClickExp('.')} id="decimal">.</div>
      <div className="btn" onClick={handleEqual} id="equal">=</div>
    </div>
  );
}
