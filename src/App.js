import './App.css';
import Crop from './components/Crop';
import crops from './data/crops.json';

function App() {
    return (
        <section className="crops-container">
            <h2>Crops</h2>
            {crops.map((crop) => (
                <Crop key={crop.name} crop={crop} />
            ))}
        </section>
    );
}

export default App;
