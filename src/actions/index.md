# Actions

表格中的行操作器

## 基本用法

### LinkButton、disabled 的用法

<code src="./demo/basic.tsx"></code>

### 当操作数量超过 threadhold 时，多出的操作会收敛在下拉菜单中

<code src="./demo/threshold.tsx"></code>

### visible 属性可以控制是否渲染这个操作项

<code src="./demo/visible.tsx"></code>

使用 visible 的效果等同于`{showEdit && <LinkButton>编辑</LinkButton>}`。

### 自定义下拉按钮，`<LinkMore>`让你方便地定义标准化的下拉按钮

<code src="./demo/customExpandTrigger.tsx"></code>

### Actions 的 children 可以传入任意的 inline 元素，比如 button

<code src="./demo/customChildren.tsx"></code>

### FragmentDemo：

<code src="./demo/fragment.tsx"></code>

上面的 FragmentDemo 只是说明本组件对子组件中的 React.Fragment 的处理，无需特别关注。不建议在本组件中使用 React.Fragment。

### 控制 Actions 是否自动换行

<code src="./demo/wrap.tsx"></code>

### 自定义下拉菜单的宽度

<code src="./demo/customWidth.tsx"></code>

## APIs

### Actions

| 属性              | 类型                           | 说明                                                                          | 默认值              |
| ----------------- | ------------------------------ | ----------------------------------------------------------------------------- | ------------------- |
| className         | className?: string;            | 设置 wrapper div 的 className                                                 | -                   |
| dropdownProps     | dropdownProps?: DropdownProps; | 开发者可传入 dropdownProps，透传给弹层 Dropdown。继承基础组件 Dropdown 的 API | -                   |
| expandTrigger     | expandTrigger?: ReactNode;     | 收敛菜单的触发器                                                              | \<Icon type="more"> |
| expandTriggerType | expandTriggerType?: 'hover'    | 触发收敛菜单展示/收缩的动作                                                   | click               |
| menuProps         | menuProps?: MenuProps;         | 开发者可传入 menuProps，透传给弹层内的 Menu 组件，继承基础组件 Menu 的 API    | -                   |
| style             | style?: CSSProperties;         | 设置 wrapper div 的 style                                                     | -                   |
| threshold         | threshold?: number;            | 子节点收敛阈值, 超过这个阈值的子节点将被收敛在下拉菜单中                      | 3                   |
| wrap              | wrap?: boolean;                | 是否允许 Actions 换行                                                         | -                   |

### LinkButton

`<LinkButton>`用于定义`<Actions>`中的操作按钮，接受的 props 与普通的`<span>`相同，经常使用的是`onClick`。

| 属性      | 类型                                            | 说明                                                                                   | 默认值 |
| --------- | ----------------------------------------------- | -------------------------------------------------------------------------------------- | ------ |
| Component | Component?: string \| React.ComponentType<any>; | 用什么组件来渲染链接。请传入一个组件。 你可以渲染为'a'或者 react-router 的 Link 组件。 | 'span' |

### 使用 LinkButton 进行站外跳转，通过`props.Component`将`LinkButton`将被渲染为`<a />`

<code src="./demo/withHref.tsx"></code>

### 使用 LinkButton 进行内跳转，通过`props.Component`将`LinkButton`将被渲染为`<Link />`

<code src="./demo/withLink.tsx"></code>

### LinkMore

`<LinkMore>`用于定义`<Actions>`中的下拉按钮，接受的 props 与普通的`<span>`相同，经常使用的是`onClick`。
