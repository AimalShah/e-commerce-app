import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"

export default function Button({name}) {
  return (
<button className="p-3 lg:p-4 text-sm lg:text-lg bg-zinc-950 text-zinc-300 flex items-center gap-3 justify-center ">
{name}
<FontAwesomeIcon icon={faArrowRight} className="text-md rotate-[-45deg] block "/>
</button>
  )
}
