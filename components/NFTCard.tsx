import React from 'react'
import Image from 'next/image';
import ArrowUpRightIcon from '@heroicons/react/20/solid/ArrowUpRightIcon';

interface Props {
    learnWeb3NFTs: any;
    buildSpaceNFTs: any
}

function NFTCard({ learnWeb3NFTs, buildSpaceNFTs }: Props) {
    
  return (
        <div className="mx-auto max-w-2xl py-16 px-8 lg:max-w-5xl lg:px-2 sm:px-4">
                <div className="group grid grid-cols-1 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-3 md:gap-y-0 lg:gap-x-8">
                    {
                        learnWeb3NFTs && learnWeb3NFTs.map((nft: any, i: any) => 
                             (
                                <div key={i + 1}>
                                    <div className='relative h-80 w-80 '>
                                        <Image
                                            src={nft.media[0].gateway}
                                            alt="learnWeb3NFTs"
                                            layout='fill'
                                            className="rounded-xl"
                                        />
                                    </div>
                                    <p className="mt-1 text-base font-semibold text-black">Id: {nft.id.tokenId.substr(nft.id.tokenId.length -4)}</p>
                                    <p className="mt-1 text-base font-semibold text-black">{nft.title}</p>
                                    <p className="mt-1 text-base font-semibold text-black">{nft.description?.substr(0, 150)}</p>
                                    <div className='flex mt-1 items-center'>
                                        <a className="text-base font-semibold text-gray-500" target={"_blank"} rel="noreferrer" href={`https://polygonscan.com/address/${nft.contract.address}`}>
                                            View on polygon scan
                                        </a>
                                        <ArrowUpRightIcon className='h-5 w-5 text-gray-500 cursor-pointer' />
                                    </div>
                                </div>
                            )
                        )
                    }
            </div>

            <div className="group grid grid-cols-1 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-3 md:gap-y-14 lg:gap-x-8 mt-14">
                {
                    buildSpaceNFTs && buildSpaceNFTs.map((nft: any, i: any) => 
                            (
                            <div key={i + 1}>
                                <div className='relative h-80 w-80'>
                                    {
                                        nft.media[0].raw.includes("mp4") ?
                                            <video 
                                                src={nft.media[0].raw}
                                                className="rounded-xl h-80 w-80"
                                                autoPlay
                                                controls
                                            />
                                        :
                                        <Image
                                            src={nft.media[0].gateway}
                                            alt="buildSpaceNFTs"
                                            layout='fill'
                                            className="rounded-xl "
                                        />
                                    }
                                </div>
                                <p className="mt-1 text-base font-semibold text-black">Id: {nft.id.tokenId.substr(nft.id.tokenId.length -4)}</p>
                                <p className="mt-1 text-base font-semibold text-black">{nft.description?.substr(0, 150)}</p>
                                <div className='flex mt-1 items-center'>
                                    <a className="text-base font-semibold text-gray-500" target={"_blank"} rel="noreferrer" href={`https://polygonscan.com/address/${nft.contract.address}`}>
                                        View on polygon scan
                                    </a>
                                    <ArrowUpRightIcon className='h-5 w-5 text-gray-500 cursor-pointer' />
                                </div>
                            </div>
                        )
                    )
                }
            </div>
        </div>
    )
}

export default NFTCard;