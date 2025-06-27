// import Header from '../components/Header'
import ProductCatalog from './ProductsCatalog'
// import Footer from '../components/Footer'
import ContactUs from '../components/ContactUs'
import Carousel from '../components/Carousel'
import CartTab from '../components/CartTab'
function HomePage() {
  return (
    <>
      {/* <Header /> */}
      <Carousel interval={5000} />
      <ProductCatalog />
      <CartTab />
      {/* <Footer /> */}
      <ContactUs />
      {/* <Footer /> */}

    </>
  )
}
export default HomePage
