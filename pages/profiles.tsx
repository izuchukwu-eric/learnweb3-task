import React, { useEffect, useState } from 'react'
import Logo from "../assets/logo-blue.png";
import Image from 'next/image';
import router from 'next/router';
import NFTCard from "../components/NFTCard"
import { useAppContext } from '../context/AppContext';


function profiles() {
    const { learnWeb3NFTs, buildSpaceNFTs, wallet } = useAppContext();
    const [show, handleShow] = useState(false);
    console.log(learnWeb3NFTs)
    console.log(buildSpaceNFTs)
    console.log(wallet)
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
      }, []);

  return (
    <div className='bg-white'>
        <header className={`sticky top-0 z-50 grid grid-cols-2 p-5 md:px-10 ${ show && "bg-white"}`}>
            {/* left */}
            <div
                onClick={() => router.push("/")}
                className="relative flex items-center h-10 cursor-pointer md:ml-28 my-auto"
            >
                <Image
                    src={Logo}
                    layout="fill"
                    objectFit="contain"
                    objectPosition="left"
                    height={40}
                    width={40}
                />
            </div>

            {/* right */}
            <div className="flex items-center justify-end space-x-4 md:mr-28 text-gray-500">
                <div className="text-black text-base font-semibold cursor-pointer">{`${wallet.substr(0, 5)}...${wallet.substr(wallet.length - 4)}`}</div>
            </div>
        </header>

        {
            learnWeb3NFTs.length && buildSpaceNFTs.length &&
            <NFTCard learnWeb3NFTs={learnWeb3NFTs} buildSpaceNFTs={buildSpaceNFTs} />
        }
    </div>
  )
}

export default profiles