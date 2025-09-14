import {useNavigate} from 'umi'
function Header () {
    const navigate = useNavigate();

    const back = () => {
        navigate(-1);
    }

    const forword = () => {
        navigate(1);
    }

    return (
        <div>
            <div className="page-header"><h2>React Router Demo</h2></div>
            <button onClick={back}>回退</button>
            <button onClick={forword}>前进</button>
        </div>
    );
}

export default Header;