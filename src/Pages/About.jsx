import { motion, useScroll, useTransform } from 'framer-motion';
import classes from './About.module.scss';

import DATA from "../data/index.json";


export default function About() {

    return (
        <motion.section
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.4 }}

            id="About" className={classes.section}>

            <div className="sectionTitle">
                <p>עלינו</p>
            </div>

            <hr />

            <p className={classes.description}>
                {DATA.about}
            </p>

        </motion.section>
    );
};

