import loader from "../../assets/images/loader.svg"; 
import s from './Preloader.module.css';
const Preloader = () => {
    return (
        <div className={s.preloader}>
            <img src={loader} />
        </div>
    )
}

export default Preloader;