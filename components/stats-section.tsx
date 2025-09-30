import { TrendingUp, Home, Star, DollarSign } from "lucide-react"

const stats = [
  {
    icon: Home,
    value: "15,000+",
    label: "Properties Managed",
    description: "Across 50+ cities nationwide",
  },
  {
    icon: DollarSign,
    value: "$2.5M+",
    label: "Monthly Rent Collected",
    description: "Consistent income for owners",
  },
  {
    icon: Star,
    value: "98%",
    label: "Owner Satisfaction",
    description: "Based on verified reviews",
  },
  {
    icon: TrendingUp,
    value: "23%",
    label: "Average ROI Increase",
    description: "Compared to self-management",
  },
]

export function StatsSection() {
  return (
    <section className="py-20 px-6 bg-corent-primary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 text-balance">Trusted by Property Owners Nationwide</h2>
          <p className="text-xl text-corent-quaternary max-w-2xl mx-auto leading-relaxed">
            Join thousands of successful property owners who have transformed their investments into reliable passive
            income streams.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-corent-tertiary rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-corent-primary" />
              </div>
              <div className="text-4xl font-bold text-corent-tertiary mb-2">{stat.value}</div>
              <div className="text-xl font-semibold text-white mb-2">{stat.label}</div>
              <div className="text-corent-quaternary">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
