import dayjs from 'dayjs'

export const toFormattedDate = (date: any) => {
  return dayjs(date).format('YYYY/MM/DD')
}

export const toTag = (tag: string) => {
  return '#' + tag
}

export const toNewestContentList = (list: any) => {
  return list.sort((a, b) => {
    return dayjs(b.date).valueOf() - dayjs(a.date).valueOf()
  })
}
