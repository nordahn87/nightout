import { useState, useEffect } from 'react'

const AccordionItem = (props) => {

    const [toggleleAccordion, setToggleleAccordion] = useState(false)

    const toogleAccordion = () => {
        setToggleleAccordion(!toggleleAccordion)
    }

    return (
        // <>
        //     <div className={(toggleleAccordion ? 'max-h-[200px] ' : 'max-h-[56px] ') + ' max-w-[800px] overflow-hidden transition-max-h border-last-child'}>
        //         <div
        //             className="bg-white text-lg flex justify-between items-center p-4 border border-neutral-300"
        //             role="button"
        //             onClick={toogleAccordion}>
        //             <h3 className="hover:underline">{props.question}</h3>
        //             <i className={(toggleleAccordion ? 'la-times' : 'la-plus') + ' las la-lg'}></i>
        //         </div>
        //         <div className="bg-black text-white flex flex-col px-4 py-6 border-x border-white ">
        //             <p>{props.answer}</p>
        //         </div>
        //     </div>
        // </>

        <section className="border-last-child border-hund">
            <div
                className="bg-white text-lg flex justify-between items-center p-4 border-t  border-neutral-300"
                role="button"
                onClick={toogleAccordion}>
                <h3 className="hover:underline">{props.question}</h3>
                <i className={(toggleleAccordion ? 'la-times' : 'la-plus') + ' las la-lg'}></i>
            </div>
            <div className={(toggleleAccordion ? 'max-h-[200px]' : 'max-h-0') + ' bg-black text-white overflow-hidden flex flex-col border-x border-white transition-max-h'}>
                <div className="px-4 py-6">
                    <p>{props.answer}</p>
                </div>
            </div>
        </section >

    )
}

export default AccordionItem