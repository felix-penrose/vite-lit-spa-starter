import { html, css, customElement } from 'lit-element';
import { BaseElement } from '../BaseElement'

@customElement('app-header')
export class Header extends BaseElement {

  static styles = css`
  `

  render() {
    return html`
      <header>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-5 sticky-top">
          <div class="container">
            <a class="navbar-brand" href="#">My App</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link${this.active('')}" href="/">Homepage</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link${this.active('profile')}" href="/profile">Profile</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/profile/3">Profile ID 3</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      `
  }

  private active(url: String) {
    return url === location.pathname.split('/')[1] ? ' active' : '';
  }
}
