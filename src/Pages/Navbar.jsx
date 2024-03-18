import { useState, useEffect } from "react";
import { motion } from 'framer-motion';

import { Link } from "react-scroll";
import classes from './Navbar.module.scss';

export default function Navbar() {

    const [navActive, setNavActive] = useState(false);

    const toggleNav = () => {
        setNavActive(!navActive);
    }

    const closeMenu = () => {
        setNavActive(false);
    }

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 500) {
                closeMenu;
            }
        }

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, []);


    useEffect(() => {
        if (window.innerWidth <= 1200) {
            closeMenu;
        }
    }, []);


    return (
        <motion.nav
            variants={{
                hidden: { opacity: 0.6, y: -30 },
                visible: { opacity: 1, y: 0 }
            }}
            initial="hidden"
            animate="visible"

            transition={{ type: 'spring', duration: 0.6, stiffness: 500 }}
            className={`${classes.navbar} ${navActive ? classes.active : ""}`}
        >
            <Link
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="Header"
            >
                <span className={classes.logo}>
                    <img src="./media/gadish.png" />
                </span>
            </Link>

            <a className={`${classes.navHamburger} ${navActive ? classes.active : ""}`} onClick={toggleNav}>
                <span className={classes.navHamburgerLine}></span>
                <span className={classes.navHamburgerLine}></span>
                <span className={classes.navHamburgerLine}></span>
            </a>

            <div className={`${classes.items} ${navActive ? classes.active : ""}`}>
                <ul>
                    {/* <motion.li
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: 'spring', stiffness: 500 }}
                    > */}
                    <li>
                        <Link
                            onClick={closeMenu}
                            activeClass={classes.active}
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            to="Header"
                            className={classes.content}
                        >
                            בית
                        </Link>
                    </li>

                    <li>

                        <Link
                            onClick={closeMenu}
                            activeClass={classes.active}
                            spy={true}
                            smooth={true}
                            offset={-210}
                            duration={500}
                            to="About"
                            className={classes.content}
                        >
                            עלינו
                        </Link>
                    </li>

                    <li>
                        <Link
                            onClick={closeMenu}
                            activeClass={classes.active}
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}
                            to="Services"
                            className={classes.content}
                        >
                            שירותים
                        </Link>
                    </li>

                    <li>
                        <Link
                            onClick={closeMenu}
                            activeClass={classes.active}
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}
                            to="Area"
                            className={classes.content}
                        >
                            מה באיזור
                        </Link>
                    </li>

                    <li>
                        <Link
                            onClick={closeMenu}
                            activeClass={classes.active}
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}
                            to="Gallery"
                            className={classes.content}
                        >
                            גלרית תמונות
                        </Link>
                    </li>

                    <li>
                        <Link
                            onClick={closeMenu}
                            activeClass={classes.active}
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}
                            to="Reviews"
                            className={classes.content}
                        >
                            לקוחותינו מספרים
                        </Link>
                    </li>

                </ul>
            </div>

            <motion.span
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 500 }}
                className={classes.contactButton}
            >
                <Link
                    onClick={closeMenu}
                    activeClass={classes.active}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    to="Contact"
                    className={`btn btn-outline-primary ${classes.contactButton}`}
                >
                    צור קשר
                </Link>
            </motion.span>


        </motion.nav>
    );

}