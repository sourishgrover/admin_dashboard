import React from 'react'
import OverviewCard from '../Analytics/OverviewCard'
import Revenue from '../Analytics/Revenue'
import ChannelPerformance from '../Analytics/ChannelPerformance'
import CustomerSeg from '../Analytics/CustomerSeg'
import UserRetention from '../Analytics/UserRetention'
import AiInsight from '../Analytics/AiInsight'
import Header from '../Components/Header'
import ProductPerformnce from '../Analytics/ProductPerformnce'

const AnalyticsPage = () => {
  return (
    <div className='flex-1 overflow-auto relative z-10 bg-gray-900'>
			<Header title={"Analytics Dashboard"} />

			<main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
				<OverviewCard />
				<Revenue />

				<div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8'>
					<ChannelPerformance />
					<ProductPerformnce/>
					<UserRetention />
					<CustomerSeg />
				</div>

				<AiInsight />
			</main>
		</div>
  )
}

export default AnalyticsPage