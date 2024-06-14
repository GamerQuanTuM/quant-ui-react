import React from "react"
import { cn } from "../lib/utils"

type SlideProps = {
    url: string | React.ReactElement
    alt: string

}

export interface CarouselProps extends React.HTMLAttributes<HTMLDivElement> {
    slides: SlideProps[]
    loop?: boolean;
}

const Carousel = React.forwardRef<HTMLDivElement, CarouselProps>(({ slides, className, loop = false, ...props }, ref): JSX.Element => {
    const [imageIndex, setImageIndex] = React.useState<number>(0)

    function showNextImage(): void {
        setImageIndex(index => {
            if (index === slides.length - 1) return 0
            return index + 1
        })
    }

    function showPrevImage(): void {
        setImageIndex(index => {
            if (index === 0) return slides.length - 1
            return index - 1
        })
    }

    React.useEffect(() => {
        if (!loop) return;

        const interval = setInterval(() => {
            showNextImage();
        }, 2000);

        return () => clearInterval(interval);
    }, [imageIndex, loop]);

    return (
        <section {...props} ref={ref} className={cn("w-[50rem] h-[30rem]", className)}>
            <div
                aria-label="Image Slider"
                className="w-full h-full relative"
            >
                <div className="w-full h-full flex overflow-hidden">
                    {slides.map(({ url, alt }, index) => {

                        if (typeof url != "string") {
                            return (
                                <div key={index}
                                    style={{ translate: `${-100 * imageIndex}%`, }}
                                    role="group"
                                    aria-label={alt}
                                    className="img-slider-img">
                                    {url}
                                </div>
                            )
                        }

                        const translateValue = `${-100 * imageIndex}`;
                        console.log(translateValue)
                        return (
                            <img
                                key={index}
                                src={url}
                                alt={alt}
                                aria-hidden={imageIndex !== index}
                                className="img-slider-img"
                                style={{ translate: `${-100 * imageIndex}%` }}
                            />
                        )
                    })}
                </div>
                {loop === false && <button
                    onClick={showPrevImage}
                    className="img-slider-btn"
                    style={{ left: 0 }}
                    aria-label="View Previous Image"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left"><path d="m15 18-6-6 6-6" /></svg>
                </button>}
                {loop === false && <button
                    onClick={showNextImage}
                    className="img-slider-btn"
                    style={{ right: 0 }}
                    aria-label="View Next Image"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg>
                </button>}
                <div
                    className="absolute bottom-[0.5rem] left-1/2 -translate-x-1/2 flex gap-[0.25rem]"
                >
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            className="img-slider-dot-btn"
                            aria-label={`View Image ${index + 1}`}
                            onClick={() => setImageIndex(index)}
                        >
                            {index === imageIndex ? (
                                <div className="rounded-full bg-blue-500"></div>
                            ) : (
                                <div className="rounded-full bg-slate-300"></div>
                            )}
                        </button>
                    ))}
                </div>
                <div id="after-image-slider-controls" />
            </div>
        </section>
    )
})

Carousel.displayName = "Carousel"

export { Carousel }