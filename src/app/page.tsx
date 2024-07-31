import Image from "next/image";
import Header from "./ui/header/header";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="flex flex-col min-h-screen items-center justify-between p-24 bg-dark dark:bg-light text-light dark:text-dark gap-4">
        <p className="text-xl">App Finanças</p>
      </main>
    </div>
  );
}
