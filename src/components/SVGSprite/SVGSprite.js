import React from 'react';


/**
 * SVG HOC 
 */

const SVGWrapper = (WrappedSVGPath, props) => {
  const width  = (props && props.width)  || 20;
  const height = (props && props.height) || 20;
  const viewBoxWidth  = (props && props.viewBoxWidth)  || width;
  const viewBoxHeight = (props && props.viewBoxHeight) || height;
  
  const mergedProps = {
    width:  width, 
    height: height, 
    viewBoxWidth:  viewBoxWidth,
    viewBoxHeight: viewBoxHeight,
    title:  "This is a Pretty Cool SVG Icon!", 
    ...props
  };

  return class extends React.Component {
    render() {
      const newProps = { ...mergedProps, ...this.props };
      const { className, width, height, viewBoxWidth, viewBoxHeight, title } = newProps; // Props that get injected from JSX
      return (
        <svg className={className} width={width} height={height} viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`} xmlns="http://www.w3.org/2000/svg">
          <title>
            {title}
          </title>
          <WrappedSVGPath />
        </svg>
      )
    }
  }
}


/**
 * SVG Path Definitions for various Icons
 * These will be wrapped by our HOC
 */

const GlobePath = () => (
  <path fill-rule="evenodd" d="M13.058 3.777c.16.348.2.55.12.602-.053.05-.14.06-.26.04-.12-.03-.208-.11-.262-.24-.027-.09-.04-.17-.04-.25l-.04-.12h-.12c-.16.05-.242 0-.242-.16.027-.06.094-.11.2-.16 0-.03-.012-.06-.04-.08-.026-.16.014-.23.122-.2.214.05.4.24.562.56zM9 0c2.49 0 4.614.877 6.368 2.632C17.123 4.386 18 6.51 18 9s-.877 4.614-2.632 6.368C13.614 17.123 11.49 18 9 18s-4.614-.877-6.368-2.632C.877 13.614 0 11.49 0 9s.877-4.614 2.632-6.368C4.386.877 6.51 0 9 0zM5.665 15.95l.322.162c.16.053.294.093.4.12.51.188 1.086.322 1.73.402 1.204.134 2.316.027 3.334-.322.73-.24 1.3-.508 1.73-.803.08-.06.16-.22.24-.49.08-.27.14-.43.16-.48.08-.16.13-.46.14-.91.02-.44.13-.77.35-.99.14-.16.22-.31.24-.44.03-.14.02-.29-.02-.46-.04-.18-.06-.33-.06-.46 0-.08.04-.26.12-.53.08-.27.1-.48.04-.65 0-.06-.05-.06-.16-.02-.11.04-.17.03-.2-.02-.05-.08-.15-.13-.3-.14-.15-.02-.31-.01-.48.02s-.29.04-.34.04c-.32-.06-.76-.36-1.32-.93-.08-.08-.06-.43.05-1.05.03-.08.06-.27.08-.56.03-.3.09-.52.18-.67.1-.15.27-.25.51-.3.08-.03.16-.1.22-.22.07-.12.13-.2.19-.22.08-.03.18-.06.3-.08.12-.03.22-.06.3-.088.13-.023.318-.02.54.02.23.04.4.06.508.06.185 0 .48.15.88.447.08.08.168.13.26.14.096.015.2.02.324.02.12 0 .22.015.3.04.11-.025.08-.13-.08-.32-.08-.054-.19-.08-.32-.08-.24-.054-.51-.25-.8-.58-.3-.34-.51-.55-.65-.63-.19-.106-.334-.106-.44 0l.04.48c0 .03-.17.1-.52.2-.24.06-.47-.08-.68-.4-.135-.24-.11-.4.08-.48h.12c.053-.023.107-.043.16-.06.054-.01.12-.03.2-.06.08-.024.146-.05.2-.08.054-.024.107-.06.16-.1.054-.04.094-.085.12-.14.03-.05.03-.11 0-.16-.026-.053-.04-.15-.04-.28-.026-.16-.08-.254-.16-.28-.107-.03-.207-.08-.3-.16s-.195-.135-.3-.16c-.136-.03-.2-.216-.2-.565 0-.19.064-.28.2-.28h.16c-.67-.43-1.435-.75-2.29-.967-.11.32-.216.48-.32.48-.19.053-.31.093-.365.12-.055.053-.12.14-.2.26-.08.12-.15.21-.2.26-.057.055-.117.1-.18.14-.07.04-.14.03-.2-.04-.07-.065-.146-.18-.226-.34-.05-.16-.043-.36.02-.6.07-.24.09-.41.06-.52H8.9c.19.38.08.63-.32.765-.106 0-.22-.038-.34-.1-.12-.07-.235-.09-.34-.066-.057 0-.13-.02-.22-.06-.098-.04-.17-.04-.225-.02-.347.16-.535.32-.56.487-.054.24-.014.38.12.42.134.04.28-.02.442-.18.373-.374.71-.454 1.003-.24.13.107.2.295.2.563 0 .105-.008.2-.02.28-.015.08-.05.17-.1.26-.056.09-.136.126-.24.1-.03 0-.077-.02-.14-.06-.07-.04-.116-.07-.14-.08-.03-.014-.08-.01-.16.02-.057.05-.44.17-1.168.36-.16.025-.353.086-.58.18-.23.09-.37.15-.42.18-.296.11-.457.27-.48.48 0 .38-.04.58-.12.605-.057.03-.117-.03-.18-.18-.07-.15-.16-.294-.286-.44-.12-.15-.26-.21-.42-.18-.27.024-.524.15-.765.38-.24.23-.32.475-.24.74.03.056.13.1.3.14.18.04.28.08.32.12.04.04-.03.14-.22.3-.03.057-.03.12-.02.2.01.08.03.198.06.34.03.15.04.24.04.267.03.184.13.33.32.44.19.11.36.092.52-.04.14-.136.32-.16.57-.08 1.05.56 1.65.922 1.81 1.083.06.057.16.24.3.56.15.32.28.51.38.568.03.03.18.097.47.2.28.11.47.23.58.36.11.16.11.33.02.508s-.21.317-.34.42c-.05.03-.16.22-.32.567-.16.35-.26.55-.32.605-.05.08-.27.178-.64.28-.02 0-.06.038-.12.1-.05.07-.1.14-.14.2-.04.07-.07.12-.1.14-.05.06-.15.18-.28.36-.13.19-.26.32-.4.4-.61.43-.86 1.02-.72 1.77.08.32.23.54.44.647zm-1.647-1.084l.08.08c.188.16.496.375.924.643-.67-.67-.95-1.72-.843-3.14l.12-.97c.02-.06 0-.13-.06-.22-.07-.1-.11-.17-.11-.22 0-.19-.06-.31-.16-.37l-.16-.16c-.24-.24-.41-.47-.49-.69-.22-.46-.08-1.03.4-1.73.13-.22.1-.47-.08-.77-.19-.3-.3-.47-.33-.53 0-.08-.05-.16-.14-.24-.1-.08-.13-.16-.1-.25.03-.137-.03-.217-.16-.24-.08-.057-.15-.098-.2-.12-.19-.11-.27-.29-.24-.547.02-.256.01-.424-.04-.504-.85 1.43-1.22 2.97-1.1 4.63.12 1.66.7 3.12 1.74 4.38l.04.04V14h.04c.16.215.28.362.36.442.05.057.13.12.22.2.09.085.15.138.18.165l.08.04z"/>
)

const InstagramPath = () => (
  <path fill-rule="evenodd" d="M9 0C6.556 0 6.25.01 5.29.054S3.676.25 3.104.474C2.514.7 2.01 1.01 1.51 1.51S.702 2.513.473 3.105C.25 3.677.098 4.33.053 5.29.01 6.25 0 6.555 0 9s.01 2.75.054 3.71.196 1.613.42 2.185c.228.592.536 1.094 1.037 1.594.5.5 1.01.8 1.6 1.03.57.22 1.23.37 2.19.42.957.05 1.26.06 3.707.06s2.75-.01 3.71-.06 1.614-.196 2.186-.418c.59-.23 1.094-.538 1.594-1.04.5-.5.803-1 1.033-1.593.22-.57.373-1.226.417-2.184.046-.96.056-1.26.056-3.71s-.01-2.75-.055-3.71-.194-1.61-.416-2.18c-.23-.59-.54-1.094-1.04-1.594s-1-.808-1.594-1.037c-.566-.23-1.22-.38-2.18-.427C11.75.01 11.446 0 9 0zm0 1.622c2.403 0 2.688.01 3.637.052.877.04 1.354.187 1.67.31.42.163.72.358 1.036.673.315.315.51.615.673 1.035.123.317.27.794.31 1.67.043.95.052 1.235.052 3.638 0 2.403-.01 2.688-.052 3.637-.04.877-.187 1.354-.31 1.67-.163.42-.358.72-.673 1.036-.315.315-.615.51-1.035.673-.317.123-.794.27-1.67.31-.95.043-1.235.052-3.638.052-2.403 0-2.688-.01-3.637-.052-.877-.04-1.354-.187-1.67-.31-.42-.163-.72-.358-1.036-.673-.315-.315-.51-.615-.673-1.035-.123-.317-.27-.794-.31-1.67-.043-.95-.052-1.235-.052-3.638 0-2.403.01-2.688.052-3.637.04-.877.187-1.354.31-1.67.163-.42.358-.72.673-1.036.315-.315.615-.51 1.035-.673.317-.123.794-.27 1.67-.31.95-.043 1.235-.052 3.638-.052zm0 2.756c-2.552 0-4.622 2.07-4.622 4.622S6.448 13.622 9 13.622s4.622-2.07 4.622-4.622S11.552 4.378 9 4.378zM9 12c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3zm5.884-7.804c0-.597-.483-1.08-1.08-1.08-.596 0-1.08.483-1.08 1.08 0 .596.484 1.08 1.08 1.08.597 0 1.08-.484 1.08-1.08z"/>
);

const NewspaperPath = () => (
  <path fill-rule="evenodd" d="M9.898 3.856v3.857H6.186V3.856h3.712zm1.237 6.428H4.95v1.285h6.185v-1.29zm0-7.713H4.95V9h6.185V2.57zm6.187 7.72h-4.95v1.285h4.95V10.29zm0-2.57h-4.95V9h4.95V7.712zm0-2.572h-4.95V6.43h4.95V5.14zm0-2.57h-4.95V3.86h4.95V2.57zM2.475 12.21c0 .35-.28.643-.62.643-.337 0-.618-.292-.618-.643V2.57h1.238v9.64zm16.084 0c0 .35-.288.643-.62.643H3.6c.068-.2.107-.422.107-.643V1.285h14.85v10.927zM19.79 0H2.472v1.285H0v10.927c0 1.064.83 1.928 1.856 1.928H17.94c1.025 0 1.856-.864 1.856-1.928V0z"/>
);

const PhotoPath = () => (
  <path fill-rule="evenodd" d="M16.712 2.23c.41 0 .76.14 1.05.417.292.277.438.62.438 1.028v8.837c0 .41-.146.76-.438 1.05-.29.292-.64.438-1.05.438H1.488c-.41 0-.76-.146-1.05-.438-.292-.29-.438-.64-.438-1.05V3.675c0-.408.146-.75.438-1.028.29-.277.64-.416 1.05-.416h3.018L6.213.48C6.475.16 6.84 0 7.306 0h3.675c.38 0 .72.146 1.01.438l1.79 1.792h2.937zM9.1 11.814c1.108 0 2.056-.402 2.844-1.204.787-.803 1.18-1.758 1.18-2.866 0-1.11-.393-2.064-1.18-2.866-.788-.802-1.736-1.203-2.844-1.203-1.108 0-2.056.4-2.844 1.203-.787.802-1.18 1.757-1.18 2.866 0 1.108.393 2.063 1.18 2.865.788.8 1.736 1.2 2.844 1.2zm7.35-7.263c.408 0 .613-.2.613-.61s-.205-.61-.613-.61c-.408 0-.612.205-.612.61 0 .41.204.615.612.615zm-7.35.13c.846 0 1.568.3 2.166.9.598.6.896 1.32.896 2.17 0 .846-.298 1.567-.896 2.165-.598.598-1.32.897-2.166.897-.846 0-1.568-.3-2.166-.897-.598-.6-.897-1.32-.897-2.167 0-.846.3-1.568.897-2.166.598-.6 1.32-.9 2.166-.9z"/>
);

const TwitterPath = () => (
  <path fill-rule="evenodd" d="M14.222 3.22v.403c0 2.347-.844 4.477-2.533 6.39-1.69 1.91-3.93 2.867-6.73 2.867-1.79 0-3.444-.492-4.965-1.476.357.045.614.067.77.067 1.5 0 2.84-.464 4.025-1.403-.692-.023-1.32-.24-1.877-.655-.56-.413-.94-.944-1.14-1.593.268.044.47.066.603.066.225 0 .516-.044.874-.134-.738-.158-1.36-.53-1.862-1.126-.5-.592-.753-1.28-.753-2.062.492.234.984.37 1.476.37C1.155 4.304.67 3.398.67 2.212c0-.56.146-1.095.437-1.61C2.83 2.73 5.054 3.858 7.782 3.99c-.045-.155-.067-.4-.067-.736 0-.917.313-1.69.94-2.315C9.28.31 10.05 0 10.967 0c.917 0 1.7.347 2.348 1.04.67-.112 1.364-.38 2.08-.805-.224.782-.705 1.386-1.443 1.81.694-.066 1.32-.234 1.88-.502-.404.626-.94 1.185-1.61 1.677z"/>
)


/**
 * Here are our SVG Components, that will be used in JSX
 * 
 */

export const IconGlobe = SVGWrapper(GlobePath, {width: 18, height: 18, title: "Icon Globe"});
export const IconInstagram = SVGWrapper(InstagramPath, {width: 18, height: 18, title: "Icon Instagram"});
export const IconNewspaper = SVGWrapper(NewspaperPath, {width: 20, height: 15, title: "Icon Newspaper"});
export const IconPhoto = SVGWrapper(PhotoPath, {width: 19, height: 14, title: "Icon Photo"});
export const IconTwitter = SVGWrapper(TwitterPath, {width: 16, height: 13, title: "Icon Twitter"});