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
                    <i className='bx bxs-tv white bx-md'></i>
                    <p>טלויזיה</p>
                </span>

                <span>
                    <i className='bx bxs-shower white bx-md'></i>
                    <p>מקלחת</p>
                </span>

                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" data-name="Camada 1" viewBox="0 0 100 100" id="hanger"><path d="M98.60992,59.09l-40.77-32.45-4.80982,3.85L89.57989,59.58h-8.98a10.56833,10.56833,0,0,0-9.02-5.08H28.41a10.58136,10.58136,0,0,0-9.01,5.06h-9.03l46.98-37.67a12.5227,12.5227,0,0,0,2.78-2.94,12.1936,12.1936,0,1,0-18.12988,2.43L46.8399,17.5A6.18328,6.18328,0,1,1,56.18,12.19a5.8556,5.8556,0,0,1-.21,1.58,6.2042,6.2042,0,0,1-2.37012,3.44L1.39,59.07a3.64106,3.64106,0,0,0,2.26,6.49H17.82989V100H82.16V65.58H96.3399a3.64093,3.64093,0,0,0,2.27-6.49Z"></path></svg>
                    <p>מגבות</p>
                </span>

                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="conditioner"><g data-name="Layer 2"><path d="M23.77 24l-.5-11.05A7.26 7.26 0 0 0 20 7.19V3a1 1 0 0 0-1-1H13a1 1 0 0 0-1 1V7.19a7.26 7.26 0 0 0-3.27 5.75L8.23 24zM8.14 26L8 29a1 1 0 0 0 1 1H23a1 1 0 0 0 1-1l-.13-3z"></path></g></svg>
                    <p>כלי רחצה</p>
                </span>


                <span>
                    <i className='bx bxs-tree white bx-md'></i>
                    <p>גינה מרווחת</p>
                </span>

                <span>
                    <i className='bx bxs-coffee white bx-md'></i>
                    <p>מכונת קפה</p>
                </span>

                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" id="cooking-pot"><g data-name="cooking pot"><path d="M42 16H6c-1.103 0-2 .598-2 1.333v1.334C4 19.402 4.897 20 6 20h36c1.103 0 2-.598 2-1.333v-1.334c0-.735-.897-1.333-2-1.333zm-4.33-2H10.33c2.86-3.08 7.99-5 13.67-5s10.81 1.92 13.67 5z"></path><path d="M28 11h-8a1 1 0 0 1-1-1V8a3.003 3.003 0 0 1 3-3h4a3.003 3.003 0 0 1 3 3v2a1 1 0 0 1-1 1zm-7-2h6V8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1zm23 14h-3a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1H4a3.003 3.003 0 0 0-3 3v1a3.003 3.003 0 0 0 3 3h3v8a5 5 0 0 0 5 5h24a5 5 0 0 0 5-5v-8h3a3.003 3.003 0 0 0 3-3v-1a3.003 3.003 0 0 0-3-3zM4 28a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h3v3zm41-1a1 1 0 0 1-1 1h-3v-3h3a1 1 0 0 1 1 1z"></path></g></svg>
                    <p>כלי מטבח</p>
                </span>

                <span>
                    <i className='bx bx-wifi white bx-md'></i>
                    <p>אינטרנט מהיר</p>
                </span>



            </div>

        </section>
    );
};

