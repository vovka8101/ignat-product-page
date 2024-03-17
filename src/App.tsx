import { Footer } from "./layouts/Footer/Footer"
import { Header } from "./layouts/Header/Header"
import { ProductPage } from "./pages/ProductPage"

function App() {

  return (
    <div className="app">
      <Header />
      {/* TODO: breadcrumb navigation */}
      <ProductPage />
      <Footer />
    </div>
  )
}

export default App
