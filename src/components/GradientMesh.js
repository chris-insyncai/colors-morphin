import React from "react";
import styled, { css } from "styled-components";
import SimplexNoise from "simplex-noise";

const simplex = new SimplexNoise("seed");

const duration = "10000ms";

const getPositionVals = () => {
  let vals = "";
  for (let i = 0; i < 360; i += 360 / 10) {
    let val = Math.floor(simplex.noise3D(Math.sin(i), Math.cos(i), 0) * 100);
    if (val < 0) {
      val = val * -1;
    }
    if (val >= 0 && val < 20) {
      val = 20;
    } else if (val <= 100 && val > 80) {
      val = 80;
    }
    vals += `${val}%;`;
  }
  return vals
}

const Animate = () => {
  const xVals = getPositionVals()
  const yVals = getPositionVals()
  return (
    <>
      <animate
        attributeName="fy"
        dur={duration}
        values={xVals}
        repeatCount="indefinite"
      />
      <animate
        attributeName="fx"
        dur={duration}
        //values={`20%;80%;20%`}
        values={yVals}
        repeatCount="alternate"
      />
    </>
  );
};

const GradientMesh = ({ className }) => {
  return (
    <div className={className}>
      <svg
        viewBox="0 0 3000 3000"
        preserveAspectRatio="xMidYMid slice"
        className="flex-shrink-0"
      >
        <defs>
          <radialGradient id="rg0" fx="0.33659108076628175" fy="0.5">
            <stop offset="0%" stop-color="#5135FF"></stop>
            <stop offset="100%" stop-color="#5135FF" stop-opacity="0"></stop>
            <Animate />
          </radialGradient>
          <radialGradient id="rg0" fx="0.3731575064088745" fy="0.5">
            <stop offset="0%" stop-color="#5135FF"></stop>
            <stop offset="100%" stop-color="#5135FF" stop-opacity="0"></stop>
            <Animate />
          </radialGradient>
          <radialGradient id="rg0" fx="0.303417097700693" fy="0.5">
            <stop offset="0%" stop-color="#5135FF"></stop>
            <stop offset="100%" stop-color="#5135FF" stop-opacity="0"></stop>
            <Animate />
          </radialGradient>
        
          <radialGradient id="rg1" fx="0.3087221818808073" fy="0.5">
            <stop offset="0%" stop-color="#FF5828"></stop>
            <stop offset="100%" stop-color="#FF5828" stop-opacity="0"></stop>
            <Animate />
          </radialGradient>
          <radialGradient id="rg1" fx="0.3010152830018639" fy="0.5">
            <stop offset="0%" stop-color="#FF5828"></stop>
            <stop offset="100%" stop-color="#FF5828" stop-opacity="0"></stop>
            <Animate />
          </radialGradient>
          <radialGradient id="rg1" fx="0.3120550041118115" fy="0.5">
            <stop offset="0%" stop-color="#FF5828"></stop>
            <stop offset="100%" stop-color="#FF5828" stop-opacity="0"></stop>
            <Animate />
          </radialGradient>
          <radialGradient id="rg2" fx="0.36701211593031036" fy="0.5">
            <stop offset="0%" stop-color="#F69CFF"></stop>
            <stop offset="100%" stop-color="#F69CFF" stop-opacity="0"></stop>
            <Animate />
          </radialGradient>
          <radialGradient id="rg2" fx="0.37114708439694366" fy="0.5">
            <stop offset="0%" stop-color="#F69CFF"></stop>
            <stop offset="100%" stop-color="#F69CFF" stop-opacity="0"></stop>
            <Animate />
          </radialGradient>
          <radialGradient id="rg2" fx="0.3720105129278145" fy="0.5">
            <stop offset="0%" stop-color="#F69CFF"></stop>
            <stop offset="100%" stop-color="#F69CFF" stop-opacity="0"></stop>
            <Animate />
          </radialGradient>
          <radialGradient id="rg3" fx="0.35238451400665216" fy="0.5">
            <stop offset="0%" stop-color="#FFA50F"></stop>
            <stop offset="100%" stop-color="#FFA50F" stop-opacity="0"></stop>
            <Animate />
          </radialGradient>
          <radialGradient id="rg3" fx="0.3354897903556673" fy="0.5">
            <stop offset="0%" stop-color="#FFA50F"></stop>
            <stop offset="100%" stop-color="#FFA50F" stop-opacity="0"></stop>
            <Animate />
          </radialGradient>
          <radialGradient id="rg3" fx="0.3898052957444661" fy="0.5">
            <stop offset="0%" stop-color="#FFA50F"></stop>
            <stop offset="100%" stop-color="#FFA50F" stop-opacity="0"></stop>
            <Animate />
          </radialGradient>
        </defs>
        {/* <rect id="bg" x="0" y="0" width="100%" height="100%"></rect> */}
        <rect
          className="rect rect2"
          x="0"
          y="0"
          width="100%"
          height="100%"
          transform="translate(1500 1500) scale(1.1312713995717338 0.7749863855787069) skewX(-4.040757085114365) rotate(301.0165376691396) translate(-647.4562826717674 -25.460104861685593) translate(-1500 -1500)"
        ></rect>
        <rect
          className="rect rect1"
          x="0"
          y="0"
          width="100%"
          height="100%"
          transform="translate(1500 1500) scale(0.7335901381906791 0.9657844004208431) skewX(-13.7104065249654) rotate(271.0828938057956) translate(-633.9372324175679 -1433.6242017561667) translate(-1500 -1500)"
        ></rect>
        <rect
          className="rect rect3"
          x="0"
          y="0"
          width="100%"
          height="100%"
          transform="translate(1500 1500) scale(1.0132513936135723 0.8100656454675679) skewX(18.48624348566411) rotate(77.55428795842303) translate(267.42540960674023 1283.4422367168954) translate(-1500 -1500)"
        ></rect>
        <rect
          className="rect rect0"
          x="0"
          y="0"
          width="100%"
          height="100%"
          transform="translate(1500 1500) scale(0.7006758293653506 1.0421492241957764) skewX(-29.25877182378603) rotate(76.26478232896562) translate(72.59685735449717 1251.0012427518561) translate(-1500 -1500)"
        ></rect>
        <rect
          className="rect rect2"
          x="0"
          y="0"
          width="100%"
          height="100%"
          transform="translate(1500 1500) scale(1.156310753671813 1.194044558580397) skewX(-24.57122438388915) rotate(228.32415063963919) translate(-772.0932536049243 -958.05877726283) translate(-1500 -1500)"
        ></rect>
        <rect
          className="rect rect2"
          x="0"
          y="0"
          width="100%"
          height="100%"
          transform="translate(1500 1500) scale(0.938568906027835 1.1460331004095385) skewX(15.362636706812395) rotate(54.31898928747887) translate(-927.2717680156848 443.57773775886557) translate(-1500 -1500)"
        ></rect>
        <rect
          className="rect rect0"
          x="0"
          y="0"
          width="100%"
          height="100%"
          transform="translate(1500 1500) scale(1.0791570075801646 1.1346868397222643) skewX(-10.255105017451292) rotate(111.90543614884858) translate(863.3425804408457 -1225.4617730443842) translate(-1500 -1500)"
        ></rect>
        <rect
          className="rect rect3"
          x="0"
          y="0"
          width="100%"
          height="100%"
          transform="translate(1500 1500) scale(1.1093582539310585 0.9243720193970764) skewX(-19.125353574281625) rotate(166.8846393537481) translate(726.1040205906494 1141.0664615680698) translate(-1500 -1500)"
        ></rect>
        <rect
          className="rect rect3"
          x="0"
          y="0"
          width="100%"
          height="100%"
          transform="translate(1500 1500) scale(0.9604933352525622 0.9816559265569653) skewX(0.5104295932293965) rotate(262.9930391722916) translate(337.89130531587307 -317.040130174286) translate(-1500 -1500)"
        ></rect>
        <rect
          className="rect rect0"
          x="0"
          y="0"
          width="100%"
          height="100%"
          transform="translate(1500 1500) scale(0.9005774788946439 0.9364157940562414) skewX(0.21210210212328917) rotate(93.5763098678059) translate(59.29856666886701 1011.3655811640289) translate(-1500 -1500)"
        ></rect>
        <rect
          className="rect rect1"
          x="0"
          y="0"
          width="100%"
          height="100%"
          transform="translate(1500 1500) scale(0.9133968766558525 1.197313351031571) skewX(-41.52711833566238) rotate(226.08145457605693) translate(42.51688298074507 579.7994648956196) translate(-1500 -1500)"
        ></rect>
        <rect
          className="rect rect1"
          x="0"
          y="0"
          width="100%"
          height="100%"
          transform="translate(1500 1500) scale(1.0532731153976322 0.856813902318313) skewX(-29.02812654729926) rotate(46.64388661235678) translate(-73.32397712546734 -804.5013733475207) translate(-1500 -1500)"
        ></rect>
      </svg>
    </div>
  );
};

export default styled(GradientMesh)(
  ({ theme }) => css`
    svg {
      min-width: 100%;
      min-height: 100vh;
      filter: saturate(150%);

      #bg {
        fill: #5135ff;
      }
      .rect0 {
        fill: url(#rg0);
      }
      .rect1 {
        fill: url(#rg1);
      }
      .rect2 {
        fill: url(#rg2);
      }
      .rect3 {
        fill: url(#rg3);
      }
    }
  `
);
