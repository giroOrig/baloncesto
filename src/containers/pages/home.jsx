import Footer from "components/footer/footer"
import Navbar from "components/nav/navbar"
import Layout from "hocs/layouts/layout"

function Home(){
    return(
        <Layout>
        <Navbar/>
            Home
        <Footer/>    
        </Layout>
    )
}
export default Home