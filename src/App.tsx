import { ThemeToggle } from "./components/ui/theme"

function App() {

  return (
    <div className="flex gap-4 p-4 flex-col bg-background text-foreground">
      <div className="fixed bottom-4 right-4">
        <ThemeToggle/>
      </div>
      TEST
    </div>
  )
}

export default App
