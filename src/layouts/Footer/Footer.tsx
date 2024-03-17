export const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-top">
        <div className="footer-top__contacts">
          <h6 className="footer-top__title">Контакт - центр</h6>
          <ul className="footer-top__list list">
            <li className="list__item">
              <a href="#" className="list__link">098 900 09 09</a>
            </li>
            <li className="list__item">
              <a href="#" className="list__link">Пн - Пт 09:00 - 21:00</a>
            </li>
            <li className="list__item">
              <a href="#" className="list__link">Пн - Пт 09:00 - 21:00</a>
            </li>
          </ul>
        </div>
        <div className="footer-top__help">
          <h6 className="footer-top__title">Покупцям</h6>
          <ul className="footer-top__list list">
            <li className="list__item">
              <a href="#" className="list__link">Оплата і доставка</a>
            </li>
            <li className="list__item">
              <a href="#" className="list__link">Повернення</a>
            </li>
            <li className="list__item">
              <a href="#" className="list__link">Питання та відповіді</a>
            </li>
          </ul>
        </div>
        <div className="footer-top__personal-account">
          <h6 className="footer-top__title">Особистий кабінет</h6>
          <ul className="footer-top__list list">
            <li className="list__item">
              <a href="#" className="list__link">Мої дані</a>
            </li>
            <li className="list__item">
              <a href="#" className="list__link">Історія замовлень</a>
            </li>
            <li className="list__item">
              <a href="#" className="list__link">Улюблені</a>
            </li>
            <li className="list__item">
              <a href="#" className="list__link">Розсилки</a>
            </li>
          </ul>
        </div>
        <div className="footer-top__about">
          <h6 className="footer-top__title">Про компанію</h6>
          <ul className="footer-top__list list">
            <li className="list__item">
              <a href="#" className="list__link">Про нас</a>
            </li>
            <li className="list__item">
              <a href="#" className="list__link">Новини</a>
            </li>
            <li className="list__item">
              <a href="#" className="list__link">Стати партнером</a>
            </li>
            <li className="list__item">
              <a href="#" className="list__link">Угода користувача</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="content">
          <ul className="nav">
            <li className="nav__item">
              <a href="#" className="nav__link">новинки</a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link active">чоловіки</a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link">жінки</a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link">аксесуари</a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link">акції</a>
            </li>
          </ul>
          <p className="copyright">© 2022 — 2023 IGNAT. Усі права захищені.</p>
        </div>
      </div>
    </footer>
  )
}
