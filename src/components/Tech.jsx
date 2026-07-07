import React, { Suspense, lazy } from "react";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const BallCanvas = lazy(() => import("./canvas/Ball"));

const Tech = () => {
  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10 justify-items-center max-w-5xl mx-auto'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <Suspense fallback={null}>
            <BallCanvas icon={technology.icon} />
          </Suspense>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
