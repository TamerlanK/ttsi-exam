import React, { useState, useCallback } from "react"

type AnswerType = {
  id: number
  text: string
}

interface SurveyQuestionProps {
  question: {
    id: number
    text: string
    answers: AnswerType[]
  }
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
          />
        ))}
      </div>
    </div>
  )
}

interface AnswerOptionProps {
  answer: AnswerType
  selectedAnswerId: number | null
  handleAnswerSelection: (answerId: number) => void
}

const AnswerOption = ({
  answer,
  selectedAnswerId,
  handleAnswerSelection,
}: AnswerOptionProps) => {
  return (
    <div className="text-neutral-600 flex items-center gap-x-1" key={answer.id}>
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
  )
}

export default SurveyQuestion
