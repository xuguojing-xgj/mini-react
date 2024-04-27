
export type WorkTag = typeof FunctionComponent | typeof HostRoot | typeof HostComponent

    | typeof HostText

// 类型节点

// 
export const FunctionComponent = 0;

// 挂载项目的根节点 React.render() 对应的 FiberNode 节点的类型 为 HostRoot
export const HostRoot = 3;

// <div></div> 对应的 FiberNode 类型节点 为 HostComponent

export const HostComponent = 5;

// <div>1233</div> 123 对应的 FiberNode 类型节点 为 HostText

export const HostText = 6;



