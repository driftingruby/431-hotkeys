import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="ping"
export default class extends Controller {
  connect() {
  }

  pong() {
    alert("pong")
  }
}
