import productImage from "@/assets/product-image.png";
import pyramidImage from "@/assets/pyramid.png";
import tubeImage from "@/assets/tube.png";
import Image from "next/image";

export const ProductShowcase = () => {
  return (
    <>
      <section className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip">
        <div className="container">
          <div className="section-heading">
            <div className="flex justify-center">
              <div className="tag">Boost your producttivy</div>
            </div>
            <h2 className="section-title mt-5">
              A more effective way to track progress
            </h2>
            <p className="section-description mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus perferendis debitis cupiditate, magnam commodi tempore
              similique magni reprehenderit
            </p>
          </div>
          <div className="relative">
            <Image src={productImage} alt="product" className="mt-10" />
            <Image
              src={pyramidImage}
              alt="pyramid"
              height={262}
              width={262}
              className="hidden md:block absolute -right-36 -top-32"
            />
            <Image
              src={tubeImage}
              alt="tube"
              height={248}
              className="hidden md:block absolute bottom-24 -left-36"
            />
          </div>
        </div>
      </section>
    </>
  );
};
