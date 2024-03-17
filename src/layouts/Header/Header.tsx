import { Menu } from "../../components/Menu/Menu"
import { Search } from "../../components/Search/Search"

export const Header = () => {
  return (
    <header className="header">
      <section className="header__top">
        <div className="content">
          <div className="help">
            <a href="tel:0989000909" className="help__tel link">098 900 09 09</a>
            <a href="#help" className="help__link link">Допомога</a>
          </div>
          <div className="auth">
            <a href="#login" className="auth__link link">
              Увійти / Зареєструватися
            </a>
          </div>
        </div>
      </section>
      <section className="header__bottom content">
        <h1 className="main-title logo"><a href="#">Ignat</a></h1>
        <Menu />
        <Search />
      </section>
    </header>
  )
}
