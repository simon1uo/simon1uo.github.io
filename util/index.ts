import dayjs from 'dayjs'

export const toFormattedDate = (date: any) => {
  return dayjs(date).format('YYYY/MM/DD')
}

export const toTag = (tag: string) => {
  return '#' + tag
}
