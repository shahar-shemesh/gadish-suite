import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { ReactTyped } from "react-typed";
import classes from './HeroSection.module.scss';

export default function HeroSection() {

    const [showFirstString, setShowFirstString] = useState(false);

    function handleComplete() {
        setShowFirstString(!showFirstString)
    }

    return (
        <section id="heroSection" className={classes.heroSection}>


            <div className={classes.content}>


                <h1 className={classes.title}>
                    סוויטת גדיש
                </h1>
            </div>

        </section>
    );
};