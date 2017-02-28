import React from 'react';
import { Col, Whisper, Tooltip } from 'rsuite';

const IntroDetail = React.createClass({
    propTypes: {
        intro: React.PropTypes.string,
        name: React.PropTypes.string,
        url: React.PropTypes.string,
        stars: React.PropTypes.number
    },
    render() {
        const {
            intro = '--',
            name = '--',
            url = 'javascript:;',
            stars = '--',
            repoName
        } = this.props;
        return (
            <div className="intro-detail">
                <div className="intro-name">
                    {name}

                </div>
                <div className="intro-context">

                    {intro}

                    <br /><br />


                </div>
                <div className="intro-sub-intro">
                    <a href={`https://www.npmjs.org/package/${repoName}`} style={{float:'left'}}>
                        <img src={`https://img.shields.io/npm/v/${repoName}.svg?style=flat-square`} />
                    </a>
                    <a href={url}><i className="fa fa-star"></i> {stars}</a>
                    <a href={url}><i className="fa fa-github"></i></a>
                </div>
            </div>
        );
    }
});


const IntroPanel = React.createClass({
    propTypes: {
        url: React.PropTypes.string,
        intro: React.PropTypes.string,
        name: React.PropTypes.string,
        src: React.PropTypes.string,
        stars: React.PropTypes.number
    },
    render() {
        const {
            bg,
            url = 'javascript:;',
            intro = '--',
            name = '--',
            src = 'javascript:;',
            icon,
            stars,
            repoName
        } = this.props;

        const style = {
            background: bg
        };


        return (
            <Col lg={3} md={4} sm={6} xs={12}>
                <div className='intro-panel'>
                    <div className="avatar">
                        <a href={url}>
                            <i className={`avatar-icon ${icon}`} style={style}></i>
                        </a>
                    </div>
                    <IntroDetail {...{ name, intro, src, stars, repoName }} />
                </div>
            </Col>
        );
    }
});

export default IntroPanel;
