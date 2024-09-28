import '../Introduction/styles.css'
import biospiImage from '../../img/biospi_img.png';

export const Introduction = () => {
    return (
        <div className='introduction-container'>
            <img src={biospiImage} alt='Biospi' className='introduction-image' />
        </div>
    );
};
