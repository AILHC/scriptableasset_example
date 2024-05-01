import { _decorator, CCInteger, Component, Node } from 'cc';
const { ccclass, property } = _decorator;


import { bh } from 'db://scriptable-asset/scriptable_runtime';
import { SkillSA } from './SkillSA';

@bh.createAssetMenu("WeaponData", "CreateSA/WeaponData")
@bh.scriptable('WeaponSA')
export class WeaponSA extends bh.ScriptableAsset {
    @bh.scriptableAsset
    public weaponSkill: SkillSA;
    @property({
        type: CCInteger,
        min: 1
    })
    public dmg: number
    @property
    public weaponName: string = "weapon"



}