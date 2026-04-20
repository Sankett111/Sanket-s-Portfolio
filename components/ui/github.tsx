import Image from "next/image"

export const Github = () => {
  return (
    <div>
    <a
      href="https://github.com/Sankett111"
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      <Image src="/github-dark.svg" alt="github logo" width={30} height={30} className="dark:hidden"
      />
      <Image src="/github-light.svg" alt="github logo" width={30} height={30} className="hidden dark:block" />
     </a>
     </div>
   
  )
}
