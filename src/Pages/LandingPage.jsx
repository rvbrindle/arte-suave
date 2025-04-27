import Logo from "../Components/Logo";
import {ArrowDownCircleIcon} from "@heroicons/react/24/outline";
import ContactPage from "./ContactPage";
import Footer from "../Components/Footer";
import BgImg from "../Components/BgImg";
import AboutUs from "./AboutUs";
import OurStory from "./OurStory";
import Meet from "./Meet";
import Schedule from "./Schedule";
import Lineage from "./Lineage";
 export default function LandingPage() {

     const scrollToElem = (section) => {

         const element = document.getElementById(section);
         if (element) {
             element.scrollIntoView({ behavior: 'smooth', block: 'start' });
         }
     }

    return (
        <>
            <div className='screen-1 w-screen min-h-screen flex text-center flex-col bg-black bg-opacity-70'>
                <BgImg img={'bg-as-img.png'}/>
                <Logo />
                <div className='container text-neutral-100 mx-auto mb-2 motion-safe:animate-fadeInLeft'>
                    <h1 className='text-2xl md:text-4xl font-extrabold'>Arte <span>Suave</span></h1>
                    <h3 className='md:text-2xl sm:text-xl tracking-widest'>Jiujitsu</h3>
                </div>
                <div className='text-neutral-100 text-2xl boldest mt-4 motion-safe:animate-fadeIn mb-12'>
                    <p>
                        Chapel Allerton Primary School
                        <br/>
                        Main Hall
                        <br/>
                        LS7 3PD
                        <br/>
                    </p>
                </div>

                <div
                    className='text-red-700 text-center motion-safe:animate-fadeIn text:md md:text-lg'>
                    Train Brazilian Jiu Jitsu in Chapel Allerton – Get <strong>Stronger</strong>, More <strong>Confident</strong>, and Ready for <strong>Anything!</strong>
                </div>
                <div
                    className='text-white mt-6 mx-auto w-3/4 md:w-1/3 flex flex-col justify-center content-center items-center text-center motion-safe:animate-fadeIn'
                    onClick={() => scrollToElem('contact-page')}
                >
                    <p>Join our welcoming community and experience expert coaching in a fun, safe, and challenging environment.</p>
                    <ArrowDownCircleIcon
                        className='w-11 py-4 mx-auto cursor-pointer hover:scale-110 hover:text-red-700 transition ease-in-out'
                    />

                </div>
            </div>
            <AboutUs />
            <OurStory />
            <Meet />
            <Schedule />
            <ContactPage/>
            <Lineage />
            <Footer/>
        </>
    )
}