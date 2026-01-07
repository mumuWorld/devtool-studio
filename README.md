# DevTool Studio Pro

基于 Electron + Vite + React + TypeScript 构建的跨平台桌面应用开发工具。

## 项目简介

这是一个使用现代前端技术栈构建的 Electron 桌面应用模板，集成了 Vite 作为构建工具、React 作为 UI 框架和 TypeScript 提供类型安全，提供了快速的开发体验和高效的构建流程。

## 技术栈

- **Electron**: 39.x - 跨平台桌面应用框架
- **React**: 19.x - UI 组件库
- **TypeScript**: 5.x - 类型安全的 JavaScript 超集
- **Vite**: 7.x - 下一代前端构建工具
- **Node.js**: 推荐使用 v18 或更高版本

## 前置要求

在开始之前，请确保你的开发环境中已安装以下工具：

1. **Node.js** (推荐 v18.0.0 或更高版本)
   - 下载地址: https://nodejs.org/
   - 验证安装: 在终端运行 `node --version`

2. **npm** (通常随 Node.js 一起安装)
   - 验证安装: 在终端运行 `npm --version`

3. **Git** (用于克隆项目)
   - 下载地址: https://git-scm.com/
   - 验证安装: 在终端运行 `git --version`

## 快速开始

### 1️⃣ 克隆项目（如果还没有）

```bash
git clone https://github.com/mumuWorld/devtool-studio.git
cd devtool-studio-pro
```

### 2️⃣ 安装依赖

在项目根目录下运行以下命令安装所有依赖：

```bash
npm install
```

这个命令会：
- 安装 package.json 中列出的所有依赖包
- 创建 node_modules 文件夹
- 生成 package-lock.json 文件（用于锁定依赖版本）

**⏱️ 预计耗时**: 根据网络速度，通常需要 1-3 分钟

### 3️⃣ 启动开发服务器

安装完成后，运行以下命令启动开发模式：

```bash
npm run dev
```

这个命令会：
- 启动 Vite 开发服务器（默认端口 5173）
- 自动打开 Electron 窗口
- 启用热模块替换（HMR），修改代码后自动刷新
- 自动打开开发者工具（DevTools）

**✅ 成功标志**:
- 终端显示 Vite 服务器运行信息
- 自动弹出 Electron 应用窗口
- 窗口中显示 "DevTool Studio Pro" 欢迎界面

## 项目结构

```
devtool-studio-pro/
├── electron/              # Electron 主进程相关文件
│   ├── main.ts           # Electron 主进程入口文件
│   └── preload.ts        # 预加载脚本（用于安全地暴露 API）
├── src/                  # React 应用源代码
│   ├── App.tsx          # React 根组件
│   ├── App.css          # 根组件样式
│   ├── main.tsx         # React 应用入口
│   ├── index.css        # 全局样式
│   └── tools/           # 工具组件目录
├── dist/                 # Vite 构建输出目录（自动生成）
├── dist-electron/        # Electron 构建输出目录（自动生成）
├── release/              # 打包后的应用程序（自动生成）
├── node_modules/         # 依赖包（自动生成）
├── index.html           # HTML 入口文件
├── vite.config.ts       # Vite 配置文件
├── tsconfig.json        # TypeScript 配置文件
├── tsconfig.node.json   # Node 环境 TypeScript 配置
├── package.json         # 项目配置和依赖清单
└── README.md           # 项目说明文档
```

## 可用命令

### 开发命令

| 命令 | 说明 |
|------|------|
| `npm run dev` | 启动开发模式（推荐） |
| `npm run electron:dev` | 同上，启动开发模式 |

### 构建命令

| 命令 | 说明 |
|------|------|
| `npm run build` | 构建 Web 应用（仅前端部分） |
| `npm run preview` | 预览构建后的应用 |
| `npm run electron:build` | 构建并打包 Electron 应用（当前平台） |
| `npm run electron:build:win` | 构建 Windows 安装包 |
| `npm run electron:build:mac` | 构建 macOS 安装包 |
| `npm run electron:build:linux` | 构建 Linux 安装包 |

