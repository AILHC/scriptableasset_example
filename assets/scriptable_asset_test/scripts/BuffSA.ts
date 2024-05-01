import { _decorator, CCInteger, Component, Enum, Node } from 'cc';
import { bh } from 'db://scriptable-asset/scriptable_runtime';


const { ccclass, property } = _decorator;


enum BuffType {
    // 眩晕
    stun = 0,
    // 沉默
    silence = 1,
    // 中毒
    poison = 2,

}
@bh.createAssetMenu("BuffData","CreateSA/BuffData")
@bh.scriptable('BuffSA')
export class BuffSA extends bh.ScriptableAsset {
    @property({ type: CCInteger, min: 0 })
    public dur: number
    @property({ type: Enum(BuffType) })
    public type: BuffType
}