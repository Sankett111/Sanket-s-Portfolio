"use client"

import { Button } from "@/components/ui/button"
import { FileDown } from "lucide-react"

const handleDownload = () => {
  const link = document.createElement("a")
  link.href = "/resume.pdf"
  link.download = "sanket's resume.pdf"
  link.click()
}

export const DownloadResumeButton = () => {
  return (
    <Button
      onClick={handleDownload}
      variant="secondary"
      className="flex items-center gap-2 border" style={{fontFamily: "var(--font-miracle)"}}
    >
      Resume
      <FileDown size={16} opacity={0.5} />
    </Button>
  )
}
