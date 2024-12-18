import { Button } from '@/components/ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import { Label } from '@/components/ui/label'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { cn } from '@/lib/utils'
import * as TablerIcons from '@tabler/icons-react'
import { Check, ChevronsUpDown } from 'lucide-react'
import type React from 'react'
import { useEffect, useState } from 'react'

type IconKeys = keyof typeof TablerIcons

export function IconSelect() {
  const [iconOptions, setIconOptions] = useState<IconKeys[]>([])
  const [selectedIcon, setSelectedIcon] = useState<IconKeys | ''>('')
  const [open, setOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [loadingIcon, setLoadingIcon] = useState(false)

  useEffect(() => {
    const loadIcons = async () => {
      setIsLoading(true)
      const options = Object.keys(TablerIcons).filter(iconName =>
        iconName.startsWith('Icon')
      ) as IconKeys[]
      setIconOptions(options)
      setIsLoading(false)
    }
    loadIcons()
  }, [])

  const renderIcon = () => {
    try {
      const IconComponent = selectedIcon
        ? (TablerIcons[selectedIcon] as React.ElementType)
        : null
      if (IconComponent) {
        return <IconComponent size={24} />
      }
      return null
    } catch (error) {
      console.error('Error rendering icon:', error)
      return null
    }
  }

  // const iconOptions = Object.keys(TablerIcons).filter(iconName =>
  //   iconName.startsWith('Icon')
  // )

  return (
    <div className="flex w-full items-center gap-6">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Label className="flex flex-1 flex-col gap-1">
            <div className="flex gap-4">
              Ícone{' '}
              {isLoading && (
                <span className="font-normal text-xs">Carregando...</span>
              )}
            </div>
            <Button
              type="button"
              variant="outline"
              // biome-ignore lint/a11y/useSemanticElements: <explanation>
              role="combobox"
              aria-expanded={open}
              className=" justify-between"
            >
              {selectedIcon
                ? iconOptions.find(iconName => iconName === selectedIcon)
                : 'Selecione um ícone...'}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </Label>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <Command>
            <CommandInput placeholder="Pesquisar ícone..." />
            <CommandList>
              <CommandEmpty>No icon found.</CommandEmpty>
              <CommandGroup>
                {iconOptions.map((iconName, i) => (
                  <CommandItem
                    key={iconName}
                    value={iconName}
                    onSelect={currentValue => {
                      setSelectedIcon(
                        currentValue === selectedIcon
                          ? ''
                          : (currentValue as IconKeys)
                      )
                      setOpen(false)
                    }}
                  >
                    <Check
                      className={cn(
                        'mr-2 h-4 w-4',
                        selectedIcon === iconName ? 'opacity-100' : 'opacity-0'
                      )}
                    />
                    {iconName}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
      <div className="flex size-16 items-center justify-center rounded-lg border">
        {renderIcon()}
      </div>
    </div>
  )
}
