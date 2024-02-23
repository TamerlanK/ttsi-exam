import { useState } from "react"

interface SurveyQuestionTextAreaProps {
  questionText: string
  order: number
}

const SurveyQuestionTextArea = ({
  questionText,
  order,
}: SurveyQuestionTextAreaProps) => {
  const [answer, setAnswer] = useState("")
  return (
    <div className="w-full pr-4">
      <div className="flex items-center gap-x-1">
        <span className="text-neutral-600 mr-2 md:mr-0">{order}.</span>
        <h3 className="font-bold leading-tight">{questionText}</h3>
      </div>

      <textarea
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        rows={4}
        className="border border-gray-300 p-2 mt-2 rounded-md w-full focus:outline-none focus:border-gray-500"
        name="question_note"
      />
    </div>
  )
}

export default SurveyQuestionTextArea
