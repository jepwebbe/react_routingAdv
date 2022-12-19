import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import { Link, Route, Routes } from 'react-router-dom';
import BookIndex from './Pages/Books/BookIndex';
import Profile from './Pages/Profile';
import ProductIndex from './Pages/Products/ProductIndex';

function App() {
  return (
    <>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/books">Books</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/products">Produkter</Link></li>
      </ul>
    </nav>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/products/*" element={<ProductIndex />} />
        <Route path="/books/*" element={<BookIndex />} />
      </Routes>
    </>
  );
}

export default App;
