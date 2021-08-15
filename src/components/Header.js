import { NavLink } from 'react-router-dom'

const Header = ()=>{
    return(
        <div>
            <h1>Shopping</h1>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/post">Post</NavLink></li>
                <li><NavLink to="/register">Register</NavLink></li>
                <li><NavLink to="/login">Login</NavLink></li>
                <li><NavLink to="/manage_order">Manage Order</NavLink></li>
                <li><NavLink to="/order">Order</NavLink></li>
            </ul>
        </div>
    )
}

export default Header

