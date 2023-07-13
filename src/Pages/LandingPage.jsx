import Button from "../Components/Button";
import ContactForm from "../Components/ContactForm";
import roy from '../Assets/roy.png'
import john from '../Assets/john.png'
import Nav from "../Components/Nav";


export default function LandingPage() {
    return (
        <>
            <div className='screen-1 w-screen h-screen bg-black flex justify-center text-center flex-col'>
                <Nav />
                <div className='container text-neutral-100 mx-auto mb-16 motion-safe:animate-fadeInLeft'>
                    <h1 className='text-6xl'>Arte <span>Suave</span></h1>
                    <h3 className='text-2xl tracking-widest'>Jiujitsu</h3>
                </div>
                <Button
                    title='find out more'
                    href='find out more'
                />
                <div className='text-neutral-100 text-4xl boldest mt-24 motion-safe:animate-fadeIn'>
                    Unit xxx Gym Y Yeadon Postcode
                </div>
            </div>
            <div className='screen-2 w-screen h-screen pt-12 text-zinc-800 bg-neutral-100 flex text-center flex-col'>
                <h2 className='text-6xl mb-10 mt-8 underline decoration-red-700 pt-12'>ABOUT</h2>
                <div className='container flex flex-col text-left mx-auto p-12 text-xl'>
                    <p className=''>
                        Welcome to Arte Suave Jiu-Jitsu, Yeadon's ultimate destination for Brazilian Jiu-Jitsu
                        excellence! Led by Roy and Tom, two highly accomplished black belt coaches with 30 years of
                        combined, competitive experience, our gym is set to redefine martial arts training in North
                        Yorkshire. Trained under the guidance of Duane Harper from the esteemed Leo Negao lineage, Roy
                        and Tom bring a wealth of knowledge and expertise to help you excel in the art of Jiu-Jitsu.
                    </p>
                    <p className='my-8'>
                        Arte Suave Jiu-Jitsu offers a dynamic and inclusive training environment for individuals of all
                        levels. Whether you're stepping on the mats for the first time or are a seasoned competitor, our
                        classes are designed to meet your specific goals and aspirations. From mastering essential
                        techniques to refining advanced strategies, Roy and Tom's comprehensive instruction ensures that
                        you'll develop a solid foundation while continuously progressing your skills.
                    </p>
                    <p className='my-8 mb-4'>
                        Experience the transformational power of Brazilian Jiu-Jitsu at Arte Suave. Beyond physical
                        fitness, our classes cultivate mental resilience, self-discipline, and a strong sense of
                        community. Join our passionate group of practitioners and embark on a journey of personal
                        growth, while forging lifelong friendships along the way. Discover the artistry and beauty of
                        Jiu-Jitsu at Arte Suave Jiu-Jitsu, Yeadon's premier martial arts academy .
                    </p>
                </div>

                <div className='text-xl flex flex-row underline-offset-4 font-bold w-full align-bottom grow'>

                    <div className='flex bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-700 text-neutral-100 w-1/2 justify-center'>
                        <img
                            className='rounded-full max-h-xs max-w-xs mx-8 my-auto border-2 border-white shadow-2xl flex flex-col justify-center'
                            src={roy} alt='coach roy'/>
                        <div className='w-4/6 flex flex-col justify-center'>
                            <h4 className='text-5xl pb-6'>Coach Roy</h4>
                            <ul className='font-light mb-2'>
                                <li>Well hard</li>
                                <li>Won this</li>
                                <li>Done that</li>
                                <li>Loves Jazz</li>
                            </ul>
                            <p>Fave Quote:</p>
                            <p><span className='italic font-light font-italic'>"red sky at night, shepherds pie"</span>
                            </p>
                        </div>
                    </div>

                    <div className='flex bg-gradient-to-r from-red-700 via-red-800 to-red-900 text-neutral-100 w-1/2 justify-center bottom-0'>
                        <div className='w-4/6 flex flex-col justify-center'>
                            <h4 className='text-5xl pb-6'>Coach John</h4>
                            <ul className='font-light mb-2'>
                                <li>Well hard</li>
                                <li>Won this</li>
                                <li>Done that</li>
                                <li>Hates Jazz</li>
                            </ul>
                            <p>Fave Quote:</p>
                            <p><span className='italic font-light font-italic'>"Live, Laugh, Strangle"</span></p>
                        </div>
                        <img
                            className='rounded-full max-h-xs max-w-xs mx-8 my-auto border-2 border-white shadow-2xl flex flex-col justify-center'
                            src={john} alt='coach roy'/>
                    </div>

                </div>

            </div>
            <div
                className='w-screen h-screen pt-12 bg-zinc-900 flex justify-center text-center grow-1 flex-col text-neutral-100'>
                <h2 className='text-6xl mb-16 mt-2 underline decoration-neutral-100'>CONTACT</h2>
                <div className='container flex flex-col text-left mx-auto pb-12'>
                    <p className='text-xl text-center p-4'>
                        Welcome to Arte Suave Jiu-Jitsu, Yeadon's ultimate destination for Brazilian Jiu-Jitsu
                        excellence! Led by Roy and Tom, two highly accomplished black belt coaches with 30 years of
                        combined, competitive experience, our gym is set to redefine martial arts training in North
                        Yorkshire. Trained under the guidance of Duane Harper from the esteemed Leo Negao lineage,
                        Roy
                        and Tom bring a wealth of knowledge and expertise to help you excel in the art of Jiu-Jitsu.
                    </p>

                    <ContactForm title='contact'></ContactForm>
                </div>
            </div>
        </>
    )
}