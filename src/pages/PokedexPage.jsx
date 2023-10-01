import { useSelector } from "react-redux"
import useFetch from "../hooks/useFetch"
import { useEffect, useRef, useState } from "react"
import PokeCard from "../components/PokedexPage/PokeCard"
import SelectType from "../components/PokedexPage/SelectType"
import Paginations from "../components/Paginations"

const PokedexPage = () => {

  const [inputValue, setInputValue] = useState('')
  const [typeSelected, setTypeSelected] = useState('allPokemons')

  const trainer = useSelector(store => store.trainer)

  const inputSearch = useRef()

  const url = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=600'
  const [ pokemons, getPokemons, getTypePokemon, isLoading ] = useFetch(url)

  useEffect(() => {
    if (typeSelected === 'allPokemons') {
      getPokemons()
    } else{
      getTypePokemon(typeSelected)
    }
    
  }, [typeSelected])

  const handleSearch = (e) => {
    e.preventDefault()
    setInputValue(inputSearch.current.value.trim().toLowerCase())
  }

  const pokeFiltered = pokemons?.results.filter(poke => poke.name.includes(inputValue))


  /*paginacion */

  
  const [postsPerPage, setPostsPerPage] = useState(50);
  const [actualPage, setActualPage] = useState(false)
  const [currentPage, setCurrentPage] = useState(1);
  

  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     const res = await axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=800');
  //     inputValue(res.data);
  //     setLoading(false);
  //   }

  //   fetchPosts();
    
  // }, [])

  const indexOfLastPost = currentPage * postsPerPage; 
  const indexOfFirstPost = indexOfLastPost - postsPerPage; 

  const paginate = (pageNumbers) => setCurrentPage(pageNumbers)

  const currentPosts = pokeFiltered?.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div className="contenedor_segunda_pagina">
      <div className="header_segunda_pagina">
        <img className="imagen_segunda_pagina" src="/images/image.png" alt="" />
      </div>
      <p className="parrafo_segunda_pagina">Hi {trainer}, Here you can find your favorite pokemon.</p>
      <form className="form_segunda_pagina" onSubmit={handleSearch} >
        <input className="busqueda1" ref={inputSearch} type="text" />
        <button className="busqueda2">Search</button>
      </form>
      <SelectType
        setTypeSelected={setTypeSelected}
      />
      <Paginations 
        postsPerPage={postsPerPage}
        totalPage={pokemons?.results.length}
        paginate={paginate}
        actualPage={actualPage}
        setActualPage={setActualPage}
        currentPage={currentPage}
      />
      {
        isLoading
        ? <h2 className="pantalla_carga">Loading...</h2>
        : (
               <div className="carta_pokemon">
        {
          currentPosts?.map(poke => (
            <PokeCard
              key={poke.url}
              url={poke.url}
            />
          ))
        }
      </div>
        )
      }
 
       

    </div>
  )
}

export default PokedexPage