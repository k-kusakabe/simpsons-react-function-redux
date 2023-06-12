import React from "react";
import { useDispatch } from "react-redux";
import { deleteItem } from "../counterSlice";

const Delete = (props) => {
  const { id } = props;
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(deleteItem(id))}>Delete</button>
    </div>
  );
};

export default Delete;
