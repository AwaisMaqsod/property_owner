import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-corent-primary text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-corent-tertiary rounded-lg flex items-center justify-center">
                <span className="text-corent-primary font-bold text-lg">C</span>
              </div>
              <span className="text-2xl font-bold">CoRent</span>
            </div>
            <p className="text-corent-quaternary leading-relaxed">
              Transforming property ownership into effortless passive income through professional management and
              guaranteed results.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-corent-quaternary">
              <li>
                <a href="#" className="hover:text-corent-tertiary transition-colors">
                  Property Management
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-corent-tertiary transition-colors">
                  Tenant Screening
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-corent-tertiary transition-colors">
                  Rent Collection
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-corent-tertiary transition-colors">
                  Maintenance
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2 text-corent-quaternary">
              <li>
                <a href="#" className="hover:text-corent-tertiary transition-colors">
                  Property Calculator
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-corent-tertiary transition-colors">
                  Market Reports
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-corent-tertiary transition-colors">
                  Owner Portal
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-corent-tertiary transition-colors">
                  Help Center
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-2 text-corent-quaternary">
              <li>1-800-CORENT-1</li>
              <li>hello@corent.com</li>
              <li>Available 24/7</li>
            </ul>
            <Button className="mt-4 bg-corent-tertiary text-corent-primary hover:bg-corent-quaternary">
              Get Started
            </Button>
          </div>
        </div>

        <div className="border-t border-corent-secondary pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-corent-quaternary text-sm">© 2025 CoRent. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-corent-quaternary hover:text-corent-tertiary text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-corent-quaternary hover:text-corent-tertiary text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-corent-quaternary hover:text-corent-tertiary text-sm transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
