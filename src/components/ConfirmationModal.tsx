import React from "react"

interface ConfirmationModalProps {
  handleCancel: () => void
  handleConfirmClose: () => void
}

const ConfirmationModal = ({
  handleCancel,
  handleConfirmClose,
}: ConfirmationModalProps) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full mx-4">
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-2">
            Sorğunu bağlamaq istədiyinizə əminsiniz?
          </h2>
          <p className="text-neutral-600 mb-4">Cavablarınız itəcək.</p>
          <div className="flex justify-end">
            <button
              className="px-4 py-2 border-2 hover:border-gray-300 font-semibold rounded-md mr-2 transition-colors sm:w-auto"
              onClick={handleCancel}
            >
              Ləğv et
            </button>
            <button
              className="px-4 py-2 bg-primary hover:bg-primary/90 text-white rounded-md transition-colors sm:w-auto"
              onClick={handleConfirmClose}
            >
              Bəli
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConfirmationModal
