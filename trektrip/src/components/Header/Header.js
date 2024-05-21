import { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";

const Header = () => {

    const [activeButton, setActiveButton] = useState(null);

    const handleButtonClick = (buttonId) => {
        setActiveButton(buttonId);
    };

    return (
        <span onClick={()=> window.scroll(0,0)} className='header'>
            <span className="header_title">
                <Link to='/' onClick={() => handleButtonClick(1)}>
                    TrekTrip
                </Link>
            </span>
            <div className="navbar">
                <Link to='/profil'>
                    <button className={`nav_button ${activeButton === 2 ? 'active' : ''}`}
                        onClick={() => handleButtonClick(2)}>
                        Profil
                    </button>
                </Link>
                <Link to='/putovanja'>
                    <button className={`nav_button ${activeButton === 3 ? 'active' : ''}`}
                        onClick={() => handleButtonClick(3)}>
                        Putovanja
                    </button>
                </Link>
                 (
                   <Link to='/prijava'>
                        <button className={`nav_button ${activeButton === 4 ? 'active' : ''}`}
                            onClick={() => handleButtonClick(4)}>
                            Prijava
                        </button>
                    </Link>
                ) : (
                    <button className={`nav_button ${activeButton === 5 ? 'active' : ''}`}
                        onClick={() => handleButtonClick(5)}>
                        Odjava
                    </button>
                )
            </div>
        </span>  
    )
}

export default Header;
