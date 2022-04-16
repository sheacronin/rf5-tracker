import './App.css';
import Crop from './components/Crop';

function App() {
    return (
        <section className="crops-container">
            <Crop crop={{ name: 'turnip' }} />
            <Crop crop={{ name: 'pink turnip' }} />
        </section>
    );
}

export default App;
