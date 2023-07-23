
import {Layout, Button, Table} from 'antd'
import Sidebar from '../sidebar/Sidebar';
import HeaderContent from '../header/HeaderContent';
import { useNavigate } from 'react-router-dom';
import './deposits.css'

type Props = {}


const { Header, Sider, Content } = Layout;



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

]




function Withdrawal({}: Props) {

  const navigate = useNavigate();

  return (
    <div className='main-div'>
      <Layout>
      <Sider width={'270px'}>
        <Sidebar/>
      </Sider>

      <Layout>
        <Header className='header'>
          <HeaderContent heading='WITHDRAWALS'  profile={{title:'Hello', name:'Admin'}} />
        </Header>
        <Content className='content'>
            {/* <MainContent heading='Total Number of Users' icon={Icon} statNumber={totalUsers} footer={{title:'From last week', statNumber:'+24%'}}  />
            <MainContent heading='Total Number of Matches' icon={Icon} statNumber={totalMatches} footer={{title:'From last week', statNumber:'+7%'}}  />
            <MainContent heading='Number of live matches' icon={Icon2} statNumber={liveMatches} footer={{title:'Live', statNumber:''}}  /> */}
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

export default Withdrawal