import { forwardRef } from "react";

import * as styles from './Carousel.module.scss'

import Card from "../Card/Card";

const Carousel = forwardRef(function ({ photo, name, team, btnLeft, btnRight, onNext, onPrev }, ref) {
    return (
        <div className={styles.carouselContainer}>
            <div className={styles.carousel}>
                <Card
                    photo={photo}
                    name={name}
                    team={team}
                    btnLeft={btnLeft}
                    btnRight={btnRight}
                    onNext={onNext}
                    onPrev={onPrev}
                    ref={ref}
                />
            </div>
        </div>
    )
})

export default Carousel