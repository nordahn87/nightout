import { useState, useEffect } from "react";
import NavigationData from "../../.data/navigation.json";
import NavigationItem from "./item"

const NavigationLinks = () => {
    return (
        <>
            {NavigationData.map((item, index) => {
                return (
                    <NavigationItem
                        key={index}
                        title={item.title}
                    />
                )
            })}

        </>
    );
}

export default NavigationLinks;
