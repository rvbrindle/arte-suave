import {ArrowDownCircleIcon} from "@heroicons/react/24/outline";

export default function JoinUs({strapLine}) {

    const scrollToElem = (section) => {

        const element = document.getElementById(section);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    return (
        <div className='flex-col rounded bg-red-700 bg-opacity-80 text-white flex w-3/4 md:w-1/3 mx-auto align-middle items-center border-2 border-red-700 p-8 mb-8'>
            <p className='w-full text-xl py-2 md:py-4'>{strapLine}</p>
                <p className='w-10/12'>Try a <strong>free</strong> class</p>
                <ArrowDownCircleIcon
                    onClick={() => scrollToElem('contact-page')}
                    className='w-2/12 py-2 md:py-4 mx-auto cursor-pointer hover:scale-110 hover:text-black transition ease-in-out'
                />
        </div>
    )
}
