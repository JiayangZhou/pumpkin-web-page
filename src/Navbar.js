const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Naviagation</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/prize-wheel">Prize Wheel</a>
                <a href="/contact-us" style={{ 
                color: 'white', 
                backgroundColor: '#f1356d',
                borderRadius: '8px' 
                }}>Contact US</a>
            </div>
        </nav>
    );
}
 
export default Navbar;