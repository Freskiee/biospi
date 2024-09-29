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
                            <h3>¿Quiénes somos?</h3>
                            <br />
                            <h3>En BIOSPI, somos amantes de todos <br /> los animales...</h3>
                            <br />
                            <p>
                                los respetamos y les damos un valor mayor al de una simple mascota, que forman parte de nuestras vidas, convirtiéndose así en un miembro importante de la familia.
                            </p>
                            <p>
                                <span>Ten la seguridad y la confianza de que con nosotros, recibirá el trato digno y respetuoso que ese hermoso ser se merece.</span>
                            </p>
                            <a href="/contacto" className="contact-button">
                                Contáctanos
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
