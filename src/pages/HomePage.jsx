// import Header from '../components/Header'
import ProductCatalog from './ProductsCatalog'
// import Footer from '../components/Footer'
import ContactUs from '../components/ContactUs'
import Carousel from '../components/Carousel'
import CartTab from '../components/CartTab';
import { useFetch } from '../hooks/useFetch';
function HomePage() {


const { data, loading, error } = useFetch('products/');
  return (
    <>
      {/* <Header /> */}
      <Carousel interval={5000} />
      {/* <AboutUs /> */}
      { data && (
      <>
        <ProductCatalog data={data} 
                      loading={loading}
                      error={error}/>
        <CartTab data={data} />
      </>
      )}
      
      {/* <Footer /> */}
      <ContactUs />
      {/* <Footer /> */}

    </>
  )
}
export default HomePage
