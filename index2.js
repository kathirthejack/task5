import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes, Link, NavLink, Switch } from 'react-router-dom';
import Home from './home';
import About from './about';
import Join from './joinus';

const routing = (
    <Router>
        <div>
            <h1>Hello</h1>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/a" element={<About/>} />
                <Route path="/j" element={<Join/>} />
            </Routes>
        </div>
    </Router>
)

ReactDOM.render(routing,document.getElementById('root'));
