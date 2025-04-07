import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/ProtectedRoute')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/ProtectedRoute"!</div>
}
