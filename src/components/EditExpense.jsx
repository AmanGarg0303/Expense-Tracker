import React, { useState } from "react";
import { Modal } from "@mantine/core";
import CancelIcon from "@mui/icons-material/Cancel";
import { useDispatch } from "react-redux";
import { editExpense } from "../redux/expenseSlice";

const EditExpense = ({
  openEditExpense,
  setOpenEditExpense,
  expense,
  groupId,
}) => {
  const dispatch = useDispatch();

  const [newPrice, setNewPrice] = useState(expense?.price);
  const [newTitle, setNewTitle] = useState(expense?.title);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      editExpense({
        groupId: groupId,
        expenseId: expense?.id,
        newTitle,
        newPrice,
      })
    );

    setOpenEditExpense(false);
  };

  return (
    <Modal
      overflow="inside"
      size="sm"
      centered
      opened={openEditExpense}
      onClose={() => setOpenEditExpense(false)}
      withCloseButton={false}
      transition="fade"
    >
      <div>
        <div
          className="relative pb-5"
          onClick={() => setOpenEditExpense(false)}
        >
          <CancelIcon className="absolute -top-2 -right-2 text-red-500" />
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <h4>Edit the expense</h4>

          <input
            type="number"
            value={newPrice}
            onChange={(e) => setNewPrice(e.target.value)}
            className="border w-full px-2 py-1 rounded-md"
          />

          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            className="border w-full px-2 py-1 rounded-md"
          />

          <button className="btn">Edit Confirm</button>
        </form>
      </div>
    </Modal>
  );
};

export default EditExpense;
