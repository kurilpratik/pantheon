import { SignUp } from "@clerk/nextjs";
import Header from "@/app/_components/Header";

export default function Page() {
  return (
    <div className="h-screen w-screen">
      <Header />
      <div className="flex justify-center pt-14">
        <SignUp />
      </div>
    </div>
  );
}
