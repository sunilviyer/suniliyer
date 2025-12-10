import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function AIDefenceLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-950">
            <Header />
            <div className="flex flex-grow container mx-auto px-4">
                <Sidebar />
                <main className="flex-grow py-8 md:pl-8">
                    {children}
                </main>
            </div>
            <Footer />
        </div>
    )
}
