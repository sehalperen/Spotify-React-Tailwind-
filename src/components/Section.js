import { NavLink } from "react-router-dom";

function Section({  title,more = false, items }){
    return (
        <section>
            <header className="flex items-center justify-between mb-4">
                <h3 className="text-3xl text-white font-bold tracking-tight">{title}</h3>
                {more && (
                    <NavLink to={more} className={"text-xs font-bold text-link uppercase hover:underline"}>SEE ALL</NavLink>
                )}
            </header>

            <div className="grid grid-cols-5">
                {items.map(item => (
                    <NavLink 
                        key={item.id}
                        to="/"
                        className={"bg-footer p-4 rounded gap-x-6"}
                    >
                        <div className="relative pt-[100%]">
                            <img src={item.image} className="absolute inset-0 object-cover aspect-square h-full w-full"/>
                        </div>
                        {item.title}
                    </NavLink>
                ))}
            </div>
        </section>

    )
}

export default Section;