'use client'

import type * as React from 'react'

import {
  Sidebar,
  SidebarContent,
  SidebarGroupLabel,
  SidebarRail,
} from '@/components/ui/sidebar'
import {
  IconBuildingStore,
  IconCategory,
  IconSettings,
  IconTicket,
} from '@tabler/icons-react'
import Image from 'next/image'
import { NavMain } from '../components/nav-main'

const navMain = [
  {
    title: 'Categorias',
    url: 'dashboard/categorias',
    icon: IconCategory,
    isActive: true,
  },
  {
    title: 'Markets',
    url: 'dashboard/markets',
    icon: IconBuildingStore,
  },
  {
    title: 'Cupons',
    url: 'dashboard/cupons',
    icon: IconTicket,
  },
  {
    title: 'Configurações',
    url: 'dashboard/#',
    icon: IconSettings,
  },
]

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarContent>
        <span className="flex w-full items-center justify-center p-2">
          <Image src="/images/logo.svg" width={48} height={48} alt="" />
        </span>
        <NavMain items={navMain} />
      </SidebarContent>

      <SidebarContent>
        <SidebarGroupLabel className="justify-center">
          Por Andrelino Silva
        </SidebarGroupLabel>
      </SidebarContent>

      <SidebarRail />
    </Sidebar>
  )
}
