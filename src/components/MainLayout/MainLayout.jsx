import React from 'react';
import 'font-awesome/scss/font-awesome.scss';
import Navigation from '../Navigation/Navigation.jsx';
import './index.scss';

export default class MainLayout extends React.Component {

  getLocalTitle() {
    const currentPath = this.props.location;
    const linkPrefix = this.props.SiteConfig.linkPrefix;
    let title = '';
    if (currentPath === (`${linkPrefix}/`)) {
      title = 'Home';
    } else if (currentPath === (`${linkPrefix}/tags/`)) {
      title = 'Tags';
    } else if (currentPath === (`${linkPrefix}/about/`)) {
      title = 'About';
    } else {
      title = 'Article';
    }
    return title;
  }
  render() {
    const { SiteConfig, children } = this.props;
    return (
      <Navigation SiteConfig={SiteConfig} LocalTitle={this.getLocalTitle()}>
        <div>
          {children}
        </div>
      </Navigation>

    );
  }
}

// NOTE: This will be moved under src/layouts/ once Gatsby supports running queries from there.
