import './Button.scss'

export const Button = (props) => {
    return (
        <button className='avaliar'>
            {props.children}
        </button>
    )
}
