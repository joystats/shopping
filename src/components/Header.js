import { NavLink } from 'react-router-dom'

const Header = ()=>{
    return(
        <div>
            <h1>Shopping</h1>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/post">Post</NavLink></li>
            </ul>
        </div>
    )
}

export default Header

