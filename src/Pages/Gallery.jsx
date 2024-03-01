import { useState, useEffect } from 'react';
import { motion, useDragControls, AnimatePresence } from 'framer-motion';
import Card from '../components/Card';

import classes from './Gallery.module.scss';

import DATA from "../data/index.json"

const variants = {
    enter: (direction) => {
        return {
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
            height: 0
        };
    },
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1,
        height: 'auto'
    },
    exit: (direction) => {
        return {
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
            height: 0
        };
    }
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
};

export default function Gallery() {

    const [index, setIndex] = useState(0);
    const [clickNext, setClickNext] = useState(false);
    const [clickPrev, setClickPrev] = useState(false);

    const [isMobile, setIsMobile] = useState(false)

    const handleResize = () => {
        if (window.innerWidth < 1200) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize);
    });

    const portfolioLength = (DATA.portfolio).length;

    function nextProject() {
        setClickNext(true);
        setIndex((prevIndex) => ((portfolioLength + (prevIndex + 1)) % portfolioLength));
        setTimeout(() => {
            setClickNext(false);
        }, 200);
    }

    function prevProject() {
        setClickPrev(true);
        setIndex((prevIndex) => ((portfolioLength + (prevIndex - 1)) % portfolioLength));
        setTimeout(() => {
            setClickPrev(false);
        }, 200);


    }

    return (

        <section className={classes.section} id="MyPortfolio">

            <div className={classes.containerBox}>
                <div className="sectionTitle">
                    <p>גלרית תמונות</p>
                </div>
            </div>

            <hr /> {/* --------------------------------- */}

            <ul className={classes.sectionContainer}>
                <>
                    <span
                        className={
                            `${classes.animation}
                      ${clickNext ? classes.toRight + ' ' + classes.removed : ''}
                      ${clickPrev ? classes.toLeft + ' ' + classes.removed : ''}`
                        }>
                        <motion.li
                            layout
                            key={DATA?.portfolio[index]?.id}
                            className={classes.card}
                        >
                            <AnimatePresence initial={false}>
                                <motion.img
                                    src={DATA?.portfolio[index].src}
                                    key={DATA?.portfolio[index].id}
                                    variants={variants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    transition={{
                                        x: { type: "spring", stiffness: 300, damping: 30 },
                                        opacity: { duration: 0.2 }
                                    }}
                                    drag="x"
                                    dragConstraints={{ left: 0, right: 0 }}
                                    dragElastic={1}
                                    onDragEnd={(e, { offset, velocity }) => {
                                        const swipe = swipePower(offset.x, velocity.x);
                                        if (swipe < -swipeConfidenceThreshold) {
                                            prevProject();
                                        } else if (swipe > swipeConfidenceThreshold) {
                                            nextProject();
                                        }
                                    }}
                                />
                            </AnimatePresence>
                        </motion.li>
                    </span>

                    <span className={classes.buttons}>

                        <button id={classes.button} onClick={prevProject} className={`${classes.previous} ${classes.wider}`}>
                            <span className={classes.circle} aria-hidden="true">
                                <span className={`${classes.icon} ${classes.arrow}`}></span>
                            </span>
                        </button>


                        <button id={classes.button} onClick={nextProject} className={`${classes.next} ${classes.wider}`}>
                            <span className={classes.circle} aria-hidden="true">
                                <span className={`${classes.icon} ${classes.arrow}`}></span>
                            </span>
                        </button>

                    </span>
                </>








            </ul>


        </section>

    );
};