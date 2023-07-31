import { Logo } from "../../share/Logo";
import styles from "./Footer.module.css"



export function Address() {
    return (
        <div className={styles.footer__address_wrapper}>
            <Logo margin="0px" headerSection={false} />
            <div className={styles.footer__address_descr}>
                <div>
                    04128, м.Київ, вул. Хрещатик, 19 <br />
                    Ліцензія НБУ №156 <br />
                    Ⓒ ПАТ ЧіпЧендж, 2019-2023
                </div>
            </div>
        </div>
    )
}