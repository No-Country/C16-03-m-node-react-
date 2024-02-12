import styles from './Image.module.css';

const Image = () => {
    return (
        <div className={styles.imageContainer}>
            <img
                className="w-full h-full object-cover"
                src="https://img.freepik.com/free-photo/delivery-male-with-packages_23-2148869429.jpg?w=1380&t=st=1707764433~exp=1707765033~hmac=808e9fb51237c567bea4ebc4bf1d50bf6e8a60b0532ca23aa40bb55af5decc22"
                alt="imagen"
            />
        </div>
    )
}

export default Image