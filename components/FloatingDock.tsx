"use client";

import { cn } from "@/lib/utils";
import { motion, useMotionValue, useSpring, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom"; // IMPORT THIS

export const FloatingDock = ({
  items,
  desktopClassName,
}: {
  items: { title: string; href: string }[];
  desktopClassName?: string;
}) => {
  let mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn("flex items-center gap-2 px-2", desktopClassName)}
    >
      {items.map((item) => (
        <TextContainer mouseX={mouseX} key={item.title} {...item} />
      ))}
    </motion.div>
  );
};

function TextContainer({
  mouseX,
  title,
  href,
}: {
  mouseX: MotionValue;
  title: string;
  href: string;
}) {
  let ref = useRef<HTMLDivElement>(null);

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  let scaleTransform = useTransform(distance, [-150, 0, 150], [1, 1.5, 1]);
  let scale = useSpring(scaleTransform, { mass: 0.1, stiffness: 150, damping: 12 });

  return (
    // CHANGE: Swapped <a> for <Link> and href for to
    <Link to={href} className="px-2 no-underline">
      <motion.div
        ref={ref}
        style={{ scale }}
        className="relative flex items-center justify-center py-2 px-3 rounded-xl transition-colors hover:bg-gray-100 dark:hover:bg-neutral-800"
      >
        <span className="text-large font-bold text-gray-600 dark:text-neutral-300 whitespace-nowrap">
          {title}
        </span>
      </motion.div>
    </Link>
  );
}