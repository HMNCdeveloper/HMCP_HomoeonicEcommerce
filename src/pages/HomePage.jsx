// import Header from '../components/Header'
import ProductCatalog from './ProductsCatalog'
// import Footer from '../components/Footer'
import ContactUs from '../components/ContactUs'
import Carousel from '../components/Carousel'
import CartTab from '../components/cartTab'
import productsData from '../assets/products.json';

function HomePage() {
  return (
    <>
      {/* <Header /> */}
      <Carousel interval={5000} />
      {/* <AboutUs /> */}
      <ProductCatalog data={productsData}
                      loading={false}
                      error={null}/>
      <CartTab data={productsData} />
      
      {/* <Footer /> */}
      <ContactUs />
      {/* <Footer /> */}

    </>
  )
}
export default HomePage
