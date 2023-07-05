import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen bg-no-repeat bg-cover w-full">
      <div className="relative w-full h-screen object-cover bg-cover bg-no-repeat">
           <Image
           className="w-full h-screen object-cover bg-cover bg-no-repeat"
          src="/welcomenewpage.png"
          alt=""
          width={1900}
          height={500}
      
        />
        <div className="button rounded-full">
          <Link href= {"auth/logIn"}>
            <div className="w-[116px] h-[30px] mx-6 text-black text-[20px] font-semibold capitalize cursor-pointer">
              constellate
            </div>
          </Link>
        </div>
        <div className="text text-center text-outfit font-outfit text-white text-[17px] font-bold capitalize">
          Bridging Communities,<br />Sharing Cultures & Diversity
        </div>
      </div>
    </main>
  );
}
