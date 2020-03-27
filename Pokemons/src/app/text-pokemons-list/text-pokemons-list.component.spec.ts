import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextPokemonsListComponent } from './text-pokemons-list.component';

describe('TextPokemonsListComponent', () => {
  let component: TextPokemonsListComponent;
  let fixture: ComponentFixture<TextPokemonsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextPokemonsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextPokemonsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
