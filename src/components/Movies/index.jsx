import React from 'react'
import MovieInput from './MovieInput'
import DeleteMoviesList from './DeleteMoviesList'
import MoviesList from './MoviesList'

const Movies = ({ movies = [], setMovies }) => {
    return (
        <div>
            <div className="d-flex justify-content-between">
                <MovieInput
                    movies={movies}
                    setMovies={setMovies}
                />
                <DeleteMoviesList
                    setMovies={setMovies}
                />
            </div>
            <MoviesList
                movies={movies}
                setMovies={setMovies}
            />
        </div>
    )
}

export default Movies