import { Icon } from "image/Icons";

function DownloadApp() {
    return (
        <a href="#" className="h-10 flex flex-shrink-0 items-center px-6 text-sm font-semibold text-link hover:text-white gap-x-4">
            <Icon name="down" size={20} />
            Uygulamayı Yükle
        </a>
    );
}

export default DownloadApp;