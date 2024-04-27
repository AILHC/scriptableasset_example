import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('NewComponent_001')
export class NewComponent_001 extends Component {
    start() {
        // 测试修改
        console.log("ceshi")
    }

    update(deltaTime: number) {
        
    }
}


