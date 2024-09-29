import '../Introduction/styles.css';
import biospiImage from '../../img/biospi_img.png';
import perrito from '../../img/perrito.png';

export const Introduction = () => {
    return (
        <div>
            {/* Imagen de la parte superior */}
            <img src={biospiImage} alt='Biospi' className='introduction-image' />

            {/* Nueva sección con clase intro-container */}
            <section className='intro-container'>
                <div className='intro-section'>
                    <div className="intro-content">
                        {/* Imagen a la izquierda */}
                        <div className="intro-image">
                            <img
                                src={perrito}
                                alt="img_ref"
                                className='company-image'
                            />
                        </div>
                        {/* Texto de introducción y botón a la derecha */}
                        <div className="intro-text">
                            <h3><b>¿Quiénes somos?</b></h3>
                            <br />
                            <h3><b>En BIOSPI, somos amantes de todos</b><br /> <b>los animales...</b></h3>
                            <br />
                            <p>
                                los respetamos y les damos un valor mayor al de una simple mascota, que forman parte de nuestras vidas, convirtiéndose así en un miembro importante de la familia.
                            </p>
                            <p>
                                <span>Ten la seguridad y la confianza de que con nosotros, recibirá el trato digno y respetuoso que ese hermoso ser se merece.</span>
                            </p>
                            <br /><br />
                            <a href="/contacto" className="contact-button">
                                📞<b>  Contáctanos</b>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            {/* Nueva sección para texto y enlaces */}
            <section className='links-section'>
                <div className='links-content'>
                    <div className='links-text'>
                        <h3>Mantente al día</h3>
                    </div>
                    <div className='links'>
                        <a href="https://www.facebook.com/Biospii" target="_blank" className='social-icon'>
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="https://www.instagram.com/biospi_mx/" target="_blank" className='social-icon'>
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};
