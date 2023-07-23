import { Button, Layout,Select } from 'antd'
import { useState } from 'react';
import {Table} from 'antd';
import HeaderContent from '../header/HeaderContent'
import Sidebar from '../sidebar/Sidebar'
import './allTransactions.css'
import { useNavigate } from 'react-router-dom';
type Props = {}

const { Header, Sider, Content } = Layout;

function AllTransactions({ }: Props) {

  const navigate = useNavigate();

  const [getData, setGetData] = useState('');

  const columns = [
    {
      title: 'Transaction_ID',
      dataIndex: 'transaction_id',
      key: 'transaction_id',
    },
    {
      title: 'Coin',
      dataIndex: 'coin',
      key: 'coin',
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type'
    },
    {
      title: 'Note',
      dataIndex: 'note',
      key: 'note',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    
  ]
  

  const dataSource = [
  {
    key: '1',
    transaction_id: '1234567890',
    coin: 'Bitcoin',
    amount: '5678',
    type: 'deposit',
    note: 'Loren ipsum del alor',
    status: 'Successful'
  },
  {
    key: '2',
    transaction_id: '34567890',
    coin: 'Dogecoin',
    amount: '234',
    type: 'withdraw',
    note: 'Loren ipsum del alor',
    status: 'Cancelled'
  },
  {
    key: '3',
    transaction_id: '93749883927',
    coin: 'Litecoin',
    amount: '80',
    type: 'withdraw',
    note: 'Loren ipsum del alor',
    status: 'Pending'
  },
  {
    key: '4',
    transaction_id: '1234567890',
    coin: 'Litecoin',
    amount: '12345',
    type: 'deposit',
    note: 'Loren ipsum del alor',
    status: 'Successful'
  },
  // {
  //   key: '2',
  //   name: 'John',
  //   age: 42,
  //   address: '10 Downing Street',
  // },
  // {
  //   key: '1',
  //   name: 'Mike',
  //   age: 32,
  //   address: '10 Downing Street',
  // },
  // {
  //   key: '2',
  //   name: 'John',
  //   age: 42,
  //   address: '10 Downing Street',
  // },
  ]

 


  // axios.get('http://localhost:8000/add-token').then((response)=>{
  //   for(let each in response.data){
  //     console.log(response.data[each].name);
  //   }
    
    
  // })




  return (
    <div>

      <Layout>
        <Sider width={'270px'}>
          <Sidebar />
        </Sider>
        <Layout>
          <Header style={{ height: '19vh' }} className='header'>
            <HeaderContent heading='TRANSACTIONS' profile={{ title: 'Hello', name: 'Sunny' }} />
          </Header>
          <Content className='content'>
            {/* <h2 style={{color: '#fff', marginTop: '2rem'}}>All transactions will be displayed here</h2> */}
            <div className="transactions-button-container">
              <Button className='transaction-button' onClick={()=>{navigate('/transactions/all-transactions')}}>All Transactions</Button>
              <Button className='transaction-button' onClick={()=>{navigate('/transactions/deposits')}}>Deposits</Button>
              <Button className='transaction-button' onClick={()=>{navigate('/transactions/withdrawal')}}>Withdrawal</Button>
            </div>
            
            <div className='parent'>
            <Table 
            dataSource={dataSource}
            columns= {columns} 
            // className='transaction-table' 
            style={{backgroundColor: "transparent", border:'2px solid rgb(35,80,138)', color:'#fff', borderRadius: '10px', marginTop:'2rem'}} 
            bordered={true}
            size= 'large'
             />
            </div>
           
          </Content>
        </Layout>


      </Layout>


    </div>
  )
}

export default AllTransactions