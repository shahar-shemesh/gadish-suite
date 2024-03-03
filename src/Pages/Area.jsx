import { motion, useScroll, useTransform } from 'framer-motion';
import classes from './Area.module.scss';

import DATA from "../data/index.json";


export default function Area() {

    return (
        <motion.section
            id="Area"
            className={classes.section}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.4 }}
        >

            <div className="sectionTitle">
                <p>מה באיזור</p>
            </div>

            <hr />

            <div className={classes.areaItems}>
                {DATA.area.map((item) => (
                    <div className={classes.item}>
                        <span>
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </span>
                    </div>
                ))}
            </div>




        </motion.section>
    );
};

