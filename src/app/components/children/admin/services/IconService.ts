import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class IconService {
  constructor(private readonly _iconRegistry: MatIconRegistry, private readonly _sanitizer: DomSanitizer) {}

  public add(name: string, source: string): void {
    void this._iconRegistry.addSvgIconLiteral(name, this._sanitizer.bypassSecurityTrustHtml(source));
  }

  public addPath(name: string, path: string): void {
    void this._iconRegistry.addSvgIcon(name, this._sanitizer.bypassSecurityTrustResourceUrl(path));
  }
}
