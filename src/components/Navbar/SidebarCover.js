import { useDispatch, useSelector } from "react-redux";
import { Icon } from "image/Icons";
import { setSidebar } from "stores/player";
function SidebarCover(){

    const dispatch = useDispatch();
    const current = useSelector(state => state.player.current)
    return (
        <div className="pt-[100%] bg-black relative group">
            <img src={current.image} className="w-full h-full object-cover absolute top-0 left-0">
            </img>
            <button onClick={() => dispatch(setSidebar(false))}
                 className="w-6 h-6 bg-black opacity-0 group-hover:opacity-70 hover:!opacity-90 hover:scale-[1.06] -rotate-90 absolute top-1 right-1 rounded-full flex items-center justify-center">
                 <Icon name="arrowLeft" size={16}/>
            </button>
        </div>
    )
}

export default SidebarCover