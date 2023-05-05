import "./navbar.css"

export default function NavBar() {

    return (
        <div className="divHeader">
            <div className="divSearchBar">               
                <a href="/">TechStore</a>
                <form action="">
                    <input type="text" className="searchBar" placeholder="Search.." />
                    <button type="submit" className="searchBarBtn">Accept</button>
                </form>               
                <div>carrito 1</div>
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