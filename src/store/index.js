import { defineStore } from 'pinia';
import {
    LinkOutlined, AppstoreOutlined, EnvironmentOutlined,
} from '@ant-design/icons-vue'
import moment from 'moment/moment';

export default defineStore('main', {
    state: () => {
        return {
            // 首要选择
            indexSelected: 'session',
            // 次级选择
            sessionSelected: {},
            contactSelected: {},
            // 次级选择-索引
            collectSelected: {
                type: 'all',
                text: '全部收藏',
            },

            collectItems: [
                {
                    type: 'all',
                    text: '全部收藏',
                    icon: AppstoreOutlined,
                },
                {
                    type: 'connect',
                    text: '链接',
                    icon: LinkOutlined,
                },
                {
                    type: 'position',
                    text: '位置',
                    icon: EnvironmentOutlined,
                },
            ],
            contactItems: [
                {
                    id: '1',
                    name: '测试1',
                    nickName: '测试1人员',
                    account: 'test1',
                    mark: '测试1',
                    source: 'add',
                },
                {
                    id: '2',
                    name: '测试2',
                    nickName: '测试2人员',
                    account: 'test2',
                    mark: '测试2',
                    source: 'add',
                },
                {
                    id: '3',
                    name: '测试3',
                    nickName: '测试3人员',
                    account: 'test3',
                    mark: '测试3',
                    source: 'add',
                },
                {
                    id: '4',
                    name: '测试4',
                    nickName: '测试4人员',
                    account: 'test4',
                    mark: '测试4',
                    source: 'add',
                },
                {
                    id: '5',
                    name: '测试5',
                    nickName: '测试5人员',
                    account: 'test5',
                    mark: '测试5',
                    source: 'add',
                },
            ],
            sessionItems: [
                {
                    id: '1',
                    name: '文件传输',
                    mark: '测试2',
                    time: 1701596243640,
                    message: '测试测试测试测试测试测试测试',
                },
                {
                    id: '2',
                    name: '微信游戏',
                    mark: '测试2',
                    time: 1701596243640,
                    message: '测试测试测试测试测试测试测试',
                },
                {
                    id: '3',
                    name: '甲',
                    mark: '测试2',
                    time: 1701596243640,
                    message: '测试测试测试测试测试测试测试',
                },
                {
                    id: '4',
                    name: '乙',
                    mark: '测试2',
                    time: 1701596243640,
                    message: '测试测试测试测试测试测试测试',
                },
                {
                    id: '5',
                    name: '丙',
                    mark: '测试2',
                    time: 1701596243640,
                    message: '测试测试测试测试测试测试测试',
                },
                {
                    id: '6',
                    name: '丁',
                    mark: '测试2',
                    time: 1701596243640,
                    message: '测试测试测试测试测试测试测试',
                },
                {
                    id: '7',
                    name: '戊',
                    mark: '测试2',
                    time: 1701596243640,
                    message: '测试测试测试测试测试测试测试',
                },
                {
                    id: '8',
                    name: '戌',
                    mark: '测试2',
                    time: 1701596243640,
                    message: '测试测试测试测试测试测试测试',
                },
                {
                    id: '8',
                    name: '戌',
                    mark: '测试2',
                    time: 1701596243640,
                    message: '测试测试测试测试测试测试测试',
                },
                {
                    id: '8',
                    name: '戌',
                    mark: '测试2',
                    time: 1701596243640,
                    message: '测试测试测试测试测试测试测试',
                },
                {
                    id: '8',
                    name: '戌',
                    mark: '测试2',
                    time: 1701596243640,
                    message: '测试测试测试测试测试测试测试',
                },
                {
                    id: '8',
                    name: '戌',
                    mark: '测试2',
                    time: 1701596243640,
                    message: '测试测试测试测试测试测试测试',
                },
                {
                    id: '8',
                    name: '戌',
                    mark: '测试2',
                    time: 1701596243640,
                    message: '测试测试测试测试测试测试测试',
                },
            ],

            // 主导航栏
            barItem: [
                {
                    key: 'session',
                    fill: '/image/message-comments-fill.png',
                    out: '/image/message-comments.png',
                },
                {
                    key: 'contacts',
                    fill: '/image/customer-group-fill.png',
                    out: '/image/customer-group.png',
                },
                {
                    key: 'collect',
                    fill: '/image/product-fill.png',
                    out: '/image/product.png',
                }],

            // 全部收藏数据
            collectData: [
                { id: '1', title: '人民广场', description: "xx省xx市xx街道", shaller: '李逍遥', date: moment(), type: 'position', img: '' },
                { id: '2', title: '分享链接', description: "这是一个分享链接", shaller: '爱分享', date: moment(), type: 'connect', img: '' },
                { id: '3', title: '这是一段对话消息', description: "", shaller: '赵灵儿', date: moment(), type: 'all', img: '' },
                { id: '1', title: '人民广场', description: "xx省xx市xx街道", shaller: '李逍遥', date: moment(), type: 'position', img: '' },
                { id: '2', title: '分享链接', description: "这是一个分享链接", shaller: '爱分享', date: moment(), type: 'connect', img: '' },
                { id: '3', title: '这是一段对话消息', description: "", shaller: '赵灵儿', date: moment(), type: 'all', img: '' },
                { id: '1', title: '人民广场', description: "xx省xx市xx街道", shaller: '李逍遥', date: moment(), type: 'position', img: '' },
                { id: '2', title: '分享链接', description: "这是一个分享链接", shaller: '爱分享', date: moment(), type: 'connect', img: '' },
                { id: '3', title: '这是一段对话消息', description: "", shaller: '赵灵儿', date: moment(), type: 'all', img: '' },
            ]
        };
    },
    getters: {

    },
    actions: {

    }
});