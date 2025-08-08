import { ZapIcon } from 'lucide-react'
import React from 'react'

const RateLimit = () => {
  return (
    <div className="bg-primary/10 border-b-primary/30 w-full max-w-xs md:max-w-md lg:max-w-lg xl:max-w-[1180px] mx-auto mt-2 rounded-lg shadow-md flex justify-between items-center py-8 px-6">
      <div className="bg-primary/20 rounded-full p-4 flex-shrink-0 mb-2 sm:mb-0">
        <ZapIcon className="size-10 text-primary"/>
      </div>
      <div className='text-center sm:text-left'>
        <h3 className="text-xl font-bold mb-2">Rate Limit Reached</h3>
        <p className="text-base-content mb-1">You've made too many requests in a short period. Please wait a second.</p>
        <p className="text-sm text-base-content">Try again in a few seconds for the best experience.</p>
      </div>
    </div>
  )
}

export default RateLimit
