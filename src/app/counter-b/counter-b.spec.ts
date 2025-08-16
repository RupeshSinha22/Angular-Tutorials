import { ComponentFixture, TestBed } from '@angular/core/testing';


import { CounterB } from './counter-b';

describe('CounterB', () => {
  let component: CounterB;
  let fixture: ComponentFixture<CounterB>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterB]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterB);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
