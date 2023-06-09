import {Bar} from "react-chartjs-2"
 import {Chart as ChartJS} from "chart.js/auto"
const Barchrt = ({cdata})=>{



    return(<div>
        <Bar data={cdata}/>
    </div>)

}
export default Barchrt