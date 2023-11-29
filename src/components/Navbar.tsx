import reactLogo from '../assets/react.svg';

export default function Navbar() {
    return (
        <nav className="nav--main">
            <div className="nav--logo">            
                <img src={reactLogo} alt="react image" className="nav--image"/>
                <h3 className="nav--logotitle">ReactFacts</h3>
            </div>

            <h4 className="nav--secondheading">React Course - Project 1</h4>

        </nav>
    )
}