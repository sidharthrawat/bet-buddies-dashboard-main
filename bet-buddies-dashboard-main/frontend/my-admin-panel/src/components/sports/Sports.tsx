import { useEffect, useState } from 'react'
import { Button, Layout } from 'antd'
import Sidebar from '../sidebar/Sidebar';
import axios from 'axios';
import HeaderContent from '../header/HeaderContent';
import './sports.css'

type Props = {}

const {Header, Sider, Content} = Layout;




function Sports({}: Props) {

    const [cricketData, setCricketData] = useState([]);

    const arr:any=[]

    const getMatches = ()=> {
        axios.get('http://43.205.50.127:9000/betfair_api/active_match/4').then((response)=>{
        
        const getData = response.data.data;
        // console.log(response.data.data)

        for(let i in getData){
            arr.push(response.data.data[i].matchName)
            setCricketData(arr)
        }
       
        

        console.log(arr);
        console.log(cricketData, "data");
        

        

        })
    } 
    
    useEffect(()=>{
        getMatches()
    }, [])



  return (
    <div>
        <Layout>
            <Sider width={'270px'}>
                <Sidebar/>
            </Sider>
            <Layout>
                <Header className='header'>
                    <HeaderContent heading='SPORTS' profile={{title: 'Hello', name: 'Sunny'}}  />
                </Header>
                <Content className='content'>
                        
                <h1 className='header-bar'>All Sports</h1>
                <div className="sports-button-container">
                    <Button className='sports-button'>Contribution</Button>
                    <Button className='sports-button'>Live bets</Button>
                </div>
                
                {arr.map((item:any, index:any)=>{
                    return (
                        <>
                        <p style={{color:'#fff'}}>Hello world</p>
                         <p style={{color:'#fff'}}>{item}</p>
                        </>
                    )
                })}
                
                        
                    
                   
                </Content>
            </Layout>
        </Layout>
    </div>
  )
}

export default Sports