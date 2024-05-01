# ScriptableAsset


## 简介

提供和**Unity**的**ScriptableObject**的一样的功能

方便配置复杂结构的数据，方便协作，方便引用其他资源

和平时配置`prefab`的`component`数据一样，但不需要节点，不需要挂组件

## 测试的发布平台

| H5  | 微信小游戏 | Android原生 | iOS原生 | 抖音小游戏 | OPPO小游戏 | vivo小游戏 |
| --- | ----- | --------- | ----- | ----- | ------- | ------- |
| ✔   | ✔     | ✘         | ✘     | ✔     | ✘       | ✘       |



## 使用
### 示例项目

Gitee [scriptableasset_example](https://gitee.com/AIGAMESTUDIO.AILHC/scriptableasset_example)
GitHub [scriptableasset_example](https://github.com/AILHC/scriptableasset_example)
### 创建
>自动添加到右键菜单，创建自定义类型数据文件

![创建资源.gif](https://cdn.jsdelivr.net/gh/ailhc/picture/img%E5%88%9B%E5%BB%BA%E8%B5%84%E6%BA%90.gif)


### 可视化修改配置
>修改配置和修改Component的字段数据一样

可以使用任何CocosCreator提供的属性装饰器

![修改资源.gif](https://cdn.jsdelivr.net/gh/ailhc/picture/img%E4%BF%AE%E6%94%B9%E8%B5%84%E6%BA%90.gif)


参考更多用法：[Cocos Creator 3.8 手册 - 装饰器使用](https://docs.cocos.com/creator/manual/zh/scripting/decorator.html#type-%E5%8F%82%E6%95%B0)

#### 已知问题
- 自定义且用ccclass装饰器的类，非继承Component的，比如CustomClasss，需要赋予初始值
### 引用和加载
>和其他资源(cc.Prefab、cc.AudioClip、等)一样，进行引用和加载，以及对依赖资源加载，无需而外处理

#### 被引用
```typescript
import { _decorator, Component, Node } from 'cc';
import { bh } from 'db://scriptable-asset/scriptable_runtime';
import { CharSA } from './scripts/CharSA';
import { CharRender } from './scripts/CharRender';


const { ccclass, property } = _decorator;

@ccclass('TestRefScriptableAsset')
export class TestRefScriptableAsset extends Component {
    // private _charData: CharSA;
    // @property(bh.ScriptableAsset)
    // get charData(): CharSA{
    //     return this._charData;
    // };
    // set charData(value: CharSA){
    //     debugger
    //     this._charData = value;
    // }
    // @bh.scriptableAsset
    // charData: CharSA;
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
界面
![image.png](https://cdn.jsdelivr.net/gh/ailhc/picture/img202404302045386.png)

##### 已知问题
- 使用具体的ScriptableAsset类型会字段赋值旁边的打开搜索功能会搜索不到，需要使用基类ScriptableAsset作为字段装饰器类型，或者直接使用`@bh.scriptableAsset`来标记
	```ts
	@bh.scriptableAsset
    charData: CharSA;
	```

#### 动态加载

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


- 支持3.8.2版本的引擎


## 其他作品

- 编辑器控制台增强插件 [EditorConsoleEnhancer](https://store.cocos.com/app/detail/6147)
- 让你5000+资源的项目开发如燕般轻盈流畅。 [Aswallow](https://store.cocos.com/app/zh/detail/2948)
- [完美typescript插件模板][Cocos Store](https://store.cocos.com/app/detail/2736)

## 联系
### 邮件反馈

505126057@qq.com
### Discord 频道 & QQ 频道
[点击链接加入QQ频道【游戏开发者联盟】](https://pd.qq.com/s/12xollzi9)

[**Join Our Discord Channel**](https://discord.com/channels/1233676496049274890/1233676883409768468)

### 加群交流反馈

QQ群:1103157878

### 关注作者获取更多内容

微信搜索公众号:玩转游戏开发

或扫码关注：<img src="https://cdn.jsdelivr.net/gh/ailhc/picture/img202404011944623.png" alt="img" style="zoom:50%;" />

## 版权声明

本引擎插件(以下简称"插件")由本人开发。模板的所有权和知识产权均归本人所有。不得以任何形式、任何方式再发布本插件。

## 购买须知

本产品为付费虚拟商品，一经购买成功概不退款，请在购买前谨慎确认购买内容。

## 更新日志

### `v1.0.1`

初次发布版本