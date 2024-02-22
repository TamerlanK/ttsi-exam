import React, { useCallback, useEffect, useRef, useState } from "react"
import { useOnClickOutside } from "usehooks-ts"
import surveyData from "../data/survey_fake_date.json"
import SurveyQuestion from "./SurveyQuestion"
import { X } from "lucide-react"
import toast from "react-hot-toast"
import Toast from "./Toast"
import SurveyQuestionTextArea from "./SurveyQuestionTextArea"

interface SurveyModalProps {
  isOpen: boolean
  onClose: () => void
}

const SurveyModal: React.FC<SurveyModalProps> = ({ isOpen, onClose }) => {
  const { surveyQuestions } = surveyData.result
  const [answeredQuestions, setAnsweredQuestions] = useState(
    Array(surveyQuestions.length).fill(false)
  )

  console.log(answeredQuestions.filter((answered) => answered).length)

  const modalRef = useRef<HTMLDivElement>(null)
  useOnClickOutside(modalRef, onClose)

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

  const notify = (message: string) =>
    toast.custom(<Toast message={message} />, {
      duration: 3000,
    })

  const handleConfirm = () => {
    if (!allQuestionsAnswered) {
      notify("Bütün sualları cavablandırın.")
    } else {
      onClose()
    }
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
            ref={modalRef}
          >
            <div className="w-full space-y-4 h-full flex flex-col">
              {/* HEADER */}
              <div className="w-full flex items-center justify-between p-4 pb-0">
                <h2 className="text-2xl font-semibold">Anonim rəy sorğusu</h2>
                <button onClick={onClose} className="cursor-pointer">
                  <X className="size-4 text-neutral-600" />
                </button>
              </div>

              {/* QUESTIONS */}
              <div className="custom-scrollbar | overflow-y-scroll space-y-2 ml-4 pr-4 md:px-0">
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
                  onClick={handleConfirm}
                >
                  Təsdiq et
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default SurveyModal
