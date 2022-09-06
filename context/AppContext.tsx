import React, { useState, ReactElement, createContext, useContext } from 'react'
import { useRouter } from "next/dist/client/router";


interface AppContextType {
    connectWallet: any;
    learnWeb3NFTs: any;
    buildSpaceNFTs: any;
    fetchLearnWeb3NFTs: any;
    fetchBuildSpaceNFTs: any;
    wallet: any
}

interface Props {
    children: ReactElement;
  }

const AppContext = createContext<AppContextType>({} as AppContextType)

const alchemyAPIKey = process.env.NEXT_PUBLIC_ALCHEMY_API_KEY;
const learnWeb3Collection = "0x1Ed25648382c2e6Da067313e5DAcb4F138Bc8b33"
const buildspaceCollection = "0x3CD266509D127d0Eac42f4474F57D0526804b44e"
const testWallet = "0x4A40Eb870DcF533D4dC097c3d87aaFE9f64490A1"

export const AppContextProvider = ({ children }: Props  ) => {
    const router = useRouter();
    const [wallet, setWallet] = useState<string>("");
    const [learnWeb3NFTs, setLearnWeb3NFTs] = useState<string[]>([]);
    const [buildSpaceNFTs, setBuildSpaceNFTs] = useState<string[]>([]);

    const fetchLearnWeb3NFTs = async () => {
        let learnWeb3NFTs;
        console.log("fetching nfts");
        // Setup request options:
        var requestOptions = {
          method: 'GET',
        };
        const baseURL = `https://polygon-mainnet.g.alchemyapi.io/nft/v2/${alchemyAPIKey}/getNFTs`;
        
        const fetchURL = `${baseURL}?owner=${testWallet}&contractAddresses%5B%5D=${learnWeb3Collection}`
    
        learnWeb3NFTs = await fetch(fetchURL, requestOptions).then(data => data.json())
    
        if(learnWeb3NFTs) {
          console.log(learnWeb3NFTs)
          setLearnWeb3NFTs(learnWeb3NFTs.ownedNfts);
        }
      }

    const fetchBuildSpaceNFTs = async () => {
        let buildSpaceNFTs;
        console.log("fetching nfts");
        // Setup request options:
        var requestOptions = {
            method: 'GET',
        };
        const baseURL = `https://polygon-mainnet.g.alchemyapi.io/nft/v2/${alchemyAPIKey}/getNFTs`;
        
        const fetchURL = `${baseURL}?owner=${testWallet}&contractAddresses%5B%5D=${buildspaceCollection}`

        buildSpaceNFTs = await fetch(fetchURL, requestOptions).then(data => data.json())

        if(buildSpaceNFTs) {
            console.log(buildSpaceNFTs)
            setBuildSpaceNFTs(buildSpaceNFTs.ownedNfts);
        }
    }  

    const connectWallet = async () => {
        try {
          const {ethereum} = window;
          console.log(ethereum)
    
          if (!ethereum) {
            console.log("please install MetaMask");
          }
    
          const accounts = await ethereum.request({
            method: 'eth_requestAccounts'
          });
    
          setWallet(accounts[0]);
          // fetchLearnWeb3NFTs();
          // fetchBuildSpaceNFTs();
         
          router.push({
            pathname: "/profiles"
          });
          console.log(accounts[0]);
        } catch (error) {
          console.log(error);
        }
      }

  return (
    <AppContext.Provider value={{connectWallet, fetchLearnWeb3NFTs, fetchBuildSpaceNFTs, learnWeb3NFTs, buildSpaceNFTs, wallet}} >
        {children}
    </AppContext.Provider>
  )
}


export const useAppContext = () => useContext(AppContext)
