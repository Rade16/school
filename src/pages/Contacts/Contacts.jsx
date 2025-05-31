import "./contacts.scss";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
const Contacts = () => {
  return (
    <div>
      <div className="container">
        <div className="contacts__header">
          <p className="contacts__header-title">Контакты</p>
        </div>

        <h1 className="contacts__title">
          МБОУ Развилковская средняя общеобразовательная школа с углубленным
          изучением отдельных предметов.
        </h1>
        <div className="contacts__route">
          <h2>Как нас найти</h2>
          <p >От м. Домодедовская, автобус маршрут №356, остановка "Школа".</p>
          <p>Из г.Видное - автобус №44.</p>
        </div>
        <div className="contacts__managers">
          <h2>Связь с руководством</h2>
          <p>+7(498)657-29-29</p>
          <p>lenn_sosh_razvilka@mosreg.ru</p>
        </div>
        <div className="contacts__map">
          <h2>Мы на карте</h2>
          <div className="contacts__map-wrapper">
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
    </div>
  );
};

export default Contacts;
