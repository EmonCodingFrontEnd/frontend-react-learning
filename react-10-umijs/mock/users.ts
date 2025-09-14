import {defineMock} from "umi";
import mockjs from 'mockjs';

export default defineMock({
    "GET /api/currentUser": (req, res) => {
        res.status(200).json({code: 200, msg: "success", data: {id: 2, name: "bar"}});
    },
});