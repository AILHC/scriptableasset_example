import { _decorator, Component, Node, Prefab } from 'cc';


const { ccclass, property } = _decorator;

@ccclass('TestRefScriptableAsset2')
export class TestRefScriptableAsset extends Component {
    
    @property(Prefab)
    prefab: Prefab;
    start() {
        // this.setCharAsset();
        console.log(this.prefab)
    }

    
}


