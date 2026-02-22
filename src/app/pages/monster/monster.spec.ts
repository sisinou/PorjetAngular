import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MonsterModel } from '../../models/monster.model';

describe('MonsterModel', () => {
  let component: MonsterModel;
  let fixture: ComponentFixture<MonsterModel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonsterModel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonsterModel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
