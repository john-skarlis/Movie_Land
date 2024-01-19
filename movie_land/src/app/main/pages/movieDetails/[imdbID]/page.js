'use client'

import {useEffect, useState} from "react";
import fetchByImdbID from "@/app/services/fetchByImdbID";
import MovieDetailsCard from "@/app/components/MovieDetailsCard";

const MovieDetails = ({params}) => {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        const fetchDataAsync = async () => {
            try {
                const responseMovie = await fetchByImdbID(params.imdbID);
                setMovie(responseMovie);
            } catch (error) {
                throw error;
            }
        };

        fetchDataAsync();
    }, []);

    return (
        <div>
            <MovieDetailsCard movie={movie}/>
        </div>
    );
};

export default MovieDetails;