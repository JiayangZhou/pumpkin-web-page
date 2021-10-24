const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Pumpkin</h1>
            <div className="links">
                <a href="/" style={
                    {
                        width: 'auto',
                    }
                }>Home</a>
                <a href="/lab-scheduler" style={
                    {
                        width: 'auto',
                    }
                }>MW Lab</a>
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