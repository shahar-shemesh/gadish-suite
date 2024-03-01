import classes from './Information.module.scss';

import DATA from "../data/index.json";

export default function Information() {

    return (
        <section id="mySkills">

            <div className="sectionTitle">
                <p>חדרים</p>
            </div>


            <hr /> {/* --------------------------------- */}


            <div className={classes.container}>
                {DATA?.skills?.map((item, index) => (
                    <div key={index} className={classes.card}>
                        <div className={classes.img}>
                            <img src={item.src} />
                        </div>
                        <h3 className={classes.title}>{item.title}</h3>
                    </div>
                ))}
            </div>

        </section>
    );
};