import Link from 'next/link';
import logo from '../assets/images/logo.png';

const Navbar = () => {


    return (
        <div>
            <nav className="navbar-container" style={{ backgroundColor: '', width: '100%' }}>

                <div className="navbar-wrapper">
                    <a id="nav-title" href="/" >
                        <img id="logo"
                            src={logo}
                            alt="logo" />
                        {/* <Link className="navbar-brand" href="/"> */}
                        돈의 흐름 읽기 테스트</a>
                    {/* </Link> */}
                </div>
            </nav>
            {/* <h2 className="mt-5">주인공 찾기 테스트</h2>
            {children} */}
        </div>
    )
};


Navbar.propTypes = {
    // children: PropTypes.node.isRequired,
};

export default Navbar;