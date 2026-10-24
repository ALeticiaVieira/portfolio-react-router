import { NavLink } from "react-router";

function Header() {
    return(
        <>
            <header className="header">
                <nav className="nav">
                    <NavLink to="/" className="logo">
                        <span className="logo-icon">&lt;/&gt;</span>
                        ALV.dev
                    </NavLink>

                    <div className="nav-links">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/about">Sobre mim</NavLink>
                        <NavLink to="/contact">Contato</NavLink>
                    </div>

                </nav>
            </header>
        </>
    );
}

export default Header;