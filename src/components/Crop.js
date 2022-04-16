import '../styles/Crop.css';
import { useEffect, useState } from 'react';

const Crop = ({ crop }) => {
    const [level, setLevel] = useState(1);

    useEffect(() => {
        const cropLevel = localStorage.getItem(crop.name);
        if (cropLevel !== null) {
            setLevel(cropLevel);
        }
    }, [crop]);

    function decrementLevel() {
        if (level === 1) {
            return;
        }
        setLevel((prevLevel) => {
            const newLevel = --prevLevel;
            localStorage.setItem(crop.name, newLevel);
            return newLevel;
        });
    }

    function incrementLevel() {
        if (level === 10) {
            return;
        }
        setLevel((prevLevel) => {
            const newLevel = ++prevLevel;
            localStorage.setItem(crop.name, newLevel);
            return newLevel;
        });
    }

    return (
        <article className="crop">
            <h3>{crop.name}</h3>
            <img
                src={require(`../img/${crop.name.replace(' ', '-')}.webp`)}
                alt={crop.name}
            />
            <div>
                Level
                <div className="crop-level">
                    <button onClick={decrementLevel}>-</button>
                    <span>{level}</span>
                    <button onClick={incrementLevel}>+</button>
                </div>
            </div>
        </article>
    );
};

export default Crop;
