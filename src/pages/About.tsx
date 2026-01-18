import { motion } from "framer-motion";
import { Target, Eye, Shield, TrendingUp, Store, Package, Handshake, Truck, CheckCircle } from "lucide-react";
import { Layout } from "@/components/layout/Layout";

const values = [
  {
    icon: Shield,
    title: "Trust & Quality",
    description: "Every product meets our quality standards. Every interaction builds lasting trust.",
  },
  {
    icon: Target,
    title: "Customer Focus",
    description: "Understanding and serving the unique needs of each neighbourhood we operate in.",
  },
  {
    icon: TrendingUp,
    title: "Sustainable Growth",
    description: "Building for the long term with scalable systems and responsible practices.",
  },
];

const ecosystemDetails = [
  {
    icon: Store,
    title: "Neighbourhood Supermarkets",
    description: "Our retail stores are the foundation of our ecosystem. Each store is strategically located to serve its neighbourhood with fresh produce, groceries, and daily essentials. We focus on personalized service and community integration.",
    highlights: ["Multiple locations across the city", "Fresh produce daily", "Wide product range", "Trained staff"],
  },
  {
    icon: Package,
    title: "Private Label Products",
    description: "We're developing our own line of quality-assured grocery and FMCG products. Our private labels will offer superior value without compromising on quality, with a focus on local sourcing where possible.",
    highlights: ["Quality-first approach", "Competitive pricing", "Local sourcing", "Launching soon"],
  },
  {
    icon: Handshake,
    title: "B2B Services",
    description: "Leveraging our sourcing network and operational expertise, we offer comprehensive supply chain solutions for other supermarkets and retail partners. From bulk ordering to partnership programs.",
    highlights: ["Bulk ordering capabilities", "Competitive wholesale rates", "Reliable supply chain", "Partnership programs"],
  },
  {
    icon: Truck,
    title: "Logistics & Transport",
    description: "Our logistics arm ensures timely delivery across our network. From cold chain capabilities to last-mile delivery, we have the infrastructure to move products efficiently and reliably.",
    highlights: ["Cold chain enabled", "Pan-regional coverage", "Timely delivery", "Track and trace systems"],
  },
];

const milestones = [
  { year: "2020", event: "Company Founded", description: "Neighbourhood Flavours LLP established with a vision to serve local communities." },
  { year: "2021", event: "First Store Launch", description: "Opened our flagship store in Jayanagar, Bangalore." },
  { year: "2022", event: "Expansion Phase", description: "Expanded to 3 additional locations across Bangalore." },
  { year: "2023", event: "B2B Launch", description: "Launched B2B services for partner supermarkets." },
  { year: "2024", event: "Logistics Network", description: "Established dedicated logistics and transport capabilities." },
  { year: "2025", event: "Phase 2 Prep", description: "Preparing for digital expansion and loyalty program launch." },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(var(--primary)/0.1),_transparent_60%)]" />
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Building a Trusted{" "}
              <span className="text-gradient">Supermarket Ecosystem</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Neighbourhood Flavours LLP is more than a supermarket chain — we're building 
              an integrated ecosystem that serves communities, supports local businesses, 
              and creates value at every step of the retail supply chain.
            </p>
          </motion.div>

          {/* Vision & Mission */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card rounded-2xl p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Eye className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">Our Vision</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To be the most trusted supermarket ecosystem in every neighbourhood we serve — 
                known for quality products, reliable service, and genuine community impact. 
                We envision a network that empowers local businesses, provides livelihood 
                opportunities, and makes quality groceries accessible to all.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass-card rounded-2xl p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">Our Mission</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To deliver exceptional value through quality products, operational excellence, 
                and customer-centric service. We're committed to building sustainable supply 
                chains, supporting local vendors, and continuously innovating to meet the 
                evolving needs of our customers and partners.
              </p>
            </motion.div>
          </div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
              Our Core Values
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-card rounded-xl p-8 text-center hover:border-primary/30 transition-all group"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                    <value.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Ecosystem Deep Dive */}
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
              The Ecosystem
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Four Integrated Verticals
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Each vertical strengthens the others, creating a resilient and 
              scalable business model.
            </p>
          </motion.div>

          <div className="space-y-8">
            {ecosystemDetails.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card rounded-2xl p-8 md:p-10"
              >
                <div className="grid md:grid-cols-3 gap-8 items-start">
                  <div className="md:col-span-2">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-4">Key Highlights</h4>
                    <ul className="space-y-2">
                      {item.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
              Our Journey
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Milestones & Growth
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex gap-6 mb-8 last:mb-0"
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                    {milestone.year.slice(2)}
                  </div>
                  {index < milestones.length - 1 && (
                    <div className="w-px h-full bg-border mt-2" />
                  )}
                </div>
                <div className="glass-card rounded-xl p-6 flex-1">
                  <p className="text-sm text-primary font-medium mb-1">{milestone.year}</p>
                  <h4 className="font-bold text-foreground mb-2">{milestone.event}</h4>
                  <p className="text-sm text-muted-foreground">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-card/50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-elevated rounded-3xl p-10 md:p-16 text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Interested in Partnering with Us?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Whether you're a vendor, investor, or potential partner, we'd love to 
              explore how we can work together. Reach out to discuss opportunities.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="mailto:partnerships@neighbourhoodflavours.com"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary-hover transition-colors"
              >
                Contact for Partnerships
              </a>
              <a
                href="mailto:info@neighbourhoodflavours.com"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl border-2 border-primary/50 text-foreground font-semibold hover:border-primary hover:text-primary transition-colors"
              >
                General Inquiries
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
