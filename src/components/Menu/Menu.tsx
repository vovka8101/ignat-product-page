export const Menu = () => {
  return (
    <>
      <div className="navigation">
        <a href="#menu" className="menu-btn"></a>
        <nav id="menu" className="menu">
          <a href="#" className="close-menu-btn"></a>
          <a href="#" className="menu__link">новинки</a>
          <a href="#" className="menu__link active">чоловіки</a>
          <a href="#" className="menu__link">жінки</a>
          <a href="#" className="menu__link">аксесуари</a>
          <a href="#" className="menu__link">акції</a>
        </nav>
      </div>
      <a href="#" className="close-menu-modal"></a>
    </>
  )
}
