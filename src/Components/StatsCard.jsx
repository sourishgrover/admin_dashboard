import React from 'react'
import { motion } from 'framer-motion'

export const StatsCard = ({name , icon:Icon , content , color}) => {
  return (
    <motion.div
     className='bg-gray-900 bg-opacity-50 backdrop-blur-md overflow-hidden shadow-lg rounded-xl border border-gray-700'
     whileHover={{y: -5, boxShadow: "0 20px 50px -12px rgba(0, 0, 0, 0.5)"}}
    >
      <div className='px-4 py-5 sm:p-6'>
       <span className='flex items-center text-gray-100 font-medium text-sm'>
       <Icon size={20} className="mr-2" style={{color}}
       />
       {name}
       </span>
       <p className='mt-1 text-3xl font-semibold text-gray-100'>{content}</p>
      </div>

    </motion.div>
  )
}
