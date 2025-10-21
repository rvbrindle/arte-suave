import {ArrowDownCircleIcon, EnvelopeIcon} from "@heroicons/react/24/outline";
import ContactForm from "../Components/ContactForm";
import Icon from "../Components/Icon";
import BgImg from "../Components/BgImg";
import JoinUs from "../Components/JoinUs";

export default function Schedule() {
    return (
        <>
            <div
                id='about-us'
                className='screen-1 w-screen min-h-screen flex text-center flex-col bg-black bg-opacity-85 relative'>
                <BgImg img={'schedule.png'}/>
                <div className='container text-white mx-auto mb-2 py-6 p-8 md:pt-12 motion-safe:animate-fadeInLeft'>
                    <h1 className='text-2xl md:text-4xl font-extrabold pb-4 md:pb-8'>Our Classes & Programs</h1>

                    <p className='py-4'>
                        At Arte Suave, we believe that mastering Brazilian Jiu-Jitsu starts with getting the
                        fundamentals
                        right. Advanced jiu jitsu is simply fundamentals done at the highest level - but don’t worry, we
                        mix
                        in some of the flashy stuff to make the highlight reels too! Whether you’re stepping on the mats
                        for
                        the first time or looking to refine your technique, our structured classes will help you build a
                        solid foundation and develop your game.
                    </p>


                    <h2 className='py-2 md:py-4 text-2xl md:text-3xl text-red-700 font-bold'>Class Schedule</h2>

                    <h3 className='py-2 md:py-4 text-xl md:text-2xl font-extrabold text-red-600 underline'>Chapel Allerton</h3>

                    <h3 className='py-2 md:py-4 text-xl md:text-xl'>Mondays & Wednesdays</h3>

                    <p className='py-4'>• 18:30 – 19:30 - Fundamentals (Sharpen your core techniques and movement)</p>

                    <p className='py-4'>• 19:30 - 20:30 - All Levels (Train with a mix of partners, from white to black
                        belt)</p>

                              <h3 className='py-2 md:py-4 text-xl md:text-2xl font-extrabold text-red-600 underline'>Harehills</h3>

                    <h3 className='py-2 md:py-4 text-xl md:text-xl'>Friday</h3>

                    <p className='py-4'>• 17:30 – 19:00 - Open Mat</p>

                    <h3 className='py-2 md:py-4 text-xl md:text-xl'>Sunday</h3>

                    <p className='py-4'>• 09:30 - 11:00 - No-Gi Jiu-jitsu</p>

                    <p className='py-4'>All classes are for adults (ages 14 and up).</p>


                    <h2 className='py-2 md:py-4 text-2xl md:text-3xl text-red-700 font-bold'>Fundamentals Class</h2>

                    <p className='py-4'>This class focuses on the essential movements, positions, and techniques that
                        form the backbone
                        of
                        Brazilian jiu jitsu. Perfect for beginners, but equally valuable for experienced students -
                        because
                        true skill comes from mastering the basics at a deeper level.</p>


                    <h2 className='py-2 md:py-4 text-2xl md:text-3xl text-red-700 font-bold'>All Levels Class</h2>

                    <p className='py-4'>This class welcomes students of all experience levels, applying fundamentals in
                        more advanced
                        ways.
                        Through technical instruction, drilling, positional sparring, and live rolling, you’ll learn how
                        to
                        execute techniques with precision and efficiency. And yes, while we focus on the high-percentage
                        techniques that actually work, we throw in some of the fun, flashy stuff too!
                    </p>

                    <h2 className='py-2 md:py-4 text-2xl md:text-3xl text-red-700 font-bold'>Membership Options</h2>

                    <p className='py-2'>We keep pricing straightforward:</p>

                    <p className='py-2'>✔️ Drop-In Session: £10</p>

                    <p className='pb-8'>✔️ Monthly Membership: £60 (paid by standing order)</p>
                    <JoinUs strapLine={'Ready to get started? Come train with us!'}/>
                </div>
            </div>
        </>
    )
}