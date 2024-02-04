import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import styles from "./style.module.scss";
import Image from "next/image";

const slider1 = [
  {
    color: "#e3e5e7",
    src: "burgerHub.png",
  },
  {
    color: "#d6d7dc",
    src: "coffeBlog.png",
  },
  {
    color: "#e3e3e3",
    src: "heroPortfolio.png",
  },
  {
    color: "#21242b",
    src: "loudProud.png",
  },
];

const slider2 = [
  {
    color: "#d4e3ec",
    src: "oldPortfolio.png",
  },
  {
    color: "#e5e0e1",
    src: "rickAndMorty.png",
  },
  {
    color: "#d7d4cf",
    src: "taskApp.png",
  },
  {
    color: "#e1dad6",
    src: "burgerWeb.png",
  },
];

export default function Index() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
    touch: {
      enabled: true,
      sensitivity: 0.5,
      touchMultiplier: 2,
    },
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, 250]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -250]);
  const height = useTransform(scrollYProgress, [0, 1], [50, 0]);

  return (
    <section ref={container} className={styles.slidingImages}>
      <motion.div style={{ x: x1 }} className={styles.slider}>
        {slider1.map((project, index) => {
          return (
            <div
              key={index}
              className={styles.project}
              style={{ backgroundColor: project.color }}>
              <div className={styles.imageContainer}>
                <Image
                  fill={true}
                  alt={"image"}
                  src={`/images/${project.src}`}
                />
              </div>
            </div>
          );
        })}
      </motion.div>
      <motion.div style={{ x: x2 }} className={styles.slider}>
        {slider2.map((project, index) => {
          return (
            <div
              key={index}
              className={styles.project}
              style={{ backgroundColor: project.color }}>
              <div key={index} className={styles.imageContainer}>
                <Image
                  fill={true}
                  alt={"image"}
                  src={`/images/${project.src}`}
                />
              </div>
            </div>
          );
        })}
      </motion.div>
      <motion.div style={{ height }} className={styles.circleContainer}>
        <div className={styles.circle}></div>
      </motion.div>
    </section>
  );
}
