import { useState, useEffect } from "react";

const Main = (props) => {
    return (
        <>
            <main>
                {props.children}
            </main>
        </>
    );
}

export default Main;