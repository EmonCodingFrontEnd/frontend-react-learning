// db.js
module.exports = () => {
    return {
        todos: [
            {id: '001', name: '吃饭', done: true, createdAt: new Date("2025-08-09T14:30:45.123Z")},
            {id: '002', name: '睡觉', done: true, createdAt: new Date("2025-08-09T10:36:25.123Z")},
            {id: '003', name: '写代码', done: false, createdAt: new Date("2025-08-09T12:30:45.123Z")},
            {id: '004', name: '逛街', done: true, createdAt: new Date("2025-08-10T14:30:45.123Z")}
        ]
    };
};