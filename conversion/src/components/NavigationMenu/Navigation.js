import { Logo } from "../../share/Logo"
import { Nav } from "../../share/NavItems"
import { Cabinet } from "./Cabinet"
import styles from "./Navigation.module.css"
export function Navigation() {
    return (
        <section className={styles.navigation}>
            <div className={styles.container}>
                <Logo headerSection={true} />
                <Nav header={true} />
                <Cabinet />
            </div>
        </section>
    )
}