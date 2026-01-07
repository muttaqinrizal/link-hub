import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'

export default async function DashboardPage() {
    const supabase = await createClient()

    const {
        data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
        return redirect('/login')
    }

    return (
        <div className="flex min-h-screen w-full flex-col">
            <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
                <h1 className="text-xl font-bold">Link Hub</h1>
                <div className="ml-auto flex gap-4 items-center">
                    <span className="text-sm text-muted-foreground">{user.email}</span>
                    <form action="/auth/signout" method="post">
                        <button className="text-sm font-medium hover:underline">
                            Sign out
                        </button>
                    </form>
                </div>
            </header>
            <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    <div className="rounded-xl border bg-card text-card-foreground shadow h-48 flex items-center justify-center">
                        Link Editor Placeholder
                    </div>
                    <div className="rounded-xl border bg-card text-card-foreground shadow h-48 flex items-center justify-center">
                        Preview Placeholder
                    </div>
                </div>
            </main>
        </div>
    )
}
