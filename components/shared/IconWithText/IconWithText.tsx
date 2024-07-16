import { LucideProps } from "lucide-react"

interface IconWithTextProps {
  icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>
  text: string
}

export default function IconWithText(props: IconWithTextProps) {
  const {icon: Icon, text } = props
  return (
    <p className='flex items-center gap-2 capitalize'>
      <Icon className="w-5" strokeWidth={1} />{text}
    </p>
  )
}
