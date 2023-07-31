import styles from "./Footer.module.css"


export function Phone(props) {
    return (
        <div className={styles.footer__phone_wrapper}>
            <div className={styles.footer__phone_img}>
                <img src={props.img} />
            </div>
            <div className={styles.footer__phone_text}>
                <div className={styles.footer__phone_title}>{props.number}</div>
                <div className={styles.footer__phone_descr}>{props.text}</div>
            </div>
        </div>
    )
}