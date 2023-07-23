import React, { useEffect } from 'react'
import { Layout } from 'antd';
import { useState } from 'react';
import axios from 'axios';
import Sidebar from '../../sidebar/Sidebar';
import HeaderContent from '../../header/HeaderContent';

type Props = {}

const {Header, Sider, Content} = Layout;








function LiveMatches({}: Props) {

  const [matches, setMatches] = useState([]);



  const getMatches = () => {
    axios.get('http://43.205.50.127:9000/betfair_api/active_match/4').then((response) => {
      console.log(response.data.data);


      
      // for(let i in response.data.data){
      //   console.log(response.data.data[i].inPlay);

      //   let checkIsLive = response.data.data[i].inPlay;
      //   if(checkIsLive){
          
      //   }

        
      // }
      // console.log(arr);
      

      // setMatches(arr)
      
      
      
    })
    // setMatches(arr)
  }

  useEffect(() => {
    getMatches();
  })


  return (
    <div>
      <Layout>
            <Sider width={'270px'}>
                <Sidebar/>
            </Sider>
            <Layout>
                <Header className='header'>
                    <HeaderContent heading='Users' profile={{title: 'Hello', name: 'Sunny'}}  />
                </Header>
                <Content className='add-platform-content'>
                        
                <h1 className='header-bar'>All Live Matches</h1>
                <div className="user-table">
                  {matches.map((item:any, index) => {
                    return (
                      <>{item.matchName}</>
                    )
                  })}
                </div>
                        
                    
                   
                </Content>
            </Layout>
        </Layout>
    </div>
  )
}

export default LiveMatches