import React, { useState } from "react";
import AddCard from "./AddCard";

const Navbar = () => {
  const [openAddCardModal, setOpenAddCardModal] = useState(false);

  return (
    <div className="bg-[#8c66ba] px-5 py-4 fixed top-0 w-full z-50 ">
      <div className="flex justify-between items-center gap-4">
        <h1 className="text-xl font-semibold text-white">Expense Tracker</h1>

        <button
          onClick={() => setOpenAddCardModal(true)}
          className="border px-2 py-1 rounded-md bg-purple-300 hover:bg-purple-400"
        >
          Add User
        </button>
        <AddCard
          openAddCardModal={openAddCardModal}
          setOpenAddCardModal={setOpenAddCardModal}
        />
      </div>
    </div>
  );
};

export default Navbar;
