import { EDITOR } from "cc/env";
import { ScriptableAsset } from "../extensions/ccc_scriptableobject/runtime/assets/scriptable_asset";
import { CCInteger, Script, _decorator, assetManager } from "cc";
import { createAssetMenu } from "../extensions/ccc_scriptableobject/runtime/assets/create_sasset";
const { ccclass, property, serializable } = _decorator;
@ccclass("TestDataClass")
class TestDataClass {
    @property({ type: CCInteger })
    public test: number = 0;
}
@createAssetMenu("test_create_asset", "abc/ccd", "创建测试scriptable_asset", 0)
@ccclass("TestCreateAsset")
export class TestCreateAsset extends ScriptableAsset {
    @property(CCInteger)
    testNum: number = 0;
    @property(TestDataClass)
    testData: TestDataClass = new TestDataClass();
    private get __scriptAsset3(): null { return null; }
}