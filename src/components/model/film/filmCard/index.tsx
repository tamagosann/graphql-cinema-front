import { FC } from "react";
import Image from "next/image";

export const FilmCard: FC = ({}) => {
  return (
    <>
      <div className="card w-96 shadow-xl image-full">
        <figure>
          <Image
            src="https://api.lorem.space/image/shoes?w=400&h=225"
            alt="Shoes"
            layout="fill"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
};
