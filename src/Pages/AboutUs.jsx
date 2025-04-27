import {ArrowDownCircleIcon, EnvelopeIcon} from "@heroicons/react/24/outline";
import ContactForm from "../Components/ContactForm";
import Icon from "../Components/Icon";
import BgImg from "../Components/BgImg";
import JoinUs from "../Components/JoinUs";

export default function AboutUs() {
    return (
        <>
            <div
                id='about-us'
                className='screen-1 w-screen min-h-screen flex text-center flex-col bg-neutral-200 bg-opacity-85 relative'>
                <BgImg img={'about-us-bg.png'}/>
                <div className='container text-black mx-auto mb-2 py-6 md:py-12 motion-safe:animate-fadeInLeft p-8'>
                    <h1 className='text-2xl md:text-4xl font-extrabold pb-4 md:pb-8'>Who We <span>Are?</span></h1>
                    <p className='py-8'>At Arte Suave, we believe Brazilian jiu jitsu is for everyone. Whether you’re
                        looking to get in
                        shape, learn self-defense, or compete at the highest level, our expert instructors will help you
                        reach your goals. Our classes are designed for all skill levels, from total beginners to
                        advanced practitioners.
                    </p>
                    <div className='rounded bg-black text-white bg-opacity-60 mx-auto mt-4 py-4'>
                        <h2 className='py-2 md:py-4 text-2xl md:text-3xl font-bold'>Why train with us?</h2>
                        <ul className='text-md w-full text-center pb-8'>
                            <li className='py-2'>Expert coaches with substantial competition experience</li>
                            <li className='py-2'>High quality jiu jitsu from a proven lineage</li>
                            <li className='py-2'>Supportive and friendly training environment</li>
                            <li className='py-2'>Adult classes from 14+ years</li>
                            <li className='py-2'>Classes for all experience levels</li>
                            <li className='py-2'>Improve fitness, confidence, strength & discipline</li>
                        </ul>
                    </div>
                </div>
                <JoinUs strapLine={'Join our community today – your journey starts here!'}/>
            </div>
        </>
    )
}