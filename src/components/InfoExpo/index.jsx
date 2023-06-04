import { useEffect, useState } from "react"

const InfoExpo = ({ movies = [], setMovies }) => {
    const [urlList, setUrlList] = useState([])
    const [cardColors, setCardColors] = useState({})
    const bgColorList = ['#40c0cb', '#fcbf49', '#2a9d8f', '#ef476f']

    const getMovie = async (movies) => {
        if (movies.length === 0) {
            setUrlList([])
            return
        }

        const responsesList = await Promise.all(movies.map(async (movie) => {
            const response = await fetch(
                `http://www.omdbapi.com/?apikey=fd47635a&t=${movie}`
            )

            const apiResponse = await response.json()
            console.log(apiResponse)
            if (apiResponse.Response === "True") {
                return apiResponse
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Movie not found!',
                })
                const newList = movies.filter((mov) => mov !== movie)
                setMovies([...newList])
            }
        }))

        let moviesList = []

        responsesList.forEach((data) => {
            moviesList = [...moviesList, { title: data.Title, poster: data.Poster, plot: data.Plot, actors: data.Actors }]
        })

        setUrlList([...moviesList])
    }

    useEffect(() => {
        getMovie(movies)
    },
        [movies]
    )

    const assignColor = (index) => {
        if (!cardColors[index]) {
            const color = bgColorList[index % bgColorList.length]; // Obtener el color correspondiente del arreglo utilizando el índice
            setCardColors((prevColors) => ({ ...prevColors, [index]: color }));
        }
    }

    const deleteCard = (index) => {
        setMovies((prevMovies) => {
            const newItem = [...prevMovies]
            newItem.splice(index, 1)
            return newItem
        })
    }

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>

            {urlList.map((url, index) => {

                assignColor(index); // Asignar un color para cada card si aún no tiene uno asignado

                const cardStyle = {
                    width: 18 + 'rem',
                    margin: '10px',
                    backgroundColor: cardColors[index] || ''
                };

                return (
                    <div className="card" style={cardStyle} key={index}>
                        <button className="close-button bg-danger text-light" title="Delete" onClick={() => deleteCard(index)}>
                            X
                        </button>
                        <img src={url.poster} className="card-img-top" />
                        <div className="card-body">
                            <h2 className="card-title text-light">{url.title}</h2>
                            <div className="card-text">
                                <br />
                                <h5 className="card-subtitle">Plot:</h5>
                                {url.plot}
                                <br />
                                <br />
                                <h5 className="card-subtitle">Actors:</h5>
                                {url.actors}
                            </div>
                        </div>
                    </div>
                )
            })
            }
        </div>
    )
}

export default InfoExpo