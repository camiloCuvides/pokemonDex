import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import { useEffect } from "react"

const PokedexIdPage = () => {

  const { id } = useParams()

  const url = `https://pokeapi.co/api/v2/pokemon/${id}`
  const [pokemon, getPokemon] = useFetch(url)

  useEffect(() => {
    getPokemon()
  }, [id])

  console.log(pokemon)

  const firstType = pokemon?.types[0].type.name


  return (
    <article className="contenedor_tercera_pagina" >
      <span className="encabezado_tercera_pagina"></span>
      <div className="contenedor_pokecard">
        <div className={`pokecard_tercera ${firstType}-border`}>
          <header className={`pokecard_header_tercera ${firstType}-gradient`}>
            <img className="pokecard_img_tercera" src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
            <h2 className="nombre_pokemon">{pokemon?.name}</h2>
          </header>
          <ul className="pokecard_stats_tercera">
            <li className="pokecard_stat_tercera"><span>Peso </span><span>{pokemon?.height}</span></li>
            <li className="pokecard_stat_tercera"><span>Altura </span><span>{pokemon?.weight}</span></li>
          </ul>
          <aside className="tipos_tercera" >
            <div className="contenedor_tipos" >
              <h3 className="titulo_tipos">Tipo</h3>
              <ul className="tipo_pokecard_tercera">
                {
                  pokemon?.types.map(typesInfo => (
                    <li key={typesInfo.type.url}>
                      <p className={`informacion_tercera ${firstType}-gradient`}>{typesInfo.type.name}</p>
                    </li>
                  ))
                }
              </ul>
            </div>
            <div className="contenedor_tipos">
              <h3 className="titulo_tipos">Habilidades</h3>
              <ul className="tipo_pokecard_tercera">
                {
                  pokemon?.abilities.map(abilitiesInfo => (
                    <li key={abilitiesInfo.ability.url}>
                      <p className="informacion_tercera">{abilitiesInfo.ability.name}</p>

                    </li>
                  ))
                }
              </ul>
            </div>
          </aside>
          <div className="contenedor_state">
              <h3 className="titulo_state">States</h3>
              <ul className="states_tercera">
                {
                  pokemon?.stats.map(statsInfo => (
                    <li key={statsInfo.stat.url}>
                      <p className="state_strin">{statsInfo.stat.name}</p>
                      <p className="state_number">{statsInfo.base_stat}</p>
                    </li>
                  ))
                }
              </ul>
            </div>
        </div>
      </div>
      <div className="contenedo_movimientos">
        <div className="movimientos" >
          <h2 className="titulo_movimientos">Movements</h2>
          <ul className="ul_movimientos">
            {
              pokemon?.moves.map(movesInfo => (
                <li className="lista_movimientos" key={movesInfo.move.url}>
                  <p className="parrafo_lista">{movesInfo.move.name}</p>
                </li>
              ))
            }
          </ul>
        </div>
      </div>

    </article>
  )
}

export default PokedexIdPage