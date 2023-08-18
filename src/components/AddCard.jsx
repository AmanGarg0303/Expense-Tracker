import React, { useState } from "react";
import { Modal } from "@mantine/core";
import CancelIcon from "@mui/icons-material/Cancel";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/expenseSlice";
import toast from "react-hot-toast";

const AddCard = ({ openAddCardModal, setOpenAddCardModal }) => {
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username) {
      toast.error("Please add a name!");
    } else {
      dispatch(addUser({ username }));
      setUsername("");
      setOpenAddCardModal(false);
    }
  };

  return (
    <Modal
      // overlayColor={
      //   theme.colorScheme === "dark"
      //     ? theme.colors.dark[9]
      //     : theme.colors.gray[2]
      // }
      // overlayOpacity={0.55}
      // overlayBlur={3}
      overflow="inside"
      size="sm"
      centered
      opened={openAddCardModal}
      onClose={() => setOpenAddCardModal(false)}
      withCloseButton={false}
      transition="fade"
      // title="Add User to Tracker List"
      // transitionDuration={500}
      // transitionTimingFunction="ease"
    >
      <div>
        <div
          className="relative pb-5"
          onClick={() => setOpenAddCardModal(false)}
        >
          <CancelIcon className="absolute -top-2 -right-2 text-red-500" />
        </div>

        <div className="flex flex-col gap-6">
          <form onSubmit={handleSubmit} className="space-y-2">
            <h4>Add User to tracker list</h4>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="border w-full px-2 py-1 rounded-md"
            />
            <button className="btn w-full">Add User</button>
          </form>
        </div>
      </div>
    </Modal>
  );
};

export default AddCard;
