"use client"
import Image from 'next/image';
import React, { PureComponent } from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Lunes',
        presente: 20,
        inasistente: 35,
    },
    {
        name: 'Martes',
        presente: 33,
        inasistente: 22,
    },
    {
        name: 'Miercoles',
        presente: 40,
        inasistente: 15,
    },
    {
        name: 'Jueves',
        presente: 25,
        inasistente: 25,
    },
    {
        name: 'Viernes',
        presente: 45,
        inasistente: 10,
    },
];

const Attendance = () => {
    return (
        <div className='bg-white rounded-lg p-4 h-full'>
            <div className=''>
                <h1>Attendance</h1>
                <Image src="/moreDark.png" alt="" width={20} height={20} />
            </div>
            <ResponsiveContainer width="100%" height="90%">
                <BarChart width={500} height={300} data={data} barSize={20}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ddd" />
                    <XAxis 
                        dataKey="name" 
                        axisLine={false}
                        tick={{ fill: "#d1d5db"}}
                        tickLine={false}
                    />
                    <YAxis 
                        axisLine={false} 
                        tick={{ fill: "#d1d5db" }} 
                        tickLine={false} 
                    />
                    <Tooltip 
                       contentStyle={{ borderRadius: "10px", borderColor: "lightgray" }}
                    />
                    <Legend
                        align="left"
                        verticalAlign="top"
                        wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px" }}
                    />
                    <Bar dataKey="presente" 
                    fill="#FAE27C" 
                    legendType="circle" radius={[10, 10, 0, 0]} />
                    <Bar dataKey="inasistente" 
                    fill="#C3EBFA" 
                    legendType="circle" radius={[10, 10, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Attendance