import Image from 'next/image'

export default function Hero() {
    return (
        <section className="container mx-auto px-6 py-12 w-full flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-3/4 space-y-4">
                <h1 className="text-7xl font-bold">算法可视化</h1>
                <p className="text-3xl text-muted-foreground">
                    通过逐步可视化探索算法，
                    让学习过程更简单、更投入，
                    从而获得更深刻的理解

                </p>
            </div>
            <div className="md:w-1/4">
                <Image
                    src="/images/algorithm.png?height=400&width=600"
                    alt="示例图"
                    width={300}
                    height={200}
                    // className="rounded-lg shadow-lg"
                />
            </div>
        </section>
    )
}

