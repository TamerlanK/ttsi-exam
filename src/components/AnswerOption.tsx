type AnswerType = {
  id: number
  text: string
  orderNo: number
}

type QuestionType = {
  id: number
  text: string
  answers: AnswerType[]
}

interface AnswerOptionProps {
  answer: AnswerType
  selectedAnswerId: number | null
  handleAnswerSelection: (answerId: number) => void
  question: QuestionType
}

const AnswerOption = ({
  answer,
  question,
  handleAnswerSelection,
}: AnswerOptionProps) => {
  return (
    <div className="text-neutral-600 flex items-center gap-x-1" key={answer.id}>
      <label className="flex items-center gap-x-1">
        <input
          type="radio"
          className="size-3"
          value={answer.orderNo}
          onChange={() => handleAnswerSelection(answer.id)}
          name={`question[${question.id}]`}
        />
        <p>{answer.text}</p>
      </label>
    </div>
  )
}

export default AnswerOption
