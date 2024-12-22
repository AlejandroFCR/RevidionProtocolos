import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="text-2xl m-auto text-center">
      <h1 className="m-10">Página de inicio</h1>
      <Link href={"/login"} className="bg-white rounded-lg text-[#7A1C31] p-3 shadow-md">Ir a login</Link>
    </div>
  );
}
