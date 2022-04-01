import { LitElement, html, PropertyValueMap, css } from "lit";
import { customElement } from "lit/decorators.js";
import gsap from "gsap";

@customElement("animated-title")
export class AnimatedTitle extends LitElement {
  static override get properties() {
    return {
      textContent: { type: String },
    };
  }

  static override get styles() {
    return css`
      .animated-title {
        white-space: pre;
      }
      .char {
        display: inline-block;
      }
    `;
  }

  protected override firstUpdated(
    _changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>
  ): void {
    const titleWrapper = this.shadowRoot?.querySelector(".animated-title");
    const titleChars = this.shadowRoot?.querySelectorAll(".char");
    if (titleWrapper) {
      titleChars?.forEach((char) => {
        char?.addEventListener("mouseenter", () => {
          gsap.to(char, {
            transformOrigin: "50% 100%",
            y: 0,
            scale: 1.2,
            rotate: -5,
            color: "var(--clr-primary-hover)",
          });
        });

        char?.addEventListener("mouseleave", () => {
          gsap.to(char, {
            transformOrigin: "50% 100%",
            y: 0,
            scale: 1,
            rotate: 0,
            color: "var(--clr-primary)",
          });
        });
      });
    }
    console.log(titleWrapper);
  }

  override render() {
    return html`
      <h1 class="animated-title">${splitChars(this.textContent)}</h1>
    `;
  }
}

function splitChars(text: string | null) {
  const chars = text
    ?.split("")
    .map((char) => html`<div class="char">${char}</div>`);
  return chars;
}

declare global {
  interface HTMLElementTagNameMap {
    "animated-title": AnimatedTitle;
  }
}
