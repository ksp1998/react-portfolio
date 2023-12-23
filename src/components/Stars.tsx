type Props = {
  count: number;
  style?: object;
  width?: number;
  height?: number;
};

const Stars = ({
  count,
  style = {},
  width = window.innerWidth,
  height = window.innerHeight,
}: Props) => {
  return (
    <div className="stars" style={style}>
      {Array.from(Array(count)).map(() => {
        const left = Math.random();
        const top = Math.random();
        const style = {
          left: Math.floor(left * width),
          top: Math.floor(top * 2 * height),
          animationDuration: `${Math.floor(Math.random() * 60) + 30}s`,
        };
        const key = `${left}${top}`;
        return (
          <span
            key={key}
            className={`star size-${(style.top % 3) + 1}`}
            style={style}
          />
        );
      })}
    </div>
  );
};

export default Stars;
