import classes from './Services.module.scss';

import DATA from "../data/index.json";

export default function Services() {

    return (
        <section id="Services">

            <div className="sectionTitle">
                <p>שירותים</p>
            </div>


            <hr />

            <div className={classes.container}>

                <span>
                    <i class='bx bxs-tv white bx-md'></i>
                    <p>טלויזיה</p>
                </span>

                <span>
                    <i class='bx bxs-shower white bx-md'></i>
                    <p>מקלחת</p>
                </span>

                <span>
                    <i class='bx bxs-tree white bx-md'></i>
                    <p>גינה</p>
                </span>

                <span>
                    <i class='bx bxs-coffee white bx-md'></i>
                    <p>מכונת קפה</p>
                </span>

            </div>

        </section>
    );
};

