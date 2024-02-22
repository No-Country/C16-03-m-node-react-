import styles from './Image.module.css';
import img from "../../assets/delivery.jpg"

const Image = () => {
    return (
        <div className='sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] lg:w-[400px] lg:h-[400px] w-[150px] h-[150px]'>
            <div className={styles.imageContainer}>
                <img
                    className="w-full h-full object-cover"
                    src={img}
                    alt="imagen"
                />
            </div>
        </div>
    )
}

export default Image