import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faGitlab, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'

export { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const globalIcons = [
  faMapMarkerAlt,
  faPhoneAlt,
  faEnvelope,
  faGithub,
  faGitlab,
  faLinkedin,
]

export const initLibrary = () => {
  const allIcons = [
    ...globalIcons,
  ]
  console.info('Registred icons:', { allIcons })
  allIcons.forEach(icon => {
    library.add(icon)
  })
}
