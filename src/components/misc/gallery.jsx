import { useState, useEffect } from 'react'
import GalleryItem from './gallery/item'
import axios from 'axios'

const Gallery = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('https://nightout.webexam-mcdm.dk/api/images')
            .then(response => {
                setData(response.data)
            })
            .catch((error) => {
                console.log(error);
            })
    }, []);

    return (
        <section className="bg-black">
            <h2 className="text-white text-2xl font-bold mb-4">Seneste billeder</h2>
            <section className="grid sm:grid-cols-2 lg:grid-cols-4 gap-1">
                {
                    data.map((item) => {
                        return (
                            <GalleryItem
                                key={item.id}
                                image={item.image}
                                title={item.title}
                                date={item.date}
                            />
                        )
                    })
                }
            </section>
        </section >
    );
}

export default Gallery
