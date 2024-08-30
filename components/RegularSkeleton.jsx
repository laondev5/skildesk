import { Skeleton } from "@/components/ui/skeleton";

export default function RegularSkeleton() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <Skeleton className="h-8 w-32" />
          <nav className="hidden md:flex space-x-4">
            {[...Array(4)].map((_, i) => (
              <Skeleton key={i} className="h-4 w-20" />
            ))}
          </nav>
          <Skeleton className="h-8 w-8 rounded-full md:hidden" />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Skeleton className="h-12 w-3/4 mx-auto mb-4" />
            <Skeleton className="h-4 w-full max-w-2xl mx-auto" />
          </div>
        </section>

        {/* Content Sections */}
        <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow">
                <Skeleton className="h-40 w-full mb-4" />
                <Skeleton className="h-6 w-3/4 mb-2" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-5/6" />
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gray-200 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Skeleton className="h-8 w-2/3 mx-auto mb-4" />
            <Skeleton className="h-4 w-full max-w-2xl mx-auto mb-6" />
            <Skeleton className="h-10 w-32 mx-auto" />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-4">
            {[...Array(4)].map((_, i) => (
              <div key={i}>
                <Skeleton className="h-6 w-24 bg-gray-600 mb-4" />
                <div className="space-y-2">
                  {[...Array(4)].map((_, j) => (
                    <Skeleton key={j} className="h-4 w-full bg-gray-600" />
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 flex justify-between items-center">
            <Skeleton className="h-4 w-40 bg-gray-600" />
            <div className="flex space-x-4">
              {[...Array(4)].map((_, i) => (
                <Skeleton
                  key={i}
                  className="h-6 w-6 rounded-full bg-gray-600"
                />
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
