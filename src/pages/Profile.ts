import { html, customElement } from 'lit-element';
import { BaseElement } from '../BaseElement';
import '../components/Header'
import '../components/Footer'

@customElement('page-profile')
export class Profile extends BaseElement {

  // @property({ type: object })
  // user = {}
  // <h3>${user.first_name} ${user.last_name}</h3>

  // static styles = css`...`

  render() {
    return html`
      <app-header></app-header>
      <div class="container">
        <h1>Profile Page</h1>
      </div>
      <app-footer></app-footer>
      `
  }
}
