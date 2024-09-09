import React from 'react'
import Header from '../Components/Header'
import { StatsCard } from '../Components/StatsCard'
import { motion } from 'framer-motion'
import { ShoppingBag, User, Zap } from 'lucide-react'
import SalesOverview from '../overviewPage/SalesOverview'
import CategoryDistChart from '../overviewPage/CategoryDistChart'
import SalesChannelChart from '../overviewPage/SalesChannelChart'

const OverviewPage = () => {
  return (
    <>
    <div className='flex-1 overflow-auto relative z-10'>
          <Header title="Overview"/>

          <main className='max-w-7xl mx-auto py-6 px-4 lg:px-6'>

            <motion.div
            className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
            initial={{opacity:0,y:20}}
            animate={{opacity:1, y:0}}
            transition={{duration:1}}
            >
              <StatsCard name="Total Sales" icon={Zap} content="12000 rupees" color='#6366F1'/>
              <StatsCard name="New Users" icon={User} content="1,223" color='#8B5CF6'/>
              <StatsCard name="Total Products" icon={ShoppingBag} content='567' color='#EC4899'/>
              <StatsCard name="Conversion Rate" icon={Zap} content='10.5%' color='#10B981'/>
            </motion.div>

            <div className='grid grid-col-1 lg:grid-cols-2 gap-6'>
            <SalesOverview/>
            <CategoryDistChart/>
            <SalesChannelChart/>
            </div>

          </main>
    </div>

    
    
    </>
  )
}

export default OverviewPage