const MovieDetailsCard = ({movie}) => {
    return (
        <div className="m-10 rounded border p-4 border-gray-300">
            <div className="bg-gray-100 dark:bg-gray-800 py-8">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row -mx-4">
                        <div className="md:flex-1 px-4">
                            <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                                <img className="w-full h-full object-cover"
                                     src={movie.Poster}
                                     alt="Movie Image"/>
                            </div>
                            <div className="flex -mx-2 mb-4">
                                <div className="px-2" align="center">
                                    <button
                                        className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">Add
                                        to Watchlist
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="md:flex-1 px-4">
                            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{movie.Title}</h2>
                            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                                Actors: {movie.Actors}
                            </p>
                            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                                Director: {movie.Director}
                            </p>
                            <div className="flex mb-4">
                                <div className="mr-4">
                                    <span className="font-bold text-gray-700 dark:text-gray-300">Rating: </span>
                                    <span className="text-gray-600 dark:text-gray-300">{movie.imdbRating}</span>
                                </div>
                                <div>
                                    <span className="font-bold text-gray-700 dark:text-gray-300">Duration: </span>
                                    <span className="text-gray-600 dark:text-gray-300">{movie.Runtime}</span>
                                </div>
                            </div>
                            <div className="flex mb-4">
                                <div className="mr-4">
                                    <span className="font-bold text-gray-700 dark:text-gray-300">Type: </span>
                                    <span className="text-gray-600 dark:text-gray-300">{movie.Type}</span>
                                </div>
                                <div>
                                    <span className="font-bold text-gray-700 dark:text-gray-300">Genre: </span>
                                    <span className="text-gray-600 dark:text-gray-300">{movie.Genre}</span>
                                </div>
                            </div>
                            <div className="flex mb-4">
                                <div className="mr-4">
                                    <span className="font-bold text-gray-700 dark:text-gray-300">Year: </span>
                                    <span className="text-gray-600 dark:text-gray-300">{movie.Year}</span>
                                </div>
                                <div>
                                    <span className="font-bold text-gray-700 dark:text-gray-300">Language: </span>
                                    <span className="text-gray-600 dark:text-gray-300">{movie.Language}</span>
                                </div>
                            </div>
                            <div>
                                <span className="font-bold text-gray-700 dark:text-gray-300">Product Description:</span>
                                <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                                    {movie.Plot}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieDetailsCard;