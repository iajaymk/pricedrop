import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-linear-to-br from-blue-50 via-white to-blue-50">
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
            className="bg-blue-500 hover:bg-blue-600 gap-2"
          >
            <LogIn className="size-4" />
            Sign In
          </Button>
        </div>
      </header>
    </main>
  );
}
