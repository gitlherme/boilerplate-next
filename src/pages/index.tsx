type Props = {
  title: string
}

export default function Home({ title = 'Guilherme' }: Props) {
  return <h1>Hello, {title}</h1>
}
