
import classes from './Header.module.scss';
import { motion, spring, useScroll, useTransform } from 'framer-motion';



export default function Header() {

    const { scrollY } = useScroll();

    const yHeader = useTransform(scrollY, [0, 200], [0, -100]);
    const opacityHeader = useTransform(scrollY, [0, 200, 300, 500], [1, 0.5, 0.5, 0]);

    const yText = useTransform(scrollY, [0, 200, 300, 500], [0, 50, 50, 300]);
    const scaleText = useTransform(scrollY, [0, 300], [1, 1.5]);

    return (
        <motion.section
            id="Header"
            className={classes.Header}
            style={{ opacity: opacityHeader, y: yHeader }}
        >
            <motion.div
                style={{ scale: scaleText, y: yText }}
                className={classes.content}
            >
                <h1 className={classes.title}>
                    סוויטת גדיש
                </h1>

                <motion.p
                    className={classes.desc}
                    initial={{ fontSize: 0 }}
                    animate={{ fontSize: '1rem' }}
                    transition={{ duration: 0.5 }}
                >
                    פנינה נסתרת בצפון
                </motion.p>

            </motion.div>

        </motion.section>
    );
};