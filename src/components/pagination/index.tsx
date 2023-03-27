import pagination from '@/utils/pagination'
import { Page } from './page'
import * as S from './styles'

type PaginationProps = {
  activePage: number
  total: number
  onClick: (page: number) => void
}

export function Pagination ({ activePage, total, onClick }: PaginationProps) {
  return (
    <S.ListContainer>
      {pagination({ activePage, total }).map((page, index) => (
        <S.PageItem key={index} isActive={activePage === page}>
          <Page
            page={page}
            isActive={activePage === page}
            onClick={onClick}
          />
        </S.PageItem>
      ))}
    </S.ListContainer>
  )
}
