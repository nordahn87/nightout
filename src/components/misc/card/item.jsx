const CardItem = (props) => {
    return (
        <section className="relative sm:max-w-[450px] sm:max-h-[450px] aspect-square overflow-hidden group card-wrapper">
            <img
                src={props.img}
                className="object-cover w-full h-full group-hover:scale-110 transition-02"
                alt={props.alt}
            />

            {/* Hover overlay */}
            <div className="absolute bottom-[-40px] opacity-0 group-hover:opacity-100 group-hover:bottom-0 transition-03 p-4">
                <h3 className="text-white text-2xl font-bold mb-3">{props.title}</h3>
                <p className="text-white mb-4">{props.text}</p>
                <button className="bg-white w-[140px] py-3">Læs mere</button>
            </div>
        </section>
    );
}

export default CardItem;
