# ScriptableAsset

## Introduction

Provides the same functionality as **Unity**'s **ScriptableObject**

Convenient for configuring complex structured data, facilitating collaboration, and referencing other resources

Just like configuring `prefab` `component` data normally, but without the need for nodes or attaching components

## Tested Platforms

| H5  | WeChat Mini Game | Android Native | iOS Native | TikTok Mini Game | OPPO Mini Game | vivo Mini Game |
| --- | ---------------- | -------------- | ---------- | --------------- | -------------- | -------------- |
| ✔   | ✔                | ✔              | ✔          | ✔               | ✔              | ✔              |
## Features and Planning
- [x] Custom ScriptableAsset Types
- [x] Preview and Edit
- [x] Drag and Drop Assignment to Component Fields (Recognition of Specified Custom ScriptableAsset Types)
- [x] Add Right-Click Creation Button Using Decorators
- [x] Compatible with 3.7.x
- [x] Test on more publishing platforms
- [ ] Support for Search
- [ ] Support for Custom ScriptableAsset Inspector

## Usage
### Example Project
Gitee [scriptableasset_example](https://gitee.com/AIGAMESTUDIO.AILHC/scriptableasset_example)
GitHub [scriptableasset_example](https://github.com/AILHC/scriptableasset_example)
### Creation
> Automatically added to the right-click menu, create custom type data files
>ps: You need to copy the example script template to your project: `.creator\asset-template\typescript\ScriptableAssetScriptTemplate`.

![Create Resource.gif](https://testingcf.jsdelivr.net/gh/ailhc/picture/img%E5%88%9B%E5%BB%BA%E8%B5%84%E6%BA%90.gif)

### Visual Configuration Modification
> Modifying configuration is the same as modifying the field data of a Component

Any property decorator provided by CocosCreator can be used

![Modify Resource.gif](https://testingcf.jsdelivr.net/gh/ailhc/picture/img%E4%BF%AE%E6%94%B9%E8%B5%84%E6%BA%90.gif)

For more usage: [Cocos Creator 3.8 Manual - Decorator Usage](https://docs.cocos.com/creator/manual/zh/scripting/decorator.html#type-%E5%8F%82%E6%95%B0)



### Referencing and Loading
> Just like other resources (cc.Prefab, cc.AudioClip, etc.), reference and load

#### Referenced

```typescript
import { _decorator, Component, Node } from 'cc';
import { bh } from 'db://scriptable-asset/scriptable_runtime';
import { CharSA } from './scripts/CharSA';
import { CharRender } from './scripts/CharRender';

const { ccclass, property } = _decorator;

@ccclass('TestRefScriptableAsset')
export class TestRefScriptableAsset extends Component {
    
    @property(CharRender)
    charRender: CharRender;

    @property(CharSA)
    charData: CharSA;
    start() {
        console.log(this.charData.charName);
        this.charRender.setCharAsset(this.charData);
    }
    update(deltaTime: number) {

    }
}
```

Interface
![image.png](https://testingcf.jsdelivr.net/gh/ailhc/picture/img202404302045386.png)


#### Dynamic Loading

```typescript
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
        assetManager.loadBundle('scriptable_asset_test_res', (err, bundle) => {
            if (err) {
                console.error(err);
                return;
            }
            bundle.load(this.assetPath, (err, asset:CharSA) => {
                if (err) {
                    console.error(err);
                    return;
                }
                console.log(asset);
                this.charRender.setCharAsset(asset);

            });
        });
    }
}
```
## Known Issues

- Custom classes that are decorated with the `ccclass` decorator and do not inherit from `Component`, such as `CustomClass`, require an initial value to be assigned.

- Using a specific `ScriptableAsset` type may cause the field assignment's adjacent search functionality to not return any results. It is necessary to use the base class `ScriptableAsset` as the type for the field decorator, or to use `@bh.scriptableAsset` directly for marking.
    ```ts
    @bh.scriptableAsset
    charData: CharSA;
    ```

- Deleting the `ScriptableAsset` script will cause dependent locations to display as `UnknownType`. After restoring the script, restarting the editor will resolve the issue.

- Only Support 3.8.x

## Other Works

- Editor Console Enhancer Plugin [EditorConsoleEnhancer](https://store.cocos.com/app/detail/6147)
- Makes your 5000+ resource project development as light and smooth as a swallow. [Aswallow](https://store.cocos.com/app/zh/detail/2948)
- [Perfect TypeScript Plugin Template][Cocos Store](https://store.cocos.com/app/detail/2736)

# Contact
### Email Feedback
505126057@qq.com

### Discord 频道 & QQ 频道

[点击链接加入QQ频道【游戏开发者联盟】](https://pd.qq.com/s/12xollzi9)

[**Join Our Discord Channel**](https://discord.com/channels/1233676496049274890/1233676883409768468)


### Join Group for Discussion and Feedback
QQ Group: 1103157878
### Follow the Author for More Content
Search for the WeChat public account: 玩转游戏开发 (Play around with game development)
Or scan the QR code to follow: <img src="https://testingcf.jsdelivr.net/gh/ailhc/picture/img202404011944623.png" alt="img" style="zoom:50%;" />

## Copyright Notice

This engine plugin (hereinafter referred to as the "Plugin") is developed by myself. The ownership and intellectual property rights of the Plugin are solely owned by me. The Plugin shall not be re-published in any form or by any means.

## Disclaimer

This template is a virtual product. Please read the description carefully and think it through before making a purchase. No refunds will be issued after purchase.

## CHANGELOG

### `v1.0.3`
- Compatible with 3.7.x
- Fixed the issue with broken document image links

### `v1.0.2`

Compatibility: Cocos Creator 3.8.3

### `v1.0.1`

Initial release version
