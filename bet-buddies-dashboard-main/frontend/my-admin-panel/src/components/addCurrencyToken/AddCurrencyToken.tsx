import {Layout, Input, Button, Select} from 'antd'
import Sidebar from '../sidebar/Sidebar';
import HeaderContent from '../header/HeaderContent';
import './addCurrencyToken.css'
import axios from 'axios'
import { useState, useEffect } from 'react';

type Props = {}

const {Header, Sider, Content} = Layout;

function AddCurrencyToken({}: Props) {

  const [currencyName, setCurrencyName] = useState('');
  const [currencyDescription, setCurrencyDescription] = useState('');
  const [platformAlreadyPresent, setPlatformAlreadyPresent] = useState([]);


  const fetchPlatformsAlredayPresent = async () => {
    await axios.get('http://localhost:8000/add-platform').then((response) => {

        const data = response.data;
        console.log(data,"hello");
        setPlatformAlreadyPresent(data);



        // setPlatformAlreadyPresent(data);
        
    })
  } 

  useEffect(()=>{
    fetchPlatformsAlredayPresent()
  }, [] )
  const [platformName,setPlatformName]= useState("")
  
  const handleName=(e:any)=>{
    let inputValue= e.target.value
    setPlatformName(inputValue)
  }

  const handleSubmit = (e:any) => {
    e.preventDefault();

    axios.post('http://localhost:8000/add-currency', {
        platform: platformName,
        name: currencyName,
        description: currencyDescription
    }).then((response) => {
      console.log(response);
      alert(response.data)
    })

  }

  return (
    <div>
      
      <Layout>
        
            <Sider width={'270px'}>
                <Sidebar/>
            </Sider>
            <Layout>
                <Header className='header'>
                    <HeaderContent heading='CRYPTO CURRENCY'  profile={{title: 'Hello', name: 'Sunny'}}  />
                </Header>
                <Content className='content'>

                  
              
              
           
                    <div className='add-platform-content-wrapper'>
                        
                        <form className='platform-submit-form' onSubmit={handleSubmit}>
                          <label style={{color: '#fff'}}>
                            <p>Platform-name</p>
                          </label>
                          <div className="platforms-already-present">
                          
                          <select onChange={handleName} className='select-platform'>
                          <option >
                                 <p>Select</p>
                              </option>
                            { platformAlreadyPresent.map((item:any)=>{

                              return (
                                <option >
                                  {item.name}
                                </option>
                              )
                            })}
                          </select>
                          
                           {/* <Select
                              // labelInValue = {false}
                              // mode = {'tags'}
                              placeholder='Type'
                              size='middle'
                              style={{ width: 120 }}
                              // onChange={handleChange}
                              className='select-currency-type'
                              onSelect={(value:any)=>{setPlatformAlreadyPresent(value)}}
                              options= {[platformAlreadyPresent.map((item: any)=>{
                                {item.name}
                              })]}
                              
                              
                            />
                              {platformAlreadyPresent.map((item:any)=>{
                                return (  
                                  <option>
                                    {item.name}
                                  </option>
                                )
                              })}
                            </Select> */}
                            {/* <Input className='platform-input' placeholder='Crypto platform name' /> */}
                         </div>

                          

                            <label style={{color: '#fff'}}>

                              <p>Currency-Name:</p>

                            </label>
                            
                            <Input 
                            placeholder='Enter the currency name'
                            className='platform-input'
                            onChange= {(e:any)=>{setCurrencyName(e.target.value)}}
                             />
                            <label className='' style={{color: '#fff'}}>
                                <p>Currency-Description:</p>
                            </label>
                            <Input 
                            placeholder='Enter currency description' 
                            className='platform-input'
                            onChange={(e:any)=>{setCurrencyDescription(e.target.value)}} />
                            <br />
                            <div className='button-wrapper' style={{display:'flex'}}>
                              <Button type='default' className='add-icon-button'><p className='button-text'>Add-Icon</p></Button>
                              {/* <Input type='file'  className='add-icon-button' /> */}
                              <Button type='default' className='submit-button' onClick={handleSubmit}>Submit</Button>
                            </div>
                            
                        </form>
                    </div>
                    {/* <div className='recently-added'>
                        <h3 className='recently-added-text' style={{color: '#fff'}}>Recently added:</h3>
                        <ul className='recently-added-list' style={{color: '#fff'}}>
                            
                        </ul>
                    </div> */}

                   
                </Content>
            </Layout>
        </Layout>
  {/* <Dropdown menu={{}}></Dropdown> */}
    </div>
  )
}

export default AddCurrencyToken