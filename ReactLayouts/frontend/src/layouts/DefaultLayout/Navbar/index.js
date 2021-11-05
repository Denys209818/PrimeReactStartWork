import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import { END_AUTH } from '../../../constants/reduxConstants';

const Navbar = () => 
{
    var auth = useSelector(redux => redux.auth);
    var dispatch = useDispatch();
    const onLogoutHandler = (e) => 
    {
        e.preventDefault();
        localStorage.removeItem('token');
        dispatch({type: END_AUTH});
    }

    return (
    <div className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">

        <a className="navbar-brand">Головна сторінка</a>
        <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#mainMenu">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div  className="collapse navbar-collapse" id="mainMenu">
            <ul className="navbar-nav me-auto">
                <li className="nav-item">
                    <Link to="/" className="nav-link">Головна сторінка</Link>
                </li>
                <li className="nav-item">
                    <Link to="/product" className="nav-link">Продукти</Link>
                </li>
            </ul>
                    {!auth.isAuth ? <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/register" className="nav-link">Реєстрація</Link>
                        </li>
                    </ul> :
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <span className="nav-link">{auth.user ? auth.user.name : null}</span>
                            </li>
                            <li className="nav-item">
                                <Link to="/logout" onClick={onLogoutHandler} className="nav-link">Вихід</Link>
                            </li>
                        </ul>}
        </div>
        </div>
    </div>);
}

export default Navbar;