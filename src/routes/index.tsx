import { createFileRoute } from '@tanstack/react-router'
import ContentPane from '@/components/ContentPane'
import InputPane from '@/components/InputPane'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <>
      <ContentPane />
      <InputPane />
    </>
  )
}
