import {Link} from 'react-router-dom';

export default function Navigation(){
    return (
        <div>
            <Link to="/">To Home Page</Link> &nbsp;
            <Link to="/product">To Product Page</Link> &nbsp;
            <Link to="/contact">To Contact Page</Link>
        </div>
    );
}