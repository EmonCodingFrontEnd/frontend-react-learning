import React, {useState} from 'react';
import {Navigate} from 'react-router-dom'

function Home(props) {
    const [sum, setSum] = useState(1);

    return (
        <div>
            <h3>我是Home的内容</h3>
            {sum === 2 ? <Navigate to="/about" replace={false}/> : <h4>当前求和为：{sum}</h4>}
            <button onClick={() => {
                setSum(sum + 1);
            }}>+1
            </button>
        </div>
    );
}

export default Home;