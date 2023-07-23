import {Button, Layout} from 'antd'
import Sidebar from '../sidebar/Sidebar';
import axios from 'axios';
import HeaderContent from '../header/HeaderContent';
import MainContent from '../content/Content'
import './mainLayout.css'
import Icon from '../../images/random2.svg';
import Users from '../../images/users.png'
import Ball from '../../images/basketball.png'
import Live from '../../images/live.png'
import Icon2 from '../../images/random.svg'
import { useEffect, useState } from 'react';
import LiquidityGraph from '../graphs/liquidityPool/LiquidityGraph';
import DepositsGraph from '../graphs/deposits/DepositsGraph';
import DoughnutCard from '../Doughnut/DoughnutCard';



const { Header, Footer, Sider, Content } = Layout;

type Props = {}

function MainLayout({}: Props) {
 
  const [totalUsers, setTotalUsers] = useState() // check
  const [totalMatches, setTotalMatches] = useState();
  const [liveMatches, setLiveMatches] = useState(0)

  const chartData = [25, 3];
  const chartLabels =['Yellow', 'blue']

  const getUsers = ()=> {
    axios.get('http://localhost:8000/users').then((response)=>{
      console.log(response.data)
      setTotalUsers(response.data.length)
      
    })
  } 

  useEffect(()=>{
    getUsers();
  }, [])

  const getMatches = () => {
    axios.get('http://43.205.50.127:9000/betfair_api/active_match/4').then((response)=>{
      // console.log(response.data.data[0].inPlay);
      setTotalMatches(response.data.data.length);

      const arr = [];
      for(let i in response.data.data){


        let checkIsLive = response.data.data[i].inPlay
        
        // console.log(response.data.data[i].inPlay);
        if(checkIsLive){
          // console.log('heya true');
          arr.push(checkIsLive);
          setLiveMatches(arr.length)
          
          
          
          
        }
        
        
        
      }
      console.log(arr.length);
      
      
      
    })

  }

  useEffect(()=>{
    getMatches();
  },[])

  return (
    <div className='main-div'>
    <Layout>
      <Sider width={'270px'}>
        <Sidebar/>
      </Sider>

      <Layout>
        <Header className='header'>
          <HeaderContent heading='OVERVIEW'  profile={{title:'Hello', name:'Admin'}} />
        </Header>
        <Content className='content'>
          <div className="wrapper">
            <MainContent heading='Total Number of Users' icon={Users} statNumber={totalUsers} footer={{title:'From last week', statNumber:'+24%'}}  />
            <MainContent heading='Total Number of Matches' icon={Ball} statNumber={totalMatches} footer={{title:'From last week', statNumber:'+7%'}}  />
            <MainContent heading='Number of live matches' icon={Live} statNumber={liveMatches} footer={{title:'Live', statNumber:''}}  />
            
                            
          
          </div>

            <div className='graphs'>
              <LiquidityGraph data={chartData} labels={chartLabels} />
              <DepositsGraph />
            </div>

            

            
            
            
          
          
            
           </Content>
      </Layout>
    </Layout>
  
    

    </div>
  )
}

export default MainLayout