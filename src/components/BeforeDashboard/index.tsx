import { Banner } from '@payloadcms/ui/elements/Banner'

import { SeedButton } from './SeedButton'
import './index.scss'

const baseClass = 'before-dashboard'

const BeforeDashboard: React.FC = () => {
  return (
    <div className={baseClass}>
      <Banner className={`${baseClass}__banner type-success`} type="success">
        <h4>
          <strong>Welcome to the VUP Dashboard!</strong>
        </h4>
      </Banner>
      <Banner className={`${baseClass}__banner type-info`} type="info">
        <h4>
          <strong>INFO:</strong> This is the staging environment. Any changes you make here will not
          be reflected on the live website.
        </h4>
      </Banner>
      <Banner className={`${baseClass}__banner type-info`} type="info">
        <h4>
          <strong>INFO:</strong> About Us Page, Contact Us Page, and contact forms are currently
          disabled and will be enabled in the next update.
        </h4>
      </Banner>
      <span>Below are some quick links and utilities:</span>
      <ul className={`${baseClass}__instructions`}>
        <li>
          <strong>SEEDING</strong>
          {
            ' - This essentially serves as a reset button for the website. If you made some changes and want to start over, you can click this button to reset the database to the default state of the website: '
          }
          <SeedButton />
        </li>
        <li>
          <strong>WEBSITE</strong>
          {' - You can visit the website by clicking the visit button: '}
          <a href="/" target="_blank">
            Visit website
          </a>
        </li>
      </ul>
    </div>
  )
}

export default BeforeDashboard
