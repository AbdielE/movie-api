import { useState } from 'react'

const MovieInput = ({ movies = [], setMovies }) => {
    const [inputValue, setInputValue] = useState("")

    const handleInputChange = ({ target }) => {
        setInputValue(target.value)
    }

    const handleAddMovieButton = () => {
        setMovies([inputValue, ...movies])
        setInputValue("")
    }
    return (
        <div>
            <input
                onChange={(e) => handleInputChange(e)}
                placeholder='Write a movie name'
                type='text'
                value={inputValue}
            />
            <button
                onClick={(e) => handleAddMovieButton(e)}
                className='btn btn-primary btn-sm ms-2 mb-1'
                type='button'
            >
                Add
            </button>
        </div>
    )
}

export default MovieInput