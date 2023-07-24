export default function Button(props) {
    return (
        <button
        className="border border-solid-neutral-100 w-1/2 md:w-1/4 font-black mx-auto motion-safe:animate-fadeIn duration-500 text-neutral-100 hover:bg-gradient-to-r from-red-700 via-red-800 to-red-900 hover:scale-105 md:text-sm lg:text-2xl py-4">{props.title}
        </button>)
}