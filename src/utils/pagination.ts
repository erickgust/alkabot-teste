// @ts-nocheck

'use strict'

function centerItems ({ total, activePage }) {
  return activePage - 1 <= 0
    ? 1
    : activePage === total
      ? activePage - 2
      : activePage - 1
}

function isNumber (value) {
  return typeof value === 'number'
}

function pagination ({ total = 1, activePage = 1 } = {}) {
  if (!isNumber(total)) {
    throw new TypeError('"total" must be a number')
  }

  if (!isNumber(activePage)) {
    throw new TypeError('"activePage" must be a number')
  }

  if (total <= 5) {
    return Array.from({ length: total }, (item, index) => index + 1)
  }

  const visiblePages = 3
  let pages = [
    1,
    ...Array.from({ length: visiblePages }, (item, index) => index + centerItems({ activePage, total })),
    total,
  ].filter((page, index, array) => array.indexOf(page) === index)

  let firstPage = pages.at(0)
  let secondPage = pages.at(1)

  if (secondPage === firstPage + 2) {
    pages = [
      firstPage,
      firstPage + 1,
      ...pages.slice(1),
    ]
  }

  firstPage = pages.at(0)
  secondPage = pages.at(1)

  if (secondPage >= firstPage + 2) {
    pages = [
      firstPage,
      '...',
      ...pages.slice(1),
    ]
  }

  let penultimatePage = pages.at(-2)
  let lastPage = pages.at(-1)

  if (penultimatePage === lastPage - 2) {
    pages = [
      ...pages.slice(0, -1),
      lastPage - 1,
      lastPage,
    ]
  }

  penultimatePage = pages.at(-2)
  lastPage = pages.at(-1)

  if (penultimatePage <= lastPage - 2) {
    pages = [
      ...pages.slice(0, -1),
      '...',
      lastPage,
    ]
  }

  return pages
}

export default pagination
