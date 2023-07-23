import './login.css'
import { useState } from 'react'
import axios from 'axios'
import {Layout} from 'antd'
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons'
import HeaderContent from '../header/HeaderContent'
import Sidebar from '../sidebar/Sidebar'
import { useNavigate } from 'react-router-dom'
import {Button, Input} from 'antd'


type Props = {}

const {Header, Content, Sider, Footer} = Layout;

function Login({}: Props) {

    const navigate= useNavigate();

    const [email, setEmail]= useState();
    const [password, setPassword]= useState();
    const [view, setView]= useState(false);
    const [errorMessage, setErrorMessage]= useState('');



    const handleSubmit = async (e:any)=>{
        e.preventDefault();

        await axios.post('http://localhost:8000/login', {
            email: email,
            password: password
        }).then((response)=>{

            if(email!==email || password!==password){
                setErrorMessage('Enter correct account details');
                console.log('Enter correct account details'); 
            }
            else{
                console.log(response);
                navigate('/dashboard');
            }
        })
    }

    

  return (
    <div className='app'>
        {/* <div>
            <h1>Welcome Admin</h1>
            <p>Enter your credentials to get going:</p>
        </div>
        <div className='content'>
            <form className='login-form' onSubmit={handleSubmit} >
                <div className='input'>
                    <Input className='input-bar' required placeholder='email' onChange={(e:any)=>{setEmail(e.target.value)}} />
                    <Input type={view ? "text" : "password"} placeholder="Password" required className='input-bar' onChange={(e:any)=>{setPassword(e.target.value)}} />
                    {
                        view ? <span onClick={() => setView(!view)} className="view-password"><EyeOutlined className="eye-view" /></span>  : <span onClick={() => setView(!view)} className="eye-view" ><EyeInvisibleOutlined className="eye-view" /></span>
                    }
                    
                </div>
                
            </form>
            
        </div> */}
        {/* <p>{errorMessage}</p> */}
        <Layout>
            {/* <Sider>
                <Sidebar />
            </Sider> */}
            <Layout>
                <Header style={{height: '20vh'}}>
                    <div className='header-content'>
                        <h1 className='heading'>LOGIN</h1>
                    </div>
                </Header>   
                <Content style={{backgroundColor: 'rgb(0,22,40)'}}>
                    <div className='main-content'>
                        <form className='login-form' onSubmit={handleSubmit} >
                        <div className='input-email'>
                            <Input className='input-bar' required placeholder='email' onChange={(e:any)=>{setEmail(e.target.value)}} />
                            <div className='input-password'>
                                <Input type={view ? "text" : "password"} placeholder="Password" required className='input-bar' onChange={(e:any)=>{setPassword(e.target.value)}} />
                                {
                                    view ? <span onClick={() => setView(!view)} className="view-password"><EyeOutlined className="eye-view" /></span>  : <span onClick={() => setView(!view)} className="eye-view" ><EyeInvisibleOutlined className="eye-view" /></span>
                                }
                            </div>
                           
                            
                        </div>
                        
                    </form>
                    </div>
                    
                <div className="button-container">
                    <Button type='primary' onClick={handleSubmit} className='button'>Sign In</Button>
                 </div>
                </Content>
            </Layout>
            
        </Layout>

        
    </div>
  )
}

export default Login