'use client';
import {useEffect, useState} from "react";
import Datagrid from "@/app/components/datagrid";
import SectionHeader from "@/app/components/SectionHeader";
import SearchInputElement from "@/app/components/SearchInputElement";
import fetchHome from "@/app/services/fetchHome";

function Home() {
    const [home, setHome] = useState([]);

    useEffect(() => {
        const fetchDataAsync = async () => {
            try {
                const responseHome = await fetchHome();
                console.log("Response: " + responseHome.Search[0].Title);
                setHome(responseHome.Search);
            } catch (error) {
                throw error;
            }
        };

        fetchDataAsync();
    }, []);

    const updateDataGrid = (searchResults) => {
        if (searchResults !== undefined){
            setHome(searchResults);
        }
    };


    return (
        <div>
            <div className="mt-4">
                <SearchInputElement searchText="Movies Series Episodes" onDataUpdate={updateDataGrid}/>
            </div>
            <div align="right">
                <SectionHeader title="Home"/>
            </div>
            <hr className="divider"/>
            <Datagrid movies={home}/>
        </div>
    )
}

export default Home;