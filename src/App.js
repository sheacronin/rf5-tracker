import './App.css';
import Crop from './components/Crop';
import crops from './data/crops.json';

function App() {
    return (
        <section className="crops-container">
            {crops.map((crop) => (
                <Crop key={crop.name} crop={crop} />
            ))}
        </section>
    );
}

export default App;
