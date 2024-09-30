import '../Introduction/styles.css';
import biospiImage from '../../img/biospi_img.png';
import perrito from '../../img/perrito.png';

export const Introduction = () => {
    return (
        <div>
            <img src={biospiImage} alt='Biospi' className='introduction-image' />
            <section className='intro-container'>
                <div className='intro-section'>
                    <div className="intro-content">
                        <div className="intro-image">
                            <img src={perrito} alt="img_ref" className='company-image' />
                        </div>
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

            <section className="company-info">
                <div className="info-column">
                    <h3>MISIÓN</h3>
                    <p><span>Biospi tiene un claro enfoque al trato digno, respetuoso y amoroso; que debe recibir tu pequeño compañero, ofreciendo productos y servicios de una excelente calidad.</span></p>
                </div>
                <div className="info-column">
                    <h3>VISIÓN</h3>
                    <p><span>¡Diversificación en nuestros servicios! Biospi también es un espacio en el cual encontrarás: hospedaje para tus compañeritos de vida en nuestro Resort Canino, servicio de estética, spa, venta de accesorios, alimentos, área de entrenamiento canino y muchas cosas más.</span></p>
                    <p>“En Biospi trabajamos en brindar un servicio de excelencia y mejorar cada día”</p>
                </div>
                <div className="info-column">
                    <h3>VALORES</h3>
                    <p><span>Compromiso</span>
                    <span>Eficiencia</span>
                    <span>Efectividad</span>
                    <span>Empatía</span>
                    <span>Simplicidad</span>
                    <span>Calidez</span>
                    <span>Conexión con la naturaleza</span></p>
                </div>
            </section>
        </div>
    );
};
