import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("animated-title")
export class AnimatedTitle extends LitElement {
  override render() {
    return html`
      <h1>Lenny</h1>
      <h2>was here tho</h2>
    `;
  }
}
