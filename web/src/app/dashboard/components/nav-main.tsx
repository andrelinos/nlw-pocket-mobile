'use client'

import { Link } from '@/components/link'
import { Collapsible } from '@/components/ui/collapsible'
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'
import type { IconProps } from '@tabler/icons-react'

interface Props {
  items: {
    title: string
    url: string
    icon?: IconProps | any

    isActive?: boolean
  }[]
}

export function NavMain({ items }: Props) {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Menu</SidebarGroupLabel>
      <SidebarMenu>
        {items.map(item => (
          <Collapsible
            key={item.title}
            asChild
            defaultOpen={item.isActive}
            className="group/collapsible"
          >
            <Link
              href={item.url}
              variant="unstyled"
              className="justify-start p-0 text-brand-green-500"
            >
              <SidebarMenuItem>
                <SidebarMenuButton tooltip={item.title} className="">
                  {item.icon && <item.icon />}
                  <span>{item.title}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </Link>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}
