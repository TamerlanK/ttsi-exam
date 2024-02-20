import { useState } from "react"
import Notification from "../components/Notification"
import InfoWrapper from "../layouts/InfoWrapper"
import Button from "../components/Button"

const PreExamPage2 = () => {
  const [isAgreed, setIsAgreed] = useState(false)
  const handleChange = () => {
    setIsAgreed((prev) => !prev)
    console.log(isAgreed)
  }
  return (
    <div className="max-w-8xl mx-auto">
      <section className="px-4 pt-12 space-y-3 h-[calc(100vh-80px)]">
        <div className="flex flex-col h-full justify-between w-full gap-2">
          <div className="space-y-2 max-w-5xl mx-auto">
            <InfoWrapper title="Diqqət!!!">
              <div className="lg:w-1/2 w-3/4 p-4 lg:p-6 text-center text-primary mx-auto text-sm font-semibold leading-4 lg:leading-5">
                Test imtahanı zamanı Sizə təqdim edilən test tapşırıqları ilə
                bağlı hər hansı sualınız yaranarsa imtahan bitdikdən sonra
                Tədrisin Keyfiyyətinə Nəzarət şöbəsi ilə əlaqə saxlaya
                bilərsiniz. Sizə ayrılan vaxtdan səmərəli istifadə edin.
              </div>
            </InfoWrapper>
            <Notification variant="warning">
              Qeyd: Test imtahanı zamanı yaranan texniki (internetin itməsi,
              işığın sönməsi) problemlərə görə Tədrisin Keyfiyyətinə Nəzarət
              şöbəsi heç bir məsuliyyət daşımır və imtahan nəticəniz texniki
              problem yaranana qədər olan nəticəniz götürüləcək.
            </Notification>
          </div>
          <form className="w-full flex flex-col lg:flex-row justify-between items-center px-1 lg:px-4 mt-2 gap-4 py-3 lg:py-0">
            <div className="text-sm flex items-center gap-x-2 lg:gap-x-1">
              <input
                type="checkbox"
                id="canditate-agreement"
                checked={isAgreed}
                onChange={handleChange}
              />
              <label htmlFor="canditate-agreement">
                Yuxarıda göstərilən şərtləri qəbul edir və bu şərtlərdən
                ixtiyari birinə əməl etmədiyim təqdirdə imtahan nəticələrimin
                ləğv edilməsinə etiraz etmirəm.
              </label>
            </div>
            <Button
              disabled={!isAgreed}
              onClick={() => {}}
              className="text-sm px-6 w-full lg:w-auto"
            >
              Təsdiqlə
            </Button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default PreExamPage2
