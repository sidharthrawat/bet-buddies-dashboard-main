import React from 'react'
import { useState, useEffect } from 'react';
import {Layout, Input, Button, Select} from 'antd'
import axios from 'axios'
import Sidebar from '../sidebar/Sidebar';
import HeaderContent from '../header/HeaderContent';
import './addPlatform.css'

type Props = {}

const {Header, Sider, Content}= Layout;

function AddPlatform({}: Props) {


    const [platformName, setPlatformName] = useState('');
    const [platformDescription, setPlatformDescritpion]= useState('');
    const [iconPath, setIconPath] = useState('')
    const [platformAlreadyPresent, setPlatformAlreadyPresent] = useState([]);

    const fetchPlatforms = async () => {
        await axios.get('http://localhost:8000/add-platform').then((response) => {
    
            const data = response.data;
            console.log(data);
            // setPlatformAlreadyPresent(data);
            setPlatformAlreadyPresent(data)
            // setPlatformAlreadyPresent(data);
            
        })
      } 
    
    useEffect(()=>{
        fetchPlatforms();
    }, [])


    const handleSubmit = (e:any) => {
        e.preventDefault();

        axios.post('http://localhost:8000/add-platform', {
            name: platformName,
            description: platformDescription,
            icon: iconPath
        }).then((response) => {
            // console.log(response);
            // console.log(response.data);
            
            alert(response.data)
            
        })
        

    }

    const handleIconChange = (e:any) => {
        console.log(e.target.value, "image url path");
        setIconPath(e.target.value);
        
    }

  return (
    <div>
        <Layout>
            <Sider width={'270px'}>
                <Sidebar/>
            </Sider>
            <Layout>
                <Header className='header'>
                    <HeaderContent heading='CRYPTO PLATFORM'  profile={{title: 'Hello', name: 'Sunny'}}  />
                </Header>
                <Content className='content'>
                    <div className='add-platform-content-wrapper'>
                    
                        
                        <form className='platform-submit-form' onSubmit={handleSubmit}>
                            <div className='button-container'>
                                <Button type='default' className='add-icon-button'><p className='button-text'>Add-Icon</p></Button>

                                <label style={{color: '#fff'}}>
                                    <p className='label-text-name'>Platform-Name:</p>
                                </label>
                                <Input 
                                placeholder='Enter the platform name'
                                className='platform-input'
                                onChange= {(e:any)=>{

                                    setPlatformName(e.target.value);

                                }} />
                                

                            </div>
                        
                            <label style={{color: '#fff'}}>
                                <p className='label-text'>Platform-Description:</p>
                            </label>
                            
                            <Input 
                            placeholder='Enter platform description' 
                            className='platform-description' 
                            onChange={(e:any)=>{
                                setPlatformDescritpion(e.target.value)
                            }}
                             />
                            <br />
                            
                               
                                {/* <Input type='file' className='add-icon-button' onChange={handleIconChange} /> */}
                                <Button type='default' className='submit-button' onClick={handleSubmit}>Submit</Button>

                            
                        </form>
                    </div>
                    {/* <div className='recently-added'>
                        <h3 className='recently-added-text' style={{color: '#fff'}}>Recently added:</h3>
                        <ul className='recently-added-list'>
                            <li style={{color: '#fff'}}>Item1</li>
                            <li style={{color: '#fff'}}>Item2</li>
                        </ul>
                    </div> */}
                    <div className='recently-added'>
                        <h3 className='recently-added-text' style={{color: '#fff'}}>Recently added:</h3>
                        <ul className='recently-added-list' style={{color: '#fff'}}>
                            
                        <div className="recently-added-list-items">
                               
                        
                            </div>
                        </ul>
                    </div>
                    
                   
                </Content>
            </Layout>
        </Layout>
    </div>
  )
}

export default AddPlatform



