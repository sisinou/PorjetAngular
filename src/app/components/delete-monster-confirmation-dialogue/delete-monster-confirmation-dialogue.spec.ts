import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteMonsterConfirmationDialogue } from './delete-monster-confirmation-dialogue';

describe('DeleteMonsterConfirmationDialogue', () => {
  let component: DeleteMonsterConfirmationDialogue;
  let fixture: ComponentFixture<DeleteMonsterConfirmationDialogue>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteMonsterConfirmationDialogue]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteMonsterConfirmationDialogue);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
