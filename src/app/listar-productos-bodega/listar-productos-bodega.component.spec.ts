import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarProductosBodegaComponent } from './listar-productos-bodega.component';

describe('ListarProductosBodegaComponent', () => {
  let component: ListarProductosBodegaComponent;
  let fixture: ComponentFixture<ListarProductosBodegaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarProductosBodegaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarProductosBodegaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
