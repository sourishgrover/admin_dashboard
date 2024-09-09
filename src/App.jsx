import React from 'react'
import { Route, Routes } from 'react-router-dom'
import OverviewPage from './Pages/OverviewPage'
import ProductsPage from './Pages/ProductsPage'
import Sidebar from './Components/Sidebar'
import UsersPage from './Pages/UsersPage'
import SalesPage from './Pages/SalesPage'
import OrderPage from './Pages/OrderPage'
import AnalyticsPage from './Pages/AnalyticsPage'
import SettingsPage from './Pages/SettingsPage'



const App = () => {
  return (
    <>
     <div className='flex h-screen bg-gray-950 text-white overflow-hidden'>

      <div className='fixed inset-0 z-0'>
        <div className='absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-700 to-gray-800 opacity-80'/>

        <div  className='absolute inset-0 backdrop-blur-sm'/>

      </div>

      <Sidebar/>
     <Routes>
      <Route path="/" element={<OverviewPage/>}/>
      <Route path="/products" element={<ProductsPage/>}/>
      <Route path="/users" element={<UsersPage/>}/>
      <Route path="/sales" element={<SalesPage/>}/>
      <Route path="/order" element={<OrderPage/>}/>
      <Route path="/analytics" element={<AnalyticsPage/>}/>
      <Route path="/settings" element={<SettingsPage/>}/>
    </Routes>
     </div>
    
    </>
  )
}

export default App