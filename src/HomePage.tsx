import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PrimaryToolCard from './components/PrimaryToolCard'

export default function HomePage() {


    const [count, setCount] = useState<number>(0)
    const navigate = useNavigate();

    const handleOpenUrlDiff = () => {
        navigate('/url-diff');
    };

    return (
        <div className="home-page">
            <header className="App-header">
                <h1>DevTool Studio Pro</h1>
                <p>基于 Electron + Vite + React + TypeScript 构建的桌面应用</p>

                <main className="tool-cards">
                    <PrimaryToolCard
                        title="URL 差异对比工具"
                        description="对比两个 URL 之间的差异，帮助你快速找出不同之处。"
                        onOpen={handleOpenUrlDiff}
                    />
                    {/* 可以在这里添加更多工具卡片 */}
                </main>

                <div className="card">
                    <button onClick={() => setCount((count) => count + 1)}>
                        点击次数: {count}
                    </button>
                </div>

                <p className="info">
                    编辑 <code>src/App.tsx</code> 并保存以测试热更新
                </p>
            </header>
        </div>
    )
}