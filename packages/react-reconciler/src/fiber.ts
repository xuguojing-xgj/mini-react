
// FiberNode(虚拟 DOM 在 React 中的实现);

import { Props, Key, Ref } from 'shared/ReactTypes';

import { WorkTag } from './workTags';

export class FiberNode {
    tag: any;
    key: Key;
    stateNode: any;
    type: any
    pendingProps: Props;

    return: FiberNode | null;
    sibling: FiberNode | null;
    child: FiberNode | null;
    index: number;
    ref: Ref;

    memoizedProps: Props | null;
    // 构造函数
    // pendingProps: FiberNode 中需要改变的 Props
    // key: ReactElement 中的 Key
    // tag: FiberNode 类型的节点
    constructor(tag: WorkTag, pendingProps: Props, key: Key) {
        // 具体实现

        // 实例属性
        this.tag = tag;
        this.key = key;
        // 对于 HostComponent 来说 为 <div> stateNode 就保存了 div DOM (状态节点)
        this.stateNode = null;
        // FunctionComponent 在 fiberNode 类型节点为 0 type 对应的为 FunctionComponent 本身 () => {}
        this.type = null;

        // 需要实例可以表达节点之间的关系 构成树状结构
        // 指向父 fiberNode 
        this.return = null;
        // 指向右边 fiberNode
        this.sibling = null;
        // 指向子 fiberNode
        this.child = null;
        // 区分同级的 fiberNode 索引 <ul> li * 3 </ul>
        this.index = 0;

        this.ref = null;

        // 工作单元
        // pendingProps 作为工作单元刚开始准备工作的时候 Props 是什么
        this.pendingProps = pendingProps;
        // memoizedProps 为 工作单元 完成后 确认下来的 Props 是什么
        this.memoizedProps = null;

    }
}