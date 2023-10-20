import React, { useContext } from "react";
import { MaintenanceContext } from "../context/MaintenanceContext";

const NavBar = () => {
  const { currentUser, connectWallet, setCurrentUser } =
    useContext(MaintenanceContext);

  const disconnectWallet = async () => {
    try {
      if (window.ethereum) {
        await window.ethereum.request({
          method: "eth_requestAccounts",
          params: [
            {
              eth_accounts: {},
            },
          ],
        });
        setCurrentUser(""); // Clear the currentUser state
      }
    } catch (error) {
      console.error("Error disconnecting wallet", error);
    }
  };

  return (
    <>
      <header className="text-gray-600 body-font border shadow-md">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <span className="ml-3 text-xl">Maintence App</span>

          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center"></nav>
          {currentUser ? (
            <div>
              <p>{currentUser.slice(0, 25)}...</p>
              <button onClick={disconnectWallet}>Disconnect Wallet</button>
            </div>
          ) : (
            <button
              onClick={() => connectWallet()}
              className="px-8 py-3 font-semibold rounded dark:bg-gray-100 dark:text-gray-800"
            >
              Connect Wallet
            </button>
          )}
        </div>
      </header>
    </>
  );
};

export default NavBar;
