import { WhatsappIcon } from '@/components/ui/icons';

export default function Whatsapp() {
    return (
        <a
            target="_blank"
            rel="noreferrer"
            href="https://wa.me/34654350567"
            className=" text-green-400 hover:scale-125 transition-all duration-300 py-4 px-1">
            <WhatsappIcon />
        </a>
    );
}
