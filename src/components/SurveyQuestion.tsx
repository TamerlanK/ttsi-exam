import { useCallback, useState } from "react"
import AnswerOption from "./AnswerOption"

import { QuestionType } from "../lib/types"

interface SurveyQuestionProps {
  question: QuestionType
  order: number
  onAnswer: () => void
}

const SurveyQuestion = ({ question, order, onAnswer }: SurveyQuestionProps) => {
  const [selectedAnswerId, setSelectedAnswerId] = useState<number | null>(null)

  const handleAnswerSelection = useCallback(
    (answerId: number) => {
      setSelectedAnswerId(answerId)
      onAnswer()
    },
    [onAnswer]
  )

  return (
    <div className="w-full">
      <div className="flex items-center gap-x-1">
        <span className="text-neutral-600 mr-1 md:mr-0">{order}.</span>
        <h3 className="font-bold leading-tight">
          {question.text} <span className="text-red-600">*</span>
        </h3>
      </div>

      <div className="flex flex-col md:flex-row md:items-center gap-x-2">
        {question.answers.map((answer) => (
          <AnswerOption
            key={answer.id}
            answer={answer}
            selectedAnswerId={selectedAnswerId}
            handleAnswerSelection={handleAnswerSelection}
            question={question}
          />
        ))}
      </div>
    </div>
  )
}

export default SurveyQuestion
