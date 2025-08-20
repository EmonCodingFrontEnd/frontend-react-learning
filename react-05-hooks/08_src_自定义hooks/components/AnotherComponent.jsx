import useMousePosition from './useMousePosition'; // 导入同一个 Hook

const AnotherComponent = () => {
    // 在不同的组件中复用同样的逻辑！
    const position = useMousePosition();

    return (
        <div style={{height: '50vh', border: '1px solid #ccc', backgroundColor: 'skyblue'}}>
            <h2>组件B：我是另一个完全不同的组件</h2>
            <p>
                我也能知道鼠标在哪：
                <span style={{color: 'red', marginLeft: '10px'}}>({position.x}, {position.y})</span>
            </p>
        </div>
    );
};

export default AnotherComponent;