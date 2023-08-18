import React from "react";
import { Modal } from "@mantine/core";
import CancelIcon from "@mui/icons-material/Cancel";
import { useDispatch } from "react-redux";
import { deleteUser } from "../redux/expenseSlice";

const DeleteUserModal = ({
  openDeleteUserModal,
  setOpenDeleteUserModal,
  data,
}) => {
  const dispatch = useDispatch();

  // console.log(data);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Modal
      overflow="inside"
      size="sm"
      centered
      opened={openDeleteUserModal}
      onClose={() => setOpenDeleteUserModal(false)}
      withCloseButton={false}
      transition="fade"
    >
      <div>
        <div
          className="relative pb-5"
          onClick={() => setOpenDeleteUserModal(false)}
        >
          <CancelIcon className="absolute -top-2 -right-2 text-red-500" />
        </div>

        <div className="flex flex-col gap-6">
          <form onSubmit={handleSubmit} className="space-y-2">
            <h4>
              Are you sure you want to delete all data of{" "}
              <span className="font-medium">{data?.groupName}?</span>
            </h4>

            <div className="flex gap-5">
              <button
                onClick={() => dispatch(deleteUser({ groupId: data?.id }))}
                className="btn w-full"
              >
                Confirm
              </button>

              <button
                onClick={() => setOpenDeleteUserModal(false)}
                className="btn w-full"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteUserModal;
