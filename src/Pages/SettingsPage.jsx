import React from 'react'
import Header from "../Components/Header";
import Profile from '../setings/Profile'
import Notification from '../setings/Notification'
import Security from '../setings/Security';
import ConnectedAccount from '../setings/ConnectedAccount';
import DangerZone from '../setings/DangerZone';

const SettingsPage = () => {
  return (
    <div className='flex-1 overflow-auto relative z-10 bg-gray-900'>
    <Header title='Settings' />
    <main className='max-w-4xl mx-auto py-6 px-4 lg:px-8'>
      <Profile />
      <Notification />
      <Security/>
      <ConnectedAccount/>
      <DangerZone/>
      
      
      
    </main>
  </div>
  )
}

export default SettingsPage