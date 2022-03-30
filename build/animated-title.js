var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
let AnimatedTitle = class AnimatedTitle extends LitElement {
    render() {
        return html `
      <h1>Lenny</h1>
      <h2>was here tho</h2>
    `;
    }
};
AnimatedTitle = __decorate([
    customElement("animated-title")
], AnimatedTitle);
export { AnimatedTitle };
//# sourceMappingURL=animated-title.js.map