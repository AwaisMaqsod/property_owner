import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, DollarSign, Users, BarChart3, Clock, Headphones } from "lucide-react"

const features = [
  {
    icon: DollarSign,
    title: "Guaranteed Rent Collection",
    description: "Get paid on time, every time. We guarantee your rent payments even if tenants are late.",
    color: "text-corent-tertiary",
  },
  {
    icon: Users,
    title: "Professional Tenant Screening",
    description: "Our rigorous screening process ensures you get reliable, qualified tenants.",
    color: "text-corent-secondary",
  },
  {
    icon: Shield,
    title: "Complete Insurance Coverage",
    description: "Full property protection including damage coverage and liability insurance.",
    color: "text-corent-tertiary",
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    description: "Track your property performance with detailed reports and market insights.",
    color: "text-corent-secondary",
  },
  {
    icon: Clock,
    title: "24/7 Maintenance Support",
    description: "Round-the-clock maintenance coordination to keep your property in top condition.",
    color: "text-corent-tertiary",
  },
  {
    icon: Headphones,
    title: "Dedicated Support Team",
    description: "Personal account manager and support team available whenever you need help.",
    color: "text-corent-secondary",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-20 px-6 bg-corent-quaternary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-corent-primary mb-4 text-balance">
            Everything You Need to Succeed as a Property Owner
          </h2>
          <p className="text-xl text-corent-secondary max-w-3xl mx-auto leading-relaxed">
            From tenant screening to rent collection, we handle every aspect of property management so you can focus on
            growing your investment portfolio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="pb-4">
                <div className={`w-12 h-12 rounded-lg bg-corent-quaternary flex items-center justify-center mb-4`}>
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <CardTitle className="text-xl text-corent-primary">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-corent-secondary leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
