import { Dialog, DialogPanel, DialogTitle, Description } from '@headlessui/react';


interface CustomModalProps {
  isOpen: boolean;
  onClose: () => void;
  location: {
    latitude: number;
    longitude: number;
  };
}

export function Modal({ isOpen, onClose, location }: CustomModalProps) {
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/25" aria-hidden="true" />

      <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
        <DialogPanel className="w-full max-w-md rounded-lg bg-white p-6 shadow-xl">
          <div className="flex justify-between items-center mb-4">
            <DialogTitle as="h3" className="text-lg font-medium text-gray-900">
              현재 위치 정보
            </DialogTitle>
            <button
              type="button"
              className="text-gray-400 hover:text-gray-500 focus:outline-none cursor-pointer"
              onClick={onClose}
            >
              <span className="text-xl">✕</span>
            </button>
          </div>

          <Description as="div" className="mt-2">
            <p className="text-sm text-gray-500 my-2">위도: {location.latitude}</p>
            <p className="text-sm text-gray-500 my-2">경도: {location.longitude}</p>
          </Description>

          <div className="mt-4 text-right">
            <button
              type="button"
              className="rounded-md bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 cursor-pointer"
              onClick={onClose}
            >
              닫기
            </button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
};