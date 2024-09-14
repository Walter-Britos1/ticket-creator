import TicketList from '@/components/TicketList/TicketList'

export default function HomePage() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Tickets Creator</h1>
      <TicketList />
    </div>
  )
}
