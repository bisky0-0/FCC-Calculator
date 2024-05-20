import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { evaluateExpression } from "./qalqulations";

export function Screen() {
  const dispatch = useDispatch();
    const expression = useSelector(state => state.result);

    const result = useSelector(state => state.calculations);
    

  useEffect(() => {
    try {
      const result = evaluateExpression(expression);

      dispatch({ type: 'UPDATE_RESULT', result: result });
    } catch (error) {
      console.error('Error while evaluating expression:', error.message);
    }
  }, [expression, dispatch]);

  return (
    <div id="screen">
          <div id="calc-section">{expression}</div>
          <div id="calculation">{result}</div>
    </div>
  );
}
