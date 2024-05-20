import React from "react";
import { useDispatch } from "react-redux";
import { calcAction, deleteAllAction, deleteAction } from "../../redux/actions";

export function Top() {
  const dispatch = useDispatch();

  const handleDeleteAll = () => {
    dispatch(deleteAllAction());
  };

  const handleDelete = () => {
    dispatch(deleteAction());
  };

  const handleClickExp = (key) => {
    dispatch(calcAction(key));
  };

  return (
    <div id="top-btns">
      <div className="btn" onClick={handleDeleteAll} id="AC">AC</div>
      <div className="btn" onClick={handleDelete} id="delete">x</div>
      <div className="btn" onClick={() => handleClickExp('/')} id="divide">/</div>
    </div>
  );
}
