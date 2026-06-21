import KoreanLessonViewer from '@/components/KoreanLessonViewer'

export const metadata = {
  title: '韓国語 - rb-world-academy',
  description: '標準韓国語（標準語）の講義コース。初級から中上級まで段階的に学習できます。',
}

export default function KoreanPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50 py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">韓国語コース</h1>
          <p className="text-gray-600">한국어 강의 — 初級から上級まで</p>
        </div>
        <KoreanLessonViewer />
      </div>
    </main>
  )
}
