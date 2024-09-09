import React from 'react'
import Header from "../Components/Header";
import { motion } from 'framer-motion';
import { StatsCard } from '../Components/StatsCard';
import { CheckCircle, Clock, DollarSign, IndianRupee, ShoppingBag } from 'lucide-react';
import DailyOrders from '../Orders/DailyOrders';
import Distribution from '../Orders/Distribution';
import OrdersTable from '../Orders/OrdersTable';


const orderStats = {
	totalOrders: "1,234",
	pendingOrders: "56",
	completedOrders: "1,178",
	totalRevenue: "$98,765",
};


const OrderPage = () => {
  return (
    <div className='flex-1 overflow-auto relative z-10'>
    <Header title="Order"/>

    <main className='max-w-7xl mx-auto py-6 px-4 lg:px-6'>

    <motion.div
    className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
    initial={{opacity:0,y:20}}
    animate={{opacity:1, y:0}}
    transition={{duration:1}}
    >

  
      <StatsCard name='Total Orders' icon={ShoppingBag} value={orderStats.totalOrders} color='#6366F1' />
					<StatsCard name='Pending Orders' icon={Clock} value={orderStats.pendingOrders} color='#F59E0B' />
					<StatsCard
						name='Completed Orders'
						icon={CheckCircle}
						value={orderStats.completedOrders}
						color='#10B981'
					/>
          
					<StatsCard name='Total Revenue' icon={IndianRupee} value={orderStats.totalRevenue} color='#EF4444' />
    </motion.div>

   

    <div className='grid grid-col-1 lg:grid-cols-2 gap-6'>
      <DailyOrders/>
      <Distribution/>

    </div>
     <OrdersTable/>
  </main>
  </div>
  )
}

export default OrderPage