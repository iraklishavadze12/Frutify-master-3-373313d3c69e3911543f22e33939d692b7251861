import { Span } from "next/dist/trace"
import styles from './Eror.module.scss'


interface Props {
    value: string,

}

const ErrorLabel = (props: Props) => {

    return (
        <span  className={styles.error}>{props.value}</span>
    )
}

export default ErrorLabel