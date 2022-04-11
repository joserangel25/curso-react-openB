import { Contacto } from "../../models/contacto.class";
import ContactoComponent from "../pure/ContactoComponent";

const ContactosContainer = () => {
    const contacto1 = new Contacto("Alix", "Carrascal", "AlixAC@gmail.com", false);
    // console.log(contacto1);
    return (
        <div>
            <h3>Contactos:</h3>
            <ContactoComponent infoContacto={contacto1}/>
        </div>
    );
};

export default ContactosContainer;