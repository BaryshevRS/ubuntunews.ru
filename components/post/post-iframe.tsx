export interface IProps {
  children: React.ReactChild
  href: string;
}

export default function PostIframe(value: any) {
  console.error('PostIframe', value)
  return <iframe width={680} src={value.src} frameBorder="0"
                       allowFullScreen/>
}
