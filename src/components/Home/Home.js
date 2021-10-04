import MainSevices from '../MainServices/MainSevices';
import MyCarousel from '../MyCarousel/MyCarousel';
import './Home.css'

const Home = () => {
    return (
        // Home Section 
        <div className='container mt-3'>
            {/* Carousel  */}
            <MyCarousel></MyCarousel>
            {/* Feature Service  */}
            <MainSevices></MainSevices>
        </div>
    );
};

export default Home;