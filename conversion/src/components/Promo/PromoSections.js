import { Main } from "./Main";
import styles from "./Converter.module.css";
import background from "../../assets/image/main_background.png";
import whiteCard from "../../assets/image/white_card.png";
import blackCard from "../../assets/image/black_card.jpg";

export function PromoSections() {
    return (
        <div className={styles.promo}>
            <Main
                promoSection={true}
                backgroundUrl={background}
                header="Чіп Чендж"
                mainText="Обмінник валют - навчальний"
                buttonText="Конвертер валют"
                image={whiteCard}
                width="340px"
                height="215px"
            />
            <Main
                heightOfpage="555px"
                promoSection={false}
                header="Конвертер валют"
                mainText={
                    <div>
                        Переважна діяльність банківської<br />
                        групи за останні чотири звітні квартали<br />
                        становить 50 і більше відсотків.
                    </div>
                }
                buttonText="Конвертувати валюту"
                image={blackCard}
                width="435px"
                height="315px"
            />
        </div>
    );
}
