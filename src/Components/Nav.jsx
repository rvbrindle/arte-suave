const navItems = [
    'Home',
    'About',
    'Contact'
]

export default function Nav() {

        const listItems = navItems.map( (navItem, index) =>
            <li className='py-4 px-6 md:px-12 text-lg md:text-xl cursor-pointer hover:scale-110 transition ease-in' key={index}>{navItem}</li>
        );

        return <ul className='w-full border-b border-neutral-400 bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-700 text-neutral-100 z-50 fixed top-0 flex'>{listItems}</ul>;
}
