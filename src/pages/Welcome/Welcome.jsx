import "./welcome.scss";
import arrow from "./../../assets/arrow.svg";
import director from "./../../assets/welcome/director.jpg";
import news from "./../../assets/welcome/news.jpg";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import NewsCard from "../../components/NewsCard/NewsCard";
const Welcome = () => {
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
  ];

  return (
    <div className="welcome">
      <div className="container">
        <div className="welcome__start">
          <div className="welcome__start-text">
            <h1 className="welcome__start-text-title">
              Ваш путь к <span className="purple">успеху</span> начинается
              здесь!
            </h1>
            <p className="welcome__start-text-subtitle">
              МАОУ СОШ совхоза им. Ленина
            </p>
          </div>
          <div className="welcome__start-teachers">
            <p className="welcome__start-teachers-text">
              Учителя, которые верят в ваши успехи!
            </p>
            <div className="welcome__start-teachers-link">
              <img src={arrow} alt="" />
            </div>
          </div>
          <div className="welcome__start-equipment">
            <p className="welcome__start-equipment-text">
              Современное оборудование
            </p>
            <div className="welcome__start-equipment-link">
              <img src={arrow} alt="" />
            </div>
          </div>
          <div className="welcome__start-friends">
            <p className="welcome__start-friends-text">
              и конечно же новые друзья!
            </p>
          </div>
        </div>
        <div className="welcome__achievements">
          <div className="welcome__achievements-achive">
            <p className="welcome__achievements-achive-title">1000+</p>
            <p className="welcome__achievements-achive-subtitle">учеников</p>
          </div>
          <div className="welcome__achievements-achive">
            <p className="welcome__achievements-achive-title">30+</p>
            <p className="welcome__achievements-achive-subtitle">учителей</p>
          </div>
          <div className="welcome__achievements-achive">
            <p className="welcome__achievements-achive-title">
              <span className="purple">4.4</span>/5
            </p>
            <p className="welcome__achievements-achive-subtitle">
              оценка в картах
            </p>
          </div>
        </div>
        <div className="welcome__director">
          <div className="welcome__director-text">
            <p className="welcome__director-text-subtitle">директор</p>
            <p className="welcome__director-text-title">
              Бондаренко Татьяна Ивановна
            </p>
            <p className="welcome__director-text-citation">
              “МАОУ СОШ совхоза им. Ленина — это место, где традиции встречаются
              с инновациями, а каждый ребёнок получает возможность раскрыть свои
              таланты. Наши педагоги, искренне преданные профессии, создают
              среду, в которой учеба становится увлекательным путешествием, а
              личные достижения — поводом для общей радости”
            </p>
          </div>
          <img src={director} alt="" className="welcome__director-image" />
        </div>
        <div className="welcome__news">
          <p className="welcome__news-title">Последние новости</p>
          <div className="welcome__news-line">
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
        <p className="welcome__map-title">Где мы находимся?</p>
        <div className="welcome__map-wrapper">
          <YMaps>
            <Map
              defaultState={{ center: [55.584823, 37.728389], zoom: 16 }}
              width="100%"
              height="530px"
            >
              <Placemark defaultGeometry={[55.584823, 37.728389]} />
            </Map>
          </YMaps>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
