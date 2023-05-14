import './Button.scss'

export const Button = (props) => {
    return (
        <button className='avaliar btn btn-success'>
            {props.children}
        </button>
    )
}
