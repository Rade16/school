import "./team.scss";
import TeamCard from "../../components/TeamCard/TeamCard";
import DocumentCard from "../../components/DocumentCard/DocumentCard";
import img1 from "./../../assets/team/1.jpg";
import img2 from "./../../assets/team/2.jpg";
import img3 from "./../../assets/team/3.jpg";
import img4 from "./../../assets/team/4.jpg";
const Team = () => {
  const testData = [
    {
      image: img1,
      name: "Бараник Ирина Анатольевна",
      post: "заместитель директора",
    },
    {
      image: img2,
      name: "Астайкина Маргарита Анатольевна",
      post: "инструктор по физ-ре",
    },
    {
      image: img3,
      name: "Благосмыслова Евгения Алексеевна",
      post: "учитель",
    },
    {
      image: img4,
      name: "Голушко Оксана Дмитриевна",
      post: "педагог-организатор",
    },
    {
      image: img1,
      name: "Бараник Ирина Анатольевна",
      post: "заместитель директора",
    },
    {
      image: img2,
      name: "Астайкина Маргарита Анатольевна",
      post: "инструктор по физ-ре",
    },
    {
      image: img3,
      name: "Благосмыслова Евгения Алексеевна",
      post: "учитель",
    },
    {
      image: img4,
      name: "Голушко Оксана Дмитриевна",
      post: "педагог-организатор",
    },
    {
      image: img1,
      name: "Бараник Ирина Анатольевна",
      post: "заместитель директора",
    },
    {
      image: img2,
      name: "Астайкина Маргарита Анатольевна",
      post: "инструктор по физ-ре",
    },
    {
      image: img3,
      name: "Благосмыслова Евгения Алексеевна",
      post: "учитель",
    },
    {
      image: img4,
      name: "Голушко Оксана Дмитриевна",
      post: "педагог-организатор",
    },
  ];

  return (
    <div>
      <div className="container">
        <div className="team__header">
          <p className="team__header-title">Наш коллектив</p>
        </div>
        <DocumentCard
          title="Отчет по работникам"
          fileUrl="./../../../public/documents/teachers.pdf"
        />
        <div className="team__line">
          {testData.map((obj) => (
            <TeamCard image={obj.image} name={obj.name} post={obj.post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
