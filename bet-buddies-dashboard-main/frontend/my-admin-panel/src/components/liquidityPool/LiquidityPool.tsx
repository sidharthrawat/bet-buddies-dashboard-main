import './liquidityPool.css'
import { Layout } from 'antd'
import Sidebar from '../sidebar/Sidebar';
import HeaderContent from '../header/HeaderContent';
import DoughnutCard from '../Doughnut/DoughnutCard';


type Props = {}

const {Header, Footer, Sider, Content} = Layout;

function LiquidityPool({}: Props) {
  return (
    <>
     <Layout>
      <Sider width={'270px'}>
        <Sidebar/>
      </Sider>

      <Layout>
        <Header className='header'>
          <HeaderContent heading='LIQUIDITY POOL'  profile={{title:'Hello', name:'Admin'}} />
        </Header>
        <Content className='content'>
          <div className="doughnutcard-wrapper">
           <DoughnutCard />
           <DoughnutCard />
           <DoughnutCard />
                            
          
          </div>

            <div className='graphs'>
              
            </div>

            

            
            
            
          
          
            
           </Content>
      </Layout>
    </Layout>
  
    
    </>
  )
}

export default LiquidityPool