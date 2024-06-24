import React, {FC, useEffect} from "react";
import styles from "./chart.module.scss"
import {CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis} from "recharts";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import {getData} from "../../redux/slices/sales";

const Chart: FC<any> = () => {
    const dispatch = useDispatch();
    const data = useSelector((state: RootState) => state.sales.data);

    useEffect(() => {
        dispatch<any>(getData());
    }, [dispatch]);

    return (
        <div className={styles.container}>
            <p className={styles.container_title}>
                Sales by year
            </p>
            <LineChart
                width={1200}
                height={400}
                data={data}
            >
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis dataKey="year"/>
                <YAxis/>
                <Tooltip/>
                <Legend/>
                <Line type="monotone" dataKey="sales" stroke="darkblue"/>
            </LineChart>
        </div>
    )
}

export default Chart;