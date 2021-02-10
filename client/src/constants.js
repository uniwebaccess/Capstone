export const checkerDescriptions = {
  globalCode: 'This is the globalCode description',
  headings: 'This is the headings description',
  images: 'This is the images description',
};

export const checkerSuggestions = {
  noAlt:
    "In <img> elements, alt attributes (also called alt text) give a description of an image for people who may not be able to view them. When an alt attribute isn't present on an image, a screen reader may announce the image's file name and path instead. This fails to communicate the image’s content.",
  emptyAlt:
    "Null, or empty, alt attributes are made by including no information between the opening and closing quotes of an alt attribute and are used to indicate that images are for decorative purposes. Decorative images do not communicate information that is required to understand the website's overall meaning. Historically they were used for flourishes and spacer gif images, but tend to be less relevant for modern websites and web apps.",
  langAttr:
    'Including a lang attribute on the <html> element helps assistive technology such as screen readers to pronounce content correctly.',
  hrefAttr:
    'Links declared with an anchor (<a>) tag should always have a href attribute, even when used in Single Page Applications (SPAs). Without a href attribute, the link will not be properly exposed to assistive technology. An example of this would be a link that uses an onclick event instead of a href attribute.',
  targetAttr:
    "Avoid links that open in a new tab or window. If this is unavoidable, ensure the link's behavior will be communicated in a way that is apparent to all users. Doing this will help people understand what will happen before activating the link. While this technique is technically not required for compliance, it is an often-cited area of frustration for many different kinds of assistive technology users.",
  h1Tag:
    "The h1 element should be used to communicate the overall purpose of the page or view at a high-level. Do not use the h1 element for a heading that persists between pages or views (for example, the site's title or a navigation bar component).",
  logicSequence:
    'The order of heading elements should descend, based on the “depth” of the content. For example, a h3 element should not appear on a page before the first h2 element declaration. A tool such as the headingsMap Google Chrome extension can help you evaluate this.',
};
