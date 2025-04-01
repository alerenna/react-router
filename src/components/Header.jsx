import { NavLink } from "react-router-dom"

export default function Header() {
    return (
        <>
            <nav class="navbar navbar-expand-sm navbar-light bg-warning">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Giallo Booleano</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarID"
                        aria-controls="navbarID" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarID">
                        <div class="navbar-nav">
                            <NavLink class="nav-link" aria-current="page" to="/">Homepage</NavLink>
                            <NavLink class="nav-link" aria-current="page" to="/blog">Blog</NavLink>
                            <NavLink class="nav-link" aria-current="page" to="/aboutus">About Us</NavLink>

                        </div>
                    </div>
                </div>
            </nav>

        </>
    )
}