import { useRef } from "react"
import { setTrainerSlice } from "../store/slices/trainer.slice"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

const HomePages = () => {

// const trainer = useSelector(store => store.trainer)

// console.log(trainer)

const inputTrainer = useRef()

const dispatch = useDispatch()

const navigate  = useNavigate()

const handleTrainer = e => {
  e.preventDefault()
  dispatch(setTrainerSlice(inputTrainer.current.value.trim()))
  navigate('/pokedex')

}
  return (
    <article className="principal" >
        <span className="titulo_pagina_principal"></span>
        <h2 className="subtitulo_pagina_principal">Hi Trainer!</h2>
        <p className="parrafo_pagina_principal">To start, please, enter your trainer nickname </p>
        <form className="formulario" onSubmit={handleTrainer}>
            <input className="busqueda1" ref={inputTrainer} type="text" />
            <button className="busqueda2">Start!</button>
            
        </form>
        <div className="pie_pagina_principal"></div>

       
      </article>
  )
}

export default HomePages