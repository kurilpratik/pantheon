import Header from "@/app/_components/Header";
import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="h-screen w-screen">
      <Header />
      <div className="flex justify-center pt-16">
        <SignIn />
      </div>
    </div>
  );
}
