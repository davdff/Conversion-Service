import styles from "./Converter.module.css"

export function Converter(props) {
    const headerClassName = props.promoSection
        ? styles.promo__header
        : styles.convert__header;
    const descrClassName = props.promoSection
        ? styles.promo__descr
        : styles.convert__descr;
    const buttonClassName = props.promoSection
        ? styles.promo__button
        : styles.convert__button;
    return (
        <div className={styles.promo__item}>
            <div className={headerClassName}>{props.header}</div>
            <div className={descrClassName}>{props.mainText}</div>
            <button className={buttonClassName}>{props.buttonText}</button>
        </div>
    );
}