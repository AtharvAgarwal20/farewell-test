import { forwardRef } from "react";

import * as styles from './Carousel.module.scss'

import Card from "../Card/Card";

const Carousel = forwardRef(function ({ photo }) {
    return (
        <div className={styles.carousel}>
            <Card photo={photo} />
        </div>
    )
})

export default Carousel