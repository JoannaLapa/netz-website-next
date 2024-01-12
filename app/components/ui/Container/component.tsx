import { ContainerProps } from "./index"
import { StylesContainer } from './component.styles'

const Container: React.FC<ContainerProps> = (props) => {
return (
    <div className={StylesContainer({ variant: props.variant})}>
        {props.children}
    </div>
)
}

export default Container