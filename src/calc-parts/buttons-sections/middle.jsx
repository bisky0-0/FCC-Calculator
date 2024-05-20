import React from "react";
import { useDispatch } from "react-redux";
import { calcAction, numAction } from "../../redux/actions";

const Button = ({ label, onClick }) => (
  <div className="btn num" onClick={onClick}>
    {label}
  </div>
);

export function Middle() {
  const dispatch = useDispatch();

  const handleClickNum = (key) => {
    dispatch(numAction(key));
  };

  const handleClickExp = (key) => {
    dispatch(calcAction(key));
  };

  return (
    <div id="middle-btns">
      <div id="nums-btns">
        {[7, 8, 9, 4, 5, 6, 1, 2, 3].map((num) => (
          <Button
            key={num}
            label={num}
            onClick={() => handleClickNum(num.toString())}
          />
        ))}
      </div>

      <div id="middle-calcs">
        {['*', '-', '+'].map((op) => (
          <Button key={op} label={op} onClick={() => handleClickExp(op)} />
        ))}
      </div>
    </div>
  );
}
