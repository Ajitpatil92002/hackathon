import React, { useState, useEffect } from "react";
import Web3Modal from "web3modal";
import { ethers } from "ethers";

import maintenance from "./Maintenance.json"; // Your contract ABI

const ContractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"; // Replace with the actual contract address

const ContractABI = maintenance.abi;

const fetchContract = (signerOrProvider) =>
  new ethers.Contract(ContractAddress, ContractABI, signerOrProvider);

export const MaintenanceContext = React.createContext();

export const MaintenanceProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState("");
  const [maintenanceRequests, setMaintenanceRequests] = useState([]);

  const createMaintenanceRequest = async (
    title,
    description,
    maintenanceType
  ) => {
    try {
      const web3modal = new Web3Modal();
      const connection = await web3modal.connect();
      const provider = new ethers.providers.Web3Provider(connection);
      const signer = provider.getSigner();
      const contract = fetchContract(signer);

      console.log(title, description, maintenanceType);

      await contract.createMaintenanceRequest(title, description, 0);

      const requests = await contract.maintenanceRequests();
      setMaintenanceRequests(requests);
    } catch (error) {
      console.error("Error creating maintenance request", error);
    }
  };

  const completeMaintenanceRequest = async (requestId) => {
    try {
      const web3modal = new Web3Modal();
      const connection = await web3modal.connect();
      const provider = new ethers.providers.Web3Provider(connection);
      const signer = provider.getSigner();
      const contract = fetchContract(signer);

      await contract.completeMaintenanceRequest(requestId);

      const requests = await contract.maintenanceRequests();
      setMaintenanceRequests(requests);
    } catch (error) {
      console.error("Error completing maintenance request", error);
    }
  };

  const checkIfWalletConnected = async () => {
    try {
      if (!window.ethereum) return "Install MetaMask";

      const accounts = await window.ethereum.request({
        method: "eth_accounts",
      });

      if (accounts.length) {
        setCurrentUser(accounts[0]);
      } else {
        return "No account";
      }
    } catch (error) {
      return "Not connected";
    }
  };

  const connectWallet = async () => {
    try {
      if (!window.ethereum) return alert("Install MetaMask");

      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      setCurrentUser(accounts[0]);
    } catch (error) {
      return "Something went wrong";
    }
  };

  useEffect(() => {
    checkIfWalletConnected();
  }, []);

  return (
    <MaintenanceContext.Provider
      value={{
        connectWallet,
        createMaintenanceRequest,
        completeMaintenanceRequest,
        maintenanceRequests,
        currentUser,
        setCurrentUser,
      }}
    >
      {children}
    </MaintenanceContext.Provider>
  );
};
