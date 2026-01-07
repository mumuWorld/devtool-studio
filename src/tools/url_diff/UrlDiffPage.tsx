import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './UrlDiffPage.css'
import PageHeader from '../../components/PageHeader'

export default function URLDiffPage() {

    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    };

    const handleCompare = () => {
        // TODO: 实现 URL 对比逻辑
        console.log('TODO: 对比两个 URL')
    }

    return (
        <div className="url-diff-page">
            <PageHeader
                title="URL 差异对比工具"
            />

            <h2>URL 差异对比工具</h2>
            <p>在此页面实现 URL 差异对比的功能。</p>
        </div>
    )
}