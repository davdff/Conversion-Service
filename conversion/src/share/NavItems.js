import { Link } from "react-router-dom";
import styles from "./Share.module.css";

export function Nav(props) {
    const menuItems = [
        { label: "Послуги", path: "/services" },
        { label: "Конвертер валют", path: "/converter" },
        { label: "Контакти", path: "/contacts" },
        { label: "Задати питання", path: "/question" },
    ];
    const className = props.header ? styles.navigation__header_container : styles.navigation__footer_container;

    return (
        <div className={className}>
            {menuItems.map((item) => (
                <Link key={item.label} to={item.path}>
                    {item.label}
                </Link>
            ))}
        </div>
    );
}