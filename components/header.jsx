import React from "react";
import Modal from "react-modal";
import { Input } from "./input";

import { MaintenanceContext } from "../context/MaintenanceContext";

const Header = ({ title, btnText, btnLink }) => {
  let subtitle;

  const { createMaintenanceRequest, currentUser } =
    React.useContext(MaintenanceContext);
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const [dtitle, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [type, setType] = React.useState("");

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  Modal.setAppElement("#main");

  async function OnSubmitHandler(e) {
    e.preventDefault();
    // console.log(dtitle, description, type);
    await createMaintenanceRequest(dtitle, description, type);
  }

  return (
    <div className=" flex items-center justify-between h-20 ">
      <h3 className="text-white">{title}</h3>
      <button
        onClick={openModal}
        className="p-2 font-semibold rounded bg-gray-100 text-gray-800 text-sm"
      >
        {btnText}
      </button>
      <Modal
        className={
          "container absolute inset-10 border overflow-auto rounded-md outline-none p-5 bg-background  max-w-xl"
        }
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      >
        <div className="bg-background h-full w-full">
          <div className="flex items-center justify-between px-4 py-10">
            <h2 className="text-gray-500 text-xl font-bold">Add Maintenance</h2>
            <button
              onClick={closeModal}
              className="p-2 font-semibold rounded bg-gray-800 text-gray-100 text-sm"
            >
              X
            </button>
          </div>

          <form
            onSubmit={OnSubmitHandler}
            className="container border rounded-md shadow-md max-w-xl p-6 "
          >
            <div className="grid gap-4 col-span-full grid-cols-1">
              <div className="col-span-full sm:col-span-3 space-y-1">
                <label for="Title" className="text-sm">
                  Title
                </label>
                <Input
                  onChange={(e) => setTitle(e.target.value)}
                  type="text"
                  placeholder="title"
                />
              </div>
              <div className="col-span-full sm:col-span-3  space-y-1">
                <label for="description" className="text-sm">
                  Description
                </label>
                <Input
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  type="text"
                  placeholder="description"
                />
              </div>
              <div className="col-span-full sm:col-span-3  space-y-1">
                <label for="type" className="text-sm">
                  Maintenance Type
                </label>
                <Input
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  type="text"
                  placeholder="type"
                />
              </div>
              <button
                type="submit"
                className="p-2 font-semibold rounded bg-gray-800 hover:bg-gray-800/50 text-gray-100 text-sm col-span-full sm:col-span-3  space-y-1"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default Header;
