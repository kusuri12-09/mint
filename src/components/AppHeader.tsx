import { FlightTakeoffIcon } from './Icon';
import { Clock } from './Clock';
import './AppHeader.css';

export function AppHeader() {
  return (
    <header className="app-header">
      <FlightTakeoffIcon size={22} color="#fff" />
      <div>
        <h1 className="app-header__title">국외현장체험학습</h1>
        <p className="app-header__sub">2026. 5. 11 ~ 5. 17</p>
      </div>
      <Clock />
    </header>
  );
}
