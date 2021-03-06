import { InputComponent } from "./component/input/input.component";
import { TestBed, async } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { TodoListComponent } from "./component/todo-list/todo-list.component";
import { TodoItemComponent } from "./component/todo-item/todo-item.component";
describe("AppComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        InputComponent,
        TodoListComponent,
        TodoItemComponent
      ],
    }).compileComponents();
  }));
  it("should create the app", async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'TODOS'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual("TODOS");
  }));
  it("should render title in a h1 tag", async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector("h1").textContent).toContain("TODOS");
  }));
});
