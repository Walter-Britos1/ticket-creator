export default function Modal({ isOpen, closeModal, children }) {
  if (!isOpen) return null;

  return (
    <div
      id='modalBackground'
      className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 transition-opacity duration-300'
      onClick={closeModal}
    >
      <div
        className='bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative transform transition-all duration-300 ease-in-out opacity-100 scale-100'
        onClick={(event) => event.stopPropagation()} 
      >
        <button
          className='absolute top-2 right-2 text-gray-500 hover:text-gray-700'
          onClick={closeModal}
          aria-label='Close Modal'
        >
          X
        </button>
        {children}
      </div>
    </div>
  );
}
