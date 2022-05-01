import { useSelector } from "react-redux";
import { Icon } from "image/Icons";
import { secondsToTime } from "utils";
import CustomRange from "components/CustomRange";

function FullScreenPlayer({ toggle, state, controls, volumeIcon}) {

const {current} = useSelector(state => state.player)
  return (
    <div className=" h-full relative">
        <div className="absolute inset-0 bg-center object-cover bg-cover blur-md opacity-30" style={{backgroundImage:`url(${current.image})`}}/>
        <div className="absolute opacity-70 top-8 left-8 gap-x-4 text-white flex items-center">
				<Icon size={34} name="Logo" />
				<div className="text-xs">
					<p style={{fontSize: 14,letterSpacing: 1.5}}>PLAYING FROM PLAYLIST</p>
					<h6 className="font-semibold mt-0.5">{current.title}</h6>
				</div>
			</div>


        <div className="absolute bottom-36 left-8 flex items-center gap-x-5">
            <img src={current.image} alt="" className="w-24 h-24 object-cover"/>
            <div className="self-end">
                <h3 className="text-4xl font-bold">{current.title}</h3>
                <p className="text-base font-medium opacity-50">{current.description}</p>
            </div>
        </div>
        <div className="w-full absolute bottom-4 flex flex-col px-8 items-center">
            <div className="w-full flex items-center mb-2 gap-x-2">
                <div className="text-[0.688rem] text-white text-opacity-70">
                    {secondsToTime(state?.time)}
                </div>
                <CustomRange
                    step={0.1}
                    min={0}
                    max={state?.duration || 1}
                    value={state?.time}
                    onChange = {value => controls.seek(value)}
                />
        <div className="text-[0.688rem] text-white text-opacity-70">
            {secondsToTime(state?.duration)}
        </div>
            </div>
            
                <div className="flex items-center gap-x-5">
                    <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
                        <Icon size={24} name="Shuffle"/>
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
                        <Icon size={24} name="PlayPrev"/>
                    </button>
                    <button onClick={controls[state?.playing ? 'pause' : 'play']}
                    className="w-16 h-16 flex bg-white items-center justify-center text-black rounded-full hover:scale-[1.06]">
                        <Icon size={24} name={state?.playing ? 'pause' : 'play'}/>
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
                        <Icon size={24} name="PlayNext"/>
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
                        <Icon size={24} name="Repeat"/>
                    </button>
                </div>
                
                <div className="flex absolute bottom-5 right-6 items-center gap-x-3">
                <button onClick={controls[state?.muted ? 'unmute' : 'mute']}
                    className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
                        <Icon size={16} name={volumeIcon}/>
                </button>
                    <div className="w-[5.813rem] max-w-full">
                        <CustomRange
                            step={0.01}
                            min={0}
                            max={1}
                            value={state.muted ? 0 : state?.volume}
                            onChange = {value => {
                                controls.unmute();
                                controls.volume(value)}}
                        />
                    </div>
                    <button  onClick={toggle}
                    className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
                        <Icon size={20} name="FullScreen"/>
                    </button>
                </div>
            
        </div>
    </div>
  )
}

export default FullScreenPlayer;