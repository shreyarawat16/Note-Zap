import { ZapIcon } from 'lucide-react'
import React from 'react'

const RateLimit = () => {
  return (
    <div className="bg-primary/10 border-b-primary/30 w-160 mx-auto mt-2 rounded-lg shadow-md flex justify-between items-center py-8 px-6">
      <div className="bg-primary/20 rounded-full p-4 flex-shrink-0">
        <ZapIcon className="size-10 text-primary"/>
      </div>
      <div>
        <h3 className="text-xl font-bold mb-2">Rate Limit Reached</h3>
        <p className="text-base-content mb-1">You've made too many requests in a short period. Please wait a second.</p>
        <p className="text-sm text-base-content">Try again in a few seconds for the best experience.</p>
      </div>
    </div>
  )
}

export default RateLimit
