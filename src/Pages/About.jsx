import { motion, useScroll, useTransform } from 'framer-motion';
import classes from './About.module.scss';

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

            <hr /> {/* --------------------------------- */}

            <p className={classes.description}>

                קצת עלינו...
                חדרי אירוח BY מציעים לכם חדרי בוטיק ברמה גבוהה באיזור הצפון.

            </p>
            <p className={classes.description}>
                חדרי הבוטיק שלנו ממוקמים בפאתי העיר בית שאן וצופים לנוף המשגע של הרי הגלעד בעמק המעיינות. באיזור שפע מעיינות ונביעות המספקים לכם את החופשה המושלמת. החדרים מאובזרים ברמה גבוהה ומפנקת ומצויידים בטלויזיה המחוברת לערוצי yes , מרפסת מרווחת, שירותים ומקלחת, מיזוג אויר ומכונת קפה.

            </p>

        </motion.section>
    );
};

