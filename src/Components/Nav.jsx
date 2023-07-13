const navItems = [
    'Home',
    'About',
    'Contact'
]

export default function Nav() {

        const listItems = navItems.map( (navItem, index) =>
            <li className='py-4 px-12 text-xl' key={index}>{navItem}</li>
        );

        return <ul className='w-full border-b-1 border-neutral-100 bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-700 text-neutral-100  fixed top-0 flex'>{listItems}</ul>;
}
