import useMousePosition from './useMousePosition'; // 导入自定义 Hook

const DisplayMousePosition = () => {
    // 6. 调用自定义 Hook，直接获取鼠标位置！
    const {x, y} = useMousePosition();

    return (
        <div style={{height: '50vh', border: '1px solid #ccc'}}>
            <h1>组件A：我是第一个组件</h1>
            <p>鼠标当前位置： X: {x}, Y: {y}</p>
        </div>
    );
};

export default DisplayMousePosition;