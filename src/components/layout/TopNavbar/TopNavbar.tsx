import { useState } from 'react'
import { Search, Bell, Menu } from 'lucide-react'
import dayjs from 'dayjs'
import { CommonInput } from '@/components/common/Input'
import { SearchOutlined } from '@ant-design/icons'

function TopNavbar() {
  const today = dayjs()
  const dayName = today.format('dddd')
  const dateString = today.format('DD/MM/YYYY')

  const [val, setVal] = useState('')

  return (
    <div className="bg-[#F8F8F8] flex items-center justify-between gap-4 px-4 py-4 sm:px-6 md:px-12 lg:px-16 xl:px-[72px] sm:py-6 md:pt-[37px] md:pb-[24px]">
      <div className="flex items-center">
        <h1 className="text-xl font-bold sm:text-2xl md:text-[32px]">
          <span className="text-primary">Dash</span>
          <span className="text-gray-900">board</span>
        </h1>
      </div>

      <div className="relative hidden flex-1 max-w-md md:block">
        <CommonInput
          value={val}
          onChange={setVal}
          enterButton={{
            icon: <SearchOutlined />,
          }}
        />
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
