import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

interface BottomDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const BottomDrawer: React.FC<BottomDrawerProps> = ({
  isOpen,
  onClose,
  children,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [startY, setStartY] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [currentY, setCurrentY] = useState(0);
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  const handleTransitionEnd = () => {
    if (!isOpen) {
      setIsVisible(false);
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setStartY(e.clientY);
    setDragging(true);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (dragging) {
      const deltaY = e.clientY - startY;
      setCurrentY((prevY) => Math.max(0, prevY + deltaY));
      setStartY(e.clientY);
    }
  };

  const handleMouseUp = () => {
    setDragging(false);
    if (currentY > 30) {
      onClose();
    }
    setCurrentY(0);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setStartY(e.touches[0].clientY);
    setDragging(true);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (dragging) {
      const deltaY = e.touches[0].clientY - startY;
      setCurrentY((prevY) => Math.max(0, prevY + deltaY));
      setStartY(e.touches[0].clientY);
    }
  };

  const handleTouchEnd = () => {
    setDragging(false);
    if (currentY > 30) {
      onClose();
    }
    setCurrentY(0);
  };

  const handleOutsideClick = (e: MouseEvent) => {
    if (drawerRef.current && !drawerRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      document.addEventListener("touchmove", handleTouchMove);
      document.addEventListener("touchend", handleTouchEnd);
    } else {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
    }
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, [dragging, currentY, isOpen]);

  if (!isVisible) return null;

  return createPortal(
    <div
      className={`fixed inset-0 z-50 flex items-end ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      } transition-opacity duration-300`}
    >
      <div
        ref={drawerRef}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        onTransitionEnd={handleTransitionEnd}
        style={{
          transform: `translateY(${isOpen ? currentY : 100}%)`,
          transition: dragging ? "none" : "transform 0.3s ease",
        }}
        className={`bg-[#101323] overflow-y-scroll h-2/3 border-t-2 border-gray-500 text-white p-6 w-full mx-auto rounded-t-lg transform ${
          isOpen ? "translate-y-0" : "translate-y-full"
        } transition-transform duration-300 select-none`}
      >
        {children}
        <div className="flex justify-center mt-2">
          <button
            className="bg-gray-700 text-white py-2 px-4 rounded"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default BottomDrawer;
