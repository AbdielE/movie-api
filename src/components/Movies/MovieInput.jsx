import { useState } from 'react'

const MovieInput = ({ movies = [], setMovies }) => {
    const [inputValue, setInputValue] = useState("")

    const handleInputChange = ({ target }) => {
        setInputValue(target.value)
    }

    const handleAddMovieButton = () => {
        const exists = movies.some((movie) => movie === inputValue);
        if (!exists) {
            setMovies([inputValue, ...movies]);
            setInputValue('');
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'The movie already exists in the list!',
              })
        }
    }

    const handleKeyUp = (event) => {
        if (event.key === 'Enter') {
          handleAddMovieButton()
        }
      }
    return (
        <div>
            <input
                onChange={(e) => handleInputChange(e)}
                onKeyUp={handleKeyUp}
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