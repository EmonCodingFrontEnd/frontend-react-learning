// useMousePosition.js
import {useState, useEffect} from 'react';

// 1. 定义一个函数，函数名以 "use" 开头（这是规则！）
const useMousePosition = () => {
    // 2. 在内部使用标准的 React Hooks (useState, useEffect等)
    const [position, setPosition] = useState({x: 0, y: 0});

    // 3. 实现逻辑：监听 mousemove 事件，更新 position
    useEffect(() => {
        const handleMouseMove = (e) => {
            setPosition({x: e.clientX, y: e.clientY});
        };

        // 添加事件监听
        window.addEventListener('mousemove', handleMouseMove);

        // 4. 返回清理函数，在组件卸载时移除事件监听
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []); // 空依赖数组，确保 effect 只运行一次

    // 5. 返回其他组件需要使用的值（可以是值、函数、对象等）
    return position;
};

export default useMousePosition;