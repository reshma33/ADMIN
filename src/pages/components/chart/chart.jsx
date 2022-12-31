import "./chart.scss"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const data = [
    {
      "name": "Student A",
      "uv": 98,
      "pv": 100,
     
    },
    {
      "name": "Student B",
      "uv": 3000,
      "pv": 1398,
      "amt": 2210
    },
    {
      "name": "Student  C",
      "uv": 2000,
      "pv": 9800,
      "amt": 2290
    },
    {
      "name": "Student  D",
      "uv": 2780,
      "pv": 3908,
      "amt": 2000
    },
    {
      "name": "Student  E",
      "uv": 1890,
      "pv": 4800,
      "amt": 2181
    },
    {
      "name": "Student  F",
      "uv": 2390,
      "pv": 3800,
      "amt": 2500
    },
    {
      "name": "Student e G",
      "uv": 3490,
      "pv": 4300,
      "amt": 2100
    }
  ]

const Chart =()=>{
    return(
    <div className="chart">
        <div className="title">Student Result</div>
        <AreaChart width={730} height={400} data={data}
  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="name" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
    </linearGradient>
  
  </defs>
  <XAxis dataKey="name"  stroke="gray"/>

  <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
  <Tooltip />
  <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
  <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
</AreaChart>


  </div>
    )
}


export default Chart