import PropTypes from "prop-types";
import React from "react";

import Footer from "core/src/components/Footer";

import { footerArgs } from "core/src/config";

/**
 * Base page that can be used to build all other pages.
 */
function BasePage({ children, ...props }) {
  return (
    <div>
      {children}
      <Footer {...footerArgs} />
    </div>
  );
}

BasePage.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

BasePage.defaultProps = {
  children: undefined,
};

export default BasePage;
