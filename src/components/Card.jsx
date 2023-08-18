import React, { useState } from "react";
import AddExpense from "./AddExpense";
import Expenses from "./Expenses";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import DeleteUserModal from "./DeleteUserModal";

const Card = ({ data }) => {
  const [openDeleteUserModal, setOpenDeleteUserModal] = useState(false);

  return (
    <div className=" px-4 py-2 relative space-y-2 bg-[#8c66ba] rounded-md">
      <div className="flex justify-between items-center">
        <h3 className="font-semibold text-lg text-white">
          {data?.groupName}'s Expense
        </h3>

        <div className="space-x-3">
          <DeleteForeverIcon
            onClick={() => setOpenDeleteUserModal(true)}
            fontSize="small"
            titleAccess="Delete Expenditure"
            className="text-red-600 hover:text-red-700"
          />
          <DeleteUserModal
            openDeleteUserModal={openDeleteUserModal}
            setOpenDeleteUserModal={setOpenDeleteUserModal}
            data={data}
          />
        </div>
      </div>

      <div className="w-full bg-black h-[1px] rounded-full" />

      <h4 className="text-white">
        Total Spend:{" "}
        <span className="font-medium">₹{Number(data?.totalSpend)}</span>
      </h4>

      <div className="space-y-3">
        {data?.expenses?.map((expense) => (
          <Expenses key={expense?.id} expense={expense} groupId={data?.id} />
        ))}
      </div>

      <AddExpense groupId={data?.id} />
    </div>
  );
};

export default Card;
