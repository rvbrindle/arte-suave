import BgImg from "../Components/BgImg";

export default function Meet() {

    return (
        <>
            <div className='screen-1 w-screen min-h-screen flex text-center flex-col bg-neutral-200 bg-opacity-95 relative'>
                <BgImg img={'arte-suave-logo.png'}/>
                <div className='container text-black mx-auto mb-2 py-6 p-8 md:py-12 motion-safe:animate-fadeInLeft'>
                    <h1 className='text-2xl md:text-4xl font-extrabold pb-4 md:pb-8'>Meet The <span>Coaches</span></h1>

                    <h2 className='py-2 md:py-4 text-2xl md:text-3xl text-red-700 font-bold'>Kieran ‘Roy’ Coxon – Head Instructor (Black
                        Belt)</h2>
                    <img className='md:w-1/5 w-1/2 mx-auto rounded-full py-4' src={`${process.env.PUBLIC_URL}/roy.png`}
                         alt='image of coach roy'/>

                    <p className='py-4'>
                        Roy began training in 2007, competing across multiple martial arts disciplines, including MMA,
                        boxing & kickboxing, before dedicating himself fully to Brazilian jiu jitsu. With around 10 MMA
                        fights and numerous competition accolades in BJJ across all belt levels, his experience speaks
                        for
                        itself.</p>
                    <p className='py-4'>His BJJ style is pressure-heavy, focusing on top control with a dangerous
                        guard—effective for self-defence, MMA, and sport jiu jitsu alike. While he sees competition as a
                        great tool for development, Roy believes BJJ is for everyone, whether for fitness, confidence,
                        or
                        mastering high-pressure situations.</p>
                    <p className='py-4'>Teaching since 2017, Roy led the fundamentals program at Old Guard jiu jitsu
                        before
                        moving on to advanced classes. In 2019, he earned his black belt under Duane Harper and Leo
                        Negao,
                        and he is now a first-degree black belt.</p>

                    <h2 className='pt-4 md:py-4 md:pt-8 text-2xl md:text-3xl text-red-700 font-bold'>John Harrison – Instructor (Black
                        Belt)</h2>
                    <img className='md:w-1/5 w-1/2 mx-auto rounded-full py-4' src={`${process.env.PUBLIC_URL}/john.png`}
                         alt='image of coach john'/>

                    <p className='py-4'>
                        John’s martial arts journey began in childhood, inspired by martial arts movies. Over the years,
                        he
                        trained in Wing Chun, Aikido, MMA, Boxing, Karate, Judo, and Thai Boxing, eventually finding his
                        passion in Brazilian Jiu-Jitsu in the early 2000s.</p>
                    <p className='py-4'>John first trained under Chen Moraes and Andy Williams at Anaconda Academy
                        before
                        continuing under Darren and Helen Currie at Combatbase HQ, where he earned his blue belt in
                        2005.
                        After taking time to balance family and work, he reignited his passion for Jiu-Jitsu under Duane
                        Harper at Aire Valley Martial Arts, eventually earning his black belt in December 2022 under
                        Duane
                        and Leo Negao.</p>
                    <p className='py-4'>With years of experience coaching children and law enforcement, John is now the
                        head
                        instructor for West Yorkshire Police, providing weekly jiu jitsu training for officers to
                        enhance
                        their skill set in law enforcement. He has also competed in various UK tournaments, supporting
                        his
                        students every step of the way.</p>
                </div>
            </div>
        </>
    )
}