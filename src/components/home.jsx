import Header from './header'
import Cards from './misc/cards'
import Gallery from './misc/gallery'
import Main from './main'

const Home = () => {
    return (
        <>
            <Header />
            <Main className="max-w-[1366px]">
                <Cards />
                <Gallery />
            </Main>
        </>
    )
}

export default Home
