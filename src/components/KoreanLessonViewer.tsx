'use client'
import React, { useState } from 'react'
import lessonsData from '../data/korean-lessons.json'

interface Lesson {
  id: string
  level: number
  title: string
  titleKo?: string
  objectives: string[]
  content: { introduction: string; sections: any[] }
  practiceQuestions: any[]
  resources: any[]
}

export default function KoreanLessonViewer() {
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0)
  const currentLesson = (lessonsData.lessons as Lesson[])[currentLessonIndex]

  if (!currentLesson) return <div className="p-8">レッスンが見つかりません</div>

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-white rounded-lg">
      <div className="mb-8 pb-6 border-b border-gray-200">
        <h1 className="text-3xl font-bold text-gray-900">{currentLesson.title}</h1>
        <p className="text-lg text-gray-600 mt-1">{currentLesson.titleKo}</p>
        <span className="text-sm font-semibold text-blue-600">Level {currentLesson.level}</span>
      </div>

      <div className="mb-8 p-4 bg-blue-50 rounded-lg">
        <h2 className="text-lg font-semibold text-gray-900 mb-3">学習目標</h2>
        <ul className="space-y-2">
          {currentLesson.objectives.map((obj: string, idx: number) => (
            <li key={idx} className="flex items-start">
              <span className="text-blue-600 mr-3">✓</span>
              <span className="text-gray-700">{obj}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-8">
        <p className="text-gray-700 leading-relaxed">{currentLesson.content.introduction}</p>
      </div>

      <div className="mb-8 space-y-6">
        {currentLesson.content.sections.map((section: any, idx: number) => (
          <div key={idx} className="border-l-4 border-blue-500 pl-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">{section.title}</h3>
            {section.phrases && (
              <div className="space-y-3">
                {section.phrases.map((phrase: any, pidx: number) => (
                  <div key={pidx} className="bg-gray-50 p-4 rounded-lg">
                    <p className="font-bold text-gray-900">{phrase.korean}</p>
                    <p className="text-sm text-gray-500">{phrase.romaji}</p>
                    <p className="text-lg text-gray-700 mt-1">{phrase.japanese}</p>
                  </div>
                ))}
              </div>
            )}
            {section.pronouns && (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {section.pronouns.map((p: any, pidx: number) => (
                  <div key={pidx} className="bg-gray-50 p-3 rounded-lg">
                    <p className="font-bold">{p.korean}</p>
                    <p className="text-sm text-gray-700">{p.meaning}</p>
                  </div>
                ))}
              </div>
            )}
            {section.items && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {section.items.map((item: any, pidx: number) => (
                  <div key={pidx} className="bg-blue-100 p-3 rounded-lg">
                    <p className="font-bold">{item.korean}</p>
                    <p className="text-sm text-gray-700">{item.japanese}</p>
                  </div>
                ))}
              </div>
            )}
            {section.days && (
              <div className="grid grid-cols-2 md:grid-cols-2 gap-2">
                {section.days.map((day: any, pidx: number) => (
                  <div key={pidx} className="flex justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="font-semibold">{day.korean}</span>
                    <span className="text-gray-600">{day.japanese}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
        <button
          onClick={() => setCurrentLessonIndex(Math.max(0, currentLessonIndex - 1))}
          disabled={currentLessonIndex === 0}
          className="px-6 py-2 bg-gray-200 text-gray-900 rounded-lg disabled:opacity-50 hover:bg-gray-300"
        >
          ← 前へ
        </button>
        <span className="text-gray-600">
          {currentLessonIndex + 1} / {lessonsData.lessons.length}
        </span>
        <button
          onClick={() => setCurrentLessonIndex(Math.min(lessonsData.lessons.length - 1, currentLessonIndex + 1))}
          disabled={currentLessonIndex === lessonsData.lessons.length - 1}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg disabled:opacity-50 hover:bg-blue-700"
        >
          次へ →
        </button>
      </div>
    </div>
  )
}
