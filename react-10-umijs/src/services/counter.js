export function asyncAdd(payload) {
    console.log('异步加法开始执行...', payload)
    const {data, delay} = payload
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data * 2);
        }, delay);
    });
}
