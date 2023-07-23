import React from "react";
import "./doughnutCard.css";
import { useState } from "react";
import image1 from "../graphs/liquidityPool/image1.png";
import image2 from "../graphs/liquidityPool/image2.png";
import { Chart as ChartJs, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import Data from "../../components/reusableComponent/Data";

ChartJs.register(ArcElement, Tooltip, Legend);

function DoughnutCard() {
  const data = {
    datasets: [
      {
        data: [8, 3],
        backgroundColor: ["#FB3D2F", "#FFC400"],
        borderColor: ["#FB3D2F", "#FFC400"],
      },
    ],
  };
  const [totalUsers, setTotalUsers] = useState();

  return (
    <div className="cover">
        
      <div className="para">
      </div>
      <div className="circle">
        <Doughnut data={data}></Doughnut>
      </div>
      <div className="UserBet">
      <div className="Data1">
      <Data
        graphHeading='Casino'
        image={image1}
        heading={"Total users"}
        // total={totalUsers}
        total={"3272"}
        extra={"+23.76%"}
      />
      </div>
      <div className="Data2">
      <Data
        graphHeading='Sports'
        image={image1}
        heading={"Total Bet Placed"}
        total={"324"}
        extra={"$345.763"}
      />
      </div>
      </div>
      <div className="data3_container">
      <div className="Data3">
      <Data
        graphHeading='Total Pool'
        image={image2}
        heading={"Active Users"}
        total={"456"}
        extra={"+23.76%"}
      />
    </div>
    </div>
      <button className="Details">Details</button>
    </div>
  );
}

export default DoughnutCard;