import { useEffect, useState } from "react"
import Characters from './Characters'
import Pagination from "./Pagination";

const Config = () => {

    const [characters, setCharacters] = useState([]);
    const [page, setPage] = useState({});

    const initialUrl = "https://rickandmortyapi.com/api/character";

    const fechCharacters = (url) => {
        fetch(url)
            .then((resp) => resp.json())
            .then((data) => {
                setPage(data.info)
                setCharacters(data.results)
            })
            .catch(err => console.log(err))
    };

    useEffect(() => {
        fechCharacters(initialUrl);
    }, [])
    
    const siguienteComponente = () => {
        fechCharacters(page.next)
    }

    const componenteAnterior = () => {
        fechCharacters(page.prev)
    }

    return (
        <>
            <div className="container">
                < Pagination prev= { page.prev } next= { page.next } siguienteComponente= {siguienteComponente}  componenteAnterior= {componenteAnterior} />
                < Characters characters={characters} />
                < Pagination prev= { page.prev } next= { page.next } siguienteComponente= {siguienteComponente}  componenteAnterior= {componenteAnterior} />
            </div>
        </>
    )
}

export default Config