import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ListarCardsComponent } from './listar-cards.component';

describe('ListarCardsComponent', () => {
  let component: ListarCardsComponent;
  let fixture: ComponentFixture<ListarCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListarCardsComponent],
      imports: [HttpClientModule, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ListarCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
