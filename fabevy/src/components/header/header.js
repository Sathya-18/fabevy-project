import { useNavigate } from 'react-router-dom';
import image from '../../assets/fabevy-logo-landscape.png'
import styles from './header.module.css'

function Header() {
    const navigate = useNavigate();
    return (
        <>
            <header className={styles.header}  >
                <div className={styles.image}>
                    <img src={image} alt='logo' ></img>
                </div>
            </header>
            <nav className={styles.navbar}>
                <p onClick={()=>{navigate('/')}}>Home</p>
                <p>HTML</p>
                <p>CSS</p>
                <p>JavaScript</p>
            </nav>
        </>

    )
}

export default Header;