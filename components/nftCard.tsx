import React from 'react'
import Logo from "../assets/logo-blue.png";
import Image from 'next/image';

interface Props {
    nft: any
}

function nftCard({ nft }: Props) {
  return (
    <div className="bg-white">

        <header className="sticky top-0 z-50 grid grid-cols-2 p-5 md:px-10">
            {/* left */}
            <div
                // onClick={() => router.push("/")}
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
                <p className="hidden md:inline-flex text-black text-4xl md:px-12 font-bold cursor-pointer">Kidobiz</p>
            </div>

            {/* right */}
            <div className="flex items-center justify-end space-x-4 md:mr-28 text-gray-500">
                <p className="hidden md:inline-flex text-black text-base font-semibold cursor-pointer">Cart</p>
            </div>
        </header>


        <div className="mx-auto max-w-2xl py-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8">
            {/* {productOne.map((product) => (
                <div key={product.id} className="group relative">
                <div className="h-40 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-64 xl:h-64" onClick={() => productOverview(product.name, product.dsc, product.price, product.imageSrc)}>
                    <Image
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    />
                </div>
                <h3 className="mt-4 text-base text-black font-normal">
                    <a href={product.href}>
                    <span className="absolute inset-0" />
                    {product.name}
                    </a>
                </h3>
                <p className="mt-1 text-base font-semibold text-black">{product.price}</p>
                </div>
            ))} */}
            </div>

            <div className="mt-14 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8">
            {/* {productTwo.map((product) => (
                <div key={product.id} className="group relative">
                <div className="h-40 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-64 xl:h-64">
                    <Image
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    />
                </div>
                <h3 className="mt-4 text-base text-black font-normal">
                    <a href={product.href}>
                    <span className="absolute inset-0" />
                    {product.name}
                    </a>
                </h3>
                <p className="mt-1 text-base font-semibold text-black">{product.price}</p>
                </div>
            ))} */}
            </div>
        </div>
    </div>
  )
}

export default nftCard