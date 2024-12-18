import Image from 'next/image'

export function Splash() {
  return (
    <div className="relative flex min-h-screen w-full items-end justify-center bg-brand-green-400">
      <div className="absolute inset-0 flex items-center justify-center">
        <Image
          src="/images/logo-home.svg"
          alt="Logo"
          width={216}
          height={216}
        />
      </div>

      <div className="relative h-96 w-full opacity-65">
        <Image
          src="/images/bottom-home-img.png"
          alt="Logo"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
        />
      </div>
    </div>
  )
}
