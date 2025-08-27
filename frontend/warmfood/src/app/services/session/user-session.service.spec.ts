import { TestBed } from '@angular/core/testing';
import { UserSessionService } from './user-session.service';
import { UserSession, createUser } from '../../model/user-session.model';


describe('UserSessionService', () => {
  let service: UserSessionService;
  let storage: Storage;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: Storage, useValue: localStorage }
      ]
    });
    service = TestBed.inject(UserSessionService);
    storage = TestBed.inject(Storage);
  });

  afterAll(() => {
    localStorage.clear();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should save data from localstore', () => {
    const data: UserSession = createUser();

    service.save('key-temp', data);

    expect(data.isValid()).toBeFalse();
  });

  it('should get data from localstore', () => {
    const data = service.get('key-temp');

    expect(data).not.toBeFalsy();
  });

  it('should get null when key do not exists in storage', () => {
    const data = service.get('key-not-found');
    
    expect(data).toBeNull();
  });
});
