import { useState } from 'react';
import { ethers } from 'ethers';

export const useRonin = () => {
  const [account, setAccount] = useState(null);
  const [provider, setProvider] = useState(null);

  const connectWallet = async () => {
    if (window.ronin) {
      try {
        // Ronin usa el estándar EIP-1193
        const accounts = await window.ronin.provider.request({ 
          method: 'eth_requestAccounts' 
        });
        
        const web3Provider = new ethers.providers.Web3Provider(window.ronin.provider);
        
        setAccount(accounts[0]);
        setProvider(web3Provider);
        
        console.log("Conectado con éxito:", accounts[0]);
      } catch (err) {
        console.error("Error al conectar:", err);
      }
    } else {
      alert("Por favor instala la Ronin Wallet extension");
    }
  };

  return { account, provider, connectWallet };
};