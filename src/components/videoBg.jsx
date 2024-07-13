import indexvideo from '/indexvideo.mp4';
import SparklesText from '@/components/magicui/sparkles-text';
import BlurIn from '@/components/magicui/blur-in';

const VideoBg = () => {
    return (
        <div className="video-container" id="inicio">
            <div className="overlay flex flex-col gap-4">
                <h1 className=" text-primary lg:text-6xl text-4xl md:text-4xl font-bold">
                    Estudi de dansa
                </h1>
                <SparklesText text="Mar Luque" />
            </div>
            <video src={indexvideo} autoPlay loop muted id="myVideo" />
        </div>
    );
};

export default VideoBg;
