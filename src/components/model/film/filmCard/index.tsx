import { FC } from "react";
import Image from "next/image";

// FIXME: 仮props ちゃんとした型に置き換える
type Props = { src: string | undefined; alt: string | undefined };

export const FilmCard = ({ src, alt }: Props) => {
  return (
    <div className="card w-48 h-28">
      <figure>
        {!!src ? (
          <Image src={src ?? ""} alt={alt} layout="fill" />
        ) : (
          <div className="w-48 h-28 bg-gray-200 animate-pulse"></div>
        )}
      </figure>
    </div>
  );
};
