function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function initOnReady() {
    var datafeedUrl = "https://demo-feed-data.tradingview.com";
    var customDataUrl = getParameterByName('dataUrl');
    if (customDataUrl !== "") {
        datafeedUrl = customDataUrl.startsWith('https://') ? customDataUrl : `https://${customDataUrl}`;
    }

    var widget = window.tvWidget = new TradingView.widget({
        // debug: true, // uncomment this line to see Library errors and warnings in the console
        fullscreen: true,
        symbol: 'AAPL',
        interval: '1D',
        container: "tv_chart_container",
        width: "100%",
        height: "100%",

        //	BEWARE: no trailing slash is expected in feed URL
        datafeed: new Datafeeds.UDFCompatibleDatafeed(datafeedUrl, undefined, {
            maxResponseLength: 1000,
            expectedOrder: 'latestFirst',
        }),
        library_path: "charting_library/",
        locale: getParameterByName('lang') || "en",

        disabled_features: ["use_localstorage_for_settings"],
        enabled_features: ["study_templates"],
        charts_storage_url: 'https://saveload.tradingview.com',
        charts_storage_api_version: "1.1",
        client_id: 'tradingview.com',
        user_id: 'public_user_id',
        theme: getParameterByName('theme'),
        // custom_css_url: '../themed.css',
        studies_access: {
            type: "black",
            tools: [
                {
                    name: "Volume",
                    grayed: false
                },
            ]
        },
        enabled_features: ["hide_left_toolbar_by_default"],
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

        }
    });
};

window.initOnReady = initOnReady;

// window.addEventListener('DOMContentLoaded', initOnReady, false);