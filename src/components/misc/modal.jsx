const Modal = (props) => {

    return (
        <>
            {/* <Modal /> */}
            <div className="fixed top-0 left-0 bg-red-300 w-screen h-screen z-50">
                <img
                    src={props.image}
                    alt={props.title}
                />
            </div>
        </>
    )
}

export default Modal
