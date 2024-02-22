import { useState } from "react"

type SurveyQuestionType = {
  id: number
  text: string
  isSocarQuestion: boolean
  answers: {
    id: number
    orderNo: number
    text: string
    isSocarAnswer: boolean
  }[]
}

interface SurveyQuestionProps {
  question: SurveyQuestionType
  order: number
  onAnswer: () => void
}

const SurveyQuestion = ({ question, order, onAnswer }: SurveyQuestionProps) => {
  const [selectedAnswerId, setSelectedAnswerId] = useState<number | null>(null)
  const handleAnswerSelection = (answerId: number) => {
    setSelectedAnswerId(answerId)
    onAnswer()
  }

  return (
    <div className="w-full">
      <div className="flex items-center gap-x-1">
        <span className="text-neutral-600 mr-2 md:mr-0">{order}.</span>
        <h3 className="font-bold leading-tight">{question.text}</h3>
      </div>
      <div className="flex flex-col md:flex-row md:items-center gap-x-2">
        {question.answers.map((answer) => (
          <div
            key={answer.id}
            className="text-neutral-600 flex items-center gap-x-1"
          >
            <label className="flex items-center gap-x-1">
              <input
                type="radio"
                className="size-3"
                checked={selectedAnswerId === answer.id}
                onChange={() => handleAnswerSelection(answer.id)}
              />
              <p>{answer.text}</p>
            </label>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SurveyQuestion
