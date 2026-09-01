'use client'

import GitHubButton from 'react-github-btn';

export default function Footer() {

  return (
    <footer className="bg-background py-6 px-6 mt-12 border-t">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-sm text-muted-foreground mb-4 md:mb-0">
          <p className="font-medium text-foreground">© {new Date().getFullYear()} Mohammad Tamimul Ehsan. 保留所有权利。</p>
          <p className="mt-1 text-xs">
            本中文版基于 <a href="https://github.com/TamimEhsan/AlgorithmVisualizer" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">TamimEhsan/AlgorithmVisualizer</a> 翻译与适配。
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-2">
          <GitHubButton href="https://github.com/flykhan/AlgorithmVisualizer-zh" data-icon="octicon-star" data-size='large' data-show-count="true" aria-label="收藏 flykhan/AlgorithmVisualizer-zh">收藏</GitHubButton>
          <GitHubButton href="https://github.com/flykhan/AlgorithmVisualizer-zh/fork" data-icon="octicon-repo-forked" data-size='large' data-show-count="true" aria-label="复刻 flykhan/AlgorithmVisualizer-zh">复刻</GitHubButton>
          <div>
            <img src="https://visitor-badge.laobi.icu/badge?page_id=flykhan.AlgorithmVisualizer-zh" alt="Hits"/>
          </div>
        </div>
      </div>
    </footer>
  )
}
