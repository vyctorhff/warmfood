import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { UserSessionService } from '../../services/session/user-session.service';

export const userLoggedGuard: CanActivateFn = (route, state) => {
  const userSessionService = inject(UserSessionService);
  return userSessionService.isUserSet();
};
