import { X } from 'lucide-react'
import { useState } from 'react'

interface Props {
  liveLink: string | undefined
  onChange: (showLive: boolean) => void
  initialShowLive: boolean | undefined
}

export function LiveMode({ liveLink, onChange, initialShowLive }: Props) {
  const [, setShowLive] = useState(initialShowLive)
  const handleClose = () => {
    setShowLive(false)
    onChange(false)
  }

  return (
    <div className="flex justify-center items-center w-full h-[100vh]">
      <div className="absolute top-5 right-5" onClick={handleClose}>
        <X size={60} />
      </div>
      <div className="flex justify-center w-2/3">
        <iframe src={liveLink}></iframe>
      </div>
    </div>
  )
}
