/* eslint-disable react/default-props-match-prop-types */

import {
  StayInTouch,
  QuickLinks,
  RichTypography,
  LogoButton,
} from "@commons-ui/core";
import { Grid } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";

import Link from "core/src/components/Link";

import useStyles from "./useStyles";

function Footer({
  title,
  logoProps,
  aboutVariant,
  description,
  copyrightProps,
  quickLinks: quickLinksProp,
  socialMedia,
  ...props
}) {
  const classes = useStyles(props);
  return (
    <div className={classes.root}>
    
        <Grid
          container
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Grid item xs={12} lg={6}>
            {logoProps && (
              <LogoButton
                {...logoProps}
                component={Link}
                classes={{
                  root: classes.logoButton,
                }}
              />
            )}
            {description && (
              <RichTypography
                variant={aboutVariant}
                className={classes.description}
              >
                {description}
              </RichTypography>
            )}
            {socialMedia && (
              <StayInTouch
                title={title}
                socialMedia={socialMedia}
                classes={{
                  root: classes.stayInTouch,
                  icon: classes.stayInTouchIcon,
                  links: classes.stayInTouchLinks,
                  text: classes.stayInTouchText,
                  link: classes.stayInTouchLink,
                }}
              />
            )}
          </Grid>
          <Grid
            container
            classes={{
              root: classes.allLinks,
            }}
            item
            xs={12}
            lg={4}
          >
            {quickLinksProp?.map((column) => (
              <Grid container item xs={12} lg={6}>
                <QuickLinks
                  linkComponent={Link}
                  {...column}
                  classes={{
                    root: classes.quickLinkRoot,
                    list: classes.quickList,
                    link: classes.quickLink,
                    title: classes.quickLinksTitle,
                  }}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </div>
  );
}

Footer.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  socialMedia: PropTypes.arrayOf(PropTypes.shape({})),
  quickLinks: PropTypes.arrayOf(PropTypes.shape({})),
  logoProps: PropTypes.shape({
    src: PropTypes.string,
    alt: PropTypes.string,
    href: PropTypes.string,
  }),
  aboutVariant: PropTypes.string,
  copyrightProps: PropTypes.shape({}),
};

Footer.defaultProps = {
  title: undefined,
  description: undefined,
  socialMedia: undefined,
  quickLinks: undefined,
  copyrightProps: undefined,
  logoProps: undefined,
  aboutVariant: "subtitle1",
};

export default Footer;
