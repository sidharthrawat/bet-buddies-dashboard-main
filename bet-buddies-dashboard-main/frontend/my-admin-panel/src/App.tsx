
import logo from './logo.svg';
import './App.css';
import MainLayout from './components/common/MainLayout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './components/login/Login';
import AllTransactions from './components/transactions/AllTransactions';
import Dashboard from './components/dashboard/Dashboard';
import AddPlatform from './components/addPlatform/AddPlatform';
import AddCurrencyToken from './components/addCurrencyToken/AddCurrencyToken';
import GetUserDetails from './components/getUserDetails/GetUserDetails';
import AllMatches from './components/viewMatches/allMatches/AllMatches';
import LiveMatches from './components/viewMatches/liveMatches/LiveMatches';
import Sports from './components/sports/Sports';
import Deposits from './components/transactions/Deposits';
import Withdrawal from './components/transactions/Withdrawal';
import LiquidityPool from './components/liquidityPool/LiquidityPool';
function App() {
  return (
    <div className="App">
      <Router>
        

        <Routes>
          
          
          <Route path='/' element={<Login />} />
          <Route element={<MainLayout />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/add-platform' element={<AddPlatform />} />
          <Route path='/add-currency' element={<AddCurrencyToken />} />
          <Route path='/all-matches' element= {<AllMatches />} />
          <Route path='/live-matches' element={<LiveMatches />} />
          <Route path='/sports' element={<Sports />} />
          <Route path='/users' element={<GetUserDetails />} />
          <Route path='/transactions/all-transactions' element= {<AllTransactions />} />
          <Route path='/transactions/deposits' element={<Deposits />} />
          <Route path='/transactions/withdrawal' element={<Withdrawal />} />
          <Route path='/liquidity-pool' element={<LiquidityPool />} />

        </Routes>
      </Router>
    
    </div>
  );
}

export default App;
