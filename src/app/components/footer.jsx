'use client'

import GitHubButton from 'react-github-btn';

export default function Footer() {

  return (
    <footer className="bg-background py-6 px-6 mt-12 border-t">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-sm text-muted-foreground mb-4 md:mb-0">
          © {new Date().getFullYear()} Mohammad Tamimul Ehsan. 保留所有权利。
        </div>
        <div className="flex flex-wrap justify-center gap-2">
          {/* <Button variant="outline" size="sm">
            <Github className="mr-2 h-4 w-4" />
            Follow
          </Button>
          <Button variant="outline" size="sm">
            <Star className="mr-2 h-4 w-4" />
            Star
          </Button>
          <Button variant="outline" size="sm">
            <GitFork className="mr-2 h-4 w-4" />
            Fork
          </Button>
          <div className="flex items-center justify-center px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">
            <span className="font-bold mr-2">{visitors.toLocaleString()}</span>
            visitors
          </div> */}
        {/* <Button variant="outline" size="sm">
            <GitFork className="mr-2 h-4 w-4" />
            Fork
          </Button> */}
        <GitHubButton href="https://github.com/TamimEhsan" data-show-count="true" data-size='large' aria-label="在 GitHub 上关注 @TamimEhsan">关注 @TamimEhsan</GitHubButton>
        <GitHubButton href="https://github.com/TamimEhsan/AlgorithmVisualizer" data-icon="octicon-star" data-size='large' data-show-count="true" aria-label="收藏 TamimEhsan/Pathfinder-2.0">收藏</GitHubButton>
        <GitHubButton href="https://github.com/TamimEhsan/AlgorithmVisualizer/fork" data-icon="octicon-repo-forked" data-size='large' data-show-count="true" aria-label="复刻 TamimEhsan/Pathfinder-2.0">复刻</GitHubButton>
        <div>
        <img src="https://visitor-badge.laobi.icu/badge?page_id=TamimEhsan.AlgorithmVisualizer" alt="Hits"/>
        </div>
        </div>
      </div>
    </footer>
  )
}

