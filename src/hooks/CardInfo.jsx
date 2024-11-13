import '../styles/CardInfo.css'


function CardInfo({location}) {
  return (
    <div className="CardInfo">
      <h2 className='cardInfo__title'>{location?.name}</h2>
      <div className="cardInfo__container">
        <div className="CardInfo__Item">
          <h3 className="cardInfo__Item-title">Type</h3>
          <p className="cardInfo__Item-data">{location?.type}</p>
        </div>
        <div className="cardInfo__item">
          <h3 className="cardInfo__Item-title">Dimension</h3>
          <p className="cardInfo__Item-data">{location?.dimension}</p>
        </div>
        <div className="cardInfo__item">
          <h3 className="cardInfo__Item-title">population</h3>
          <p className="cardInfo__Item-data">{location?.residents.length}</p>
        </div>
      </div>
    </div>
  );
}

export default CardInfo;
