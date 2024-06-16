import { _decorator, CCString, Component, Node } from 'cc';
const { ccclass, property } = _decorator;
import { bh } from "db://scriptable-asset/scriptable_runtime";



@bh.createAssetMenu("TestNoInitFieldSA", "CreateSA/TestNoInitFieldSA")
@bh.scriptable('TestNoInitFieldSA')
export class TestNoInitFieldSA extends bh.ScriptableAsset {
    @property(CCString)
    testNoInitStringField: string;
}