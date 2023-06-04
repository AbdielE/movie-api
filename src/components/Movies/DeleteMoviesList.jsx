import React from 'react'

const DeleteMoviesList = ({setMovies}) => {
    const clearList = async () => {
        const { isConfirmed } = await Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        })

        if (isConfirmed) {
            setMovies([]);
        }
    }

    return (
        <div>
            <button
                className='btn btn-danger'
                type='button'
                title='Delete all'
                onClick={clearList}
            >
                <i className="bi bi-trash2"></i>
            </button>
        </div>
    )
}

export default DeleteMoviesList