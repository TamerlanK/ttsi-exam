import { useNavigate } from "react-router-dom"
import Notification from "../components/Notification"
import { examData } from "../data/exam"
import InfoWrapper from "../layouts/InfoWrapper"
import Button from "../components/Button"

const PreExamPage = () => {
  const navigate = useNavigate()

  const handleBackClick = () => navigate(-1)
  const handleNextClick = () => navigate("/pre-exam")

  return (
    <div className="relative h-[calc(100vh-80px)] max-w-7xl mx-auto space-y-3 pt-2 px-4 lg:px-0">
      <div className="h-full w-full flex flex-col justify-between">
        <div className="space-y-2">
          <InfoWrapper title="Vətəndaş haqqında məlumat">
            <div className="w-3/4 lg:w-1/2 mx-auto my-4 text-xs">
              <div className="flex gap-1 py-2 border-b border-gray-300">
                <h2 className="font-bold">Soyad, Ad, Ata adı:</h2>
                <p>Məmmədov Şamo Əsədağa</p>
              </div>
              <div className="border-b border-gray-300 py-2 ">
                <label htmlFor="examList" className="font-bold">
                  İmtahanı seç
                </label>
                <select
                  className="w-full border border-gray-300 rounded-sm p-1 mt-1"
                  id="examList"
                >
                  <option value="">İmtahan Seç</option>
                  <option value="exam1">
                    Mühafizəçi (SOS MMC) ixtisasartırma
                  </option>
                </select>
              </div>
              {examData.map((item, idx) => (
                <div
                  key={idx}
                  className="flex gap-1 py-2 border-b border-gray-300 last-of-type:border-none"
                >
                  <h2 className="font-bold">{item.title}:</h2>
                  <p>{item.value}</p>
                </div>
              ))}
            </div>
          </InfoWrapper>
          <Notification variant="info">
            Əgər sizin haqqınızda göstərilən məlumatlar düzgündürsə, o zaman{" "}
            <strong>Başla</strong> düyməsini vurun.
          </Notification>
          <Notification variant="warning">
            Əgər məlumatlarınız düz deyilsə, o zaman nəticələriniz sayılmayacaq.
            Zəhmət olmasa <strong>Geri</strong> düyməsini vurmaqla yenidən FİN
            kodunuzu daxil edin.
          </Notification>
        </div>
        <div className="flex w-full justify-between items-center mt-2 py-3">
          <Button className="text-sm" onClick={handleBackClick}>
            Geri
          </Button>
          <Button className="text-sm" onClick={handleNextClick}>
            Başla
          </Button>
        </div>
      </div>
    </div>
  )
}

export default PreExamPage
