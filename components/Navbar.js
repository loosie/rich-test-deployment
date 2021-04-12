import PropTypes from 'prop-types';
import Link from 'next/link';

const Navbar = () => {


    return (
        <div>
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" href="/">
                        <a style={{ color: '#000' }}>내 인생 주인공 찾기 테스트</a>
                    </Link>
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