interface IProps {
  url: string
}

export default function Source({ url }: IProps) {
  const { hostname } = new URL(url);
  return <p>
    Источник: <a rel="noopener noreferrer" target="_blank" href={url}>{hostname}</a>
  </p>
}
