import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex flex-col items-start justify-center text-center gap-2">
      <Image
        src="/profile.jpg"
        height={200}
        width={200}
        alt="Dummy Image"
        className="rounded-lg aspect-square object-cover transition-all duration-300 hover:scale-[1.02]"
      />
      <h1 className="text-4xl font-semibold mt-5">Swan Htat Aung</h1>
      <p className="text-xl text-gray-600">
        Fullstack web developer from Singapore{" "}
      </p>
    </div>
  );
}
