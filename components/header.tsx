import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="bg-corent-primary text-white py-4 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-corent-tertiary rounded-lg flex items-center justify-center">
            <span className="text-corent-primary font-bold text-lg">C</span>
          </div>
          <span className="text-2xl font-bold">CoRent</span>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="hover:text-corent-tertiary transition-colors">
            Features
          </a>
          <a href="#pricing" className="hover:text-corent-tertiary transition-colors">
            Pricing
          </a>
          <a href="#support" className="hover:text-corent-tertiary transition-colors">
            Support
          </a>
          <Button
            variant="outline"
            className="border-corent-tertiary text-corent-tertiary hover:bg-corent-tertiary hover:text-corent-primary bg-transparent"
          >
            Sign In
          </Button>
        </nav>

        <Button className="md:hidden bg-corent-tertiary text-corent-primary hover:bg-corent-quaternary">Menu</Button>
      </div>
    </header>
  )
}
