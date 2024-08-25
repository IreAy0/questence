import React from "react";
import MainHeader from "./MainHeader";
import Hero from "../../assets/hero-image.jpeg";
import Footer from "./Footer";
import VideoPlayer from "../VideoPlayer";
function MainArea() {
  return (
    <div className>
      <div className="pt-16 px-6">
        <MainHeader />
        <div>
          <VideoPlayer videoSrc="movie.mp4" posterImage={Hero} />
        </div>

        <div>
          <div className="max-w-3xl mx-auto leading-relaxed py-10">
            <h6 className=" text-primary text-3xl mb-4 font-semibold">
              Introduction
            </h6>
            <p className="mb-3 text-lg font-normal">
              In the following videos, Adam Frost, a doctoral student in History
              and East Asian Languages at Harvard University, discusses the
              emergence of Taobao villages in rural China. As you watch these
              videos, please think about the way in which the institutional
              voids framework introduced in the previous sections can help us to
              understand the emergence of these innovative connections between
              rural economies and the global digital marketplace.
            </p>
            <p className="mb-3 text-lg font-normal">
              China is in the midst of an economic revolution. In the past
              decade the economy has begun transitioning away from
              manufacturing, construction, and heavy industry and towards
              information technologies, services, and green energy. China is
              becoming connected. More people now are networked by trains,
              planes, and cellphones than ever before. China is also coming
              online. In 2011, 420 million Chinese had internet access.
            </p>
          </div>
        </div>
        <div>
          <figure className="relative">
            <img
              src={Hero}
              alt="hero-image"
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-30"></div>
          </figure>
          <figcaption className="text-center font-bold text-lg mt-2">
            Image Credit
          </figcaption>
        </div>
        <div>
          <div className="max-w-3xl mx-auto mt-4 pt-10 pb-24 flex flex-wrap">
            <div className="w-full">
              <p className="text-lg leading-relaxed mb-4">
                <div className="relative">
                  <img
                    src={Hero}
                    alt="description"
                    className="float-right ml-2 mb-2 w-2/6 "
                  />
                  <div className="absolute inset-0 bg-black opacity-30"></div>
                </div>
                China is in the midst of an economic revolution. In the past
                decade, the economy has begun transitioning away from
                manufacturing, construction, and heavy industry and towards
                information technologies, services, and green energy. China is
                becoming connected. More people now are networked by trains,
                planes, and cellphones than ever before. China is also coming
                online. In 2011, 420 million Chinese had internet access.
              </p>
              <p className="mb-4 text-lg">
                In the following videos, Adam Frost, a doctoral student in
                History and East Asian Languages at Harvard University,
                discusses the emergence of Taobao villages in rural China. As
                you watch these videos, please think about the way in which the
                institutional voids framework introduced in the previous
                sections can help us to understand the emergence of these
                innovative connections between rural economies and the global
                digital marketplace.
              </p>
              <h3 className="text-lg font-bold mb-4">
                Alibaba and Taobao Villages
              </h3>
              <p className="mb-4 text-lg">
                Taobao.com is a consumer-to-consumer marketplace that allows
                individuals and businesses to buy and sell goods through a
                central online platform (similar to Amazon or eBay). It is run
                by the{" "}
                <a href="#" className="text-primary font-bold">
                  Alibaba Group
                </a>
                , a retailer specializing in e-commerce in Chinese-speaking
                areas of the world.
              </p>
            </div>
          </div>
        </div>
       
      </div>
      <Footer />
    </div>
  );
}

export default MainArea;
