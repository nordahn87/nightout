const Main = (props) => {
    return (
        <main className="w-full flex flex-col items-center px-4">
            <section className="max-w-[1366px]">
                {props.children}
            </section>
        </main>
    )
}

export default Main
