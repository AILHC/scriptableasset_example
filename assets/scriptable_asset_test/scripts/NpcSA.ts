import { _decorator, AudioClip, Component, Enum, Node } from 'cc';
import { bh } from 'db://scriptable-asset/scriptable_runtime';
const { ccclass, property, integer, type, } = _decorator;
enum A {
    c,
    d
}
Enum(A);
@ccclass("CustomClass")
class CustomClass {
    @integer // 声明属性的 cc 类型为整数
    index = 0;

    @type([Node]) // 声明属性 children 的 cc 类型为 Node 数组
    children: Node[] = [];

    @type(String) // 警告：不应该使用构造函数 String。等价于 CCString。也可以选择不声明类型
    text = '';

}
@bh.createAssetMenu("NpcSA", "CreateSA/NpcSA")
@bh.scriptable('NpcSA')
export class NpcSA extends bh.ScriptableAsset {
    @property
    public npcName: string = "";

    @property(AudioClip)
    public defaultSayAudio: AudioClip

    @property // JavaScript 原始类型，根据默认值自动识别为 Creator 的浮点数类型。
    index = 0;

    @property(Node) // 声明属性 cc 类型为 Node。当属性参数只有 type 时可这么写，等价于 @property({type: Node})
    targetNode: Node | null = null; // 等价于 targetNode: Node = null!;

    // 声明属性 children 的 cc 类型为 Node 数组
    @property({
        type: [Node]
    })
    children: Node[] = [];

    @property({
        type: String,
    }) // 警告：不应该使用构造函数 String。等价于 CCString。也可以选择不声明类型
    text = '';

    @property
    children2 = []; // 未声明 cc 类型，从初始化式的求值结果推断元素为未定义的数组

    @property
    _valueB = 'abc'; // 此处 '_' 开头的属性，只序列化，不会在编辑器属性面板显示

    @property({ type: A })
    accx: A = A.c;

    @property(CustomClass)
    customData: CustomClass = new CustomClass();

}