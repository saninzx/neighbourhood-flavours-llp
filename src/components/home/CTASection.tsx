import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function CTASection() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-card to-card" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(var(--primary)/0.3),_transparent_60%)]" />
          
          <div className="relative z-10 p-10 md:p-16 lg:p-20 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Partner with Us
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
              Whether you're looking for a reliable supermarket partner, interested in 
              our B2B services, or want to explore investment opportunities — we're 
              ready to connect.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/about">
                  Explore Ecosystem <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <Link to="/stores">
                  Visit Our Stores
                </Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-16 pt-10 border-t border-border/50">
              <p className="text-sm text-muted-foreground mb-6">Trusted by businesses and communities</p>
              <div className="flex flex-wrap justify-center gap-8 md:gap-16">
                <div className="text-center">
                  <p className="text-2xl md:text-3xl font-bold text-foreground">5+</p>
                  <p className="text-sm text-muted-foreground">Retail Locations</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl md:text-3xl font-bold text-foreground">15+</p>
                  <p className="text-sm text-muted-foreground">B2B Partners</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl md:text-3xl font-bold text-foreground">10K+</p>
                  <p className="text-sm text-muted-foreground">Daily Customers</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl md:text-3xl font-bold text-foreground">50+</p>
                  <p className="text-sm text-muted-foreground">Team Members</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
