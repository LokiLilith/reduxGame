

const Button = (props) => {

    return(
        <button disabled={props.dsb} onClick={props.click} className={props.style}>{props.text}</button>
    )
}

export default Button