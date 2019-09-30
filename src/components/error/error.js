import React from 'react'

const Error = ({mensajeError}) => {
    return(
        <div className="card-panel red error darken-4">
            {mensajeError}
        </div>
    )
}

export default Error;