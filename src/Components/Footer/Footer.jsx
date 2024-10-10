import React, {useState} from "react";
import Modal from "./Model";
import './Footer.css'; 

// function Footer() {
//     const [isModalOpen, setIsModalOpen] = useState(false)
//     const openModal = () => {
//         setIsModalOpen(true)
//     }
//     const closeModal =() => {
//         setIsModalOpen(false)
//     }

//     return (
//         <footer className="footer">
//             <div className="footer-content">
//                 <p>&copy; {new Date().getFullYear()} Mangia. All rights reserved.</p>
//                 <div className="footer-links">
//                     <a href="/privacy-policy">Integritetspolicy</a>
//                     <a href="/terms-of-service">Användarvvillkor</a>
//                     <a href="#contact" onClick={openModal}>kontakta oss</a>
//                 </div>  
//             </div>

//             {isModalOpen &&(
//                 <div className ="modal-overlay" onClick ={closeModal}>
//                     <div className ="modal-content" onClick ={(e) => e.stopPropagation()}>
//                        <div className="footer-info">
//                          <p>Adress: Magiavägen1, 11111, Postort</p>
//                          <p>Tel: 123-456-789</p>
//                          <p>Email: email@magie.com</p>
//                           <button className ="close-button" onClick={closeModal}>Stäng</button>
//                        </div>
//                     </div>
//                 </div>
//             )}
//         </footer>
//     );
// }





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