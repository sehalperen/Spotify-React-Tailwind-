import { Menu } from '@headlessui/react'
import authicon from 'image/authicon.jpg'
import { Icon } from 'image/Icons'



function Auth(){

    const user = {
        name: 'Seha Alperen'
    }



    return(
        <Menu as="nav" className={"relative"}>
            {({ open }) => (
                <>
                    <Menu.Button className={`flex items-center hover:bg-active ${open ? 'bg-active' : 'bg-black'} h-9 rounded-3xl pr-2 pl-0.5`}> 
                    <img src={authicon} className="w-8 h-8 rounded-full p-0.5 mr-2"/>
                    <span className="text-sm font-semibold pr-1">{user.name}</span>
                    <span className={open && 'rotate-180'}>
                        <Icon name="downDir" size={16} />
                    </span>
                </Menu.Button>
                <Menu.Items className={"absolute p-1 top-full right-0 w-48 bg-active rounded translate-y-2"}>
                    <Menu.Item>
                    {({ active }) => (
                        <a
                        className={`h-10 flex items-center justify-between px-2 rounded ${active && 'bg-white bg-opacity-10'}`}
                        href="#"
                        >
                        Account
                        <Icon name="external" size={16}/>
                        </a>
                    )}
                    </Menu.Item>
                    <Menu.Item>
                    {({ active }) => (
                        <a
                        className={`h-10 flex items-center px-2 rounded ${active && 'bg-white bg-opacity-10'}`}
                        href="#"
                        >
                        Profile
                        </a>
                    )}
                    </Menu.Item>
                    <Menu.Item>
                    {({ active }) => (
                        <a
                        className={`h-10 flex items-center px-2 rounded ${active && 'bg-white bg-opacity-10'}`}
                        href="#"
                        >
                        Log Out
                        </a>
                    )}
                    </Menu.Item>
                </Menu.Items>
                </>
            )}
        </Menu>
    )
}

export default Auth;