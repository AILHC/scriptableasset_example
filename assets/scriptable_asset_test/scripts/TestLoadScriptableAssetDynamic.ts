import { _decorator, assetManager, Component, director, Node } from 'cc';
import { CharRender } from './CharRender';
import { CharSA } from './CharSA';
const { ccclass, property } = _decorator;

@ccclass('TestLoadScriptableAssetDynamic')
export class TestLoadScriptableAssetDynamic extends Component {
    /**
     * 
    
    */
    @property(CharRender)
    charRender: CharRender = null;
    @property
    assetPath: string = "char/char_datas/CharSA"
    start() {

    }

    update(deltaTime: number) {

    }
    loadScriptableAsset() {
        // char assets\scriptable_asset_test\char\char_datas\CharSA.sasset
        assetManager.loadBundle('scriptable_asset_test_res', (err, bundle) => {
            if (err) {
                console.error(err);
                return;
            }
            bundle.load(this.assetPath, (err, asset: CharSA) => {
                if (err) {
                    console.error(err);
                    return;
                }
                console.log("TestLoadScriptableAssetDynamic", asset);
                this.charRender.setCharAsset(asset);

            });
        });
    }
}


