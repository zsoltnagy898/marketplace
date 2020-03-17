const { getCountryCode } = require('locale-code');
const url = require('url');

const getDefaults = data => {
  const { host, href, pathname, query = '' } = url.parse(data.BASE_URL);

  return {
    // these are defined and probably shouldnt be overwritten
    // data.locale currently defined in metalsmith.js
    page_country: (data.locale === 'en-GB' ? 'uk' : getCountryCode(data.locale)).toLowerCase(),
    page_domain: data.ANALYTICS_DOMAIN,
    page_locale: data.locale.replace('-', ' '),
    page_platform: data.ANALYTICS_PLATFORM.toLowerCase(),

    // these are predefined but could be overwritten
    page_channel: 'web',
    page_subdomain: 'uk-mktg',
    page_section: 'app direct',
    journey_name: 'app direct purchase',
    journey_type: 'app direct eloqua',
    visitor_customer_type: 'business',
    visitor_login_status: 'logged out',
    visitor_permission_status: 'disabled',
    visitor_customer_segment: '',
    visitor_customer_status: '',
    visitor_id_asset_active: '',
    visitor_id_asset_list: '',
    visitor_id_asset_primary: '',
    visitor_login_type: '',
    visitor_type: '',

    // these should be overwritten by individual page templates
    page_name: '',
    page_type: ''
  };
};

/**
 * Add a Tealium `utag_data` script with the provided values.
 *
 * @api public
 *
 * @param {Object} data The utag data values
 * @param {Object} options
 *
 * @return {string}
 */
const utagDataScript = (data, { data: { root: templateData } }) => `
  <script>
    var utag_data = ${JSON.stringify({ ...getDefaults(templateData), ...data })};
    utag_data.page_url = document.location.href;
    utag_data.page_path_query = document.location.pathname + document.location.search;
    utag_data.page_title = document.title;

    //utag_cfg_ovrd = window.utag_cfg_ovrd || {};
    //utag_cfg_ovrd.noview = true;
  </script>
`;

module.exports = utagDataScript;
