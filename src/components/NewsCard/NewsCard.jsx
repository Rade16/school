import "./newsCard.scss";
const NewsCard = (obj) => {
  return (
    <div className="newsCard">
      <img src={obj.image} alt="" className="newsCard__image" />
      <p className="newsCard__tag">{obj.tag}</p>
      <p className="newsCard__title">{obj.title}</p>
      <p className="newsCard__date">{obj.date}</p>
    </div>
  );
};

export default NewsCard;
