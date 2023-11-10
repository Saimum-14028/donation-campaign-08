import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    const local = JSON.parse(localStorage.getItem('donated'));
    let length = 0;

    if(local)
        length = local.length;

  //  console.log(length);

    const data = [
        { name: 'Group A', value: length},
        { name: 'Group B', value: 12-length},
      
      ];
      
      const COLORS = ['#00C49F', '#FF8042'];
      
      const RADIAN = Math.PI / 180;
      const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);
      
        return (
          <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(1)}%`}
          </text>
        );
      };
    return (
        <div>
            <div className='flex justify-center items-center'>
                <PieChart width={400} height={400}>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={200}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                </PieChart>
            </div>
            <div className='text-lg font-normal md:flex my-5 md:gap-5 content-center justify-center'>
                <div className='flex mb-5 md:mb-0 gap-5'>
                    <p>Your Donation</p>
                    <p className='bg-[#00C49F] text-[#00C49F] w-28'>Donation</p>
                </div>
                <div className='flex gap-5'>
                    <p>Total Donation</p>
                    <p className='bg-[#FF8042] text-[#FF8042] w-28'>Donation</p>
                </div>
            </div>
        </div>
    );
};

export default Statistics;