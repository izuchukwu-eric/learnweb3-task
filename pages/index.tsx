import type { NextPage } from 'next'
import { LockClosedIcon } from '@heroicons/react/20/solid'
import Logo from "../assets/logo-blue.png";
import Image from 'next/image';
import { useState } from 'react';

const alchemyAPIKey = process.env.NEXT_PUBLIC_ALCHEMY_API_KEY;
const learnWeb3Collection = "0x1Ed25648382c2e6Da067313e5DAcb4F138Bc8b33"
const buildspaceCollection = "0x3CD266509D127d0Eac42f4474F57D0526804b44e"


const Home: NextPage = () => {
  const [wallet, setWallet] = useState("");
  const [NFTs, setNFTs] = useState([]);

  const fetchNFTs = async () => {
    let nfts;
    console.log("fetching nfts");
    // Setup request options:
    var requestOptions = {
      method: 'GET',
    };
    const baseURL = `https://polygon-mainnet.g.alchemyapi.io/nft/v2/${alchemyAPIKey}/getNFTs`;
    
    const fetchURL = `${baseURL}?owner=${wallet}&contractAddresses%5B%5D=${learnWeb3Collection}`

    nfts = await fetch(fetchURL, requestOptions).then(data => data.json())

    if(nfts) {
      console.log(nfts)
      setNFTs(nfts.ownedNFT);
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
      fetchNFTs();
      console.log(accounts[0]);
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <Image
            className="mx-auto h-12 w-auto"
            src={Logo}
            alt="learnweb3logo"
          />
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>
        
        <div className=''>
          <button
            type="submit"
            className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700"
            onClick={connectWallet}
          >
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
            </span>
            Connect Wallet
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home
