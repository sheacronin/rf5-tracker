import '../styles/Crop.css';

const Crop = ({ crop }) => {
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
                    <button>-</button>
                    <span>1</span>
                    <button>+</button>
                </div>
            </div>
        </article>
    );
};

export default Crop;
