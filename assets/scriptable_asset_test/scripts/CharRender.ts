import { _decorator, Component, Label, Node, Sprite } from 'cc';
import { CharSA } from './CharSA';
const { ccclass, property } = _decorator;

@ccclass('CharRender')
export class CharRender extends Component {
    @property(Label)
    charName: Label;
    @property(Sprite)
    charSprite: Sprite
    @property(Label)
    charProp: Label
    start() {
        console.log("s")
    }

    update(deltaTime: number) {

    }
    setCharAsset(char: CharSA) {
        this.charName.string = char.charName;
        let propInfo = "";
        for (let key in char.charProp) {
            propInfo += key + ":" + char.charProp[key] + "\n";
        }
        this.charProp.string = propInfo;
        this.charSprite.spriteFrame = char.sprite;
    }
}


