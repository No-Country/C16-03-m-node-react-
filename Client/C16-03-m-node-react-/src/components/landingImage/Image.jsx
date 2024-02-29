import styles from './Image.module.css';
import img from "../../assets/delivery.jpg"

const Image = () => {
    return (
        <div className='sm:w-[350px] sm:h-[350px] ms:w-[400px] ms:h-[400px] lg:w-[400px] lg:h-[400px] w-[250px] h-[250px]'>
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