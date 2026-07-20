import theIcon from '@/assets/icons/icon.svg'
import { Link } from 'react-router'
export default function Icon({className}:any){
    return(
<Link to={`/`}>
    <div className={`text-Foreground hidden   flex-row-reverse items-center lg:flex ${className||``}`}>
        <img src={theIcon} alt="" className="w-15 cursor-pointer bg-white/10  rounded-full "/>    
    </div>
</Link>
)
}