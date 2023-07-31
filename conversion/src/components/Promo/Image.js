import styles from "./Converter.module.css";

export function Image(props) {
    return (
        <div className={`${props.promoSection ? styles.promo__img : styles.convert__img}`}>
            <img src={props.image} alt="card" width={props.width} height={props.height} />
        </div>
    );
}