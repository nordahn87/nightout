import CardItem from '../misc/card/item'
import CardItemData from '../../.data/cards.json'

const Cards = () => {
    return (
        <>
            <h2 className="text-white text-2xl font-bold mb-4">Vi levere festen du aldrig glemmer</h2>
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-[1500px]">
                {
                    CardItemData.map((item) => {
                        return (
                            <CardItem
                                key={item.id}
                                img={item.img}
                                alt={item.alt}
                                title={item.title}
                                text={item.text}
                            />
                        );
                    })
                }
            </section>
        </>
    );
}

export default Cards;