## 开发指南

### 修改代码

1. **修改 React 组件**: 编辑 `src/App.tsx` 或创建新组件
2. **修改样式**: 编辑 `src/App.css` 或 `src/index.css`
3. **修改 Electron 主进程**: 编辑 `electron/main.ts`
4. **添加新页面**: 在 `src/` 目录下创建新的 `.tsx` 组件文件

### 热更新

在开发模式下，修改以下文件会自动触发热更新：
- ✅ React 组件（.tsx 文件）
- ✅ CSS 样式文件
- ⚠️ Electron 主进程文件需要手动重启应用

### 调试

开发模式下会自动打开 Chrome DevTools，你可以：
- 查看 Console 日志
- 检查 DOM 元素
- 调试 TypeScript/JavaScript 代码
- 查看网络请求
- 性能分析

## 打包发布

### 打包步骤

1. **构建应用**

```bash
npm run electron:build
```

2. **查看打包结果**

打包完成后，在 `release/` 目录下会生成对应平台的安装包：
- **Windows**: `.exe` 或 `.msi` 安装程序
- **macOS**: `.dmg` 磁盘映像
- **Linux**: `.AppImage` 可执行文件

### 跨平台打包

如果需要在当前系统打包其他平台的应用：

```bash
# 在任意平台打包 Windows 版本
npm run electron:build:win

# 在任意平台打包 macOS 版本（需要 macOS 系统）
npm run electron:build:mac

# 在任意平台打包 Linux 版本
npm run electron:build:linux
```

**注意**:
- macOS 的代码签名通常需要在 macOS 系统上进行
- Windows 打包建议在 Windows 系统上进行以获得最佳兼容性

## 常见问题

### Q1: npm install 报错怎么办？

**A**: 尝试以下解决方案：

1. 清除 npm 缓存：
```bash
npm cache clean --force
```

2. 删除 node_modules 和 package-lock.json 重新安装：
```bash
rm -rf node_modules package-lock.json
npm install
```

3. 使用国内镜像源（如果网络慢）：
```bash
npm config set registry https://registry.npmmirror.com
npm install
```

### Q2: 运行 npm run dev 后没有弹出窗口？

**A**: 检查以下几点：

1. 确认终端没有报错信息
2. 查看是否有端口占用（默认 5173）
3. 尝试重启终端并重新运行命令
4. 检查是否安装了所有依赖

### Q3: 修改代码后页面没有更新？

**A**:
- React 组件修改应该自动热更新
- 如果未更新，尝试手动刷新 Electron 窗口（Cmd+R 或 Ctrl+R）
- Electron 主进程文件修改需要重启应用（关闭窗口重新运行 `npm run dev`）

### Q4: 如何添加新的依赖包？

**A**:
```bash
# 安装运行时依赖
npm install <package-name>

# 安装开发依赖
npm install --save-dev <package-name>
```

### Q5: 打包后的应用很大怎么办？

**A**:
- 检查是否包含了不必要的文件
- 在 package.json 的 build.files 中配置需要打包的文件
- 考虑使用 Electron 的 asar 打包功能
- 移除未使用的依赖包

### Q6: 如何在 Electron 中使用 Node.js API？

**A**:
由于安全考虑，渲染进程默认不能直接使用 Node.js API。正确做法：
1. 在 `electron/preload.js` 中通过 `contextBridge` 暴露所需 API
2. 在 React 组件中通过 `window.electronAPI` 调用

## 进一步学习

- [Electron 官方文档](https://www.electronjs.org/docs)
- [Vite 官方文档](https://vitejs.dev/)
- [React 官方文档](https://react.dev/)
- [Electron Builder 文档](https://www.electron.build/)

## 许可证

ISC

## 贡献

欢迎提交 Issue 和 Pull Request！

---

**祝你开发愉快！** 🚀
