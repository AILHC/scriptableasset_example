import { _decorator, CCInteger, CCString, Component, Node, SpriteFrame } from 'cc';
const { ccclass, property } = _decorator;



import { SkillSA } from './SkillSA';
import { WeaponSA } from './WeaponSA';
import { bh } from 'db://scriptable-asset/scriptable_runtime';


@ccclass("CharProp")
class CharProp {
    @property({ type: CCInteger, min: 0 })
    hp: number
    @property({ type: CCInteger, min: 0 })
    curHp: number
    @property({ type: CCInteger, min: 0 })
    mp: number
    @property({ type: CCInteger, min: 0 })
    curMp: number
    @property({ type: CCInteger, min: 0 })
    atk: number

}

@bh.createAssetMenu("CharSA", "CreateSA/CharSA")
@bh.scriptable('CharSA')
export class CharSA extends bh.ScriptableAsset {
    @bh.scriptableAsset(true)
    public skills: SkillSA[] = []

    @property(SpriteFrame)
    public sprite: SpriteFrame = null;

    
    @property(CCString)
    public charName: string
    
    @bh.scriptableAsset
    public weapon: WeaponSA;

    @property(CharProp)
    public charProp: CharProp = new CharProp();
}