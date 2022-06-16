import './App.css';
import {Header} from './components/Header/Header';
import {AsideMenu} from './components/AsideMenu/AsideMenu';

const App = () => {
    return (
        <div className="App">
            <Header />
            <AsideMenu />
            Main App
        </div>
    );
};

export default App;
