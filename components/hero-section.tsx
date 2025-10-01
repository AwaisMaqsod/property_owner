import { SignupForm } from "@/components/signup-form";
import { CheckCircle, DollarSign, Shield, Star, Users } from "lucide-react";
import Image from "next/image";
import { Badge } from "./ui/badge";

export function HeroSection() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-quaternary/40 to-quaternary  ">
      <div className="container mx-auto max-w-6xl px-4 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <Image
                src="/logo.png"
                alt="logo"
                width={200}
                height={150}
                className="md:w-[200px] w-[150px] "
              />
            </div>
            <div className="space-y-6">
              <Badge className="bg-accent/20 text-primary border-accent/30 px-4 py-2">
                <Star className="w-4 h-4 mr-2 text-primary" />
                {"All-in-One Platform"}
              </Badge>
              <h1 className="text-xl lg:text-5xl font-bold leading-tight text-balance text-corent-primary">
                Turn Your Property Into a Passive Income Machine
              </h1>
              <p className="md:text-base text-sm text-corent-primary/70 leading-relaxed">
                Join thousands of property owners who earn consistent rental
                income with CoRent's comprehensive property management platform.
                We handle everything so you don't have to.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-corent-secondary flex-shrink-0" />
                <span className="text-corent-primary/80">Zero setup fees</span>
              </div>
              <div className="flex items-center space-x-3">
                <DollarSign className="w-6 h-6 text-corent-secondary flex-shrink-0" />
                <span className="text-corent-primary/80">
                  Guaranteed rent payments
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Shield className="w-6 h-6 text-corent-secondary flex-shrink-0" />
                <span className="text-corent-primary/80">
                  Full insurance coverage
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="w-6 h-6 text-corent-secondary flex-shrink-0" />
                <span className="text-corent-primary/80">
                  Tenant screening included
                </span>
              </div>
            </div>

            <div className="pt-8">
              <div className="flex items-center justify-center lg:justify-start space-x-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-corent-secondary">
                    15,000+
                  </div>
                  <div className="md:text-sm text-xs text-corent-primary/70">
                    Properties managed
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-corent-secondary">
                    98%
                  </div>
                  <div className="md:text-sm text-xs text-corent-primary/70">
                    Owner satisfaction
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-corent-secondary">
                    $2.5M+
                  </div>
                  <div className="md:text-sm text-xs text-corent-primary/70">
                    Monthly rent collected
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="">
            <SignupForm />
          </div>
        </div>
      </div>
    </section>
  );
}
