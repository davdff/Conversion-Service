import { Converter } from "./Converter";
import { Image } from "./Image";
import styles from "./Converter.module.css"

export function Main(props) {
    return (
        <section style={{
            backgroundImage: `url(${props.backgroundUrl})`, backgroundSize: "cover",
            backgroundPosition: "center", minHeight: "400px", height: `${props.heightOfpage}`
        }}>
            <div className={styles.promo__container}>
                <Converter
                    promoSection={props.promoSection}
                    header={props.header}
                    mainText={props.mainText}
                    buttonText={props.buttonText}
                />
                <Image image={props.image} width={props.width} height={props.height} />
            </div>
        </section>
    )
}