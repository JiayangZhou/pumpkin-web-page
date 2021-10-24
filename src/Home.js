import logo from './logo.svg';
const Home = () => {
    return (  
        <div className>
            <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p style={{ 
                    color: 'white', 
                    backgroundColor: '#f0823d',
                    borderRadius: '8px' 
                    }}>
                Welcome to our front page
                - Yuning, Leilei, Jiayang
            </p>
            </header>
        </div>
    );
}
 
export default Home;