import React from 'react'
import Image from 'next/image';

interface Props {
    learnWeb3NFTs: any;
    buildSpaceNFTs: any

}

function NFTCard({ learnWeb3NFTs, buildSpaceNFTs }: Props) {
    console.log(learnWeb3NFTs)
    console.log(buildSpaceNFTs)
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
                                    <a className="mt-1 text-base font-semibold text-gray-500" target={"_blank"} href={`https://polygonscan.com/address/${nft.contract.address}`}>
                                        View on polygon scan
                                    </a>
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
                                    <Image
                                        src={nft.media[0].gateway}
                                        alt="buildSpaceNFTs"
                                        layout='fill'
                                        className="rounded-xl "
                                    />
                                </div>
                                <p className="mt-1 text-base font-semibold text-black">Id: {nft.id.tokenId.substr(nft.id.tokenId.length -4)}</p>
                                <p className="mt-1 text-base font-semibold text-black">{nft.description?.substr(0, 150)}</p>
                                <a className="mt-1 text-base font-semibold text-gray-500" target={"_blank"} href={`https://polygonscan.com/address/${nft.contract.address}`}>
                                    View on polygon scan
                                </a>
                            </div>
                        )
                    )
                }
            </div>
        </div>
    )
}

export default NFTCard;