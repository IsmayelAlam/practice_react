import classNames from "classnames";

export default function Skeleton({ times = 1, className }) {
  const outerClassNames = classNames(
    className,
    "bg-gray-200 m-2.5 rounded overflow-hidden relative "
  );

  const innerClassNames = classNames(
    "animate-shimmer",
    "absolute",
    "inset-0",
    "-translate-x-full",
    "bg-gradient-to-r",
    "from-gray-200",
    "via-white",
    "to-gray-200"
  );

  const boxes = [...Array(times).keys()].map((i) => (
    <div key={i} className={outerClassNames}>
      <div className={innerClassNames}></div>
    </div>
  ));

  return boxes;
}
