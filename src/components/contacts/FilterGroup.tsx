import { Checkbox } from '@/components/ui/Checkbox'

interface FilterGroupProps<T extends string> {
  title: string
  options: T[]
  selected: T[]
  onChange: (selected: T[]) => void
}

export function FilterGroup<T extends string>({
  title,
  options,
  selected,
  onChange,
}: FilterGroupProps<T>) {
  const handleToggle = (option: T) => {
    if (selected.includes(option)) {
      onChange(selected.filter((item) => item !== option))
    } else {
      onChange([...selected, option])
    }
  }

  return (
    <div className="flex flex-col space-y-4">
      <h3 className="text-sidebar-section font-medium text-text-primary tracking-tight">
        {title}
      </h3>
      <div className="flex flex-col space-y-3.5 pl-0.5">
        {options.map((option) => {
          const id = `filter-${title.toLowerCase().replace(/\s+/g, '-')}-${option.toLowerCase().replace(/\s+/g, '-')}`
          const isChecked = selected.includes(option)

          return (
            <label
              key={option}
              htmlFor={id}
              className="flex items-center gap-3.5 cursor-pointer select-none group"
            >
              <Checkbox
                id={id}
                checked={isChecked}
                onCheckedChange={() => handleToggle(option)}
              />
              <span className="text-sidebar-label text-text-primary group-hover:text-gold transition-colors font-normal">
                {option}
              </span>
            </label>
          )
        })}
      </div>
    </div>
  )
}
