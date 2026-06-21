import GermanLessonViewer from '@/components/GermanLessonViewer'

export const metadata = {
  title: 'ドイツ語 - rb-world-academy',
  description: '標準ドイツ語の講義コース。初級から中上級まで段階的に学習できます。',
}

export default function GermanPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">ドイツ語コース</h1>
          <p className="text-gray-600">Deutschkurs — 初級から中上級まで</p>
        </div>
        <GermanLessonViewer />
      </div>
    </main>
  )
}
