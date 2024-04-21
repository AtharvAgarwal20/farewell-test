import { forwardRef } from "react";

import * as styles from './Card.module.scss'

const Card = forwardRef(function ({ photo }) {
    return (
        <div className={styles.card}>
            <svg className={styles.svg}>
                <clipPath id="card-body-mask" clipPathUnits="objectBoundingBox"><path d="M0.844,0.002 H0.042 C0.02,0.002,0.002,0.017,0.002,0.035 V0.394 C0.002,0.402,0.006,0.411,0.014,0.417 L0.049,0.445 C0.056,0.452,0.06,0.46,0.06,0.469 V0.515 C0.06,0.524,0.056,0.533,0.049,0.539 L0.014,0.567 C0.006,0.573,0.002,0.582,0.002,0.59 V0.969 C0.002,0.987,0.02,1,0.042,1 H0.962 C0.984,1,1,0.987,1,0.969 V0.132 C1,0.123,0.998,0.115,0.991,0.109 L0.872,0.011 C0.864,0.005,0.854,0.002,0.844,0.002"></path></clipPath>
            </svg>
            <div className={styles.cardBody}></div>
            <img src={photo} alt="photo" className={styles.photo} />
        </div>
    )
})

export default Card