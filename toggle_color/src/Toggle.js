import {useState} from 'react';
import './styles.css';
function Toggle(){
    const [backgroundColor, setBackgroundColor] = useState('white');
    const [textColor, setTextColor] = useState('#1b1b1b');

    const handleClick = () => {
        setBackgroundColor(backgroundColor === "white" ? "#1b1b1b" : "white");
        setTextColor(textColor === "#1b1b1b" ? "#ffa31a" : "#1b1b1b");
    }
    return (
        <section style={{backgroundColor , color:textColor}}>
            <button style={{color:textColor , border:`2px solid ${textColor}` , backgroundColor}} onClick={handleClick}>
                {backgroundColor === 'white' ? 'Dark Mode' : 'Light Mode'}
            </button>
            <section className="content" style={{backgroundColor , color:textColor}}>
                <h1>Welcome To A <br /> Real World..</h1>
            </section>
        </section>
    )
}

export default Toggle;