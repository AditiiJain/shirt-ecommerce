import React, { useState } from "react";
import { TfiClose } from "react-icons/tfi";
import { HiOutlineChevronRight, HiOutlineChevronLeft } from "react-icons/hi";
import "./ZoomModal.css";

function ZoomModal({ images, setIsOpenModal, slideIndex }) {
  const [currentIndex, setCurrentIndex] = useState(slideIndex);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <>
      <div className="desktop-image-zoom-container">
        <div className="desktop-image-zoom-content">
          <div className="desktop-image-zoom-image-container">
            <img
              src={images[currentIndex]}
              alt=""
              className="desktop-image-zoom-primary-image"
            />

            <button
              className="desktop-image-zoom-close  desktop-image-zoom-icon"
              onClick={() => {
                setIsOpenModal(false);
              }}
            >
              <span>
                <TfiClose />
              </span>
            </button>
            <div>
              <button
                className="desktop-image-zoom-previous desktop-image-zoom-icon"
                onClick={prevSlide}
              >
                <span>
                  <HiOutlineChevronLeft size={30} />
                </span>
              </button>
              <button
                className="desktop-image-zoom-next desktop-image-zoom-icon"
                onClick={nextSlide}
              >
                <span>
                  <HiOutlineChevronRight size={30} />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ZoomModal;
