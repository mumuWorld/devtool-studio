import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './PageHeader.css'

interface PageHeaderProps {
    // 基础属性
    title: string                      // 页面标题（必填）
    subtitle?: string                  // 副标题（可选）

    // 左侧返回按钮
    showBackButton?: boolean           // 是否显示返回按钮，默认 true
    backButtonText?: string            // 自定义返回按钮文字，默认 "← 返回"
    onBack?: () => void               // 返回按钮点击回调

    // 右侧操作区
    rightActions?: React.ReactNode    // 右侧自定义内容（按钮、菜单等）

    // 样式定制
    className?: string                // 自定义样式类名
    sticky?: boolean                  // 是否固定在顶部，默认 false
    bordered?: boolean                // 是否显示底部边框，默认 true

    // 其他
    children?: React.ReactNode        // 额外内容（如面包屑、标签页等）
}


function PageHeader({
    title,
    subtitle,
    showBackButton = true,
    backButtonText = '← 返回',
    onBack,
    rightActions,
    className = '',
    sticky = false,
    bordered = true,
    children,
}: PageHeaderProps) {
    const navigate = useNavigate()

    const handleBack = () => {
        // 如果传入了 onBack，使用自定义逻辑
        if (onBack) {
            onBack()
            return
        }
        navigate(-1)
    }

    // TODO: 根据 props 构建 className
    const headerClasses = '' // 组合 className、sticky、bordered 等

    return (
        <header className={headerClasses}>
            {/* TODO: 左侧区域 - 返回按钮 */}
            <div className="page-header-left">
                {showBackButton ? (
                    <button className="back-button" onClick={handleBack}>
                        {backButtonText}
                    </button>
                ) : null}
            </div>

            {/* TODO: 中间区域 - 标题 */}
            <div className="page-header-center">
                {title && <h1 className="page-title">{title}</h1>}
            </div>

            {/* TODO: 右侧区域 - 自定义操作 */}
            <div className="page-header-right">
                {/* 渲染 rightActions */}
            </div>

            {/* TODO: 额外内容区域 */}
            {children && (
                <div className="page-header-extra">
                    {/* 渲染 children */}
                </div>
            )}
        </header>
    )
}

export default PageHeader