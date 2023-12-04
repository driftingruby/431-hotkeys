import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="press-key"
export default class extends Controller {
  toggle() {
    this.element.classList.toggle('btn-secondary')
    this.element.classList.toggle('btn-primary')
  }
}
