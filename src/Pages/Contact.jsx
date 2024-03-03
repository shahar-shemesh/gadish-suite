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
          <a href="mailto:/" className={classes.icon}>
            <Icon
              iconClassName={"bx bx-envelope"}
              iconHover={"bx-tada"}
              text={"Mail"}
            />
          </a>
        </div>


        <div className={classes.heading}>
          <a href="/" target="_blank" className={classes.icon}>
            <Icon
              iconClassName={"bx bxl-facebook"}
              iconHover={"bx-burst"}
              text={"Facebook"}
            />
          </a>
        </div>

        <div className={classes.heading}>
          <a href="/" className={classes.icon}
            target="_blank">
            <Icon
              iconClassName={"bx bxl-whatsapp-square"}
              iconHover={"bx-fade-down"}
              text={"WhatsApp"}
            />
          </a>
        </div>

      </div>

    </section>

  );
}