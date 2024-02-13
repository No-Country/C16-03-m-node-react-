import user1 from '../../assets/user1.svg';
import user2 from '../../assets/user.svg';
import user3 from '../../assets/man.svg';
import star from '../../assets/star.svg';

const Rating = () => {
    return (
        <div className="flex items-center p-4 ">
            <div className="flex ">
                <img className="w-10 h-10 relative  left-[-10px] opacity-80" src={user1} alt="usuario 1" />
                <img className="w-10 h-10 relative left-[-30px] backdrop-blur-500/20"src={user2} alt="usuario 2" />
                <img className="w-10 h-10 relative left-[-50px] " src={user3} alt="usuario 3" />
            </div>
            <div>
                <h2>Nuestros clientes sastisfechos</h2>
                <img src={star} alt="estrella" />
                <p>4.8 (100.000 reseñas)</p>
            </div>
        </div>
    )
}

export default Rating