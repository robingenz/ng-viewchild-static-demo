import { AfterContentInit, AfterViewInit, Component, ContentChild, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit , AfterContentInit{
  showButton = true;
  /**
   * Dynamic queries: The results of dynamicly labelled query results depend on runtime values like bindings.
   * So they are not available after change detection. So they are accessible in ngAfterViewInit or ngAfterContentInit.
   * @see https://www.thecodecampus.de/blog/angular-viewchild-static-property-in-ng8/
   */
  @ViewChild('button', { static: false }) viewChildButtonStaticFalse: ElementRef | undefined;
  /**
   * Static queries: Result of the query is determined statically and does not depend on runtime values.
   * Query results of this kind are available before Change Detection and are accessible in ngOnInit.
   * @see https://www.thecodecampus.de/blog/angular-viewchild-static-property-in-ng8/
   */
  @ViewChild('button', { static: true }) viewChildButtonStaticTrue: ElementRef | undefined;

  public ngOnInit(): void {
    console.log('[ngOnInit]', { staticFalse: this.viewChildButtonStaticFalse });
    console.log('[ngOnInit]', { staticTrue: this.viewChildButtonStaticTrue });
  }

  public ngAfterViewInit(): void {
    console.log('[ngAfterViewInit]', { staticFalse: this.viewChildButtonStaticFalse });
    console.log('[ngAfterViewInit]', { staticTrue: this.viewChildButtonStaticTrue });
  }

  public ngAfterContentInit(): void {
    console.log('[ngAfterContentInit]', { staticFalse: this.viewChildButtonStaticFalse });
    console.log('[ngAfterContentInit]', { staticTrue: this.viewChildButtonStaticTrue });
  }
}
