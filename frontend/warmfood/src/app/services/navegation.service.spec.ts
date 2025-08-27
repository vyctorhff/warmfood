import { TestBed } from '@angular/core/testing';

import { NavegationService } from './navegation.service';
import { provideRouter, Router } from '@angular/router';

describe('NavegationService', () => {
  let service: NavegationService;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideRouter([]),
      ]
    });
    service = TestBed.inject(NavegationService);
    router = TestBed.inject(Router);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should nav to login', () => {
    const spy = spyOn(router, 'navigate');

    service.goToLogin();

    expect(spy).toHaveBeenCalledWith(['/login']);
  });

  it('should nav to home', () => {
    const spy = spyOn(router, 'navigate');

    service.goToHome();

    expect(spy).toHaveBeenCalledWith(['/home']);
  });

  it('should nav to create user', () => {
    const spy = spyOn(router, 'navigate');

    service.goToCreateUser();

    expect(spy).toHaveBeenCalledOnceWith(['/create-user']);
  });
});
