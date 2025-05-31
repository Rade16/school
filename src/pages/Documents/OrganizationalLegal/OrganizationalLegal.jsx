import "./../documents.scss";
import DocumentCard from "../../../components/DocumentCard/DocumentCard";
const OrganizationalLegal = () => {
  const testData = [
    {
      title: "Устав образовательной организации",
      fileUrl: "./../../../../public/documents/OrganizationalLegal/1.pdf",
    },
    {
      title:
        "Лицензия на осуществление образовательной деятельности с приложениями (выписка из реестра лицензий на осуществление образовательной деятельности)",
      fileUrl: "./../../../../public/documents/OrganizationalLegal/2.pdf",
    },
    {
      title:
        "Выписка из государственной информационной системы «Реестр организаций, осуществляющих образовательную деятельность по имеющим государственную аккредитацию образовательным программам»",
      fileUrl: "./../../../../public/documents/OrganizationalLegal/3.pdf",
    },
    {
      title:
        "Свидетельство о постановке на учёт Российской организации в налоговом органе по месту её пребывания",
      fileUrl: "./../../../../public/documents/OrganizationalLegal/1.pdf",
    },
    {
      title: "Свидетельство о государственной регистрации права (на здание)",
      fileUrl: "./../../../../public/documents/OrganizationalLegal/2.pdf",
    },
    {
      title: "Свидетельство о государственной регистрации права (на землю)",
      fileUrl: "./../../../../public/documents/OrganizationalLegal/3.pdf",
    },
    {
      title:
        "Лицензия на осуществление медицинской деятельности (с приложениями)",
      fileUrl: "./../../../../public/documents/OrganizationalLegal/1.pdf",
    },
    {
      title: "Санитарно-эпидемиологическое заключение",
      fileUrl: "./../../../../public/documents/OrganizationalLegal/2.pdf",
    },
    {
      title:
        "Заключение о соответствии объекта защиты обязательным требованиям пожарной безопасности",
      fileUrl: "./../../../../public/documents/OrganizationalLegal/3.pdf",
    },
    {
      title: "Договор с Учредителем",
      fileUrl: "./../../../../public/documents/OrganizationalLegal/1.pdf",
    },
    {
      title: "Приказ о назначении руководителя образовательной организации",
      fileUrl: "./../../../../public/documents/OrganizationalLegal/2.pdf",
    },
  ];

  return (
    <div className="documents">
      <div className="container">
        <div className="documents__header">
          <p className="documents__header-title">Документы</p>
          <p className="documents__header-subtitle">
            Организационно-правовые документы
          </p>
        </div>
        <ul className="documents__list">
          {testData.map((obj) => (
            <DocumentCard title={obj.title} fileUrl={obj.fileUrl} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default OrganizationalLegal;
