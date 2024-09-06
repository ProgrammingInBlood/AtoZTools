import * as React from "react";
import { motion } from "framer-motion";

const icon = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
  },
};

export const HeroIcon = () => (
  <motion.div
    variants={icon}
    initial="hidden"
    animate="visible"
    transition={{
      duration: 1,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 2,
      default: { duration: 2, ease: "easeInOut" },
      fill: { duration: 2, ease: [1, 0, 0.8, 1] },
    }}
  >
    <motion.svg
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        animate={{ rotate: -180 }}
        transition={{
          repeat: Infinity,
          repeatDelay: 5,
          delay: 3,
          type: "spring",
        }}
        d="M687.3088 801.7664a9.6 9.6 0 0 1-9.6-9.6v-138.3168c0-8.448 4.5568-16.3072 11.8528-20.5568l105.984-61.184a4.5824 4.5824 0 0 0 2.2784-3.9424v-118.1952a9.6 9.6 0 0 1 19.2 0v118.1952a23.7824 23.7824 0 0 1-11.8784 20.5568l-105.9584 61.184a4.5824 4.5824 0 0 0-2.2784 3.9424v138.3168a9.6 9.6 0 0 1-9.6 9.6z"
        fill="#fff"
      />
      <path
        d="M704.128 778.1632a23.808 23.808 0 1 1-33.6896 33.664 23.808 23.808 0 0 1 33.6896-33.664zM824.2432 419.8144a23.808 23.808 0 1 1-33.6896 33.664 23.808 23.808 0 0 1 33.6896-33.664z"
        fill="#22c55e"
      />
      <motion.path
        d="M191.9744 673.92a9.6 9.6 0 0 1-9.6-9.6v-138.3168c0-8.4736 4.5568-16.3328 11.8784-20.5568l105.9584-61.184a4.5824 4.5824 0 0 0 2.2784-3.9424v-118.1952a9.6 9.6 0 0 1 19.2 0V440.32a23.7824 23.7824 0 0 1-11.8784 20.5568l-105.9584 61.184a4.5824 4.5824 0 0 0-2.2784 3.9424v138.3168a9.6 9.6 0 0 1-9.6 9.6z"
        fill="#fff"
        animate={{ rotate: 180 }}
        transition={{
          repeat: Infinity,
          repeatDelay: 2,
          type: "spring",
          delay: 3,
        }}
      />
      <path
        d="M208.7936 650.3168a23.808 23.808 0 1 1-33.6896 33.664 23.808 23.808 0 0 1 33.6896-33.664zM328.9088 291.9424a23.808 23.808 0 1 1-33.6896 33.664 23.808 23.808 0 0 1 33.6896-33.664z"
        fill="#22c55e"
      />
      <path
        d="M351.1296 763.008a9.6 9.6 0 0 1-9.6-9.5232l-1.7408-226.1248a9.6256 9.6256 0 0 1 9.5232-9.6768c4.736 0.5632 9.6256 4.2496 9.6768 9.5232l1.7408 226.1248a9.6256 9.6256 0 0 1-9.5232 9.6768h-0.0768z"
        fill="#fff"
      />
      <path
        d="M366.2336 510.4384a23.808 23.808 0 1 1-33.6896 33.664 23.808 23.808 0 0 1 33.6896-33.664zM367.9744 736.5632a23.808 23.808 0 1 1-33.6896 33.664 23.808 23.808 0 0 1 33.6896-33.664z"
        fill="#22c55e"
      />
      <path
        d="M813.9264 666.2656a23.808 23.808 0 1 1-33.6896 33.664 23.808 23.808 0 0 1 33.6896-33.664z"
        fill="#22c55e"
      />

      <path
        d="M640.1536 144.2048a6.4 6.4 0 0 1-3.2-0.8704L512 71.2448 387.0464 143.36a6.4 6.4 0 1 1-6.4-11.0592l128.1536-73.9584a6.3488 6.3488 0 0 1 6.4 0l128.1536 73.9584c3.072 1.7664 4.1216 5.6832 2.3296 8.7296a6.4 6.4 0 0 1-5.5296 3.1744zM512 966.5536a6.272 6.272 0 0 1-3.2-0.8704l-128.1536-73.9584a6.3488 6.3488 0 0 1-2.3296-8.7296 6.4 6.4 0 0 1 8.7296-2.3296L512 952.7552l124.9536-72.1152a6.4 6.4 0 0 1 6.4 11.0592l-128.1536 73.9584a6.0672 6.0672 0 0 1-3.2 0.896zM123.8784 442.2912a6.4 6.4 0 0 1-6.4-6.4l0.0256-147.968a6.4 6.4 0 0 1 3.2-5.5296L248.8064 208.384a6.4 6.4 0 1 1 6.4 11.0592l-124.9024 72.192-0.0256 144.256a6.4 6.4 0 0 1-6.4 6.4zM771.9936 816.4864a6.4 6.4 0 0 1-3.2-11.9296l124.9024-72.1664 0.0256-144.256a6.4 6.4 0 0 1 12.8 0l-0.0256 147.968a6.4 6.4 0 0 1-3.2 5.5296l-128.1024 74.0096a6.656 6.656 0 0 1-3.2 0.8448zM252.0064 816.4864a6.4 6.4 0 0 1-3.2-0.8704l-128.1024-74.0096a6.4 6.4 0 0 1-3.2-5.5296l-0.0256-147.968a6.4 6.4 0 0 1 12.8 0l0.0256 144.256 124.9024 72.1664c3.072 1.7664 4.1216 5.6832 2.3296 8.7296a6.3232 6.3232 0 0 1-5.5296 3.2256zM900.1216 442.2912a6.4 6.4 0 0 1-6.4-6.4l-0.0256-144.256-124.9024-72.1664a6.4 6.4 0 0 1 6.4-11.0592l128.1024 74.0096a6.4 6.4 0 0 1 3.2 5.5296l0.0256 147.968a6.4 6.4 0 0 1-6.4 6.3744z"
        fill="#fff"
      />

      {/* Square */}
      <motion.path
        d="M628.7872 258.176L516.8128 193.536a9.6 9.6 0 0 0-9.6 0l-111.9744 64.64a9.6256 9.6256 0 0 0-4.8128 8.32v129.3056c0 3.4304 1.8176 6.6048 4.8128 8.32l111.9744 64.64a9.8304 9.8304 0 0 0 9.6256 0l111.9744-64.64a9.6256 9.6256 0 0 0 4.8128-8.32V266.496a9.7536 9.7536 0 0 0-4.8384-8.32z m-14.4128 132.096L512 449.3568l-102.3744-59.1104v-118.2208L512 212.9408l102.3744 59.0848v118.2464z"
        fill="#fff"
        animate={{ rotate: 180 }}
        transition={{
          repeat: Infinity,
          repeatDelay: 1,
          type: "spring",
          delay: 3,
        }}
      />
      <path
        d="M512 470.0416a9.6 9.6 0 0 1-9.6-9.6v-123.7504l-107.1872-61.8752a9.6 9.6 0 1 1 9.6-16.6144l111.9744 64.64a9.6256 9.6256 0 0 1 4.8128 8.32v129.3056a9.6 9.6 0 0 1-9.6 9.5744z"
        fill="#fff"
      />
      <path
        d="M640.7936 249.6768a23.808 23.808 0 1 1-33.6896 33.664 23.808 23.808 0 0 1 33.6896-33.664z"
        fill="#22c55e"
      />
      <path
        d="M512 340.7616a9.5744 9.5744 0 0 1-4.8128-17.92l100.352-57.9328a9.5744 9.5744 0 1 1 9.6 16.6144l-100.352 57.9328a9.5488 9.5488 0 0 1-4.7872 1.3056z"
        fill="#fff"
      />
      <path
        d="M521.0112 601.6256a9.5744 9.5744 0 0 1-4.8128-17.92l130.048-75.008a9.5744 9.5744 0 1 1 9.6 16.6144l-130.048 75.008a9.2928 9.2928 0 0 1-4.7872 1.3056z"
        fill="#fff"
      />
      <path
        d="M523.4688 872.064a9.6 9.6 0 0 1-9.6-9.5232l-2.4576-270.4384a9.6 9.6 0 0 1 9.5232-9.6768c4.8128 0.5888 9.6256 4.224 9.6768 9.5232l2.4576 270.4384a9.6 9.6 0 0 1-9.5232 9.6768h-0.0768z"
        fill="#fff"
      />
      <path
        d="M537.8304 575.1808a23.808 23.808 0 1 1-33.6896 33.664 23.808 23.808 0 0 1 33.6896-33.664zM540.1344 845.7984a23.808 23.808 0 1 1-33.6896 33.664 23.808 23.808 0 0 1 33.6896-33.664zM667.8784 500.1728a23.808 23.808 0 1 1-33.6896 33.664 23.808 23.808 0 0 1 33.6896-33.664z"
        fill="#22c55e"
      />
    </motion.svg>
  </motion.div>
);
