import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

import Button from '../components/Button';
import Image from '../components/Image';

import classes from './index.module.css';

export default function Hello() {
  return (
    <Layout title="Actual">
      <img
        alt=""
        src="/img/homepage/hero.svg"
        style={{
          position: 'absolute',
          zIndex: -1,
          top: 0,
          left: 0,
          right: 0,
          width: '100%',
          height: 900,
        }}
      />
      <div className={classes.main}>
        <h1>The same Actual Budget, but Open Source</h1>
        <p className={classes.heroText}>
          This website is for the Open Source version of Actual Budget, it is a
          super fast privacy-focused app for managing your finances. You own
          your data, and we will sync it across all devices with optional
          end-to-end encryption.
        </p>
        <div>
          <Button to="https://demo.actualbudget.org">Try Our Demo</Button>
          <Button primary to="/docs/install/">
            Set up hosting
          </Button>
        </div>
        <Image
          img={require('../../static/img/homepage/actual-main-budget.png')}
          alt="Actual Budget"
          className={classes.heroImage}
        />

        <MediumFeature
          title="Be involved in your financial decisions"
          src="/img/homepage/superpowers.svg"
        >
          Automated finance tools are great, except when they aren’t. We provide
          you with tools that are quick to use, but ultimately{' '}
          <strong>you are in control</strong>. We help you learn, instead of
          dictating.
        </MediumFeature>

        <MediumFeature
          title="Meticulously designed for speed"
          media={
            <video
              loop
              muted="muted"
              autoplay=""
              playsinline=""
              src="/img/homepage/design.mp4"
              style={{ width: '100%' }}
            />
          }
        >
          A <strong>beautifully designed interface</strong> is fine-tuned to get
          out of your way and make it as fast as possible to explore your
          finances.
        </MediumFeature>

        <MediumFeature
          title="Unabashedly local-first software"
          src="/img/homepage/superpowers.svg"
        >
          <strong>Actual is a local app, plain and simple.</strong> Your data is
          synced in the background so all devices have access, but the app
          totally works regardless of your network connection. This also allows{' '}
          <Link to="/docs/getting-started/sync#end-to-end-encryption">
            end-to-end encryption
          </Link>{' '}
          to keep your data private.
        </MediumFeature>
      </div>
    </Layout>
  );
}

function MediumFeature({ title, media, src, flip, children }) {
  return (
    <div
      class={`${classes.mediumFeature} ${
        flip ? classes.mediumFeature_flip : ''
      }`}
    >
      <div class={classes.mediumFeatureContent}>
        <h2>{title}</h2>
        {children}
      </div>
      {media ? (
        <div className={classes.mediumFeatureMedia}>{media}</div>
      ) : (
        <img src={src} alt="" class={classes.mediumFeatureMedia} />
      )}
    </div>
  );
}
