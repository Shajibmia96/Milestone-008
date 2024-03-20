import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Header from "./Navbar/Header";
import Footer from "./Footer/Footer";

const Home = () => {

    const navigation = useNavigation();

    const location = useLocation()
    console.log(location)

    return (
        <div>
            <Header></Header>
           <h2>This is home components</h2>
           {
            navigation.state === "loading" ? <h1>Loading...</h1> : <Outlet></Outlet>
           }
           
           <Footer></Footer>
        </div>
    );
};

export default Home;