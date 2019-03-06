import React, { PureComponent } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from 'recharts';

export default class TodayTransactionAmountCharts extends PureComponent {
  render() {
    const { chartData } = this.props;
    console.log('Transaction Amount');
    return (
      <AreaChart width={725} height={180} data={chartData}>
        <defs>
          <linearGradient id="colorgross" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
          <linearGradient
            id="colortransactionAverage"
            x1="0"
            y1="0"
            x2="0"
            y2="1"
          >
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="grossVolumeA"
          stroke="#8884d8"
          fillOpacity={1}
          fill="url(#colorgross)"
        />
        <Area
          type="monotone"
          dataKey="grossVolumeB"
          stroke="#82ca9d"
          fillOpacity={1}
          fill="url(#colortransactionAverage)"
        />
      </AreaChart>
    );
  }
}
