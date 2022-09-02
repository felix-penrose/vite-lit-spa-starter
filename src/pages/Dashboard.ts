import { html, customElement } from 'lit-element'
import { BaseElement } from '../BaseElement'
import '../components/Header'
import '../components/Footer'

@customElement('page-dashboard')
export class Dashboard extends BaseElement {

  render() {
    return html`
      <app-header></app-header>
      <div class="container">
        <h1>Dashboard</h1>
      </div>
      <app-footer></app-footer>
    `
  }
}
