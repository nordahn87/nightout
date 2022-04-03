import { useState, useEffect } from 'react'

const AccordionItem = (props) => {

    const [toggleleAccordion, setToggleleAccordion] = useState(false)

    const toogleAccordion = () => {
        setToggleleAccordion(!toggleleAccordion)
    }

    return (
        <>
            <div className={(toggleleAccordion ? 'max-h-[400px] ' : 'max-h-[56px] ') + ' border max-w-[600px] overflow-hidden transition-max-h'}>
                <div
                    className="bg-blue-300 flex justify-between p-4"
                    role="button"
                    onClick={toogleAccordion}>
                    <h3>Overskrift</h3>
                    {toggleleAccordion ? <p className="transition-test ">close</p> : <p className= "transition-test ">open</p>}
                </div>

                <div className="bg-red-300 flex flex-col px-4 py-6">
                    {/* <p>{props.content}</p> */}
                    <div>hej</div>
                    <p>Minim in eiusmod fugiat sunt veniam non aute eiusmod. Officia sit pariatur duis cillum ullamco qui Lorem.</p>
                </div>
            </div>
        </>
    )
}

export default AccordionItem