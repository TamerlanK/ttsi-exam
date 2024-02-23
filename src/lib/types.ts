export type AnswerType = {
  id: number
  text: string
  orderNo: number
}

export type QuestionType = {
  id: number
  text: string
  answers: AnswerType[]
}
