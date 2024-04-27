import { _decorator, CCInteger, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('TestExportCClass')
export class TestExportCClass {
    @property(CCInteger)
    ccch = 10
}


