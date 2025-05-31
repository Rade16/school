import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer__title">
          МБОУ Развилковская средняя общеобразовательная школа с углубленным
          изучением отдельных предметов
        </p>
        <p className="footer__address">
          142717, Российская Федерация, Московская область, г.о. Ленинский, п.
          Развилка,  -, д. 40
        </p>
        <div className="footer__contacts">
          <p className="footer__tel">+7(495)548-65-44</p>
          <p className="footer__email">lenn_sosh_sov-lenina@mosreg.ru</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
