import { html, customElement, state } from 'lit-element';
import { BaseElement } from '../BaseElement'
import '../components/Header'
import '../components/Footer'
import { RouterLocation } from '@vaadin/router';

@customElement('page-profile-id')
export class ProfileId extends BaseElement {
  @state()
  private user = { id: '' };

  // static styles = css`...`

  render() {
    return html`
      <app-header></app-header>
      <div class="container">
        <h1>Profile Page for user ${this.user.id}</h1>
      </div>
      <app-footer></app-footer>
    `
  }

  // to grab parameters passed in via vaadin router (:userId in index.ts)
  async onBeforeEnter(location: RouterLocation) {
    this.user = {
      id: location.params.userId as string,
    };
  }
}
