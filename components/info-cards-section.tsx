import { Building2, TrendingUp, Clock, Shield } from "lucide-react";

export function InfoCardsSection() {
  const cards = [
    {
      icon: Building2,
      title: "Property Management Made Simple",
      description:
        "We handle tenant screening, rent collection, maintenance requests, and all the day-to-day management tasks so you can focus on growing your portfolio.",
    },
    {
      icon: TrendingUp,
      title: "Maximize Your Rental Income",
      description:
        "Our data-driven pricing strategies and market analysis ensure you're getting the highest possible rent for your property while maintaining high occupancy rates.",
    },
    {
      icon: Clock,
      title: "24/7 Support & Maintenance",
      description:
        "Round-the-clock support for both you and your tenants. Emergency maintenance requests are handled immediately to protect your investment.",
    },
    {
      icon: Shield,
      title: "Complete Legal Protection",
      description:
        "Full legal compliance, eviction protection, and comprehensive insurance coverage. We handle all legal aspects so you're always protected.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="container mx-auto px-4 py-12 lg:py-20">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-corent-primary mb-4">
            Why Property Owners Choose CoRent
          </h2>
          <p className="md:text-base text-sm text-corent-primary/70">
            Join thousands of successful property owners who trust CoRent to
            maximize their rental income while minimizing their workload.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg border border-corent-quaternary hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="bg-corent-tertiary/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <card.icon className="w-8 h-8 text-corent-secondary" />
              </div>
              <h3 className="md:text-lg text-base font-semibold text-corent-primary mb-4">
                {card.title}
              </h3>
              <p className="text-corent-primary/70 leading-relaxed md:text-base text-sm">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="flex md:flex-row flex-col items-center justify-center space-x-8 bg-corent-quaternary/30 rounded-2xl px-8 py-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-corent-secondary">
                $500M+
              </div>
              <div className="text-sm text-corent-primary/70">
                Assets under management
              </div>
            </div>
            <div className="w-px h-12 bg-corent-primary/20"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-corent-secondary">
                99.2%
              </div>
              <div className="text-sm text-corent-primary/70">
                Rent collection rate
              </div>
            </div>
            <div className="w-px h-12 bg-corent-primary/20"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-corent-secondary">
                4.9/5
              </div>
              <div className="text-sm text-corent-primary/70">
                Owner satisfaction rating
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
