import Login from "@/components/Login";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="h-screen flex justify-center items-center">
      <Navbar />
      <Login />
    </main>
  );
}
