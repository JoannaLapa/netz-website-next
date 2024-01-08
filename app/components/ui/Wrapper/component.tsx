import { WrapperProps } from "./component.types"

const Wrapper: React.FC<WrapperProps> = (props) => {
    return (
        // eslint-disable-next-line react/jsx-filename-extension
        <div className='m-5'>
        {props.children}
        </div>
    )
}

export default Wrapper