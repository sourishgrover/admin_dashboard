import React from 'react'
import Header from "../Components/Header";
import { motion } from 'framer-motion'
import { UserCheck, UserIcon, UserPlus, UserX } from 'lucide-react';
import { StatsCard } from '../Components/StatsCard';
import UserGrowthCHart from '../Users/UserGrowthCHart';
import UserTable from '../Users/UserTable';
import DemographyCHart from '../Users/DemographyCHart';
import ActivityHeatMap from '../Users/ActivityHeatMap';

const UsersPage = () => {
  return (
    <div className='flex-1 overflow-auto relative z-10'>
    <Header title="Users"/>

    <main className='max-w-7xl mx-auto py-6 px-4 lg:px-6'>

      <motion.div
      className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
      initial={{opacity:0,y:20}}
      animate={{opacity:1, y:0}}
      transition={{duration:1}}
      >
        <StatsCard name="Total Users" icon={UserIcon} content="12000 " color='#6366F1'/>
        <StatsCard name="New Users Today" icon={UserPlus} content="1,023" color='#10B981'/>
        <StatsCard name="Active Users" icon={UserCheck} content='567' color='#F59E0B'/>
        <StatsCard name="Churn Rate" icon={UserX} content='17.5%' color='#10B981'/>
      </motion.div>

      <UserTable/>

      <div className='grid grid-col-1 lg:grid-cols-2 gap-6'>
          <UserGrowthCHart/>
          <ActivityHeatMap/>
          <DemographyCHart/>
      </div>

    </main>
</div>
  )
}

export default UsersPage