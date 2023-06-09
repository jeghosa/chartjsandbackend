import {Pie} from "react-chartjs-2"
//  import {Chart as ChartJS} from "chart.js/auto"
const Piechrt = ({cdata})=>{



    return(<div style={{height:400,width:500}}>
        
        <Pie data={cdata}/>
    </div>)

}
export default Piechrt