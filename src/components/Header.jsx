import { NavLink } from "react-router-dom"

export default function Header() {
    return (
        <>
            <header>
                <nav className="navbar navbar-expand-sm navbar-light bg-warning">
                    <div className="container-fluid">
                        <NavLink className="navbar-brand" to="/">Giallo Booleano</NavLink>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarID"
                            aria-controls="navbarID" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarID">
                            <div className="navbar-nav">

                                <NavLink className="nav-link" aria-current="page" to="/">Homepage</NavLink>
                                <NavLink className="nav-link" aria-current="page" to="/blog">Blog</NavLink>
                                <NavLink className="nav-link" aria-current="page" to="/aboutus">About Us</NavLink>
                            </div>
                        </div>
                    </div>
                </nav >
            </header>


        </>
    )
}