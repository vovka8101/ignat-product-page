import heartIcon from "../../assets/images/icons/heart.svg"
import bagIcon from "../../assets/images/icons/bag.svg"
import searchIcon from "../../assets/images/icons/search.svg"

export const Search = () => {
  return (
    <div className="search">
      <div className="search__field">
        <img
          src={searchIcon}
          className="search__icon"
          alt="Search icon"
        />
        <input type="text" className="search__input" />
      </div>
      <a href="#liked" className="search__liked icon">
        <img
          src={heartIcon}
          className="img"
          alt="Heart icon"
        />
      </a>
      <a href="#basket" className="search__basket icon">
        <img
          src={bagIcon}
          className="img"
          alt="Bag icon"
        />
      </a>
    </div>
  )
}
