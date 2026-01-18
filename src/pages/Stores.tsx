import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const stores = [
  {
    id: 1,
    name: "Neighbourhood Flavours - Jayanagar",
    address: "45, 4th Block, Jayanagar, Bangalore - 560011",
    phone: "+91 80 1234 5678",
    hours: "7:00 AM - 10:00 PM",
    features: ["Fresh Produce", "Bakery", "Home Delivery"],
    mapUrl: "https://maps.google.com/?q=Jayanagar+Bangalore",
  },
  {
    id: 2,
    name: "Neighbourhood Flavours - Koramangala",
    address: "123, 5th Block, Koramangala, Bangalore - 560034",
    phone: "+91 80 2345 6789",
    hours: "7:00 AM - 10:00 PM",
    features: ["Fresh Produce", "Organic Section", "Pharmacy"],
    mapUrl: "https://maps.google.com/?q=Koramangala+Bangalore",
  },
  {
    id: 3,
    name: "Neighbourhood Flavours - Indiranagar",
    address: "78, 12th Main, Indiranagar, Bangalore - 560038",
    phone: "+91 80 3456 7890",
    hours: "7:00 AM - 11:00 PM",
    features: ["Fresh Produce", "Gourmet Section", "Parking"],
    mapUrl: "https://maps.google.com/?q=Indiranagar+Bangalore",
  },
  {
    id: 4,
    name: "Neighbourhood Flavours - HSR Layout",
    address: "34, Sector 2, HSR Layout, Bangalore - 560102",
    phone: "+91 80 4567 8901",
    hours: "7:00 AM - 10:00 PM",
    features: ["Fresh Produce", "Dairy Counter", "Home Delivery"],
    mapUrl: "https://maps.google.com/?q=HSR+Layout+Bangalore",
  },
  {
    id: 5,
    name: "Neighbourhood Flavours - Whitefield",
    address: "56, ITPL Road, Whitefield, Bangalore - 560066",
    phone: "+91 80 5678 9012",
    hours: "8:00 AM - 10:00 PM",
    features: ["Fresh Produce", "International Foods", "Large Parking"],
    mapUrl: "https://maps.google.com/?q=Whitefield+Bangalore",
  },
];

const Stores = () => {
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
              Our Locations
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Find a Store{" "}
              <span className="text-gradient">Near You</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Visit any of our conveniently located stores for fresh groceries, 
              quality products, and exceptional service.
            </p>
          </motion.div>

          {/* Store Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stores.map((store, index) => (
              <motion.div
                key={store.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card rounded-2xl p-6 hover:border-primary/30 transition-all group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <span className="px-3 py-1 text-xs font-medium bg-success/10 text-success rounded-full">
                    Open Now
                  </span>
                </div>

                <h3 className="text-lg font-bold text-foreground mb-4">
                  {store.name}
                </h3>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-muted-foreground shrink-0 mt-1" />
                    <span className="text-sm text-muted-foreground">{store.address}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-muted-foreground shrink-0" />
                    <span className="text-sm text-muted-foreground">{store.phone}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-muted-foreground shrink-0" />
                    <span className="text-sm text-muted-foreground">{store.hours}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {store.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded-md"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground" asChild>
                  <a href={store.mapUrl} target="_blank" rel="noopener noreferrer">
                    <Navigation className="w-4 h-4 mr-2" />
                    Get Directions
                  </a>
                </Button>
              </motion.div>
            ))}

            {/* Coming Soon Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: stores.length * 0.1 }}
              className="glass-card rounded-2xl p-6 border-dashed flex flex-col items-center justify-center text-center"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <MapPin className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                More Locations Coming
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                We're expanding to serve more neighbourhoods. Stay tuned for new store openings.
              </p>
              <span className="px-4 py-2 text-sm font-medium bg-accent/10 text-accent rounded-full">
                Expanding Soon
              </span>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Stores;
