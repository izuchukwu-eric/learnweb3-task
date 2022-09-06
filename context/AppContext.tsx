import React, { useState, ReactElement, createContext, useContext, useEffect } from 'react'
import { useRouter } from "next/dist/client/router";


interface AppContextType {
    connectWallet: any;
    learnWeb3NFTs: string[];
    buildSpaceNFTs: string[];
    fetchLearnWeb3NFTs: any;
    fetchBuildSpaceNFTs: any;
    wallet: string
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
    useEffect(() => {
      checkIfWalletIsConnected()
    }, [])


    /**
     * @dev to fetch learnWeb3NFTs owned by the address
     */
    const fetchLearnWeb3NFTs = async () => {
        let learnWeb3NFTs;
        console.log("fetching learnWeb3 nfts");
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

    /**
     * @dev to fetch buildSpaceNFTs owned by the address
     */
    const fetchBuildSpaceNFTs = async () => {
        let buildSpaceNFTs;
        console.log("fetching buildspace nfts");
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

    /**
     * @dev to connect users wallet and route user to profile page
     */
    const connectWallet = async () => {
        try {
          const {ethereum} = window as any;
          console.log(ethereum)
    
          if (!ethereum) {
            console.log("please install MetaMask");
          }
    
          const accounts = await ethereum.request({
            method: 'eth_requestAccounts'
          });
    
          setWallet(accounts[0]);
         
          router.push({
            pathname: "/profiles"
          });
          console.log(accounts[0]);
        } catch (error) {
          console.log(error);
        }
      }

     /**
      * @dev check if users wallet is connected
      */
     const checkIfWalletIsConnected = async () => {
      try {
          const {ethereum} = window as any;
          if(!ethereum) return alert("Please install metamask");
  
          const accounts = await ethereum.request({method: "eth_accounts"});
          
          if(accounts.length) {
              setWallet(accounts[0]);
              
          } else {
              console.log("No accounts Found")
          }
          
      } catch (error) {
          console.log(error)

          throw new Error("No ethereum object.")
      }
  }

  return (
    <AppContext.Provider value={{connectWallet, fetchLearnWeb3NFTs, fetchBuildSpaceNFTs, learnWeb3NFTs, buildSpaceNFTs, wallet}} >
        {children}
    </AppContext.Provider>
  )
}


export const useAppContext = () => useContext(AppContext)
