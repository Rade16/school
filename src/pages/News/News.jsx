import "./news.scss";
import NewsCard from "../../components/NewsCard/NewsCard";

const News = () => {
  const testData = [
    {
      id: 1,
      image:
        "https://media.istockphoto.com/id/1362465371/ru/векторная/оповещение-о-хороших-новостях-с-рук-с-мегафоном-или-вектором-громкоговорителя.jpg?s=612x612&w=0&k=20&c=TNoULYZILkYcuFxk3_3r8R73iK8qOrARqEK0Wjt3Sj4=",
      tag: "экзамен",
      title: "Тестовый заголовок 1",
      date: "29 мая 2025г",
    },
    {
      id: 2,
      image:
        "https://media.istockphoto.com/id/1362465371/ru/векторная/оповещение-о-хороших-новостях-с-рук-с-мегафоном-или-вектором-громкоговорителя.jpg?s=612x612&w=0&k=20&c=TNoULYZILkYcuFxk3_3r8R73iK8qOrARqEK0Wjt3Sj4=",
      tag: "экзамен",
      title: "Тестовый заголовок 1",
      date: "29 мая 2025г",
    },
    {
      id: 3,
      image:
        "https://media.istockphoto.com/id/1362465371/ru/векторная/оповещение-о-хороших-новостях-с-рук-с-мегафоном-или-вектором-громкоговорителя.jpg?s=612x612&w=0&k=20&c=TNoULYZILkYcuFxk3_3r8R73iK8qOrARqEK0Wjt3Sj4=",
      tag: "экзамен",
      title: "Тестовый заголовок 1",
      date: "29 мая 2025г",
    },
    {
      id: 4,
      image:
        "https://media.istockphoto.com/id/1362465371/ru/векторная/оповещение-о-хороших-новостях-с-рук-с-мегафоном-или-вектором-громкоговорителя.jpg?s=612x612&w=0&k=20&c=TNoULYZILkYcuFxk3_3r8R73iK8qOrARqEK0Wjt3Sj4=",
      tag: "экзамен",
      title: "Тестовый заголовок 1",
      date: "29 мая 2025г",
    },
    {
      id: 5,
      image:
        "https://media.istockphoto.com/id/1362465371/ru/векторная/оповещение-о-хороших-новостях-с-рук-с-мегафоном-или-вектором-громкоговорителя.jpg?s=612x612&w=0&k=20&c=TNoULYZILkYcuFxk3_3r8R73iK8qOrARqEK0Wjt3Sj4=",
      tag: "экзамен",
      title: "Тестовый заголовок 1",
      date: "29 мая 2025г",
    },
    {
      id: 6,
      image:
        "https://media.istockphoto.com/id/1362465371/ru/векторная/оповещение-о-хороших-новостях-с-рук-с-мегафоном-или-вектором-громкоговорителя.jpg?s=612x612&w=0&k=20&c=TNoULYZILkYcuFxk3_3r8R73iK8qOrARqEK0Wjt3Sj4=",
      tag: "экзамен",
      title: "Тестовый заголовок 1",
      date: "29 мая 2025г",
    },
    {
      id: 7,
      image:
        "https://media.istockphoto.com/id/1362465371/ru/векторная/оповещение-о-хороших-новостях-с-рук-с-мегафоном-или-вектором-громкоговорителя.jpg?s=612x612&w=0&k=20&c=TNoULYZILkYcuFxk3_3r8R73iK8qOrARqEK0Wjt3Sj4=",
      tag: "экзамен",
      title: "Тестовый заголовок 1",
      date: "29 мая 2025г",
    },
    {
      id: 8,
      image:
        "https://media.istockphoto.com/id/1362465371/ru/векторная/оповещение-о-хороших-новостях-с-рук-с-мегафоном-или-вектором-громкоговорителя.jpg?s=612x612&w=0&k=20&c=TNoULYZILkYcuFxk3_3r8R73iK8qOrARqEK0Wjt3Sj4=",
      tag: "экзамен",
      title: "Тестовый заголовок 1",
      date: "29 мая 2025г",
    },
    {
      id: 9,
      image:
        "https://media.istockphoto.com/id/1362465371/ru/векторная/оповещение-о-хороших-новостях-с-рук-с-мегафоном-или-вектором-громкоговорителя.jpg?s=612x612&w=0&k=20&c=TNoULYZILkYcuFxk3_3r8R73iK8qOrARqEK0Wjt3Sj4=",
      tag: "экзамен",
      title: "Тестовый заголовок 1",
      date: "29 мая 2025г",
    },
    {
      id: 10,
      image:
        "https://media.istockphoto.com/id/1362465371/ru/векторная/оповещение-о-хороших-новостях-с-рук-с-мегафоном-или-вектором-громкоговорителя.jpg?s=612x612&w=0&k=20&c=TNoULYZILkYcuFxk3_3r8R73iK8qOrARqEK0Wjt3Sj4=",
      tag: "экзамен",
      title: "Тестовый заголовок 1",
      date: "29 мая 2025г",
    },
  ];

  return (
    <div className="news">
      <div className="container">
        <div className="news__header">
          <p className="news__header-title">Все новости</p>
        </div>

        <div className="news__line">
          {testData.map((obj) => (
            <NewsCard
              image={obj.image}
              tag={obj.tag}
              title={obj.title}
              date={obj.date}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
