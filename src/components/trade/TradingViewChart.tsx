import {useEffect, useRef, createRef} from "react";
import {Box} from "@mui/material";
import {styled} from "@mui/material/styles";
import {Helmet} from "react-helmet-async";
import { AdvancedChart } from "react-tradingview-embed";
import datafeed from "../../datafeeds/datafeed";

declare const TradingView: any;
declare const Datafeeds: any;
declare const location: any;
declare const window: any;

const RootStyle = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  height: "100%",
}))

const  getParameterByName = (name: string) =>{
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  const regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
  return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

const TradingViewChart = ()=>{
  const containerId = "tv_chart_container";
  const ref: {current: HTMLDivElement | null} = createRef();
  let datafeedUrl = "https://demo-feed-data.tradingview.com";
  const customDataUrl = getParameterByName('dataUrl');
  if (customDataUrl !== "") {
    datafeedUrl = customDataUrl.startsWith('https://') ? customDataUrl : `https://${customDataUrl}`;
  }

  useEffect(() => {
    let refValue: any;

    if (ref.current) {
     new TradingView.widget({
        // debug: true, // uncomment this line to see Library errors and warnings in the console
        // fullscreen: true,
        symbol: 'Binance:BTC/USDT',
        interval: '1D',
        container: "tv_chart_container",
        width: "100%",
        height: "100%",

        //	BEWARE: no trailing slash is expected in feed URL
        datafeed: datafeed,
        library_path: "charting_library/",
        locale: getParameterByName('lang') || "en",

        disabled_features: ["use_localstorage_for_settings"],
        // enabled_features: ["study_templates"],
        charts_storage_url: 'https://saveload.tradingview.com',
        charts_storage_api_version: "1.1",
        client_id: 'tradingview.com',
        user_id: 'public_user_id',
        theme: getParameterByName('theme'),
        custom_css_url: '../themed.css',
        studies_access: {
          type: "black",
          tools: [
            {
              name: "Volume",
              grayed: false
            },
          ]
        },
        // enabled_features: ["hide_left_toolbar_by_default"],
        // disabled_features:['header_widget'],
        overrides: {
          "paneProperties.backgroundType": "solid",
          "paneProperties.background": "#161E2C",
          "paneProperties.vertGridProperties.color": "#7474EF10",
          "paneProperties.horzGridProperties.color": "#7474EF10",
          "paneProperties.crossHairProperties.color": "#7474EF",

          // "scalesProperties.axisHighlightColor": "#7474EF",
          // "scalesProperties.axisLineToolLabelBackgroundColorActive": "#7474EF",
          // "scalesProperties.axisLineToolLabelBackgroundColorCommon": "#7474EF",
          // "scalesProperties.lineColor": "#161E2C",
          "scalesProperties.textColor" : "#FFF",


          "sessions.vertlines.sessBreaks.color": 'gold',
          // "sessions.vertlines.sessBreaks.style": LINESTYLE_DASHED,
          "sessions.vertlines.sessBreaks.visible": false,
          "sessions.vertlines.sessBreaks.width": 1,

          "mainSeriesProperties.priceLineWidth": 1,
          "mainSeriesProperties.priceLineColor": "#7474EF",

          //candles
          "mainSeriesProperties.candleStyle.upColor": "#7474EF",
          "mainSeriesProperties.candleStyle.downColor": "#FFFFFF",
          "mainSeriesProperties.candleStyle.drawWick": true,
          "mainSeriesProperties.candleStyle.drawBorder": true,
          "mainSeriesProperties.candleStyle.borderColor": "#7474EF",
          "mainSeriesProperties.candleStyle.borderUpColor": "#7474EF",
          "mainSeriesProperties.candleStyle.borderDownColor": "#FFFFFF",
          "mainSeriesProperties.candleStyle.wickColor": "#737375",
          "mainSeriesProperties.candleStyle.wickUpColor": "#7474EF",
          "mainSeriesProperties.candleStyle.wickDownColor": "#FFFFFF",
          "mainSeriesProperties.candleStyle.drawBody": true,

          //Hollow
          "mainSeriesProperties.hollowCandleStyle.upColor": "#7474EF",
          "mainSeriesProperties.hollowCandleStyle.downColor": "#FFFFFF",
          "mainSeriesProperties.hollowCandleStyle.drawWick": true,
          "mainSeriesProperties.hollowCandleStyle.drawBorder": true,
          "mainSeriesProperties.hollowCandleStyle.borderColor": "#7474EF",
          "mainSeriesProperties.hollowCandleStyle.borderUpColor": "#7474EF",
          "mainSeriesProperties.hollowCandleStyle.borderDownColor": "#FFFFFF",
          "mainSeriesProperties.hollowCandleStyle.wickColor": "#737375",
          "mainSeriesProperties.hollowCandleStyle.wickUpColor": "#7474EF",
          "mainSeriesProperties.hollowCandleStyle.wickDownColor": "#FFFFFF",
          "mainSeriesProperties.hollowCandleStyle.drawBody": true,

          // Heikin Ashi styles
          "mainSeriesProperties.haStyle.upColor": "#7474EF",
          "mainSeriesProperties.haStyle.downColor": "#FFFFFF",
          "mainSeriesProperties.haStyle.drawWick": true,
          "mainSeriesProperties.haStyle.drawBorder": true,
          "mainSeriesProperties.haStyle.borderColor": "#7474EF",
          "mainSeriesProperties.haStyle.borderUpColor": "#7474EF",
          "mainSeriesProperties.haStyle.borderDownColor": "#FFFFFF",
          "mainSeriesProperties.haStyle.wickColor": "#737375",
          "mainSeriesProperties.haStyle.wickUpColor": "#7474EF",
          "mainSeriesProperties.haStyle.wickDownColor": "#FFFFFF",
          "mainSeriesProperties.haStyle.barColorsOnPrevClose": false,
          "mainSeriesProperties.haStyle.drawBody": true,

// Bar styles
          "mainSeriesProperties.barStyle.upColor": "#7474EF",
          "mainSeriesProperties.barStyle.downColor": "#FFFFFF",
          "mainSeriesProperties.barStyle.barColorsOnPrevClose": false,
          "mainSeriesProperties.barStyle.dontDrawOpen": false,
          "mainSeriesProperties.barStyle.thinBars": true,

// Column styles
          "mainSeriesProperties.columnStyle.upColor": "#7474EF",
          "mainSeriesProperties.columnStyle.downColor": "#FFFFFF",
          "mainSeriesProperties.columnStyle.barColorsOnPrevClose": true,
          "mainSeriesProperties.columnStyle.priceSource": "close",

// Line styles
          "mainSeriesProperties.lineStyle.color": "#2962FF",
          // "mainSeriesProperties.lineStyle.linestyle": LINESTYLE_SOLID,
          "mainSeriesProperties.lineStyle.linewidth": 2,
          "mainSeriesProperties.lineStyle.priceSource": "close",

// Area styles
          "mainSeriesProperties.areaStyle.color1": "rgba(33, 150, 243, 0.28)",
          "mainSeriesProperties.areaStyle.color2": "#2962FF",
          "mainSeriesProperties.areaStyle.linecolor": "#2962FF",
          // "mainSeriesProperties.areaStyle.linestyle": LINESTYLE_SOLID,
          "mainSeriesProperties.areaStyle.linewidth": 2,
          "mainSeriesProperties.areaStyle.priceSource": "close",
          "mainSeriesProperties.areaStyle.transparency": 100,

// Baseline styles
          "mainSeriesProperties.baselineStyle.baselineColor": "rgba( 117, 134, 150, 1)",
          "mainSeriesProperties.baselineStyle.topFillColor1": "rgba( 38, 166, 154, 0.28)",
          "mainSeriesProperties.baselineStyle.topFillColor2": "rgba( 38, 166, 154, 0.05)",
          "mainSeriesProperties.baselineStyle.bottomFillColor1": "rgba( 239, 83, 80, 0.05)",
          "mainSeriesProperties.baselineStyle.bottomFillColor2": "rgba( 117, 134, 150, 1)",
          "mainSeriesProperties.baselineStyle.topLineColor": "#7474EF",
          "mainSeriesProperties.baselineStyle.bottomLineColor": "#FFFFFF",
          "mainSeriesProperties.baselineStyle.topLineWidth": 2,
          "mainSeriesProperties.baselineStyle.bottomLineWidth": 2,
          "mainSeriesProperties.baselineStyle.priceSource": "close",
          "mainSeriesProperties.baselineStyle.baseLevelPercentage": 50,
          "mainSeriesProperties.baselineStyle.transparency": 50,

// Hi-Lo styles
          "mainSeriesProperties.hiloStyle.color": "#2962FF",
          "mainSeriesProperties.hiloStyle.showBorders": true,
          "mainSeriesProperties.hiloStyle.borderColor": "#2962FF",
          "mainSeriesProperties.hiloStyle.showLabels": true,
          "mainSeriesProperties.hiloStyle.labelColor": "#2962FF",

// Line Break styles
          "mainSeriesProperties.pbStyle.upColor": "#7474EF",
          "mainSeriesProperties.pbStyle.downColor": "#FFFFFF",
          "mainSeriesProperties.pbStyle.borderUpColor": "#7474EF",
          "mainSeriesProperties.pbStyle.borderDownColor": "#FFFFFF",
          "mainSeriesProperties.pbStyle.upColorProjection": "#7474EF",
          "mainSeriesProperties.pbStyle.downColorProjection": "#FFFFFF",
          "mainSeriesProperties.pbStyle.borderUpColorProjection": "#7474EF",
          "mainSeriesProperties.pbStyle.borderDownColorProjection": "#FFFFFF",

// Renko styles
          "mainSeriesProperties.renkoStyle.upColor": "#7474EF",
          "mainSeriesProperties.renkoStyle.downColor": "#FFFFFF",
          "mainSeriesProperties.renkoStyle.borderUpColor": "#7474EF",
          "mainSeriesProperties.renkoStyle.borderDownColor": "#FFFFFF",
          "mainSeriesProperties.renkoStyle.upColorProjection": "#7474EF",
          "mainSeriesProperties.renkoStyle.downColorProjection": "#FFFFFF",
          "mainSeriesProperties.renkoStyle.borderUpColorProjection": "#7474EF",
          "mainSeriesProperties.renkoStyle.borderDownColorProjection": "#FFFFFF",
          "mainSeriesProperties.renkoStyle.wickUpColor": "#7474EF",
          "mainSeriesProperties.renkoStyle.wickDownColor": "#FFFFFF",

// Kagi styles
          "mainSeriesProperties.kagiStyle.upColor": "#7474EF",
          "mainSeriesProperties.kagiStyle.downColor": "#FFFFFF",
          "mainSeriesProperties.kagiStyle.upColorProjection": "#7474EF",
          "mainSeriesProperties.kagiStyle.downColorProjection": "#FFFFFF",

// Point&Figure styles
          "mainSeriesProperties.pnfStyle.upColor": "#7474EF",
          "mainSeriesProperties.pnfStyle.downColor": "#FFFFFF",
          "mainSeriesProperties.pnfStyle.upColorProjection": "#7474EF",
          "mainSeriesProperties.pnfStyle.downColorProjection": "#FFFFFF",

// Range styles
          "mainSeriesProperties.rangeStyle.upColor": "#7474EF",
          "mainSeriesProperties.rangeStyle.downColor": "#FFFFFF",
          "mainSeriesProperties.rangeStyle.thinBars": "true",
          "mainSeriesProperties.rangeStyle.upColorProjection": "#7474EF",
          "mainSeriesProperties.rangeStyle.downColorProjection": "#FFFFFF",
        }
      });
      // ref.current.appendChild(script);
      refValue = ref.current;
    }

    return () => {
      if (refValue) {
        while (refValue.firstChild) {
          refValue.removeChild(refValue.firstChild);
        }
      }
    }
  }, [ref, containerId]);
  return (
    <RootStyle id={containerId} ref={ref} >
    </RootStyle>
  )
}
// const TradingViewChart = ()=>{
//   let containerId = "tv_chart_container";
//   const ref: {current: HTMLDivElement | null} = createRef();
//
//   useEffect(() => {
//     let refValue: any;
//
//     if (ref.current) {
//       console.log(ref.current);
//       const script = document.createElement("script");
//       // script.src = "https://s3.tradingview.com/tv.js";
//       script.src = "charting_library/tv.js";
//       script.async = true;
//       script.onload = () => {
//         if(window.initOnReady){
//           window.initOnReady();
//         }
//       }
//       // script.onload = () => {
//       //   if (typeof TradingView !== "undefined") {
//       //     new TradingView.widget(
//       //       {
//       //         "width": "100%",
//       //         "height": "100%",
//       //         "symbol": "BITMEX:XBTUSD",
//       //         "interval": "240",
//       //         "range": "1M",
//       //         "timezone": "Etc/UTC",
//       //         "theme": "dark",
//       //         "style": "9",
//       //         "locale": "en",
//       //         "toolbar_bg": "rgba(0, 0, 0, 0.8)",
//       //         "hide_top_toolbar": false,
//       //         "hide_side_toolbar": false,
//       //         "withdateranges": true,
//       //         "save_image": true,
//       //         "enable_publishing": false,
//       //         "container_id": containerId,
//       //       }
//       //     );
//       //   }
//       // }
//       ref.current.appendChild(script);
//       refValue = ref.current;
//     }
//
//     return () => {
//       if (refValue) {
//         while (refValue.firstChild) {
//           refValue.removeChild(refValue.firstChild);
//         }
//       }
//     }
//   }, [ref, containerId]);
//   return (
//     <RootStyle id={containerId} ref={ref} >
//     </RootStyle>
//   )
// }



export default TradingViewChart;
