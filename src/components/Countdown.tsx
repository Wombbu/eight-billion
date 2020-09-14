import * as React from "react";
import styled from "styled-components";

type Props = {
  from: number;
  to: number;
  inMs: number;
  shortDelay?: boolean;
};

function checkVisible(elm: any) {
  const rect = elm.getBoundingClientRect();
  const viewHeight = Math.max(
    document.documentElement.clientHeight,
    window.innerHeight
  );
  return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}

export const Countdown = (props: Props) => {
  const [active, setActive] = React.useState(false);
  const [number, setNumber] = React.useState(props.from);
  const ref = React.useRef(null);

  React.useEffect(() => {
    if (ref.current == null) {
      return;
    }
    const interval = setInterval(() => {
      if (checkVisible(ref.current)) {
        setTimeout(() => setActive(true), props.shortDelay ? 500 : 1000);
        clearInterval(interval);
      }
    }, 300);
  }, [setActive, props.shortDelay]);

  React.useEffect(() => {
    if (!active) {
      return;
    }
    const intervalMs = 20;
    const diff = props.from - props.to;
    const decreasing = diff > 0;
    const ticks = Math.floor(props.inMs / intervalMs);
    const delta = diff / ticks;

    const interval = setInterval(() => {
      setNumber((val) => {
        if (
          (decreasing && val <= props.to) ||
          (!decreasing && val >= props.to)
        ) {
          clearInterval(interval);
          return props.to;
        }
        return val - delta;
      });
    }, intervalMs);

    return () => {
      clearInterval(interval);
    };
  }, [props.from, props.to, props.inMs, active]);

  return (
    <span ref={ref} className={number < 0 ? "text-red-500" : ""}>
      {number.toFixed(1)}
    </span>
  );
};
