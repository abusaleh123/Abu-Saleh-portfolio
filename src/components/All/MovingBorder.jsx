// "use client";
// import React from "react";
// import { Button } from "../ui/moving-border";


// export function MovingBorderDemo() {
//   return (
//     (<div>
//       <Button
//         borderRadius="1.75rem"
//         className="text-white dark:bg-slate-900   ">
//         Download Resume
//       </Button>
//     </div>)
//   );
// }



import React, { useRef, useEffect, useState } from 'react';

function Button({
  borderRadius = '1.75rem',
  children,
  as: Component = 'button',
  containerClassName,
  borderClassName,
  duration = 2000,
  className,
  ...otherProps
}) {
  return (
    <Component
      className={`bg-transparent relative text-xl h-16 w-40 p-[1px] overflow-hidden ${containerClassName}`}
      style={{ borderRadius }}
      {...otherProps}
    >
      <div
        className="absolute inset-0"
        style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}
      >
        <MovingBorder duration={duration} rx={30} ry={30}>
          <div
            className={`h-20 w-20 opacity-[0.8] bg-[radial-gradient(var(--sky-500)_40%,transparent_60%)] ${borderClassName}`}
          />
        </MovingBorder>
      </div>
      <div
        className={`relative bg-slate-900/[0.8] border border-slate-800 backdrop-blur-xl text-white flex items-center justify-center w-full h-full text-sm antialiased ${className}`}
        style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}
      >
        {children}
      </div>
    </Component>
  );
}

function MovingBorder({ children, duration = 2000, rx, ry, ...otherProps }) {
  const pathRef = useRef(null);
  const progress = useMotionValue(0); // Assuming you'll handle Framer Motion elsewhere
  const [pathLength, setPathLength] = useState(0);

  useEffect(() => {
    if (pathRef.current) {
      setPathLength(pathRef.current.getTotalLength());
    }
  }, []);

  useAnimationFrame((time) => {  // Assuming you'll define useAnimationFrame
    if (pathLength) {
      const progressValue = (time / duration) * pathLength;
      progress.set(progressValue % pathLength);
    }
  });

  const x = useTransform(progress, (val) => { // Assuming you'll define useTransform
    if (pathRef.current) {
      try {
        return pathRef.current.getPointAtLength(val).x;
      } catch (error) {
        console.error('Error getting point at length:', error);
        return 0;
      }
    }
    return 0;
  });

  const y = useTransform(progress, (val) => { // Assuming you'll define useTransform
    if (pathRef.current) {
      try {
        return pathRef.current.getPointAtLength(val).y;
      } catch (error) {
        console.error('Error getting point at length:', error);
        return 0;
      }
    }
    return 0;
  });

  const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`; // Assuming you'll define useMotionTemplate

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="absolute h-full w-full"
        width="100%"
        height="100%"
        viewBox="0 0 100 100" // Added viewBox for better scaling
        {...otherProps}
      >
        <rect fill="none" width="100%" height="100%" rx={rx} ry={ry} ref={pathRef} />
      </svg>
      <div // Changed to regular div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          display: 'inline-block',
          transform: transform.toString(), // Apply the transform
        }}
      >
        {children}
      </div>
    </>
  );
}



// Dummy implementations (replace with your actual Framer Motion logic)
function useMotionValue(initialValue) {
  const [value, setValue] = useState(initialValue);
  return [value, setValue];
}

function useTransform(value, transformer) {
  const [transformedValue, setTransformedValue] = useState(transformer(value));

  useEffect(() => {
    setTransformedValue(transformer(value));
  }, [value, transformer]);

  return transformedValue;
}

function useMotionTemplate(strings, ...values) {
    return {
        toString: () => {
            let result = '';
            for (let i = 0; i < strings.length; i++) {
                result += strings[i];
                if (i < values.length) {
                    result += values[i];
                }
            }
            return result;
        }
    }
}

function useAnimationFrame(callback) {
  useEffect(() => {
      let animationId;

      const animate = (time) => {
          callback(time);
          animationId = requestAnimationFrame(animate);
      };

      animationId = requestAnimationFrame(animate);

      return () => cancelAnimationFrame(animationId);
  }, [callback]);
}




export function MovingBorderDemo() {
  return (
    <div>
      <Button borderRadius="1.75rem" className="text-white dark:bg-slate-900">
        Download Resume
      </Button>
    </div>
  );
}