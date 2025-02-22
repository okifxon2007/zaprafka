import { useState } from 'react'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import Register from './Pages/Register/Register'
import Login from './Pages/Login/Login'
import Home from './Pages/Home/Home'
import Error from './Pages/Error/Error'
import Dashboard from './Pages/Dashboard/Dashboard'
import Dashboardpages from './Pages/Dashboardpages/Dashboardpages'
import Hisobot from './Pages/Hisobot/Hisobot'
import Userhome from './Pages/Userhome/Userhome'
import Operatorhome from './Pages/Operatorhome/Operatorhome'
import Kirim from './Pages/Kirim/Kirim'
import CreateOrder from './Pages/Createorder/createorder'
import Buyurtmatarix from './Pages/Buyurtmatarix/Buyurtmatarix'
import Bankdata from './Pages/Bankdata/Bankdata'

function App() {
 

  return (
    <>
   <Routes>
    <Route path='/register' element={<Register></Register>}></Route>
    <Route path='/login' element={<Login></Login>}></Route>
    <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>``
    <Route path='/dashboardpages' element={<Dashboardpages></Dashboardpages>}></Route>
    <Route path='/hisobot' element={<Hisobot></Hisobot>}></Route>
    <Route path='/userhome' element={<Userhome></Userhome>}></Route>
    <Route path='/operatorhome' element={<Operatorhome></Operatorhome>}></Route>
    <Route path='/kirimqoshish' element={<Kirim></Kirim>}></Route>
    <Route path='/createorder' element={<CreateOrder></CreateOrder>}></Route>
    <Route path='/buyurtmatarix' element={<Buyurtmatarix></Buyurtmatarix>}></Route>
    <Route path='/enterbankdata' element={<Bankdata></Bankdata>}></Route>
    <Route path='/' element={<Home></Home>}></Route>
    <Route path='*' element={<Error></Error>}></Route>
   </Routes>
     </>
  )
}

export default App
