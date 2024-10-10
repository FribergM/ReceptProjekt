import React, {useState} from "react";
import Modal from "./Model";
import './Footer.css'; 

function Footer() {
    const [modalType, setModalType] = useState(null);

    const openModal = (type) => {
        setModalType(type);
    };

    const closeModal = () => {
        setModalType(null);
    };

    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} Mangia. All rights reserved.</p>
                <div className="footer-links">
                    <a href="#privacy-policy" onClick={() => openModal('privacy')}>Integritetspolicy</a>
                    <a href="#terms-of-service" onClick={() => openModal('terms')}>Användarvillkor</a>
                    <a href="#contact" onClick={() => openModal('contact')}>Kontakta oss</a>
                </div>  
            </div>

            {modalType && (
                <Modal type={modalType} onClose={closeModal} />
            )}
        </footer>
    );
}

export default Footer;