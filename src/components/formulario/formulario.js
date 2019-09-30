import React, {useState} from 'react'

const Formulario = ({datosConsultados}) => {

    //Busqueda: STATE & guardarBusqueda: SETSTATE

    const [busqueda, guardarBusqueda] = useState({
        ciudad: '',
        pais: ''
    })

    const handleChange = e => {
        guardarBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        })
    }

    const handleConsultarClima = e => {
        e.preventDefault();
        //Pasamos al app los datos de busqueda
        datosConsultados(busqueda);
    }
    
    return(
        <form 
            className="section-formulario"
            onSubmit={handleConsultarClima}>
            <div className="input-field col s12" >
                <input 
                    type="text"
                    name="ciudad"
                    id="ciudad"
                    onChange={handleChange}
                />
                <label htmlFor="ciudad">Ciudad: </label>
            </div>
            <div className="input-field col s12">
                <select 
                    onChange={handleChange}
                    name="pais"
                >
                    <option value="VE">Venezuela</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="ES">España</option>
                    <option value="US">Estados Unidos</option>
                    <option value="AU">Australia</option>

                </select>
            </div>
            <div className="input-field col s12">
                <input 
                    type="submit"
                    className="black-text btn-large yellow"
                    value="Buscar clima"
                />
            </div>
        </form>
    )
}

export default Formulario;