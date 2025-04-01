import { NavLink } from "react-router-dom"

export default function Footer() {
    return (
        <>
            <footer className="p-5 d-flex bg-warning">


                <NavLink to="/" className="fs-3 text-decoration-none" alt="Logo" style={{ height: '40px', marginRight: '20px', color: 'black' }}>Giallo Booleano</NavLink>
                <div style={{ display: 'flex', gap: '20px' }}>
                    <nav>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            <li><NavLink to="/" style={{ textDecoration: 'none', color: 'black' }}>Homepage</NavLink></li>
                            <li><NavLink to="/blog" style={{ textDecoration: 'none', color: 'black' }}>Blog</NavLink></li>
                            <li><NavLink to="/aboutus" style={{ textDecoration: 'none', color: 'black' }}>About us</NavLink></li>
                        </ul>
                    </nav>

                </div>


            </footer>
        </>
    )
}