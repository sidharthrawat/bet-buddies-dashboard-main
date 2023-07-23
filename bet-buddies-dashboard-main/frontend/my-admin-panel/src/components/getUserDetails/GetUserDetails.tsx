import axios from 'axios'
import { useState, useEffect, useMemo } from 'react'
import Sidebar from '../sidebar/Sidebar'
import HeaderContent from '../header/HeaderContent'
import {Button, Layout, Table} from 'antd'
import './getUserDetails.css'

type Props = {}

const {Header, Sider, Content} = Layout;

function GetUserDetails({}: Props) {

    const [userData, setUserData]:any = useState([]);

    // const table:any = useMemo(() => {

    //     {userData.map((item:any, index)=>{
    //         return(
    //             <>
    //                 <p>{item.fullName}</p>
    //             </>
    //         )
    //     })}
        

    // },[userData]);

    const getUsers = () => {
        axios.get('http://localhost:8000/users').then((response)=>{

        console.log(response.data)
        setUserData(response.data)
        
        
    })
    }
    

    



    useEffect(()=>{
        getUsers();
    }, [])




  return (
    <div className='main-div'>
        <Layout>
            <Sider width={'270px'}>
                <Sidebar/>
            </Sider>
            <Layout>
                <Header className='header'>
                    <HeaderContent heading='USERS' profile={{title: 'Hello', name: 'Sunny'}}  />
                </Header>
                <Content className='content'>
                        
                {/* <h1 className='header-bar'>All current users of Bet-Buddies</h1> */}
                <div className="user-table">
                <table>
                    <th style={{color:'#fff'}}>All Users</th>
                    

                    
                    {userData.map(((item:any, index:any)=>{
                        return (
                            <>

                            <div style={{color:'#fff', border:'1px solid white', width:'340px', textAlign:'center'}}>
                                {item.fullName}
                            </div>

                           
                            </>
                            
                        )
                    }))}
                    </table>
                </div>
                        
                    
                   
                </Content>
            </Layout>
        </Layout>
    </div>
  )
}

export default GetUserDetails