import axios from "axios"
import { useState } from "react"

const useFetch = (url) => {

    const [infoApi, setInfoApi] = useState()
    const [isLoading, setisLoading] = useState(true)

    // const url = ''
    const getApi = () => {
        setisLoading(true)
        axios.get(url)
            .then(res => setInfoApi(res.data))
            .catch(err => console.log(err))
            .finally(() => setisLoading(false));
    }

    const getTypeApi = (urlType) => {
        setisLoading(true)
        axios.get(urlType)
            .then(res => {
                res.data
                const obj = {
                    results: res.data.pokemon.map(e => e.pokemon)
                }
                setInfoApi(obj)
            })
            .catch(err => console.log(err))  
            .finally(() => setisLoading(false));
    }

    return [ infoApi, getApi, getTypeApi, isLoading ]


}

export default useFetch