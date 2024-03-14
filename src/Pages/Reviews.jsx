import React, { useState, useEffect } from 'react';

import { motion, AnimatePresence } from 'framer-motion';
import classes from './Reviews.module.scss';

import DATA from "../data/index.json";


export default function Reviews() {
    const [index, setIndex] = useState(0);
    const strings = DATA.reviews;

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(prevIndex => (prevIndex + 1) % strings.length);
        }, 7000);

        return () => clearInterval(interval);
    }, [strings.length]);


    return (
        <motion.section
            id="Reviews"
            className={classes.section}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.4 }}
        >

            <div className="sectionTitle">
                <p>לקוחותינו מספרים</p>
            </div>

            <hr />

            <div className={classes.reviews}>

                <AnimatePresence mode='wait'>
                    <motion.span
                        key={index}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        <span className={classes.quoteMark}>”</span>
                        <span className={classes.reviewItem}>{strings[index]}</span>
                        <span className={classes.quoteMark}>”</span>


                    </motion.span>
                </AnimatePresence>


            </div>

        </motion.section>
    );
};

