import { NavLink } from "react-router-dom";

function Title({title,more=false}) {
  return(
        <header className="flex items-center justify-between mb-4">
            <NavLink to={more ?? '#'}>
                <h3 className="text-3xl text-white font-bold hover:underline tracking-tight">{title}</h3>
            </NavLink>
            {more && (
                <NavLink to={more} className={"text-xs font-bold text-link uppercase hover:underline tracking-widest"}>SEE ALL</NavLink>
            )}
        </header>
  );
}

export default Title;