import ArrowRight from "@/assets/arrow-right.svg";
import starImage from "@/assets/star.png";
import springImage from "@/assets/spring.png";
import Image from "next/image";

export const CallToAction = () => {
  return (
    <section className="bg-gradient-to-b from-white to=[#D2DCFF] py-24 overflow-x-clip">
      <div className="container">
        <div className="section-heading relative">
          <h2 className="section-title">Sign up free today</h2>
          <p className="section-description mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            minus, pariatur impedit, libero debitis fugiat, totam ducimus
            facilis nisi quas eligendi placeat dicta sit quaerat dolorem
            voluptatem fugit maxime magni.
          </p>
          <Image
            src={starImage}
            alt="."
            width={360}
            className="absolute -left-[350px] -top-[137px]"
          />
          <Image
            src={springImage}
            alt="."
            width={360}
            className="absolute -right-[331px] -top-[19px]"
          />
        </div>
        <div className="flex gap-2 mt-10 justify-center">
          <button className="btn btn-primary">Get or free</button>
          <button className="btn btn-text gap-1">
            <span>Learn more</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
