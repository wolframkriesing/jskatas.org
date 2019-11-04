let html, render, nothing;

const runsInBrowser = typeof document !== 'undefined';

if (runsInBrowser) {
  const litHtml = window.litHtml;
  html = litHtml.html;
  render = litHtml.render;
  nothing = litHtml.nothing;
} else {
  render = () => {};
  nothing = () => {};

  html = (s, ...values) => {
    const renderValue = value =>
      typeof value === 'function' 
          ? '' 
          : Array.isArray(value) ? value.join('') : value
    ;
    const value = i => (i < values.length ? renderValue(values[i]) : '');
    return s.map((s, i) => s + value(i)).join('');
  };
}

export {html, render, nothing};
