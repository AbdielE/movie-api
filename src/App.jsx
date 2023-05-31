import { useState } from 'react'
import InfoExpo from './components/InfoExpo'
import Movies from './components/Movies'

function App() {
  const [movies, setMovies] = useState([])

  return (
    <div className='m-5'>
      <h3>Movie Info</h3>
      <hr />
      <Movies
        movies={movies}
        setMovies={setMovies}
      />
      {
        movies.length === 0 && (
          <div>
            <h3 className="text-danger">The list is empty...</h3>
            Enter the name of a movie to see its information.
          </div>
        )
      }
      <hr />
      <InfoExpo movies={movies} />
    </div>
  )
}

export default App
