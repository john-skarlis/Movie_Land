'use client';
import {useEffect, useState} from "react";
import Datagrid from "@/app/components/datagrid";
import SectionHeader from "@/app/components/SectionHeader";
import fetchByType from "@/app/services/fetchByType";

function Episodes() {
    const [episodes, setEpisodes] = useState([]);

    useEffect(() => {
        const fetchDataAsync = async () => {
            try {
                const responseEpisodes= await fetchByType("series");
                console.log("Response: " + responseEpisodes.Search[0].Title);
                setEpisodes(responseEpisodes.Search);
            } catch (error) {
                throw error;
            }
        };

        fetchDataAsync();
    }, []);


    return (
        <div>
            <div align="right">
                <SectionHeader title="Episodes"/>
            </div>
            <hr className="divider"/>
            <Datagrid movies={episodes}/>
        </div>
    )
}

export default Episodes;