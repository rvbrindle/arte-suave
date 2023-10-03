import Logo from "../Components/Logo";
import {EnvelopeIcon} from "@heroicons/react/24/outline";

const date = new Date();

export default function LandingPage() {
    return (
        <>
            <div className='screen-1 w-screen min-h-screen bg-black flex text-center flex-col'>
                <Logo></Logo>
                <div className='container text-neutral-100 mx-auto mb-2 motion-safe:animate-fadeInLeft'>
                    <h1 className='text-4xl font-extrabold'>Arte <span>Suave</span></h1>
                    <h3 className='md:text-2xl sm:text-xl tracking-widest'>Jiujitsu</h3>
                </div>
                <div className='text-red-700 text-center motion-safe:animate-fadeIn text-lg'> Coming <strong>Soon</strong></div>
                <div className='text-neutral-100 text-2xl boldest mt-4 motion-safe:animate-fadeIn mb-12'>
                    {/* <p>
                        New Era Fitness
                        <br/>
                        Unit 8, 9, 14
                        <br/>
                        Kirk Lane
                        <br/>
                        Yeadon
                        <br/>
                        LS19 7LX
                        <br />
                        <a className='w-full mt-4 mx-auto align-middle text-red-700 flex flex-row justify-center hover:scale-110 hover:text-neutral-100 transition ease-in-out' href="mailto:info@artesuave.co.uk"><EnvelopeIcon className='w-11 mr-3'></EnvelopeIcon> <p className='flex text-lg align-middle my-auto'> Contact us for more info </p></a>
                    </p> */}
                </div>

                <div className='w-full text-neutral-100 bg-red-700 py-2 fixed bottom-0'>
                    <p>&copy; Arte Suave - {date.getFullYear()}</p>
                </div>
            </div>
        </>
    )
}