import NavigationData from '../../.data/navigation.json'
import LinkItem from './links/item'

const NavigationLinks = (props) => {
    return (
        <>
            {
                NavigationData.map((item, index) => {
                    return (
                        <LinkItem
                            key={index}
                            title={item.title}
                            path={item.path}
                            className={props.className}
                            toogleMobileNavigation={props.toogleMobileNavigation}
                        />
                    )
                })
            }
        </>
    )
}

export default NavigationLinks
