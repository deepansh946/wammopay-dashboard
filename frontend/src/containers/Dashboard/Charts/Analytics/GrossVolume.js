import React, { PureComponent } from 'react';
import { AreaChart, Area, CartesianGrid, Tooltip } from 'recharts';

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100
  }
];

export default class GrossVolume extends PureComponent {
  render() {
    return (
      <div>
        <h3>Gross Volume</h3>
        <div
          className="row"
          style={{
            justifyContent: 'space-evenly',
            alignItems: 'center'
          }}
        >
          <div
            className="col-md-3 row"
            style={{
              justifyContent: 'space-evenly',
              alignItems: 'center'
            }}
          >
            <h6>$120.25</h6>
            <h6>+10%</h6>
            <h6>$13.83</h6>
          </div>
          <AreaChart
            width={650}
            height={100}
            data={data}
            margin={{
              top: 20,
              bottom: 20
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            {/* <XAxis dataKey="name" />
        <YAxis /> */}
            <Tooltip />
            <Area
              type="monotone"
              dataKey="pv"
              stackId="1"
              stroke="#5E77FF"
              fill="#5E77FF"
            />
          </AreaChart>
        </div>
      </div>
    );
  }
}
