import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import Modal from '../elements/Modal';

import icon1 from '../../assets/images/laco.png'
import icon2 from '../../assets/images/billy.png'
import icon3 from '../../assets/images/vincent.png'
import icon4 from '../../assets/images/tera.png'

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const FeaturesTiles = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const [videoModalActive, setVideomodalactive] = useState({
    lacoVid: false,
    billyVid: false, 
    vincentVid: false, 
    teraVid: false 
  });

  const openModal = (e, id) => {
    e.preventDefault();
    setVideomodalactive({...videoModalActive, [id]: true });
  }

  const closeModal = (e, id) => {
    e.preventDefault();
    setVideomodalactive({...videoModalActive, [id]: false });
  }   

  const outerClasses = classNames(
    'features-tiles section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-tiles-inner section-inner pt-0',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap center-content',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Below are my friends',
    paragraph: "Good friends, I might add. They are a bit weird, but hey, beggers can't be choosers, right?" 
  };

  const WIDTH = 256 
  const HEIGHT = 256 

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={icon1}
                      alt="Features tile icon 01"
                      width={WIDTH}
                      height={HEIGHT} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Laco "X-ray" Luo
                  </h4>
                  <p className="m-0 text-sm">
                    His childhood dream is to become <a href="#0" onClick={e=>openModal(e, 'lacoVid')} style={{'text-decoration': 'underline #FFF'}}>ULTRA-MAN</a>.
                    <Modal
                      id="video-modal"
                      show={videoModalActive.lacoVid}
                      handleClose={e=>closeModal(e, 'lacoVid')}
                      video="https://www.youtube.com/embed/BQ7ZNrBFszA?start=243&end=250&autoplay=1"
                      videoTag="iframe" />
                  </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={icon2}
                      alt="Features tile icon 02"
                      width={WIDTH}
                      height={HEIGHT} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Chris "<a href="#0" onClick={e=>openModal(e, 'billyVid')} style={{'text-decoration': 'underline #FFF'}}>Kachow</a>" Lin
                    <Modal
                      id="video-modal"
                      show={videoModalActive.billyVid}
                      handleClose={e=>closeModal(e, 'billyVid')}
                      video="https://www.youtube.com/embed/w9ioRZdYuD4?start=23&end=25&autoplay=1"
                      videoTag="iframe" />
                  </h4>
                  <p className="m-0 text-sm">
                    Often mistakenly being called Billy, but hasn't had the faintest idea why. 
                  </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={icon3}
                      alt="Features tile icon 03"
                      width={WIDTH}
                      height={HEIGHT} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Vincent "臉紅紅" Han
                    </h4>
                  <p className="m-0 text-sm">
                    Ryan's homie. The picture above is actually Ryan. Vincent likes to prank his friends, and I think this says a lot about his character (not in a good way, per se). 
                  </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={icon4}
                      alt="Features tile icon 04"
                      width={WIDTH}
                      height={HEIGHT} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Tera "T-REX" Cheng
                    </h4>
                  <p className="m-0 text-sm">
                    Goes by a great number of names like "Beauty Fairy", "嗡", "哞", but one I think suits her best is "Oviraptor", a.k.a, the <a href="#0" onClick={e=>openModal(e, 'teraVid')} style={{'text-decoration': 'underline #FFF'}}>egg stealing dinosuar</a>.  
                    <Modal
                      id="video-modal"
                      show={videoModalActive.teraVid}
                      handleClose={e=>closeModal(e, 'teraVid')}
                      video="https://www.youtube.com/embed/wrvwlBA03PA?start=13&end=16&autoplay=1"
                      videoTag="iframe" />
                  </p>
                </div>
              </div>
            </div> 

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;