import { CanDeactivateFn } from '@angular/router';
import { RegisterComponent } from '../components/register/register.component';

export const formGuard: CanDeactivateFn<RegisterComponent> = (component, currentRoute, currentState, nextState) => {
  if (component.isFormDirty()) {
    return window.confirm('Çıkmak istediğinize emin misiniz? Değişiklikler kaydedilmeyecek.');
  }
  return true;
};
