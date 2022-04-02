

const BrandLogo = (props) => {

    return (
        <svg viewBox="0 0 24 24" className={props.className} fill="red">
            <path d="M22,2v20H2V2H22 M24,0H0v24h24V0L24,0z" />
            <path d="M11,7.5c3,0,5.5,2.5,5.5,5.5S14,18.6,11,18.6S5.4,16.1,5.4,13S7.9,7.5,11,7.5 M11,5.5c-4.2,0-7.5,3.4-7.5,7.5 s3.4,7.5,7.5,7.5s7.5-3.4,7.5-7.5S15.1,5.5,11,5.5L11,5.5z" />
            <circle cx="18.6" cy="5.4" r="1.4" />
        </svg>
    )
}

const someIcon = (props) => {

    return (
        <svg viewBox="0 0 24 24" className={props.className}>
            <path d="M6.6,5.6V0H1.3v24c1.4,0,8.2,0,8.2,0v-7.7h5.3V24h8V10.4L6.6,5.6z" />
        </svg>
    )
}

export { BrandLogo, someIcon }
