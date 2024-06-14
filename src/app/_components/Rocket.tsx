'use client'

import Image from "next/image";

export default function Rocket() {
  return (
      <Image
          src={'/rocket.png'}
          alt="rocket"
          width={150}
          height={150}
          className="-rotate-45 fixed left-10 bottom-5"
      />
  )
}