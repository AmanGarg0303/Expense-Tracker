import React, { useState } from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import EditExpense from "./EditExpense";
import { useDispatch } from "react-redux";
import { deleteExpense } from "../redux/expenseSlice";

const Expenses = ({ expense, groupId }) => {
  // console.log(expense);
  const dispatch = useDispatch();

  const [openEditExpense, setOpenEditExpense] = useState(false);

  const handleDeleteExpense = (e) => {
    dispatch(
      deleteExpense({
        groupId,
        expenseId: expense?.id,
      })
    );
  };

  return (
    <div className="bg-[#f3f3f2] rounded-md px-2 py-1">
      <div className="flex gap-4 items-center">
        <span className="flex-1 bg-blue-200 rounded-md p-2">
          ₹{Number(expense?.price)}
        </span>

        <div className="flex-[3] border rounded-md px-2 py-1 w-full bg-slate-200">
          {expense?.title}
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div className="text-xs text-gray-600 pt-1">{expense?.date}</div>

        <div className="space-x-3">
          <BorderColorIcon
            onClick={() => setOpenEditExpense(true)}
            fontSize="small"
            titleAccess="Edit Expenditure"
            className="text-green-600 hover:text-green-700"
          />
          <EditExpense
            openEditExpense={openEditExpense}
            setOpenEditExpense={setOpenEditExpense}
            expense={expense}
            groupId={groupId}
          />

          <DeleteForeverIcon
            onClick={handleDeleteExpense}
            fontSize="small"
            titleAccess="Delete Expenditure"
            className="text-red-600 hover:text-red-700"
          />
        </div>
      </div>
    </div>
  );
};

export default Expenses;
