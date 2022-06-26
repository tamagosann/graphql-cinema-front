import Image from "next/image";
import styles from "./filmCard.module.scss";

// FIXME: 仮props ちゃんとした型に置き換える
type Props = { src?: string; alt?: string };

export const FilmCard = ({ src, alt }: Props) => {
  return (
    <div className="card w-48 h-28 group block bg-gray-100 overflow-hidden relative">
      <figure>
        {!!src ? (
          <Image
            src={!!src ? `https://image.tmdb.org/t/p/original/${src}` : ""}
            alt={alt}
            layout="fill"
            placeholder="blur"
            objectFit="cover"
            blurDataURL="/loading-image.jpg"
            className={`w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200`}
          />
        ) : (
          <div className="w-48 h-28 bg-gray-200 animate-pulse"></div>
        )}
      </figure>
    </div>
  );
};
