'use client';
import {useEffect, useState} from "react";
import Datagrid from "@/app/components/datagrid";
import SectionHeader from "@/app/components/SectionHeader";
import fetchByType from "@/app/services/fetchByType";

function Series() {
    const [series, setSeries] = useState([]);

    useEffect(() => {
        const fetchDataAsync = async () => {
            try {
                const responseSeries = await fetchByType("series");
                console.log("Response: " + responseSeries.Search[0].Title);
                setSeries(responseSeries.Search);
            } catch (error) {
                throw error;
            }
        };

        fetchDataAsync();
    }, []);


    return (
        <div>
            <div align="right">
                <SectionHeader title="Series"/>
            </div>
            <hr className="divider"/>
            <Datagrid movies={series}/>
        </div>
    )
}

export default Series;