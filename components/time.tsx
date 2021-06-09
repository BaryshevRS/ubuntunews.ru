import { parseISO, format } from 'date-fns'

interface IProps {
  dateTime: string
}

export default function Time({ dateTime }: IProps) {
  const date = parseISO(dateTime)
  return <time dateTime={dateTime}>
    {format(date, 'd.MM.yyyy')}
  </time>
}
