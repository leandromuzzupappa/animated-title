import { LitElement, html, PropertyValueMap } from "lit";
import { customElement } from "lit/decorators.js";
import gsap from "gsap";

@customElement("animated-title")
export class AnimatedTitle extends LitElement {
  static override get properties() {
    return {
      textContent: { type: String },
    };
  }

  protected override firstUpdated(
    _changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>
  ): void {
    const algo = this.shadowRoot?.querySelector(".animated-title");
    if (algo) {
      gsap.to(algo, {
        y: 200,
      });
    }
    console.log(algo);
  }

  override render() {
    return html` <h1 class="animated-title">${this.textContent}</h1> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "animated-title": AnimatedTitle;
  }
}
