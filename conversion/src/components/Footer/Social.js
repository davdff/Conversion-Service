import { Link } from "react-router-dom"

import facebook from "../../image/facebook_logo.svg"
import instagram from "../../image/inst_loto.svg"
import twitter from "../../image/twitter_logo.svg"
import youtube from "../../image/youtube_logo.svg"
import styles from "./Footer.module.css"


const socials = [
    {
        src: facebook,
        link: "https://www.facebook.com/"
    },
    {
        src: instagram,
        link: "https://www.instagram.com/"
    },
    {
        src: twitter,
        link: "https://twitter.com/"
    },
    {
        src: youtube,
        link: "https://www.youtube.com/"
    }
];


export function Social() {
    return (
        <div className={styles.footer__social_wrapper}>
            {socials.map((item) => (
                <Link to={item.link} target="blank">
                    <img src={item.src}
                        style={{ width: "16px", height: "16px" }}
                        key={item.src}
                        alt="social network icon" />
                </Link>
            ))}
        </div>
    )
}