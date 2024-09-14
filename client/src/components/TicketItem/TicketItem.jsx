
export default function TicketItem({ id, name, description, difficulty, status, gifUrl, createdAt, isNew }) {
  return (
    <div
      className={`bg-white shadow-md rounded-lg p-6 max-w-sm transform transition-all duration-500 ${
        isNew ? 'scale-100' : 'scale-95 hover:scale-105'
      }`}
    >
      <h2 className="text-xl font-bold mb-2">{name}</h2>
      <p className="text-gray-700 mb-4">{description}</p>
      <p className="text-sm text-gray-500">Difficulty: {difficulty}</p>
      <p className="text-sm text-gray-500">Status: {status}</p>
      <p className="text-sm text-gray-500">Created At: {new Date(createdAt).toLocaleString()}</p>
      {gifUrl && <img src={gifUrl} alt="Ticket GIF" className="mt-4 rounded-lg" />}
    </div>
  );
}
