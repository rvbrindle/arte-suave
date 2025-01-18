export default function Footer() {
    return (
    <div className='w-full text-neutral-100 bg-red-700 py-2 fixed bottom-0'>
        <p>&copy; Arte Suave - {new Date().getFullYear()}</p>
    </div>
    )
}
