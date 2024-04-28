# React18

- ReactElement 如何实现

```js
// 使用 Symbol 之前, 判断当前的宿主环境支不支持 Smybol

const supportSmybol = typeof Symbol === 'function' && Symbol.for;

// 如果支持的话返回一个 REACT_ELEMENT_TYPE (具体实现)

export const REACT_ELEMENT_TYPE = supportSmybol
	? Symbol.for('react.element')
	: 0xeac7;
```

- reconcile 协调器

  - React 运行时核心模块, 而 reconcile 并不能直接与宿主环境(例如: DOM CSSOM) API 进行交互,需要通过特定的渲染器完成
    - 功能
      - Diffing:
      - 协调更新:
      - 生成更新列表:
  - 实现新的数据结构用于 React Element 与真实的 UI 节点之间比较
  - 表达节点(FiberNode)之间的关系
  - 方便拓展(React Element 数据结构是不方便拓展的)

  - FiberNode

```js
function FiberNode(...) {
  // Instance
  this.tag = tag;
  this.key = key;
  this.elementType = null;
  this.type = null;
  this.stateNode = null;

  // Fiber
  this.return = null;
  this.child = null;
  this.sibling = null;
  this.index = 0;

  this.ref = null;
  this.refCleanup = null;

  this.pendingProps = pendingProps;
  this.memoizedProps = null;
  this.updateQueue = null;
  this.memoizedState = null;
  this.dependencies = null;

  this.mode = mode;

  // Effects
  this.flags = NoFlags;
  this.subtreeFlags = NoFlags;
  this.deletions = null;

  this.lanes = NoLanes;
  this.childLanes = NoLanes;

  this.alternate = null;
}
```
