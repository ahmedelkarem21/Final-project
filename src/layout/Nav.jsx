import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext"
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa6";

function SiteNav() {
    let theme = useContext(ThemeContext);  // Get the current theme context
    console.log(theme);
    return (
        <Navbar expand="md" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <NavLink to="/" className='nav-link'>Home</NavLink>
                        <NavLink to="/about" className='nav-link'>About</NavLink>
                        <NavLink to="/products" className='nav-link'>Products</NavLink>
                        <NavLink to="/contact" className='nav-link'>Contact</NavLink>
                    </Nav>
                    <div onClick={theme.handleTheme}>
                        {theme.theme === 'dark'
                            ?
                            <FaSun />
                            :
                            <FaMoon />
                        }
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default SiteNav;