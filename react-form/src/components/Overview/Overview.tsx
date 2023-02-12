interface Props {
  overviews: string[];
}

const Overview: React.FC<Props> = ({ overviews }: Props) => {
  return (
    <div>
      {overviews.map((ov, indx) => (
        <h1 key={indx}>{ov}</h1>
      ))}
    </div>
  );
};

export default Overview;
