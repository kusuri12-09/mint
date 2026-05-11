import './RegionChip.css';

interface Props {
  label: string;
  primary?: boolean;
}

export function RegionChip({ label, primary }: Props) {
  return (
    <span className={`region-chip${primary ? ' region-chip--today' : ''}`}>
      {label}
    </span>
  );
}
