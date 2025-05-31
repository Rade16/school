import "./../documents.scss";
import DocumentCard from "../../../components/DocumentCard/DocumentCard";
const Administrative = () => {
  const testData = [
    {
      title: " Устав образовательной организации",
    },
    {
      title:
        "Лицензия на осуществление образовательной деятельности сприложениями (выписка из реестра лицензий на осуществление образовательной деятельности)",
    },
    {
      title:
        "Выписка из государственной информационной системы «Реестр организаций, осуществляющих образовательную деятельность по имеющим государственную аккредитацию образовательным программам»",
    },
    {
      title:
        "Свидетельство о постановке на учёт Российской организации в налоговом органе по месту её пребывания",
    },
    {
      title: "Свидетельство о государственной регистрации юридического лица",
    },
  ];

  return (
    <div className="documents">
      <div className="container">
        <div className="documents__header">
          <p className="documents__header-title">Документы</p>
          <p className="documents__header-subtitle">
            Распорядительные документы
          </p>
        </div>
        <ul className="documents__list">
          {testData.map((item) => (
            <DocumentCard title={item.title} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Administrative;
