import Logo from "../Components/Logo";
import {ArrowDownCircleIcon} from "@heroicons/react/24/outline";
import ContactPage from "./ContactPage";
import Footer from "../Components/Footer";
import BgImg from "../Components/BgImg";
 export default function LandingPage() {

     const scrollToElem = (section) => {

         const element = document.getElementById(section);
         if (element) {
             element.scrollIntoView({ behavior: 'smooth', block: 'start' });
         }
     }

    return (
        <>
            <div className='screen-1 w-screen min-h-screen flex text-center flex-col bg-black bg-opacity-90'>
                <BgImg />
                <Logo />
                <div className='container text-neutral-100 mx-auto mb-2 motion-safe:animate-fadeInLeft'>
                    <h1 className='text-4xl font-extrabold'>Arte <span>Suave</span></h1>
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
                    className='text-red-700 text-center motion-safe:animate-fadeIn text-lg '>Full Site
                    Coming <strong>Soon</strong>
                </div>
                <div
                    className='text-white mt-6 mx-auto w-1/3 flex flex-col justify-center content-center items-center text-center motion-safe:animate-fadeIn'
                    onClick={() => scrollToElem('contact-page')}
                >
                    <p>More Details</p>
                    <ArrowDownCircleIcon
                        className='w-11 py-4 mx-auto cursor-pointer hover:scale-110 hover:text-red-700 transition ease-in-out'
                    />

                </div>

            </div>
            <ContactPage/>
            <Footer/>
        </>
    )
}