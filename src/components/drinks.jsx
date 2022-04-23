import { useState, useEffect } from 'react'
import Main from './main'
import DrinksItem from './drinks/item';
import axios from 'axios'

const Drinks = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('https://nightout.webexam-mcdm.dk/api/drinks')
            .then(response => {
                setData(response.data)
            })
            .catch((error) => {
                console.log(error);
            })
    }, []);

    return (
        <Main className="max-w-[1366px]">
            <div className="relative">
                <div className="absolute z-10 top-[30%] left-[5%] sm:left-[10%]">
                    <h1 className="text-white text-4xl font-bold mb-4">Drinks</h1>
                    <h2 className="text-white text-2xl font-bold mb-4">Est voluptate Lorem ullamco aliqua.</h2>
                </div>

                <img
                    src="./assets/drinks-bg.jpg"
                    className="brightness-50 object-cover object-top w-full h-[450px] xs:h-[500px] mb- xs:mb-12"
                    alt="Billede af en gruppe kvinder med drinks i hånden"
                />
            </div>

            {
                data.map((item) => {
                    return (
                        <DrinksItem
                            key={item.id}
                            name={item.name}
                            description={item.description}
                            image={item.image}
                        />
                    )
                })
            }
        </Main>
    );
}

export default Drinks
