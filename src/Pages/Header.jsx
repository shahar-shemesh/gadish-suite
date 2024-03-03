
import classes from './Header.module.scss';
import { motion, useScroll, useTransform } from 'framer-motion';



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
                <motion.h1
                    className={classes.title}
                    initial={{ textShadow: "0 0 6rem rgba(255, 255, 255, 1)" }}
                    animate={{ textShadow: "0 0 2rem rgba(0, 0, 0, 1)" }}
                    transition={{ duration: 12 }}
                >
                    סוויטת גדיש
                </motion.h1>

                <motion.p
                    className={classes.desc}
                    initial={{ textShadow: "0 0 2rem rgba(255, 255, 255, 0.8)", fontSize: "0" }}
                    animate={{ textShadow: "0 0 3rem rgba(206, 179, 0, 1)", fontSize: "1rem" }}
                    transition={{ duration: 2 }}
                >
                    פנינה נסתרת בצפון
                </motion.p>

            </motion.div>

        </motion.section>
    );
};