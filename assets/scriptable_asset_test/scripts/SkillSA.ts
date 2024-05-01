import { _decorator, AudioClip, CCInteger, CCString, Component, Node, Prefab, SpriteFrame } from 'cc';
import { bh } from 'db://scriptable-asset/scriptable_runtime';
import { BuffSA } from './BuffSA';




const { ccclass, property } = _decorator;

@bh.createAssetMenu("SkillSA", "CreateSA/SkillSA", "创建技能数据")
@bh.scriptable('SkillSA')
export class SkillSA extends bh.ScriptableAsset {
    @property(CCString)
    public skillName: string;
    @property(SpriteFrame)
    public skillIcon: string
    @property(Prefab)
    public skillEff: Prefab
    @property(AudioClip)
    public skillAudio: AudioClip
    @property
    public skilDmg: number = 10
    @bh.scriptableAsset(true)
    public buffs: BuffSA[] = []

}