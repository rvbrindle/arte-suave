export default function BgImg({img}) {

    return (
        <div
            className="bg-cover bg-center -z-50 w-full h-full absolute top-0 bottom-0 left-0 right-0 bg-no-repeat"
            style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/${img})`,
            }}
        >
        </div>
    );
}