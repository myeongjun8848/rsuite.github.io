import React from 'react';
import { Content, Row, Col, Whisper, Tooltip } from 'rsuite';
import IntroBlock from '../fixtures/IntroBlock';
import { Markdown } from 'react-markdown-reader';

import dmpPreview from '../../resources/images/dmp-preview.png';
import dashboardPreview from '../../resources/images/dashboard-preview.png';
import examplePreview from '../../resources/images/example-preview.png';

const data = [{
  thumb: examplePreview,
  url: 'https://rsuitejs.com/rsuite-example-admin/',
  intro: 'webpack + react + react-router + redux',
  name: 'RSuite Example',
  src: 'https://github.com/rsuite/rsuite/tree/master/examples/webpack-rudux-router'
}, {
  thumb: dmpPreview,
  url: null,
  intro: '帮助广告主或营销人员深度理解媒体投放效果。',
  name: 'HYPER DMP',
  src: null
}, {
  thumb: dashboardPreview,
  url: null,
  intro: '聚合 Hyper Data，予以最直观展现',
  name: 'HYPER Dashboard',
  src: null
}];

class PageExamples extends React.Component {
  render() {
    let introBlocks = data.map((info, key) => {
      return (
        <IntroBlock
          key={key}
          {...info}
        />
      );
    });

    return (
      <Content className='box-wrapper'>
        <Row>
          <Col md={12}>
            <Markdown>
              {require('./examples.md')}
            </Markdown>
          </Col>
        </Row>
        <Row>
          {introBlocks}
        </Row>
      </Content>
    );
  }
}


export default PageExamples;
