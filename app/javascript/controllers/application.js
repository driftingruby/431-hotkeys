import { Application } from "@hotwired/stimulus"

const application = Application.start()

// Hotkeys
import Hotkeys from 'stimulus-hotkeys'
application.register('hotkeys', Hotkeys)

// Configure Stimulus development experience
application.debug = false
window.Stimulus   = application

export { application }
