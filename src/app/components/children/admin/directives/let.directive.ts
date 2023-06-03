import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ngLet]'
})
export class LetDirective<T> {
  private _context: NgLetContext<T> = new NgLetContext<T>();

  constructor(private _viewContainer: ViewContainerRef, private _templateRef: TemplateRef<NgLetContext<T>>) {

  }
  @Input()
  public set ngLet(value: T) {
    this._context.$implicit = this._context.ngLet = value;
    this.updateView();
  }

  private updateView(): void {
    this._viewContainer.clear();
    this._viewContainer.createEmbeddedView(this._templateRef, this._context);
  }
}

class NgLetContext<T> {
  public $implicit!: T;
  public ngLet!: T;
}

