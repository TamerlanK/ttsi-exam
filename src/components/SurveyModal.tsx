import { X } from "lucide-react"
import React, { useCallback, useEffect, useState } from "react"
import surveyData from "../data/survey_fake_date.json"
import SurveyQuestion from "./SurveyQuestion"
import SurveyQuestionTextArea from "./SurveyQuestionTextArea"
import toast from "react-hot-toast"
import Toast from "./Toast"
import ConfirmationModal from "./ConfirmationModal"

interface SurveyModalProps {
  isOpen: boolean
  onClose: () => void
}

type FormDataType = {
  [key: number]: string
  question_note: string
}

const SurveyModal: React.FC<SurveyModalProps> = ({ isOpen, onClose }) => {
  const { surveyQuestions } = surveyData.result
  const [answeredQuestions, setAnsweredQuestions] = useState(
    Array(surveyQuestions.length).fill(false)
  )

  const [showConfirmationModal, setShowConfirmationModal] = useState(false)

  const handleCancel = () => {
    setShowConfirmationModal(false)
  }

  const handleConfirmClose = () => {
    setShowConfirmationModal(false)
    onClose()
  }

  const handleAnswerQuestion = useCallback((questionIndex: number) => {
    setAnsweredQuestions((prevAnswers) =>
      prevAnswers.map((answer, idx) => (idx === questionIndex ? true : answer))
    )
  }, [])

  const answeredQuestionsCount = answeredQuestions.filter(
    (answered) => answered
  ).length

  const allQuestionsAnswered = answeredQuestionsCount === surveyQuestions.length

  const answeredQuestionsText = allQuestionsAnswered
    ? "Bütün suallar cavablandırılıb."
    : `${answeredQuestionsCount}/${surveyQuestions.length} sual cavablandırılıb.`

  const notify = (message: string) => {
    toast.custom(<Toast message={message} />, {
      duration: 3000,
    })
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (allQuestionsAnswered) {
      notify("Bütün sualları cavablandırın.")
      return
    }

    const formData = new FormData(event.currentTarget)

    const object: FormDataType = { question_note: "" }

    formData.forEach((value, key) => {
      const match = key.match(/\[(\d+)\]/)
      if (match) {
        const questionIndex = parseInt(match[1])
        if (key.includes("question_note")) {
          object.question_note = value as string
        } else {
          object[questionIndex] = value as string
        }
      }
    })

    console.log(object)
  }

  useEffect(() => {
    if (!isOpen) {
      setAnsweredQuestions(Array(surveyQuestions.length).fill(false))
    }
  }, [isOpen, surveyQuestions])

  return (
    <>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex justify-center items-center px-4">
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white max-w-6xl mx-auto w-full rounded-md h-[calc(100vh-80px)] relative"
          >
            <div className="w-full space-y-4 h-full flex flex-col">
              {/* HEADER */}
              <div className="w-full flex items-center justify-between p-4 pb-0">
                <h2 className="text-2xl font-semibold">Anonim rəy sorğusu</h2>
                <button
                  onClick={() => setShowConfirmationModal(true)}
                  className="cursor-pointer"
                >
                  <X className="size-4 text-neutral-600" />
                </button>
              </div>

              {/* QUESTIONS */}
              <div className="custom-scrollbar | overflow-y-scroll space-y-2 ml-4 pr-4 md:px-0">
                <form
                  action="#"
                  method="post"
                  id="survey_form"
                  onSubmit={handleSubmit}
                >
                  {surveyQuestions.map((question, idx) => (
                    <SurveyQuestion
                      key={question.id}
                      question={question}
                      order={idx + 1}
                      onAnswer={() => handleAnswerQuestion(idx)}
                    />
                  ))}
                  <SurveyQuestionTextArea
                    order={surveyQuestions.length + 1}
                    questionText="Təklif və iradınız varsa qeyd edə bilərsiniz."
                  />
                </form>
              </div>

              {/* FOOTER */}
              <div className="flex justify-between items-center p-4 pt-0">
                <div
                  className={`${
                    allQuestionsAnswered
                      ? "text-emerald-600"
                      : "text-neutral-600"
                  }`}
                >
                  {answeredQuestionsText}
                </div>
                <button
                  className="py-1.5 px-4 bg-emerald-700 text-sm rounded-[4px] text-white w-fit float-right"
                  type="submit"
                  form="survey_form"
                >
                  Təsdiq et
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {showConfirmationModal && (
        <ConfirmationModal
          handleCancel={handleCancel}
          handleConfirmClose={handleConfirmClose}
        />
      )}
    </>
  )
}

export default SurveyModal
