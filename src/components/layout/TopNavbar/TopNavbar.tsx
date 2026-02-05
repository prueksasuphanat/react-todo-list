import { Search, Bell, Menu } from 'lucide-react'

function TopNavbar() {
  const today = new Date()
  const dayName = today.toLocaleDateString('en-US', { weekday: 'long' })
  const dateString = today.toLocaleDateString('en-US', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  })

  return (
    <div className="bg-[#F8F8F8] flex items-center justify-between gap-4 px-4 py-4 sm:px-6 md:px-12 lg:px-16 xl:px-[72px] sm:py-6 md:pt-[37px] md:pb-[24px]">
      <div className="flex items-center">
        <h1 className="text-xl font-bold sm:text-2xl md:text-[32px]">
          <span className="text-primary">Dash</span>
          <span className="text-gray-900">board</span>
        </h1>
      </div>

      <div className="relative hidden flex-1 max-w-md md:block">
        <input
          type="text"
          placeholder="Search your task here..."
          className="w-full rounded-lg border border-[#E5E7EB] py-2 pl-4 pr-10 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
        />
        <button className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-md bg-primary text-white hover:bg-primary-600">
          <Search size={16} />
        </button>
      </div>

      <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
        <button className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white hover:bg-primary-600 md:hidden">
          <Search size={20} />
        </button>

        <button className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white hover:bg-primary-600">
          <Bell size={20} />
        </button>

        <button className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white hover:bg-primary-600">
          <Menu size={20} />
        </button>

        <div className="hidden text-right sm:block">
          <div className="text-sm font-semibold text-gray-900 md:text-base">
            {dayName}
          </div>
          <div className="text-xs text-gray-500 md:text-sm">{dateString}</div>
        </div>
      </div>
    </div>
  )
}

export { TopNavbar }
