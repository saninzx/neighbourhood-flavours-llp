import { motion } from "framer-motion";
import { Smartphone, Users, ShieldCheck, BarChart3 } from "lucide-react";

const futureFeatures = [
  {
    icon: Users,
    title: "Janatha Plus Loyalty",
    description: "Customer rewards program designed to build lasting relationships and drive repeat purchases.",
    status: "Phase 2",
  },
  {
    icon: Smartphone,
    title: "Mobile Application",
    description: "Shop on-the-go with our upcoming mobile app featuring order tracking and exclusive deals.",
    status: "Planned",
  },
  {
    icon: ShieldCheck,
    title: "Admin Dashboard",
    description: "Comprehensive store management and analytics platform for operational excellence.",
    status: "Internal",
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    description: "Data-driven decision making with real-time business intelligence and reporting.",
    status: "Development",
  },
];

export function FutureReadySection() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
              Future Roadmap
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Built to Scale,{" "}
              <span className="text-gradient">Ready to Grow</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Our infrastructure is designed from the ground up to support rapid expansion. 
              These upcoming features will enhance customer experience, streamline operations, 
              and unlock new growth opportunities.
            </p>
            
            <div className="glass-card rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 rounded-full bg-success animate-pulse" />
                <span className="text-sm font-medium text-foreground">Currently Operational</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Physical stores, product sourcing, B2B partnerships, and logistics network 
                are fully operational and serving customers daily.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {futureFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="glass-card rounded-xl p-6 hover:border-primary/30 transition-all group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-xs font-medium px-2 py-1 rounded-full bg-muted text-muted-foreground">
                    {feature.status}
                  </span>
                </div>
                <h4 className="font-semibold text-foreground mb-2">{feature.title}</h4>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
