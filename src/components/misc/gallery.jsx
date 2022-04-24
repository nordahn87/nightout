import { useState, useEffect, useCallback } from 'react'
import GalleryItem from './gallery/item'
import axios from 'axios'

const Gallery = () => {

    const [data, setData] = useState([])
    const [showModal, setShowModal] = useState(false)
    const [modalImg, setModalImg] = useState('')
    const [modalTitle, setModalTitle] = useState('')
    const [currentIndex, setCurrentIndex] = useState(0)

    /* Fetch gallery API */
    useEffect(() => {
        axios.get('https://nightout.webexam-mcdm.dk/api/images')
            .then(response => {
                setData(response.data)
            })
            .catch((error) => {
                console.log(error);
            })
    }, []);

    /* Toggles modal */
    const toggleModal = () => {
        setShowModal(!showModal,)
    }

    /* Disables scroll when modal is open */
    if (showModal) {
        document.body.classList.add('disable-scroll')
    } else {
        document.body.classList.remove('disable-scroll')
    }

    /* Opens modal when img is clicked */
    const openModal = useCallback((event) => {
        const index = parseInt(event.currentTarget.dataset.index)
        setModalImg(data[index].image)
        setModalTitle(data[index].title)
        setShowModal(true)
        setCurrentIndex(index)
    }, [data])

    useEffect(() => {
        /* Prevents it from trying to find a index, before the API call is done */
        if (data.length === 0) {
            return
        }
        setModalImg(data[currentIndex].image)
        setModalTitle(data[currentIndex].title)
    }, [currentIndex, data]);

    /* Handles next slide */
    const handleNextSlide = useCallback(() => {
        if (currentIndex + 1 >= data.length) {
            setCurrentIndex(0);
            return
        }
        setCurrentIndex(currentIndex + 1);
    }, [currentIndex, data])

    /* Handles prev slide */
    const handlePrevSlide = useCallback(() => {
        if (currentIndex === 0) {
            setCurrentIndex(data.length - 1);
            return
        }
        setCurrentIndex(currentIndex - 1);
    }, [currentIndex, data])

    return (
        <>
            {/* Modal gallery overlay */}
            <section
                id="modal"
                className={(showModal ? 'flex opacity-100' : 'invisible opacity-0') + ' bg-black bg-opacity-95 fixed top-0 left-0 w-full h-full z-50 flex flex-col transition-02'}>

                {/* Close button */}
                <div className="z-10 absolute right-[2%] top-[2%] ">
                    <button onClick={toggleModal}>
                        <i className={'las la-times text-white text-4xl p-2'}></i>
                    </button>
                </div>

                <div className="h-full w-full flex items-center justify-center ">
                    <section className="grid grid-cols-12 w-full">

                        {/* Prev slider button */}
                        <button onClick={handlePrevSlide} className="grid col-span-1 justify-center items-center cursor-pointer hover:bg-white hover:bg-opacity-25 transition-02">
                            <i className="las la-angle-left text-4xl text-white"></i>
                        </button>

                        {/* Image container */}
                        <div className="flex flex-col h-full justify-center items-center grid  col-span-10">
                            <img
                                className={(showModal ? 'scale-100 opacity-100' : 'scale-0 opacity-0') + ' object-contain h-[75vh] p-2 transition-04'}
                                src={modalImg}
                                alt={modalTitle}
                            />
                            <div className="flex w-full  relative justify-center">
                                <p className={(showModal ? 'top-0 opacity-100' : 'top-[50px] opacity-0') + ' absolute text-white text-sm md:text-lg transition-04'}>{modalTitle}</p>
                            </div>
                        </div>

                        {/* Next slider button */}
                        <button onClick={handleNextSlide} className="grid col-span-1 justify-center items-center cursor-pointer hover:bg-white hover:bg-opacity-25 transition-02 ">
                            <i className="las la-angle-right text-4xl text-white"></i>
                        </button>
                    </section>
                </div>


            </section>

            {/* Gallery images */}
            <section className="bg-black mb-16">
                <h2 className="text-white text-2xl font-bold mb-4">Seneste billeder</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-1">
                    {
                        data.map((item, index) => {
                            return (
                                <GalleryItem
                                    onClick={openModal}
                                    dataIndex={index}
                                    key={item.id}
                                    image={item.image}
                                    title={item.title}
                                    date={item.date}
                                />
                            )
                        })
                    }
                </div>
            </section >
        </>
    );
}

export default Gallery
