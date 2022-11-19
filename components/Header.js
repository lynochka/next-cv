import Image from "next/image";
import bruce from "img/bruce.jpg";

export default function Header() {
  return (
    <>
      <div className="flex py-2">
        <div className="grow"></div>
        <div className="mr-2">Linkedin</div>
        <div>Github</div>
      </div>
      <div class="flex justify-between items-center">
        <div>
          <Image
            src={bruce}
            alt="One of Lina's two cats, Bruce"
            layout="fit"
            objectFit="cover"
            className="rounded-full h-52 w-52"
          />
        </div>
        <div class="grid justify-items-end">
          <h1 class="text-6xl font-extrabold tracking-tighter">
            LINA ASTRAKOVA
          </h1>
          <p class="text-xl mt-5">Aspiring Front-End Developer</p>
        </div>
      </div>
    </>
  );
}
