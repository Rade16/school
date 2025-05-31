import "./teamCard.scss";
const TeamCard = (obj) => {
  return (
    <div className="teamCard">
      <img src={obj.image} alt="" className="teamCard__avatar" />
      <p className="teamCard__name">{obj.name}</p>
      <p className="teamCard__post">{obj.post}</p>
    </div>
    
  );
};

export default TeamCard;
