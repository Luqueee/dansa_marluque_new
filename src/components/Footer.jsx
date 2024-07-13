import Whatsapp from './links/Whatsapp';
import UpArrowLink from './links/UpLink';
export default function Footer() {
    return (
        <footer
            className="min-w-full h-20 my-4 px-2 flex justify-center"
            id="footer">
            <div className="min-w-full min-h-full bg-zinc-900/20 flex gap-4 justify-between items-center px-4 rounded-md backdrop-blur-sm">
                <p>Estudi de dansa Mar Luque</p>
                <div className=" flex">
                    <Whatsapp />
                    <UpArrowLink />
                </div>
            </div>
        </footer>
    );
}
