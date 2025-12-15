import AddProductForm from "@/components/AddProductForm";
import { Button } from "@/components/ui/button";
import { Bell, LogIn, Rabbit, ShieldCheck } from "lucide-react";
import Image from "next/image";

export default function Home() {
  const user = null;

  const products = [];

  const FEATURES = [
    {
      icon: Rabbit,
      title: "Lightning Fast",
      description:
        "Deal Drop extracts prices in seconds, handling JavaScript and dynamic content",
    },
    {
      icon: ShieldCheck,
      title: "Always Reliable",
      description:
        "Works across all major e-commerce sites with built-in anti-bot protection",
    },
    {
      icon: Bell,
      title: "Smart Alerts",
      description: "Get notified instantly when prices drop below your target",
    },
  ];

  return (
    <main className="min-h-screen bg-linear-to-br from-red-50 via-white to-red-50">
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Image
              src={"/price-drop.png"}
              alt="Price Drop Logo"
              width={70}
              height={70}
              // className="h-10 w-auto"
            />
          </div>
          <Button
            variant="default"
            size="sm"
            className="bg-red-500 hover:bg-red-600 gap-2"
          >
            <LogIn className="size-4" />
            Sign In
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="text-center py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Never Miss a Price Drop Again
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Track prices from any e-commerce site. Get instant alerts when
            prices drop.
          </p>

          <AddProductForm />

          {products.length === 0 && (
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16">
              {FEATURES.map(({ icon: Icon, title, description }) => (
                <div
                  className="bg-white rounded-xl border border-gray-200 shadow-md p-6"
                  key={title}
                >
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <Icon className="size-6 text-red-500" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-2 text-gray-900">
                    {title}
                  </h3>
                  <p className="text-gray-600">{description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
