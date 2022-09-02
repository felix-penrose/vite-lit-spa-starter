import { html, css, customElement } from 'lit-element';
import { BaseElement } from '../BaseElement'

@customElement('app-footer')
export class Footer extends BaseElement {

  static styles = css`
  `

  render() {
    return html`
      <footer class="bg-dark text-light mt-5 p-5">
        <div class="container">
          <h3>This is the app footer</h3>
        </div>
      </footer>
    `
  }
}
