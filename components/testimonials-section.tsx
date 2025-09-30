import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "Austin, TX",
    property: "3-bedroom single family home",
    quote:
      "CoRent transformed my property from a headache into a hands-off investment. I've earned 40% more than when I managed it myself.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    location: "Denver, CO",
    property: "2-unit duplex",
    quote:
      "The tenant screening process is incredible. I haven't had a single late payment in 18 months since switching to CoRent.",
    rating: 5,
  },
  {
    name: "Lisa Rodriguez",
    location: "Phoenix, AZ",
    property: "Luxury condo",
    quote:
      "Their maintenance team is so responsive. My tenants are happy, and my property value has actually increased since joining.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-corent-primary mb-4 text-balance">What Property Owners Are Saying</h2>
          <p className="text-xl text-corent-secondary max-w-2xl mx-auto leading-relaxed">
            Real stories from real property owners who have transformed their investments with CoRent.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-corent-quaternary border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <blockquote className="text-corent-primary mb-6 leading-relaxed">"{testimonial.quote}"</blockquote>

                <div className="border-t border-corent-tertiary pt-4">
                  <div className="font-semibold text-corent-primary">{testimonial.name}</div>
                  <div className="text-corent-secondary text-sm">{testimonial.location}</div>
                  <div className="text-corent-secondary text-sm">{testimonial.property}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
