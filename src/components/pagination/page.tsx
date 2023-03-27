import { MouseEvent } from 'react'

type PageProps = {
  page: string | number
  isActive?: boolean
  onClick: (page: number) => void
}

export function Page ({ page, isActive, onClick }: PageProps) {
  const Item = page === '...' ? 'span' : 'button'

  function handleClick (e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault()

    if (typeof page === 'string' || isActive) return

    onClick(page)
  }

  return (
    <Item onClick={handleClick} className='item'>
      {page}
    </Item>
  )
}
