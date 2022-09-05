import type { NextPage } from 'next'
import { LockClosedIcon } from '@heroicons/react/20/solid'
import Logo from "../assets/logo-blue.png";
import Image from 'next/image';

const Home: NextPage = () => {
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
