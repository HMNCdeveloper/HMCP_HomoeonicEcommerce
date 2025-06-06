import Header from '../components/Header'
import ProductCatalog from './ProductsCatalog'
import Footer from '../components/Footer'
import ContactUs from '../components/ContactUs'
import Carousel from '../components/Carousel'
function HomePage() {
  return (
    <>
      <Header />
      <Carousel interval={5000} />
      <ProductCatalog />
      <ContactUs />
      <Footer />
    </>
  )
}
export default HomePage
