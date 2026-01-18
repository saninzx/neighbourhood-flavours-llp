import { motion } from "framer-motion";
import { Award, Gift, Percent, Star, Users, Wallet, Store, TrendingUp } from "lucide-react";
import { Layout } from "@/components/layout/Layout";

const customerBenefits = [
  {
    icon: Wallet,
    title: "Earn Points",
    description: "Earn 1 point for every ₹10 spent. Points accumulate with every purchase.",
  },
  {
    icon: Gift,
    title: "Exclusive Rewards",
    description: "Redeem points for discounts, free products, or special gifts.",
  },
  {
    icon: Percent,
    title: "Member Discounts",
    description: "Access exclusive member-only pricing and flash sales.",
  },
  {
    icon: Star,
    title: "Birthday Rewards",
    description: "Special offers and bonus points during your birthday month.",
  },
];

const partnerBenefits = [
  {
    icon: Users,
    title: "Customer Retention",
    description: "Build lasting relationships with repeat customers through shared rewards.",
  },
  {
    icon: TrendingUp,
    title: "Increased Footfall",
    description: "Drive more traffic to partner stores through cross-promotional campaigns.",
  },
  {
    icon: Store,
    title: "Network Access",
    description: "Join a growing network of neighbourhood businesses and supermarkets.",
  },
  {
    icon: Award,
    title: "Brand Visibility",
    description: "Gain exposure through our loyalty program marketing and communications.",
  },
];

const tiers = [
  {
    name: "Silver",
    points: "0 - 999",
    benefits: ["1 point per ₹10", "Basic offers access", "Birthday bonus"],
  },
  {
    name: "Gold",
    points: "1,000 - 4,999",
    benefits: ["1.25 points per ₹10", "Priority offers", "Double birthday bonus", "Early sale access"],
  },
  {
    name: "Platinum",
    points: "5,000+",
    benefits: ["1.5 points per ₹10", "VIP offers", "Triple birthday bonus", "Exclusive events", "Free home delivery"],
  },
];

const Loyalty = () => {
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
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-accent" />
              Launching in Phase 2
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              <span className="text-gradient">Janatha Plus</span>{" "}
              Loyalty Program
            </h1>
            <p className="text-lg text-muted-foreground">
              A comprehensive rewards program designed to benefit customers and 
              partner businesses alike. Earn, save, and grow with every purchase.
            </p>
          </motion.div>

          {/* How It Works */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card rounded-3xl p-8 md:p-12 mb-20"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
              How Janatha Plus Works
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Sign Up</h3>
                <p className="text-sm text-muted-foreground">
                  Register at any Neighbourhood Flavours store with your phone number. 
                  It's free and takes just a minute.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Earn Points</h3>
                <p className="text-sm text-muted-foreground">
                  Shop at our stores or partner locations. Points are automatically 
                  credited to your account with every purchase.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Redeem Rewards</h3>
                <p className="text-sm text-muted-foreground">
                  Use your accumulated points for discounts, free products, or 
                  exclusive member rewards.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Customer Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Benefits for Customers
              </h2>
              <p className="text-muted-foreground">
                Your loyalty deserves to be rewarded
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {customerBenefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-card rounded-xl p-6 text-center hover:border-primary/30 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Membership Tiers */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Membership Tiers
              </h2>
              <p className="text-muted-foreground">
                The more you shop, the more you earn
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {tiers.map((tier, index) => (
                <motion.div
                  key={tier.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`glass-card rounded-2xl p-8 ${
                    tier.name === "Gold" ? "border-primary/50 relative" : ""
                  }`}
                >
                  {tier.name === "Gold" && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 text-xs font-medium bg-primary text-primary-foreground rounded-full">
                      Popular
                    </span>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-foreground mb-2">{tier.name}</h3>
                    <p className="text-sm text-muted-foreground">{tier.points} points</p>
                  </div>
                  <ul className="space-y-3">
                    {tier.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Partner Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Benefits for Partners
              </h2>
              <p className="text-muted-foreground">
                Join the Janatha Plus network and grow together
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {partnerBenefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-card rounded-xl p-6 text-center hover:border-primary/30 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Coming Soon Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-20 glass-elevated rounded-2xl p-10 text-center"
          >
            <Award className="w-16 h-16 text-primary mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Coming Soon in Phase 2
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The Janatha Plus loyalty program is currently in development and will 
              launch as part of our Phase 2 expansion. Register your interest at our 
              stores to be among the first to join when we launch.
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Loyalty;
