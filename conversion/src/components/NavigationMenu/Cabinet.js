import cabinetIcon from "../../assets/image/login.svg";
import styles from "./Navigation.module.css";
export function Cabinet() {

    return (
        <div className={styles.navigation__login_container}>
            <img src={cabinetIcon} alt="Cabinet icon" />
            <div className={styles.navigation__login_title}>Особистий кабінет</div>
        </div>
    );
}