import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import logo from './imgs/logo.png';
import { TypedDataDomain, TypedDataField } from '@ethersproject/abstract-signer';
import { ethers, utils, Wallet } from 'ethers';
import { MUMBAI_RPC_URL, PK } from './config';
import { omit } from './helpers';

import React, { useEffect, useState } from "react";

declare var window: any





export default function OtuimHeader() {
  const [errorMessage, setErrorMessage] = useState<any | null>(null);
  const [account, setAccount] = useState<any | null>(null);
  const [balance, setBalance] = useState<any | null>(null);

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", accountsChanged);
      window.ethereum.on("chainChanged", chainChanged);
    }
  }, []);
  
  const connectHandler = async () => {
    if (window.ethereum) {
      try {
        const res = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        await accountsChanged(res[0]);
      } catch (err) {
        console.error(err);
        setErrorMessage("There was a problem connecting to MetaMask");      }
    } else {
      setErrorMessage("Install MetaMask");
        }
  };

  const accountsChanged = async (newAccount: any) => {
    setAccount(newAccount);
    try {
      const balance = await window.ethereum.request({
        method: "eth_getBalance",
        params: [newAccount.toString(), "latest"],
      });
     setBalance(ethers.utils.formatEther(balance));
    } catch (err) {
      console.error(err);
      setErrorMessage("There was a problem connecting to MetaMask");
    }
  };

  const chainChanged = () => {
    setErrorMessage(null);
    setAccount(null);
    setBalance(null);
  };


  return (
    <Box style={{
      display: 'flex', 
      placeContent: 'space-between', 
      padding: '8px', 
      borderRadius: '14px',
      opacity: '1px',
      height: '51px'}}>
       
          <img style={{
            width:'83px',
            height:'33px',
            marginTop: '5px',
            marginLeft: '5px'

          }} 
          src={logo}  height="50" alt="Otium-logo"/>
          <Button 
            onClick={connectHandler}
            sx={{
              width:'100px',
              height:'35px',
              mt:'6px',
              mr:'20px',
              color:'#1A1C19',
              backgroundColor:'#83DA8C',
              textTransform:'none',
              fontSize:'14px'
            }}
            style={{

            }}
            
            variant="contained">
              <Typography sx={{fontFamily:'poppins', fontWeight:'medium'}}>Connected</Typography>
          </Button>
    </Box>
  );
}
