import {ArrowDownCircleIcon, EnvelopeIcon} from "@heroicons/react/24/outline";
import ContactForm from "../Components/ContactForm";
import Icon from "../Components/Icon";
import BgImg from "../Components/BgImg";
import Logo from "../Components/Logo";

export default function OurStory() {
    return (
        <>
            <div
                id='our-story'
                className='screen-1 w-screen min-h-screen flex text-center flex-col bg-black relative'>
                <div className='container mx-auto mb-2 py-12 text-white p-8'>
                    <h1 className='text-2xl md:text-4xl font-extrabold pb-4 md:pb-8'>About <span>Arte Suave</span></h1>

                    <h2 className='text-2xl py-4 text-red-700 font-bold'>Our Mission</h2>

                    <p className='pb-4'>At <span>Arte Suave</span>, we believe Brazilian Jiu-Jitsu is more than just a
                        martial art, it’s a way to grow,
                        connect, and challenge yourself in a supportive community. Our mission is to provide a welcoming
                        space where people of all backgrounds and skill levels can train, improve, and push themselves
                        beyond their limits.
                    </p>
                    <p className='pb-4'>
                        Whether you’re looking to get fit, learn self-defense, or compete, you’ll
                        find encouragement, guidance, and camaraderie here.
                    </p>


                    <h2 className='text-2xl py-4 text-red-700 font-bold'>Our Story</h2>

                    <p className='pb-4'>Arte Suave was founded on the principles of discipline, perseverance, and
                        community. Jiu jitsu
                        is best learned in an environment where teammates lift each other up, on and off the mats. Here,
                        you’re not just a student; you’re part of a team that supports each other’s progress, celebrates
                        victories, and helps navigate challenges.
                    </p>

                    <p className='pb-4'>
                        Our training programs are designed to be effective for both self-defense and jiu jitsu
                        competition, blending traditional BJJ techniques with modern applications. No matter your
                        experience level, you’ll find a home at Arte Suave, where iron sharpens iron, and every session
                        makes us stronger together.
                    </p>

                    <Logo />



                </div>
            </div>
        </>
    )
}