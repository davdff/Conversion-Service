import { Link } from "react-router-dom"
import logo from "../image/logo.png"
import styles from "./Share.module.css";


export function Logo(props) {
    return (
        <div style={{ marginTop: `${props.margin}` }} className={styles.logo__container}>
            <Link to="/"><img src={logo} alt="logo" className={styles.logo__img}></img></Link>
            <Link to="/"><div className={styles.logo__title}>Чіп Чендж</div></Link>
        </div>
    )
}