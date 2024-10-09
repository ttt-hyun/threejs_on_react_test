import {
  ContactShadows,
  Environment,
  Float,
  OrbitControls,
} from "@react-three/drei";
import { Hood } from "./Hood";
import { Hood_normal } from "./Hood_normal";
import { Hood_normal2 } from "./Hood_normal2";
import { Mug } from "./Mug";

export const Experience = () => {
  return (
    <>
        {/* <Hood />
        <Mug /> */}
      <OrbitControls />
      <Float>
        {/* <Hood /> */}
        {/* <Mug /> */}
        <Hood_normal />
      </Float>
      <ContactShadows position-y={-0.5} opacity={0.4} blur={2} />
      <Environment preset="forest" background blur={4} />
    </>
  );
};
