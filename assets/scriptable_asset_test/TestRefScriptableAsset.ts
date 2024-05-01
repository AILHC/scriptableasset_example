import { _decorator, Component, Node } from 'cc';
import { bh } from 'db://scriptable-asset/scriptable_runtime';
import { CharSA } from './scripts/CharSA';
import { CharRender } from './scripts/CharRender';
import { SkillSA } from './scripts/SkillSA';


const { ccclass, property } = _decorator;

@ccclass('TestRefScriptableAsset')
export class TestRefScriptableAsset extends Component {
    // private _charData: CharSA;
    // @property(bh.ScriptableAsset)
    // get charData(): CharSA{
    //     return this._charData;
    // };
    // set charData(value: CharSA){
    //     debugger
    //     this._charData = value;
    // }
    // @bh.scriptableAsset
    // charData: CharSA;
    @property(CharRender)
    charRender: CharRender;

    @property(CharSA)
    charData: CharSA;
    @property(SkillSA)
    skill: SkillSA
    start() {
        this.setCharAsset();
    }

    setCharAsset() {
        console.log("TestRefScriptableAsset", this.charData);
        this.charRender.setCharAsset(this.charData);
    }
}


