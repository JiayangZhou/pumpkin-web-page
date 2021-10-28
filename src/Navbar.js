import {Link} from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Pumpkin</h1>
            <div className="links">
                <Link to="/" style={
                    {
                        width: 'auto',
                    }
                }>Home</Link>
                <Link to="/lab-scheduler" style={
                    {
                        width: 'auto',
                    }
                }>MW Lab</Link>
                <a href="https://github.com/JiayangZhou" style={{ 
           
                color: 'white', 
                backgroundColor: '#f1356d',
                width: 'auto',
                borderRadius: '12px' 
                }}>Contact Us</a>
            </div>
        </nav>
    );
}
 
export default Navbar;