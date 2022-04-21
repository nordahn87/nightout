const GalleryItem = (props) => {

    return (
        <section className=" relative h-[290px] overflow-hidden group ">
            <img
                src={props.image}
                className="object-cover object-center w-full h-full opacity-50 group-hover:opacity-100 group-hover:scale-105 transition-02"
                alt={props.title}
            />
            
            <div className="absolute bottom-[-40px] opacity-0 group-hover:opacity-100 group-hover:bottom-0 transition-03 p-4">
                <h3 className="text-white text-2xl font-bold mb-3">{props.title}</h3>
                <p className="text-white mb-4">{props.date}</p>
            </div>
        </section >
    )
}

export default GalleryItem
