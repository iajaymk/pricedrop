import Image from "next/image";

export default function Home() {
  return (
    <main>
      <header>
        <div className="">
          <div className="flex items-center gap-3">
            <Image
              src={"/price-drop.png"}
              alt="Price Drop Logo"
              width={60}
              height={100}
            />
          </div>
        </div>
      </header>
    </main>
  );
}
