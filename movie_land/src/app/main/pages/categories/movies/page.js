'use client';
import {useEffect, useState} from "react";
import Datagrid from "@/app/components/datagrid";
import SectionHeader from "@/app/components/SectionHeader";
import fetchByType from "@/app/services/fetchByType";

function Movies() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchDataAsync = async () => {
            try {
                const responseMovies = await fetchByType("movie");
                console.log("Response: " + responseMovies.Search[0].Title);
                setMovies(responseMovies.Search);
            } catch (error) {
                throw error;
            }
        };

        fetchDataAsync();
    }, []);


    return (
        <div>
            <div align="right">
                <SectionHeader title="Movies"/>
            </div>
            <hr className="divider"/>
            <Datagrid movies={movies}/>
        </div>
    )
}

export default Movies;