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
        <div className="mx-auto max-w-5xl py-16">
                <div className="group flex flex-row space-x-3">
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

            <div className="group flex flex-row space-x-3 mt-14">
                {
                    buildSpaceNFTs.length && buildSpaceNFTs.map((nft: any, i: any) => 
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