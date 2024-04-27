# React18

+  ReactElement 实现原理

```js
// 使用 Symbol 之前, 判断当前的宿主环境支不支持 Smybol

const supportSmybol = typeof Symbol === 'function' && Symbol.for;

// 如果支持的话返回一个 REACT_ELEMENT_TYPE (具体实现)

export const REACT_ELEMENT_TYPE = supportSmybol
    ? Symbol.for('react.element')
    : 0xeac7;

```
