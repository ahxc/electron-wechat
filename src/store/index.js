import { defineStore } from 'pinia';

export default defineStore('main', {
    state: () => {
        return {
            // 当前窗口选择
            presentItem: 'session',
            sessionItems: [
                {
                    id: '1',
                    name: '文件传输',
                    time: 1701596243640,
                    message: '测试测试测试测试测试测试测试',
                },
                {
                    id: '2',
                    name: '微信游戏',
                    time: 1701596243640,
                    message: '测试测试测试测试测试测试测试',
                },
                {
                    id: '3',
                    name: '甲',
                    time: 1701596243640,
                    message: '测试测试测试测试测试测试测试',
                },
                {
                    id: '4',
                    name: '乙',
                    time: 1701596243640,
                    message: '测试测试测试测试测试测试测试',
                },
                {
                    id: '5',
                    name: '丙',
                    time: 1701596243640,
                    message: '测试测试测试测试测试测试测试',
                },
                {
                    id: '6',
                    name: '丁',
                    time: 1701596243640,
                    message: '测试测试测试测试测试测试测试',
                },
                {
                    id: '7',
                    name: '戊',
                    time: 1701596243640,
                    message: '测试测试测试测试测试测试测试',
                },
                {
                    id: '8',
                    name: '戌',
                    time: 1701596243640,
                    message: '测试测试测试测试测试测试测试',
                },
                {
                    id: '8',
                    name: '戌',
                    time: 1701596243640,
                    message: '测试测试测试测试测试测试测试',
                },
                {
                    id: '8',
                    name: '戌',
                    time: 1701596243640,
                    message: '测试测试测试测试测试测试测试',
                },
                {
                    id: '8',
                    name: '戌',
                    time: 1701596243640,
                    message: '测试测试测试测试测试测试测试',
                },
                {
                    id: '8',
                    name: '戌',
                    time: 1701596243640,
                    message: '测试测试测试测试测试测试测试',
                },
                {
                    id: '8',
                    name: '戌',
                    time: 1701596243640,
                    message: '测试测试测试测试测试测试测试',
                },
            ]
        };
    },
    getters: {

    },
    actions: {

    }
});