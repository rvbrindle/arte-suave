export default function Icon({icon, width = '1/3'}) {
    return (
        <div className={`w-${width} self-center border-tertiary rounded-full`}>
            <img src={`${process.env.PUBLIC_URL}/${icon}.png`} alt={`${icon} icon`}/>
        </div>)
}