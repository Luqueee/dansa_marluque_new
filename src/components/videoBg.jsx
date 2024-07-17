import SparklesText from '@/components/magicui/sparkles-text';
import { Image } from '@nextui-org/image';
const VideoBg = () => {
    return (
        <div className="relative flex flex-col gap-4 h-[100vh] w-full overflow-hidden mb-8">
            <section className=" absolute inset-0 z-20 flex flex-col gap-2 justify-center items-center">
                <h1 className=" text-primary lg:text-6xl text-4xl md:text-4xl font-bold">
                    Estudi de dansa
                </h1>
                <SparklesText text="Mar Luque" />
            </section>

            <img
                src="https://cdn.dansamarluque.com/hiphopbg.webp"
                alt=""
                className=" opacity-25 blur-[2px] object-cover w-full h-full absolute inset-0 z-0"
                style={{
                    filter: 'drop-shadow(0 0 10px rgba(255, 255, 255, .2))',
                    mask: 'linear-gradient(to bottom, black 60%, transparent 100%)',
                }}
                loading="lazy"
                decoding="async"
            />
        </div>
    );
};

export default VideoBg;
