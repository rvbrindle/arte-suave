// import Button from "../Components/Button";
// import ContactForm from "../Components/ContactForm";
// import Logo from "../Components/Logo";
// import Nav from "../Components/Nav";
//
// const date = new Date();
//
// export default function LandingPage() {
//     return (
//         <>
//             <div className='screen-1 w-screen min-h-screen bg-black flex justify-center text-center flex-col'>
//                 <Nav className=''></Nav>
//                 <Logo></Logo>
//                 <div className='container text-neutral-100 mx-auto mb-6 motion-safe:animate-fadeInLeft'>
//                     <h1 className='text-6xl'>Arte <span>Suave</span></h1>
//                     <h3 className='md:text-2xl sm:text-xl tracking-widest'>Jiujitsu</h3>
//                 </div>
//                 <Button
//                     title='find out more'
//                     href='find out more'
//                 />
//                 <div className='text-neutral-100 text-2xl boldest mt-12 motion-safe:animate-fadeIn'>
//                     Chapel Allerton Primary School
//
//                     Harrogate Road
//                     Leeds
//                     LS7 3PD
//                 </div>
//             </div>
//
//             <div
//                 className='screen-2 w-screen min-h-screen pt-12 text-zinc-800 bg-neutral-100 flex text-center flex-col'>
//                 <h2 className='text-6xl mb-10 underline decoration-red-700'>JOIN THE TEAM</h2>
//                 <div className='container flex flex-col text-left mx-auto p-12 text-l'>
//                     <p className=''>
//                         We offer beginner friendly courses to get you started in Brazilian jiu jitsu. The best time to
//                         start is right now. No experience is necessary. You don’t need to get fit to get started. All
//                         you need to do is turn up with a good attitude and willingness to learn. We’ll do the rest.
//                     </p>
//                     <p className='my-8'>
//
//                         Brazilian Jiu Jitsu will make you fitter, stronger, healthier, massively boost your
//                         self-confidence and give you the ability to deal with high pressure situations in a calm,
//                         calculated manner. You’ll meet other like minded people and make new friends who are all on the
//                         same endeavour of self improvement as you.
//                     </p>
//                     <p className='my-8'>
//                         What are you waiting for? Come and join the team!
//                     </p>
//                 </div>
//
//                 <div
//                     className='text-xl flex flex-col md:flex-col underline-offset-4 font-bold w-full align-bottom grow w-full'>
//
//                     <div
//                         className='p-12 md:p-0 md:py-4 flex bg-gradient-to-r flex-col md:flex-row from-zinc-900 via-zinc-800 to-zinc-700 text-neutral-100 w-full justify-center'>
//                         <img
//                             className='rounded-full max-h-xs max-w-xs mx-auto mb-5 md:my-auto md:mx-8 my-auto border-2 border-white shadow-2xl flex flex-col justify-center'
//                             src={roy} alt='coach roy'
//                         />
//                         <div className='w-full md:w-4/6 flex flex-col'>
//                             <h4 className='text-xl py-8 md:text-3xl md:pb-6'>Coach Roy</h4>
//                             <ul className='font-light mb-2'>
//                                 <li className='py-12'>Roy started training in 2007. He trained and competed in various disciplines including
//                                 mixed martial arts for a number of years before dedicating training mainly to jiu jitsu.
//                                 Roy had around 10 mma fights in the early days with his last fight at the end of 2012.
//                                 He has competed in jiu jitsu at every belt level, both gi & no-gi, at major tournaments
//                                     and shows, picking up numerous accolades along the way.</li>
//
//                                 <li className='py-12'>His style of jiu jitsu is always applicable to self defence and mma but equally
//                                 effective in sport jiu jitsu applications. He plays a top heavy pressure game with a
//                                     dangerous guard.</li>
//
//                                 <li className='py-12'>Roy believes competition is an excellent way to improve your jiu jitsu game as, win or
//                                 lose, it highlights the areas you need to improve on, technically, mentally &
//                                     physically.</li>
//
//                                 <li className='py-12'>Although competition can be super valuable, he does not believe it is essential and
//                                 knows that jiu jitsu can be enjoyed by everyone for its numerous benefits. It helps
//                                 build confidence, fitness and the ability to deal with high pressure situations in a
//                                     calm, calculated manner.</li>
//
//                                 <li className='py-12'>Roy has consistently taught jiu jitsu since brown belt in 2017. He led the fundamentals
//                                 program at Aire Valley Martial Arts for a number of years before moving on to teach the
//                                     advanced classes.</li>
//
//                                 <li className='py-12'>Roy earned his black belt from Duane Harper & Leo Negao in 2019 and is now a first
//                                     degree black belt</li>
//                             </ul>
//                             <p>Fave Quote:</p>
//                             <p><span className='italic font-light font-italic'>"red sky at night, shepherds pie"</span>
//                             </p>
//                         </div>
//                     </div>
//
//                     <div
//                         className='p-12 md:p-0 md:py-4 flex flex-col md:flex-row bg-gradient-to-r from-red-700 via-red-800 to-red-900 text-neutral-100 w-full md:w-1/2 justify-center'>
//                         <img
//                             className='rounded-full max-h-xs max-w-xs mx-auto mb-5 md:my-auto md:mx-8 my-auto border-2 border-white shadow-2xl flex flex-col justify-center'
//                             src={john} alt='coach john'
//                         />
//                         <div className='w-full md:w-4/6 flex flex-col'>
//                             <h4 className='text-6xl py-8 md:text-3xl md:pb-6'>Coach John</h4>
//                             <ul className='font-light mb-2'>
//                                 <li>Well hard</li>
//                                 <li>Won this</li>
//                                 <li>Done that</li>
//                                 <li>Hates Jazz</li>
//                             </ul>
//                             <p>Fave Quote:</p>
//                             <p><span className='italic font-light font-italic'>"Live, Laugh, Strangle"</span></p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//
//             <div
//                 className='w-screen pt-12 min-h-screen text-center grow-1 flex flex-col text-zinc-800 bg-neutral-100 '>
//                 <h2 className='text-6xl mb-10 underline decoration-red-700'>AFFILIATES</h2>
//                 <div className='container px-2 flex flex-col text-left mx-auto pb-12'>
//                     <p className='text-md text-center p-2'>
//                         Roy and John, two dedicated coaches, have made their mark in the world of Brazilian
//                         Jiu-Jitsu.
//                         Having honed their skills at Aire Valley Martial Arts under the guidance of Duane Harper,
//                         their
//                         journey in this grappling art has been nothing short of impressive. Both coaches owe their
//                         affiliations and training methods to Harper, who himself has a direct connection to the
//                         renowned
//                         Leo Negao. With such a strong lineage, Roy and John have imbibed the technical expertise and
//                         strategic prowess that are the hallmark of their training under Harper and Negao. Their
//                         deep-rooted knowledge and passion for Jiu-Jitsu make them exceptional instructors, providing
//                         their students with a well-rounded understanding of the martial art..
//                     </p>
//                     <p className='text-md text-center p-2'>
//                         Their dedication to their craft is evident through their countless hours spent on the mat,
//                         refining their skills and
//                         continuously expanding their knowledge of Jiu-Jitsu. Roy's and John's commitment to their
//                         students
//                         is unwavering, as they strive to impart the principles of discipline, respect, and
//                         perseverance,
//                         which are fundamental to the art of Jiu-Jitsu. Under their guidance, practitioners at Aire
//                         Valley
//                         Martial Arts receive a comprehensive education, rooted in the teachings of their esteemed
//                         mentors,
//                         Harper and Negao, ensuring a solid foundation in this dynamic martial art.
//                     </p>
//                     <div className='container md:w-100 pt-10 flex md:flex-row justify-around md:justify-evenly'>
//                         <img className='w-1/3 mx-2 md:w-1/4' src={negaoLogo}/>
//                         <img className='w-1/3 mx-2 md:w-1/4' src={avmaLogo}/>
//                     </div>
//
//                 </div>
//             </div>
//
//
//             <div
//                 className='w-screen min-h-screen pt-12 bg-zinc-900 justify-center text-center grow-1 flex flex-col text-neutral-100'>
//                 <h2 className='text-6xl mb-16 mt-2 underline decoration-neutral-100'>CONTACT</h2>
//                 <div className='container flex flex-col text-left mx-auto pb-12'>
//                     <p className='text-xl text-center p-4'>
//                         Welcome to Arte Suave Jiu-Jitsu, Yeadon's ultimate destination for Brazilian Jiu-Jitsu
//                         excellence! Led by Roy and Tom, two highly accomplished black belt coaches with 30 years of
//                         combined, competitive experience, our gym is set to redefine martial arts training in North
//                         Yorkshire. Trained under the guidance of Duane Harper from the esteemed Leo Negao lineage,
//                         Roy
//                         and Tom bring a wealth of knowledge and expertise to help you excel in the art of Jiu-Jitsu.
//                     </p>
//
//                     <ContactForm title='contact'></ContactForm>
//                 </div>
//             </div>
//
//             <div className='w-full text-neutral-100 bg-red-700 py-6'>
//                 <p>&copy; Arte Suave - {date.getFullYear()}</p>
//             </div>
//         </>
//     )
// }