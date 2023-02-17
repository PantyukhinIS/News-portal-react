import React from "react";
import routeMain from "./routes";

import './styles.css';

import PhotoDev from 'assets/img/photodev.png';

const Contacts = () => (
    <section className="contactsPage">
        <div className="info">
            <div className="phone">
                <a href="tel:+79991234567">+7 (999) 123 45 67</a>
            </div>
            <div className="name">
                Иван <br/> Пантюхин
            </div>
            <div className="mail">
                <a href="mailto:mail@domain.com">mail@domain.com</a>
            </div>
            <div className="position">
                FrontEnd Developer
            </div>
            <div className="technologies">
                HTML CSS JS
            </div>
        </div>
        <div className="image">
            <img src={PhotoDev} alt={PhotoDev}/>
        </div>
    </section>
)

export {routeMain};

export default Contacts;