import { motion } from "framer-motion";
import { Store, Package, Handshake, Truck } from "lucide-react";

const ecosystemPillars = [
  {
    icon: Store,
    title: "Neighbourhood Supermarkets",
    description: "Strategically located retail stores offering fresh produce, groceries, and daily essentials with personalized service that builds lasting customer relationships.",
    features: ["Fresh Produce Daily", "Wide Product Range", "Competitive Pricing", "Convenient Locations"],
  },
  {
    icon: Package,
    title: "Private Label Products",
    description: "Our own line of quality-assured grocery and FMCG products, developed to offer superior value without compromising on quality standards.",
    features: ["Quality Assured", "Value Pricing", "Local Sourcing", "Coming Soon"],
    badge: "Launching Soon",
  },
  {
    icon: Handshake,
    title: "B2B Services",
    description: "Comprehensive supply chain solutions for other supermarkets and retail partners. Leverage our sourcing network and operational expertise.",
    features: ["Bulk Ordering", "Competitive Rates", "Reliable Supply", "Partnership Programs"],
  },
  {
    icon: Truck,
    title: "Logistics & Transport",
    description: "End-to-end logistics capabilities ensuring timely delivery across our network. Cold chain, warehousing, and last-mile delivery solutions.",
    features: ["Cold Chain Enabled", "Timely Delivery", "Pan-Regional Coverage", "Track & Trace"],
  },
];

export function EcosystemSection() {
  return (
    <section className="section-padding bg-card/50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
            Our Ecosystem
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Four Pillars of Growth
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A vertically integrated ecosystem designed for scale, reliability, and 
            community impact across the retail value chain.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {ecosystemPillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card rounded-2xl p-8 group hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <pillar.icon className="w-7 h-7 text-primary" />
                </div>
                {pillar.badge && (
                  <span className="px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full border border-accent/20">
                    {pillar.badge}
                  </span>
                )}
              </div>

              <h3 className="text-xl font-bold text-foreground mb-3">
                {pillar.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {pillar.description}
              </p>

              <div className="grid grid-cols-2 gap-3">
                {pillar.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
