import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


import classes from './Contact.module.scss';
import Icon from '../components/Icon';
import Modal from '../components/Modal';

export default function Contact() {

  const [modalIsOpen, setModalIsOpen] = useState(false);


  function handleClickModal() {
    setModalIsOpen(prevValue => !prevValue);
  };

  return (<>
    <AnimatePresence>
      <Modal open={modalIsOpen} onClose={handleClickModal}>
        <div className={classes.telephones}>
          <div className={classes.contactPhone}>
            <p>יניב:</p>
            <a href="tel:0522359800">052-235-9800</a>
          </div>

          <div className={classes.contactPhone}>
            <p>דקל:</p>
            <a href="tel:0522665190">052-266-5190</a>
          </div>
        </div>

      </Modal>
    </AnimatePresence>



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
          <a onClick={handleClickModal} target="_blank" className={classes.icon}>
            <Icon
              iconClassName={"bx bxs-phone"}
              iconHover={"bx-burst"}
              text={"התקשרו"}
            />
          </a>
        </div>

      </div>

    </section>

  </>);
}