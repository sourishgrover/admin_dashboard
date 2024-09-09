import React from 'react'
import Header from "../Components/Header";
import { motion } from 'framer-motion';
import { StatsCard } from '../Components/StatsCard';
import { CreditCard, IndianRupee, ShoppingCart, TrendingUp } from 'lucide-react';
import SalesOverView from '../Sales/SalesOverView';
import CatagorySales from '../Sales/CatagorySales';
import SalesTrend from '../Sales/SalesTrend';



const salesStats = {
	totalRevenue: "1,234,567",
	averageOrderValue: "$78.90",
	conversionRate: "3.45%",
	salesGrowth: "12.3%",
};

const SalesPage = () => {
  return (
    <div className='flex-1 overflow-auto relative z-10'>
      <Header title="Sales"/>

      <main className='max-w-7xl mx-auto py-6 px-4 lg:px-6'>

      <motion.div
      className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
      initial={{opacity:0,y:20}}
      animate={{opacity:1, y:0}}
      transition={{duration:1}}
      >
        <StatsCard name='Total Revenue' icon={IndianRupee} value={salesStats.totalRevenue} color='#6366F1'/>
        <StatsCard name='Avg. Order Value'
						icon={ShoppingCart}
						value={salesStats.averageOrderValue}
						color='#10B981'/>
        <StatsCard name='Conversion Rate'
						icon={TrendingUp}
						value={salesStats.conversionRate}
						color='#F59E0B'/>
        <StatsCard  name='Sales Growth' icon={CreditCard} value={salesStats.salesGrowth} color='#EF4444'/>
      </motion.div>

     <SalesOverView/>

      <div className='grid grid-col-1 lg:grid-cols-2 gap-6'>
        <SalesTrend/>
          <CatagorySales/>

      </div>

    </main>
    </div>
  )
}

export default SalesPage