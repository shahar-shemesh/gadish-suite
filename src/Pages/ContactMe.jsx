import classes from './ContactMe.module.scss';
import Icon from '../components/Icon';

export default function ContactMe() {


  return (

    <section id="Contact" className={classes.section}>

      <div className="sectionTitle">
        <p>צור קשר</p>
      </div>

      <hr /> {/* --------------------------------- */}


      <div className={classes.platforms}>

        <div className={classes.heading}>
          <a href="mailto:shahar@usa.com" className={classes.icon}>
            <Icon
              iconClassName={"bx bx-envelope"}
              iconHover={"bx-tada"}
              text={"shahar@usa.com"}
            />
          </a>
        </div>


        <div className={classes.heading}>
          <a href="https://github.com/shahar-shemesh" target="_blank" className={classes.icon}>
            <Icon
              iconClassName={"bx bxl-github"}
              iconHover={"bx-burst"}
              text={"github.com/shahar-shemesh"}
            />
          </a>
        </div>

        <div className={classes.heading}>
          <a href="https://www.linkedin.com/in/shaharshemesh/" className={classes.icon}
            target="_blank">
            <Icon
              iconClassName={"bx bxl-linkedin-square"}
              iconHover={"bx-fade-down"}
              text={"linkedin.com/in/shaharshemesh"}
            />
          </a>
        </div>

      </div>

    </section>

  );
}