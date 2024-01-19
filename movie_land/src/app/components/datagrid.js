import MovieCard from "@/app/components/MovieCard";

const Datagrid = ({movies}) => {

    return (
        <div>
            <div className="container mx-auto py-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {movies.map((movie) => (
                        <MovieCard key={movie.imdbID} movie={movie}/>
                ))}
                </div>
            </div>
        </div>
    )
}

export default Datagrid;