import {instance} from "./instance";

export const getSalesData = async () => {
        const {data} = await instance.get("/data");
        console.log(data)
        return data;
}