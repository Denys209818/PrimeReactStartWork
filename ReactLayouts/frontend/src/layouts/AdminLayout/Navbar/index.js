import { Link } from "react-router-dom";


const Navbar = () => 
{
    return (<div className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">

        <a className="navbar-brand">Головна сторінка</a>
        <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#adminMenu">
            <span className="navbar-toggler-icon"></span>
        </button>
            <div className="collapse navbar-collapse" id="adminMenu">
                <ul className="navbar-nav me-auto">
                    <li className="nav-item">
                        <Link to="/admin" className="nav-link">Головна сторінка</Link>
                    </li>
                </ul>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/admin/product" className="nav-link">Продукти</Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>);
}

export default Navbar;