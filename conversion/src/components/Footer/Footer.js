import { Address } from "./Address"
import { Social } from "./Social"
import { Nav } from "../../share/NavItems"
import { Phone } from "./Phone"

import styles from "./Footer.module.css"
import phone from "../../assets/image/phone.svg"
import number from "../../assets/image/number.svg"



export function Footer() {
    return (
        <section className={styles.footer}>
            <div className={styles.container}>
                <Address />
                <Nav header={false} />
                <Phone img={phone} number="3773" text="Цілодобова підтримка" />
                <Phone img={number} number="8 800 111 22 33" text="Безкожтовно для дзвінків в межах України" />
                <Social />
            </div>
        </section>
    )
}