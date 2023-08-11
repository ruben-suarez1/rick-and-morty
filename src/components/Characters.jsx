const Characters = ( { characters = [] } ) => {
  return (
    <div className="row">
      {characters.map(( item, index ) => (
        <div key={ index } className="col">
          <div className="card">
            <img src={ item.image } alt="" />
            <div className="card-body">
              <h5 className="card-title">{ item.name } </h5>
              <hr />
              <p>Especie: { item.species }</p>
              <p>Origen: { item.origin.name }</p>
              <p>Ubicación: { item.location.name }</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Characters