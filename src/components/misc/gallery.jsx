import { useState, useEffect, useCallback } from 'react'
import GalleryItem from './gallery/item'
import axios from 'axios'

const Gallery = () => {

    const [data, setData] = useState([])
    const [showModal, setShowModal] = useState(false)
    const [modalImg, setModalImg] = useState('')
    const [modalTitle, setModalTitle] = useState('')

    {/* Fetch gallery API */ }
    useEffect(() => {

        axios.get('https://nightout.webexam-mcdm.dk/api/images')
            .then(response => {
                setData(response.data)
            })
            .catch((error) => {
                console.log(error);
            })
    }, []);

    {/* Toggles modal */ }
    const toggleModal = () => {
        setShowModal(!showModal,)
    }

    {/* Disables scroll when modal is open */ }
    if (showModal) {
        document.body.classList.add('disable-scroll')
    } else {
        document.body.classList.remove('disable-scroll')
    }

    {/* Opens modal when img is clicked */ }
    const openModal = useCallback((event) => {
        const index = parseInt(event.currentTarget.dataset.index)
        setModalImg(data[index].image)
        setModalTitle(data[index].title)
        setShowModal(true)
        setCurrentIndex(index)
    }, [data])





    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        console.log(currentIndex)
        {/* forhindre at den prøver at finde et index før api kaldet er færdig */ }
        if (data.length === 0) {
            return
        }
        setModalImg(data[currentIndex].image)
        setModalTitle(data[currentIndex].title)
    }, [currentIndex]);

    const handleNextSlide = useCallback(() => {
        if (currentIndex + 1 >= data.length) {
            setCurrentIndex(0);
            return
        }
        console.log(currentIndex)
        setCurrentIndex(currentIndex + 1);
    }, [currentIndex, data])

    const handlePrevSlide = useCallback(() => {
        if (currentIndex === 0) {
            setCurrentIndex(data.length - 1);
            return
        }
        setCurrentIndex(currentIndex - 1);
    }, [currentIndex, data])



    return (
        <>
            {/* Modal overlay */}
            <section
                id="modal"
                className={(showModal ? 'flex opacity-100' : 'invisible opacity-0') + ' bg-black bg-opacity-95 fixed top-0 left-0 w-full h-full z-50 flex flex-col transition-02'}>

                <section className="z-10 px-6 py-6 flex justify-end text-white">


                    <button onClick={toggleModal}>
                        <i className={'las la-times text-white text-4xl p-2'}></i>
                    </button>
                </section>


                <section className="grid grid-cols-12 bg-red-200 ">


                    <div className="grid col-span-1  justify-center items-center">
                        <button
                            className="border border-white w-[60px] h-[60px] rounded-full hover:bg-white hover:bg-opacity-25 transition-02"
                            onClick={handlePrevSlide}>
                            <i className="las la-angle-left text-4xl text-white"></i>
                        </button>
                    </div>


                    <section className="flex flex-col h-full justify-center items-center grid  col-span-10">
                        <img
                            className={(showModal ? 'scale-100 opacity-100' : 'scale-0 opacity-0') + ' object-contain h-[80vh] p-2 transition-04'}
                            src={modalImg}
                            alt={modalTitle}
                        />
                        <div className="flex w-full  relative justify-center">
                            <p className={(showModal ? 'top-0 opacity-100' : 'top-[50px] opacity-0') + ' absolute  text-white text-lg transition-04'}>{modalTitle}</p>
                        </div>
                    </section>


                    <div className="grid col-span-1 justify-center items-center">
                        <button
                            className="border border-white w-[60px] h-[60px] rounded-full hover:bg-white hover:bg-opacity-25 transition-02"
                            onClick={handleNextSlide}>
                            <i className="las la-angle-right text-4xl text-white"></i>
                        </button>
                    </div>






                </section>
            </section>

            {/* Gallery */}
            <section className="bg-black mb-16">
                <h2 className="text-white text-2xl font-bold mb-4">Seneste billeder</h2>
                <section className="grid sm:grid-cols-2 lg:grid-cols-4 gap-1">
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
                </section>
            </section >
        </>
    );
}

export default Gallery
