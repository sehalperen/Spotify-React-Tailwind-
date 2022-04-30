import { Icon } from "image/Icons";
import { useAudio, useFullscreen, useToggle } from "react-use";
import { secondsToTime } from "utils";
import CustomRange from "components/CustomRange";
import { useEffect, useMemo, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setControls, setPlaying, setSidebar } from "stores/player";



function Player() {

    const fsRef = useRef()
    const [show, toggle] = useToggle(false);
    const isFullscreen = useFullscreen(fsRef, show, {onClose: () => toggle(false)});
    const dispatch = useDispatch();
    const { current,sidebar } = useSelector(state => state.player);

    const [audio, state, controls, ref] = useAudio({
        src: current.src
      });
    
    useEffect(() => {
        controls.play();
    }, [current]);

    useEffect(() => {
        dispatch(setControls(controls));
    }, [current]);

    useEffect(() => {
        dispatch(setPlaying(state.playing));
    }, [state.playing]);

    const volumeIcon = useMemo(() => {
        if (state.volume === 0 || state.muted) 
            return 'volMute'
        if (state.volume > 0 && state.volume <= 0.33) 
            return 'volLow'
        if (state.volume > 0.33 && state.volume <= 0.66) 
            return 'volMid'
        return 'volHigh'
    }, [state.volume, state.muted]);
        

    return (
        <div className="flex justify-between items-center h-full px-4">
            <div className="min-w-[11.25rem] w-[30%]">
            {current && (
            <div className="flex items-center">
                <div className="flex items-center mr-3">
                    {!sidebar && (
                        <div className="w-14 h-14 mr-3 relative flex-shrink-0 group">
                            <img src={current.image} alt=""/>
                            <button onClick={() => dispatch(setSidebar(true))}
                                className="w-6 h-6 bg-black opacity-0 group-hover:opacity-70 hover:!opacity-90 hover:scale-[1.06] rotate-90 absolute top-1 right-1 rounded-full flex items-center justify-center">
                                <Icon name="arrowLeft" size={16}/>
                            </button>
                        </div>
                    )}
                    <div>
                        <h6 className="text-sm line-clamp-1">{current.title}</h6>
                        <p className="text-[0.688rem] text-white text-opacity-70">{current.artist}</p>
                    </div>
                </div>
                <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
                        <Icon size={16} name="Like"/>
                </button>
                <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
                        <Icon size={16} name="pip"/>
                </button>
            </div>
            )}
            </div>
            <div className="max-w-[45.125rem] w-[40%] flex flex-col px-4 items-center">
                <div className="flex items-center gap-x-2">
                    <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
                        <Icon size={16} name="Shuffle"/>
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
                        <Icon size={16} name="PlayPrev"/>
                    </button>
                    <button onClick={controls[state?.playing ? 'pause' : 'play']}
                    className="w-8 h-8 flex bg-white items-center justify-center text-black rounded-full hover:scale-[1.06]">
                        <Icon size={16} name={state?.playing ? 'pause' : 'play'}/>
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
                        <Icon size={16} name="PlayNext"/>
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
                        <Icon size={16} name="Repeat"/>
                    </button>
                </div>
                <div className="w-11/12 flex items-center gap-x-2">
                    {audio}
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
            </div>
            <div className="min-w-[11.25rem] w-[30%] flex items-center justify-end">
                    <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
                        <Icon size={20} name="Lyrics"/>
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
                        <Icon size={16} name="Queue"/>
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
                        <Icon size={16} name="Dev"/>
                    </button>
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
                    
                    <button
                    onclick={() => toggle()} 
                    className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
                        <Icon size={16} name="FullScreen"/>
                    </button>
            </div>
            <div ref={fsRef}>
            bu alan fs olacak
            </div>
        </div>
    )
}

export default Player