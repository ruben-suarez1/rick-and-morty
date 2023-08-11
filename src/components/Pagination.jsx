const Pagination = ({prev, next, siguienteComponente, componenteAnterior}) => {

    const irAlSiguienteComponente = () => {
        siguienteComponente()
    };

    const irAlComponenteAnterior = () => {
        componenteAnterior()
    };

    return (
        <nav className="my-5">
            <ul className="pagination justify-content-center">
                {
                    prev ? (
                        <li className="page-item">
                            <button className="page-link" onClick={irAlComponenteAnterior}>Anterior</button>
                        </li>
                    ) : null
                }
                {
                    next ? (
                        <li className="page-item">
                            <button className="page-link" onClick={irAlSiguienteComponente}>Siguiente</button>
                        </li>
                    ) : null
                }
            </ul>
        </nav>
    )
}

export default Pagination