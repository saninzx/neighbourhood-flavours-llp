import { motion } from "framer-motion";
import { Tag, Calendar, Percent, Gift, ShoppingBag, Apple } from "lucide-react";
import { Layout } from "@/components/layout/Layout";

const offers = [
  {
    id: 1,
    title: "Weekend Fresh Produce Sale",
    description: "Get 20% off on all fresh fruits and vegetables every weekend. Farm-fresh quality at unbeatable prices.",
    discount: "20% OFF",
    category: "Fresh Produce",
    validity: "Every Sat-Sun",
    icon: Apple,
    featured: true,
  },
  {
    id: 2,
    title: "Buy 2 Get 1 Free",
    description: "On selected household essentials. Stock up on your daily needs with this amazing offer.",
    discount: "Buy 2 Get 1",
    category: "Household",
    validity: "Till 31st Jan",
    icon: ShoppingBag,
    featured: false,
  },
  {
    id: 3,
    title: "Dairy Delight",
    description: "15% off on all dairy products including milk, curd, paneer, and cheese varieties.",
    discount: "15% OFF",
    category: "Dairy",
    validity: "All Week",
    icon: Gift,
    featured: false,
  },
  {
    id: 4,
    title: "Senior Citizens Special",
    description: "Extra 5% discount for senior citizens on all purchases. Valid with ID proof.",
    discount: "5% Extra",
    category: "Special",
    validity: "Always Valid",
    icon: Percent,
    featured: false,
  },
  {
    id: 5,
    title: "First Purchase Bonus",
    description: "New customers get flat ₹100 off on their first purchase of ₹500 or more.",
    discount: "₹100 OFF",
    category: "New Customer",
    validity: "First Visit",
    icon: Tag,
    featured: true,
  },
  {
    id: 6,
    title: "Monthly Grocery Saver",
    description: "Spend ₹2000+ on groceries and get a free shopping bag worth ₹199.",
    discount: "Free Gift",
    category: "Groceries",
    validity: "Monthly",
    icon: Gift,
    featured: false,
  },
];

const Offers = () => {
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
            <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
              Current Promotions
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Exclusive{" "}
              <span className="text-gradient">Offers & Deals</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Discover great savings on quality products. Visit your nearest store 
              to avail these offers.
            </p>
          </motion.div>

          {/* Featured Offers */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {offers
              .filter((offer) => offer.featured)
              .map((offer, index) => (
                <motion.div
                  key={offer.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative rounded-2xl overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-card to-card" />
                  <div className="relative z-10 p-8 md:p-10">
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center">
                        <offer.icon className="w-7 h-7 text-primary" />
                      </div>
                      <span className="px-4 py-2 text-lg font-bold bg-primary text-primary-foreground rounded-full">
                        {offer.discount}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-3">
                      {offer.title}
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      {offer.description}
                    </p>
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Tag className="w-4 h-4" />
                        {offer.category}
                      </span>
                      <span className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        {offer.validity}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>

          {/* Regular Offers Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offers
              .filter((offer) => !offer.featured)
              .map((offer, index) => (
                <motion.div
                  key={offer.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="glass-card rounded-2xl p-6 hover:border-primary/30 transition-all group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <offer.icon className="w-6 h-6 text-primary" />
                    </div>
                    <span className="px-3 py-1 text-sm font-bold bg-accent/10 text-accent rounded-full">
                      {offer.discount}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {offer.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {offer.description}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <span className="text-xs text-muted-foreground">{offer.category}</span>
                    <span className="text-xs text-muted-foreground">{offer.validity}</span>
                  </div>
                </motion.div>
              ))}
          </div>

          {/* Disclaimer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 text-center"
          >
            <p className="text-sm text-muted-foreground">
              * Terms and conditions apply. Offers valid at participating stores only. 
              Cannot be combined with other offers. Management reserves the right to 
              modify or withdraw offers without prior notice.
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Offers;
