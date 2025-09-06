import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  FileText, 
  CreditCard, 
  Clock, 
  Globe, 
  BarChart3, 
  Smartphone,
  Shield,
  Bell,
  Calculator
} from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: FileText,
      title: "Professional Templates",
      description: "Choose from dozens of customizable invoice templates that reflect your brand and impress clients.",
      badge: "Design"
    },
    {
      icon: CreditCard,
      title: "Instant Payments",
      description: "Accept credit cards, bank transfers, and digital payments with integrated payment processing.",
      badge: "Payments"
    },
    {
      icon: Clock,
      title: "Automated Reminders",
      description: "Never chase payments again with smart, automated follow-up reminders and overdue notifications.",
      badge: "Automation"
    },
    {
      icon: Globe,
      title: "Multi-Currency Billing",
      description: "Invoice international clients in their preferred currency with real-time exchange rates.",
      badge: "Global"
    },
    {
      icon: BarChart3,
      title: "Financial Insights",
      description: "Track cash flow, monitor payment trends, and generate detailed financial reports instantly.",
      badge: "Analytics"
    },
    {
      icon: Smartphone,
      title: "Mobile Invoice Management",
      description: "Create, send, and manage invoices on-the-go with our fully responsive mobile interface.",
      badge: "Mobile"
    },
    {
      icon: Shield,
      title: "Bank-Level Security",
      description: "Your financial data is protected with enterprise-grade encryption and security protocols.",
      badge: "Security"
    },
    {
      icon: Bell,
      title: "Real-Time Notifications",
      description: "Get instant alerts when invoices are viewed, paid, or overdue to stay on top of your finances.",
      badge: "Tracking"
    },
    {
      icon: Calculator,
      title: "Tax Compliance",
      description: "Automatically calculate taxes, generate tax reports, and stay compliant with local regulations.",
      badge: "Compliance"
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Powerful Features
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Everything Your Business Needs for
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Seamless Invoicing
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From invoice creation to payment collection, SwiftInvoice provides all the tools 
            small businesses need to manage their billing efficiently and professionally.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card 
                key={index} 
                className="group relative overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <CardHeader className="relative">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="size-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="relative">
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/20 transition-colors duration-300" />
              </Card>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Ready to streamline your invoicing process?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
              Try SwiftInvoice Free
            </button>
            <button className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-accent transition-colors">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}