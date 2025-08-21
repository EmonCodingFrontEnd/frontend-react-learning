// components/LoadingSpinner.jsx
import './LoadingSpinner.css'; // 引入样式

const LoadingSpinner = () => {
    return (
        <div className="spinner-container">
            {/* 这个 div 就是旋转的圆环本身 */}
            <div className="loading-spinner"></div>
            {/* 可以加上文字提示 */}
            <p>Loading...</p>
        </div>
    );
};

export default LoadingSpinner;