import "./documentCard.scss";
import documentIcon from "./../../assets/documents/documentIcon.svg";
import downloadIcon from "./../../assets/documents/downloadIcon.svg";
import viewIcon from "./../../assets/documents/viewIcon.svg";
const DocumentCard = (obj) => {
  return (
    <div className="documentCard">
      <img src={documentIcon} alt="" className="documentCard__icon" />
      <p className="documentCard__title">{obj.title}</p>
      <div className="documentCard__buttons">
        <a href={obj.fileUrl} target="_blank">
          <img src={viewIcon} alt="" className="documentCard__buttons-view" />
        </a>
        <a href={obj.fileUrl} download>
          <img
            src={downloadIcon}
            alt=""
            className="documentCard__buttons-download"
          />
        </a>
      </div>
    </div>
  );
};

export default DocumentCard;
