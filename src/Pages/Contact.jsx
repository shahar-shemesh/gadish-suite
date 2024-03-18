import classes from './Contact.module.scss';
import Icon from '../components/Icon';

export default function Contact() {


  return (

    <section id="Contact" className={classes.section}>

      <div className="sectionTitle">
        <p>צור קשר</p>
      </div>

      <hr /> {/* --------------------------------- */}


      <div className={classes.platforms}>

        <div className={classes.heading}>
          <a href="mailto:Gadish.ie@gmail.com" className={classes.icon}>
            <Icon
              iconClassName={"bx bx-envelope"}
              iconHover={"bx-tada"}
              text={"שלחו לנו מייל"}
            />
          </a>
        </div>

        <div className={classes.heading}>
          <a href="https://api.whatsapp.com/send/?phone=972522359800&text=%D7%94%D7%99%D7%99+%D7%91%D7%A7%D7%A9%D7%A8+%D7%9C%D7%A1%D7%95%D7%95%D7%99%D7%98%D7%94" target="_blank" className={classes.icon}>
            <Icon
              iconClassName={"bx bxl-whatsapp"}
              iconHover={"bx-burst"}
              text={"כתבו לנו בווצאפ"}
            />
          </a>
        </div>

        <div className={classes.heading}>
          <a href="https://www.instagram.com/gadish_suite" className={classes.icon}
            target="_blank">
            <Icon
              iconClassName={"bx bxl-instagram-alt"}
              iconHover={"bx-fade-down"}
              text={"האינסטגרם שלנו"}
            />
          </a>
        </div>

        <div className={classes.heading}>
          <a href="tel:0522665190" target="_blank" className={classes.icon}>
            <Icon
              iconClassName={"bx bxs-phone"}
              iconHover={"bx-burst"}
              text={"התקשרו"}
            />
          </a>
        </div>

      </div>

    </section>

  );
}