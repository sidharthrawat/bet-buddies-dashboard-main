import { Layout, Button, Table } from "antd"
import Sidebar from "../../sidebar/Sidebar";
import axios from "axios";
import HeaderContent from "../../header/HeaderContent";
import { useState, useEffect } from "react";

type Props = {}

const {Header, Sider, Content} = Layout;


function AllMatches({}: Props) {

    const [matchData, setMatchData] = useState([]);
    
    const columns:any = [
      {
        title: 'S.No',
        index: '1',
        key: '0'
      },
      {
        title: 'Name',
        index: '2',
        key: '1'
      },
      {
        title: 'Type',
        index: '3',
        key: '2'
      }
  ]

    const fetchMatchData = () => {
        axios.get('http://43.205.50.127:9000/betfair_api/active_match/4').then((response)=>{
            console.log(response.data);
            
            setMatchData(response.data.data);

        })
    }

    useEffect(()=>{
        fetchMatchData();
    },[])
    
    
  return (
    <div>
         <Layout>
      <Sider width={'270px'}>
        <Sidebar/>
      </Sider>

      <Layout>
        <Header className='header' style={{height: '19.4vh'}}>
          <HeaderContent heading='Overview'  profile={{title:'Hello', name:'Admin'}} />
        </Header>

        <Content className='content'>

          <h2 style={{color: '#fff'}}>All Matches are diplayed here:</h2>
          {matchData.map((data:any, index)=>{
                return (
                    <div className="match-data">
                      <table style={{color: '#fff', border: '2px white', display:'block'}}>
                        <body>
                        <tr style={{color:'#fff'}}>
                          <td style={{color: '#fff'}}>{data.matchName} </td>
                        </tr>
                        </body>
                        
                      </table>
                        
                    </div>
                )
            })}
            

            
        </Content>
      </Layout>
    </Layout>
    </div>
  )
}

export default AllMatches