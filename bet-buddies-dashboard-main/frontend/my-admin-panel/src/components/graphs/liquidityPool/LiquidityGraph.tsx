import React from 'react'
import './liquidityGraph.css'
import image1 from './image1.png'
import image2 from './image2.png'
import { Doughnut } from 'react-chartjs-2'
import Data from '../../reusableComponent/Data'
import axios from 'axios'
import { useState } from 'react'
import {Chart, ArcElement} from 'chart.js'
import DoughnutCard from '../../Doughnut/DoughnutCard'



Chart.register(ArcElement);

interface LiquidityGraphProps {
  data: number[],
  labels: string[]
}


function LiquidityGraph(props: LiquidityGraphProps) {

  const {data, labels} = props;

  const chartData = {
    labels: labels,
    datasets: [
      {
        data: data,
        backgroundColor: ['rgb(250,60,46)', 'rgb(255,195,3)'],
      },
    ],
  };

    

    const [totalUsers, setTotalUsers] = useState();

    axios.get('http://localhost:8000/users').then((response) => {
       
        setTotalUsers(response.data.length)

    })


  return (
    <>
    
        <div className='main-container'>
            <h3 className='liquidity-graph-header-text'>Total Users</h3>
            <div className="liquidity-graph-container">
              <Doughnut data={chartData} color={'black'} />
            </div>
            
          <div className="data-wrapper">

            <Data graphHeading='' image={image1} heading={'Total users'} total={totalUsers} extra={'+37%'} />
            <Data graphHeading='' image={image2} heading={'Active Users'} total={'456'} extra={'+12%'} />
 
          </div>
     
        </div>

        
    </>
        
  )
}

export default LiquidityGraph


// jugni