import React from 'react'

const loading = () => {
  return (
    <div>
          <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
        <div className="flex flex-col items-center gap-4">
          <div className="h-10 w-10 rounded-full border-4 border-[#296374] border-t-transparent animate-spin" />
          <p className="text-[#296374] font-semibold text-lg">
            Loading…
          </p>
        </div>
      </div>
    </div>
  )
}

export default loading