import React, {useState} from 'react';

function Home(props) {
    const [sum, setSum] = useState(1);

    return (
        <div>
            <h3>我是Home的内容</h3>
            <h4>当前求和为：{sum}</h4>
            <button onClick={() => {
                setSum(sum + 1);
            }}>+1
            </button>
        </div>
    );
}

export default Home;