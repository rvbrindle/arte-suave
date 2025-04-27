export default function Lineage() {
    return (
        <>
            <div className='flex text-center flex-col bg-red-900 relative'>
                <div className='container text-white mx-auto mb-2 py-6 md:py-12 motion-safe:animate-fadeInLeft'>
                    <h2 className='text-2xl md:text-4xl font-extrabold pb-4 md:pb-8'>Our Lineage</h2>

                        <p>Mitsuyo Maeda → Carlos Gracie → Helio Gracie → Rolls Gracie → Romero Cavalcanti → Fabio Gurgel → Leo Negao → Duane Harper → Kieran Coxon</p>
                    <div className='flex flex-row content-center justify-center'>
                        <img className='w-1/3 md:w-1/6 p-8' src={`${process.env.PUBLIC_URL}/negao-logo.png`}
                             alt='leo negao academy logo'/>
                        <img className='w-1/3 md:w-1/6 p-8' src={`${process.env.PUBLIC_URL}/avma-logo.png`}
                             alt='avma academy logo'/>
                        <img className='w-1/3 md:w-1/6' src={`${process.env.PUBLIC_URL}/arte-suave-logo.png`}
                             alt='arte suave academy logo'/>
                    </div>
                </div>
            </div>
        </>
    )
}