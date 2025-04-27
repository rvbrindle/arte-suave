export default function Logo(props) {
    return (
        <img className='md:w-1/5 w-1/2 mx-auto' src={`${process.env.PUBLIC_URL}/arte-suave-logo.png`} alt='arte suave logo'/>
    )
}