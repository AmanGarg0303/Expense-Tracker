import React, { useState } from "react";
import { addExpense } from "../redux/expenseSlice";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

const AddExpense = ({ groupId }) => {
  const dispatch = useDispatch();
  const [price, setPrice] = useState(0);
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!price || !title) {
      toast.error("Please add an expense!");
    } else {
      dispatch(
        addExpense({
          groupId,
          price: Number(price),
          title,
        })
      );
    }

    setPrice(0);
    setTitle("");
  };

  return (
    <div className="border rounded-md bg-[#f3f3f2] px-2 py-1">
      <h4>Add Expense</h4>

      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <input
          type="number"
          placeholder="Amount Spend"
          className="border px-2 py-1 rounded-md"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="text"
          placeholder="Spent on what"
          className="border px-2 py-1 rounded-md"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button className="btn">Submit</button>
      </form>
    </div>
  );
};

export default AddExpense;
