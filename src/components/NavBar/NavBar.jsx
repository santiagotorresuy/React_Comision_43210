import "./navbar.css"

export default function NavBar() {
    const textWhite = {
        color: "white",
    }

    return (
        <div className="divHeader">
            <div className="divSearchBar">               
                <a href="/">TechStore</a>
                <form action="">
                    <input type="text" placeholder="Search.." />
                    <button type="submit">Accept</button>
                </form>               
                <div style={textWhite}>Carrito 1</div>
            </div>
            <div className="divNavBar">
                <nav>
                    <ul className="NavBarUl">
                        <li><a href="/">Home</a></li>
                        <li><a href="/">Categories</a></li>
                        <li><a href="/">Products</a></li>
                        <li><a href="/">Laptops</a></li>
                        <li><a href="/">Desktop</a></li>
                        <li><a href="/">Accesories</a></li>
                    </ul>
                </nav>
            </div>
        </div>

    );
}