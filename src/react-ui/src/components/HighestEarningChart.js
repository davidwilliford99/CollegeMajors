import { React } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

/**
 * Using Recharts Bar Chart
 */

export const HighestEarningChart = (props) => {

    const majors = props.majors;

    return (
        <ResponsiveContainer width="100%" height="100%" className='max-h-96'>
            <BarChart
            width={500}
            height={200}
            data={majors}
            margin={{
                top: 30,
                right: 30,
                left: 30,
                bottom: 5,
            }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis tick={false} dataKey="name"/>
                <YAxis tickCount={8} fontSize={20}/>
                <Tooltip position={{ x: 0, y: 300 }} wrapperStyle={{fontSize: "25px", color: "#1e1e1e"}}/>
                <Bar dataKey="medianSalary" fill="#0e7490" unit={" USD"}/>
            </BarChart>
        </ResponsiveContainer>
    );
}
