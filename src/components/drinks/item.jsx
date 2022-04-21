const DrinksItem = (props) => {
    return (
        <div className="grid sm:grid-cols-2 drink-card-wrapper">
            <div className="flex flex-col justify-center items-center bg-black text-white px-5 pb-6 pt-5 drink-card-description">
                <h3 className="font-bold text-xl mb-4">{props.name}</h3>
                <p className="text-center">{props.description}</p>
            </div>

            <div id="drink-card-img" className="overflow-hidden h-[300px]">
                <img src={props.image} className="object-cover w-full h-full" alt="Billede af en drink" />
            </div>
        </div>
    )
}

export default DrinksItem
 