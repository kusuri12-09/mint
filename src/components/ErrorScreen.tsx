import './ErrorScreen.css';

interface Props {
  onRetry: () => void;
}

export function ErrorScreen({ onRetry }: Props) {
  return (
    <div className="error-screen">
      <span className="error-screen__icon" aria-hidden="true">⚠</span>
      <p className="error-screen__msg">일정을 불러올 수 없습니다</p>
      <button className="error-screen__btn" onClick={onRetry} type="button">
        다시 시도
      </button>
    </div>
  );
}
