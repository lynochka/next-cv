import Image from "next/image";
import bruce from "img/bruce.jpg";

export default function Header() {
  return (
    <>
      <div className="flex py-2">
        <span className="grow"></span>

        <a
          href="https://www.linkedin.com/in/alina-astrakova/"
          className="mr-9 text-gray-800"
        >
          <span className="mr-2">Linkedin</span>
        </a>

        <a href="https://github.com/lynochka" className="text-gray-800">
          <span>Github</span>
        </a>
      </div>
      <div class="flex justify-between items-center">
        <div>
          <Image
            src={bruce}
            alt="One of Lina's two cats, Bruce"
            layout="fit"
            objectFit="cover"
            className="rounded-full h-52 w-52 cat-cursor"
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
