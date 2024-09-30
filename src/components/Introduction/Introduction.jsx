import '../Introduction/styles.css';
import biospiImage from '../../img/biospi_img.png'; // Imagen del encabezado de la introducción
import perrito from '../../img/perrito.png'; // Imagen de la compañía

export const Introduction = () => {
    return (
        <div>
            {/* Imagen principal de introducción */}
            <img src={biospiImage} alt='Biospi' className='introduction-image' />

            {/* Sección de Introducción */}
            <section className='intro-container'>
                <div className='intro-section'>
                    <div className="intro-content">
                        {/* Imagen relacionada a la compañía */}
                        <div className="intro-image">
                            <img src={perrito} alt="Imagen Perrito" className='company-image' />
                        </div>
                        
                        {/* Texto de introducción */}
                        <div className="intro-text">
                            <h3><b>¿Quiénes somos?</b></h3>
                            <br />
                            <h3><b>En BIOSPI, somos amantes de todos</b><br /> <b>los animales...</b></h3>
                            <br />
                            <p>
                                Los respetamos y les damos un valor mayor al de una simple mascota, 
                                que forman parte de nuestras vidas, convirtiéndose así en un miembro importante de la familia.
                            </p>
                            <p>
                                <span>Ten la seguridad y la confianza de que con nosotros, recibirá el trato digno y respetuoso que ese hermoso ser se merece.</span>
                            </p>
                            <br /><br />

                            {/* Botón de contacto */}
                            <a href="/contacto" className="contact-button">
                                📞<b>  Contáctanos</b>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sección de enlaces a redes sociales */}
            <section className='links-section'>
                <div className='links-content'>
                    <div className='links-text'>
                        <h3>Mantente al día</h3>
                    </div>

                    {/* Íconos sociales */}
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

            {/* Sección de misión, visión y valores */}
            <section className="company-info">
                {/* Columna de misión */}
                <div className="info-column mision">
                    <h3>MISIÓN</h3>
                    <p>
                        <span>Biospi tiene un claro enfoque al trato digno, respetuoso y amoroso; que debe recibir tu pequeño compañero, 
                        ofreciendo productos y servicios de una excelente calidad.</span>
                    </p>
                </div>

                {/* Columna de visión */}
                <div className="info-column vision">
                    <h3>VISIÓN</h3>
                    <p>
                        <span>¡Diversificación en nuestros servicios! Biospi también es un espacio en el cual encontrarás: hospedaje para tus 
                        compañeritos de vida en nuestro Resort Canino, servicio de estética, spa, venta de accesorios, alimentos, área de entrenamiento 
                        canino y muchas cosas más.</span>
                    </p>
                    <p>“En Biospi trabajamos en brindar un servicio de excelencia y mejorar cada día”</p>
                </div>

                {/* Columna de valores */}
                <div className="info-column valores">
                    <h3>VALORES</h3>
                    <p>
                        <span>Compromiso</span><br />
                        <span>Eficiencia</span><br />
                        <span>Efectividad</span><br />
                        <span>Empatía</span><br />
                        <span>Simplicidad</span><br />
                        <span>Calidez</span><br />
                        <span>Conexión con la naturaleza</span>
                    </p>
                </div>
            </section>
        </div>
    );
};
