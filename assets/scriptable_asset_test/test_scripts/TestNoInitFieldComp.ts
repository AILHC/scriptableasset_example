import { _decorator, CCString, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('TestNoInitFieldComp')
export class TestNoInitFieldComp extends Component {
    @property(CCString)
    testNoInitStringField: string;
    start() {
        console.log("test");
    }

    update(deltaTime: number) {
        
    }
}


