import React from "react";
import useMeasure from "react-use-measure";
import { HTMLMotionProps, motion } from "framer-motion";

type ResizeablePanelProps = {
  wrapperClassName?: string;
} & React.PropsWithChildren<HTMLMotionProps<"div">>;
const ResizeablePanel = ({
  children,
  wrapperClassName,
  ...rest
}: ResizeablePanelProps) => {
  const [ref, bounds] = useMeasure();

  return (
    <motion.div
      initial={{ height: "auto" }}
      animate={{ height: bounds.height > 0 ? bounds.height : undefined }}
      transition={{ duration: 0.2, delay: 0.1 }}
      {...rest}
    >
      <div ref={ref} className={wrapperClassName}>
        {children}
      </div>
    </motion.div>
  );
};

export default ResizeablePanel;
