import { _decorator, Asset, CCInteger, Component, Node } from 'cc';
import { TestExportCClass } from './TestExportCClass';
import { TestCreateAsset } from './test_create_asset';
import { ScriptableAsset } from '../extensions/ccc_scriptableobject/runtime/assets/scriptable_asset';
import { createAssetMenu, scriptableAsset } from '../extensions/ccc_scriptableobject/runtime/assets/create_sasset';
import { EDITOR } from 'cc/env';
const { ccclass, property } = _decorator;
@ccclass('TestInternalCClass')
class TestInternalCClass {
    @property(CCInteger)
    test: number
}

@ccclass('NewComponent')
export class NewComponent extends Component {
    @property(CCInteger)
    test: number
    @property(TestInternalCClass)
    test2: TestInternalCClass
    @property(TestExportCClass)
    exportCClassIns: TestExportCClass
    @scriptableAsset
    scriptableAsset: TestCreateAsset
    start() {

    }

    update(deltaTime: number) {

    }
}


