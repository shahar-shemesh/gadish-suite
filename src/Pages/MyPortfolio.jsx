import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Card from '../components/Card';

import classes from './MyPortfolio.module.scss';

import DATA from "../data/index.json"



export default function MyPortfolio() {

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
                        <Card
                            key={DATA?.portfolio[index]?.id}
                            item={DATA?.portfolio[index]}
                        />
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