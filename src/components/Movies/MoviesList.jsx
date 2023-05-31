import React from 'react'

const MoviesList = ({ movies = [], setMovies }) => {
    const deleteMovie = (movie) => {
        const newList = movies.filter((mov) => mov !== movie)
        setMovies([...newList])
    }

    return (
        <div>
            <ol>
                {
                    movies.map((movie) => (
                        <li onClick={() => deleteMovie(movie)} key={movie}>
                            {movie}
                        </li>
                    ))
                }
            </ol>
        </div>
    )
}

export default MoviesList