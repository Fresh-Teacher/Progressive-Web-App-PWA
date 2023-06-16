if (!self.define) {
    const e = e => {
            "require" !== e && (e += ".js");
            let a = Promise.resolve();
            return b[e] || (a = new Promise(async a => {
                if ("document" in self) {
                    const b = document.createElement("script");
                    b.src = e, document.head.appendChild(b), b.onload = a
                } else importScripts(e), a()
            })), a.then(() => {
                if (!b[e]) throw new Error(`Module ${e} didn’t register its module`);
                return b[e]
            })
        },
        a = (a, b) => {
            Promise.all(a.map(e)).then(e => b(1 === e.length ? e[0] : e))
        },
        b = {
            require: Promise.resolve(a)
        };
    self.define = (a, c, d) => {
        b[a] || (b[a] = Promise.resolve().then(() => {
            let b = {};
            const f = {
                uri: location.origin + a.slice(1)
            };
            return Promise.all(c.map(a => {
                switch (a) {
                    case "exports":
                        return b;
                    case "module":
                        return f;
                    default:
                        return e(a)
                }
            })).then(e => {
                const a = d(...e);
                return b.default || (b.default = a), b
            })
        }))
    }
}
define("./service-worker.js", ["./workbox-d9851aed"], (function(e) {
    "use strict";
    e.skipWaiting(), e.clientsClaim(), e.precacheAndRoute([{
        url: "/aboutEn.51a5ca090ffa2b7bd77b..css",
        revision: "1fb6c7dd2d82467aa11d75a1acbe2f85"
    }, {
        url: "/aboutEn.51a5ca090ffa2b7bd77b.js",
        revision: "0ad6b7aa43cd94834fcb1d621f24c0c3"
    }, {
        url: "/contactEn.51a5ca090ffa2b7bd77b..css",
        revision: "1fb6c7dd2d82467aa11d75a1acbe2f85"
    }, {
        url: "/contactEn.51a5ca090ffa2b7bd77b.js",
        revision: "0eea9434c33c3a46c6f8842c6dddca46"
    }, {
        url: "/en/about.html",
        revision: "31e19dfb46189009d57e488961aae6f4"
    }, {
        url: "/en/contact.html",
        revision: "0176307e56e4b986afbd36f0360ab583"
    }, {
        url: "/en/error.html",
        revision: "af3e0dd50b4736a5b78bc038130a0cb3"
    }, {
        url: "/en/products.html",
        revision: "eb7950bc31040d4e1ef10751de83d6a6"
    }, {
        url: "/errorEn.51a5ca090ffa2b7bd77b..css",
        revision: "1fb6c7dd2d82467aa11d75a1acbe2f85"
    }, {
        url: "/errorEn.51a5ca090ffa2b7bd77b.js",
        revision: "c99be3666b3372461d037b1091e5565a"
    }, {
        url: "/fonts/MaterialIcons-Regular.ttf",
        revision: "a37b0c01c0baf1888ca812cc0508f6e2"
    }, {
        url: "/fonts/MaterialIcons-Regular.woff",
        revision: "012cf6a10129e2275d79d6adac7f3b02"
    }, {
        url: "/fonts/MaterialIcons-Regular.woff2",
        revision: "570eb83859dc23dd0eec423a49e147fe"
    }, {
        url: "/icon_128x128.ecaeabe796b0a7623c24f588c2300750.png",
        revision: "ecaeabe796b0a7623c24f588c2300750"
    }, {
        url: "/icon_192x192.8c6ee4db745b107be15f290fd578f803.png",
        revision: "8c6ee4db745b107be15f290fd578f803"
    }, {
        url: "/icon_256x256.03cf8032c6aa57d2357b219e69a6b22a.png",
        revision: "03cf8032c6aa57d2357b219e69a6b22a"
    }, {
        url: "/icon_384x384.fcd4c6a6b5fe15f84169e374efd67658.png",
        revision: "fcd4c6a6b5fe15f84169e374efd67658"
    }, {
        url: "/icon_512x512.865906ae100d4bb502251e01fa5c06c2.png",
        revision: "865906ae100d4bb502251e01fa5c06c2"
    }, {
        url: "/icon_96x96.51eb8f369b52e13a0e2c1bc29cf04e73.png",
        revision: "51eb8f369b52e13a0e2c1bc29cf04e73"
    }, {
        url: "/img/camera1.86085a1a4f4183355cb7903217b2abb6.webp",
        revision: "86085a1a4f4183355cb7903217b2abb6"
    }, {
        url: "/img/camera1.b02add7fba665cd096b1517e92372baf.png",
        revision: "b02add7fba665cd096b1517e92372baf"
    }, {
        url: "/img/camera1xlow.298c493c9076e85e58550ec6a2716171.webp",
        revision: "298c493c9076e85e58550ec6a2716171"
    }, {
        url: "/img/camera2.184c66d52ac244028c12f2f63dec0e2f.webp",
        revision: "184c66d52ac244028c12f2f63dec0e2f"
    }, {
        url: "/img/camera2.a20d1c15c00bc4217a5a4f093bd252d2.png",
        revision: "a20d1c15c00bc4217a5a4f093bd252d2"
    }, {
        url: "/img/camera2xlow.3d39949802e7b0d119ac937e30950e5e.webp",
        revision: "3d39949802e7b0d119ac937e30950e5e"
    }, {
        url: "/img/camera3.91ba1ae1c3be6d0204ae4a554b62879f.webp",
        revision: "91ba1ae1c3be6d0204ae4a554b62879f"
    }, {
        url: "/img/camera3.fb4d7baae2114b51e7cec673b92a7f50.png",
        revision: "fb4d7baae2114b51e7cec673b92a7f50"
    }, {
        url: "/img/camera3xlow.0c72628f85f1e2e0ec255da177bc496d.webp",
        revision: "0c72628f85f1e2e0ec255da177bc496d"
    }, {
        url: "/img/camera4.4cc45621aa09ef0a7edb2c5c736998fb.webp",
        revision: "4cc45621aa09ef0a7edb2c5c736998fb"
    }, {
        url: "/img/camera4.4fa1393fdaef00b7f0ce3543f7952199.png",
        revision: "4fa1393fdaef00b7f0ce3543f7952199"
    }, {
        url: "/img/camera4xlow.f25fa34362ac06d229045e91ee4825f0.webp",
        revision: "f25fa34362ac06d229045e91ee4825f0"
    }, {
        url: "/img/camera5.2b2956f5fff4c5ee16a1e014e14252ed.png",
        revision: "2b2956f5fff4c5ee16a1e014e14252ed"
    }, {
        url: "/img/camera5.cd19dadd83cbe7ac99f5f14d764fb070.webp",
        revision: "cd19dadd83cbe7ac99f5f14d764fb070"
    }, {
        url: "/img/camera5xlow.5bcf3a2c93610b2e388cb04ec3e14cfa.webp",
        revision: "5bcf3a2c93610b2e388cb04ec3e14cfa"
    }, {
        url: "/img/logo.323e5991f1c53361a42d1c4f3d4a3b07.svg",
        revision: "323e5991f1c53361a42d1c4f3d4a3b07"
    }, {
        url: "/img/logo.38da1db9ab40d1cb5d4c32ed91242180.ico",
        revision: "38da1db9ab40d1cb5d4c32ed91242180"
    }, {
        url: "/img/objectif1.1a8cab114ce26b893f57313fbd877a29.webp",
        revision: "1a8cab114ce26b893f57313fbd877a29"
    }, {
        url: "/img/objectif1.b698647b8beaea11f83342589db23072.png",
        revision: "b698647b8beaea11f83342589db23072"
    }, {
        url: "/img/objectif1xlow.742ffbc783c783dbdcb4f9a222257649.webp",
        revision: "742ffbc783c783dbdcb4f9a222257649"
    }, {
        url: "/img/objectif2.32e60e2d086b7cc7f07b4984197af20f.webp",
        revision: "32e60e2d086b7cc7f07b4984197af20f"
    }, {
        url: "/img/objectif2.da87d9696823d1252f8401d4adecc304.png",
        revision: "da87d9696823d1252f8401d4adecc304"
    }, {
        url: "/img/objectif2xlow.aa380f78a8de710a5239ea984055a02d.webp",
        revision: "aa380f78a8de710a5239ea984055a02d"
    }, {
        url: "/img/objectif3.2091463ec88110a8fbab66231876cbf0.webp",
        revision: "2091463ec88110a8fbab66231876cbf0"
    }, {
        url: "/img/objectif3.5b5c29ecef27d353a127ecd19549fc76.png",
        revision: "5b5c29ecef27d353a127ecd19549fc76"
    }, {
        url: "/img/objectif3xlow.370957d7edc83ff361548d504219b727.webp",
        revision: "370957d7edc83ff361548d504219b727"
    }, {
        url: "/img/objectif4.2a7ee93b5005620543ec6d7b8e51ed5e.webp",
        revision: "2a7ee93b5005620543ec6d7b8e51ed5e"
    }, {
        url: "/img/objectif4.74d8f739645122b7d79ed7e3baf886e6.png",
        revision: "74d8f739645122b7d79ed7e3baf886e6"
    }, {
        url: "/img/objectif4xlow.c5e4021baf4aa5ce37d2eb169e709b88.webp",
        revision: "c5e4021baf4aa5ce37d2eb169e709b88"
    }, {
        url: "/img/objectif5.77efd6db0412c5d7fef1ab3576d670bd.webp",
        revision: "77efd6db0412c5d7fef1ab3576d670bd"
    }, {
        url: "/img/objectif5.c64e65c2f5205d314179eee1073363ba.png",
        revision: "c64e65c2f5205d314179eee1073363ba"
    }, {
        url: "/img/objectif5xlow.12669b0a558e9ba666f3bd47e806a6ad.webp",
        revision: "12669b0a558e9ba666f3bd47e806a6ad"
    }, {
        url: "/img/objectif6.059e9492916ca0c786c2b66071ecc66b.webp",
        revision: "059e9492916ca0c786c2b66071ecc66b"
    }, {
        url: "/img/objectif6.ea84487a719c48afdbcab74ea1343a8e.png",
        revision: "ea84487a719c48afdbcab74ea1343a8e"
    }, {
        url: "/img/objectif6xlow.5cc6f903ef70d36df34c9af8706e700a.webp",
        revision: "5cc6f903ef70d36df34c9af8706e700a"
    }, {
        url: "/img/objectif7.1a421c10ea0db041cf79725ab7e8be6d.webp",
        revision: "1a421c10ea0db041cf79725ab7e8be6d"
    }, {
        url: "/img/objectif7.b4d516cc3f089ea75919abd87e4d00df.png",
        revision: "b4d516cc3f089ea75919abd87e4d00df"
    }, {
        url: "/img/objectif7xlow.93b82dbed20271337a752c364983933f.webp",
        revision: "93b82dbed20271337a752c364983933f"
    }, {
        url: "/img/sdCard1.73c5e94eee350b9a2da6e547e6263505.webp",
        revision: "73c5e94eee350b9a2da6e547e6263505"
    }, {
        url: "/img/sdCard1.a104b42dca56b3f4b738f9d1de1965b5.png",
        revision: "a104b42dca56b3f4b738f9d1de1965b5"
    }, {
        url: "/img/sdCard1xlow.fba656b1996033226b9ce6f14e48d695.webp",
        revision: "fba656b1996033226b9ce6f14e48d695"
    }, {
        url: "/img/sdCard2.15c277c92111a4eac732954fab688b06.webp",
        revision: "15c277c92111a4eac732954fab688b06"
    }, {
        url: "/img/sdCard2.b5bacef4387387fcebc2b2c48aabdbbb.png",
        revision: "b5bacef4387387fcebc2b2c48aabdbbb"
    }, {
        url: "/img/sdCard2xlow.bf45d04276c4817521a6a4dccc3f79e0.webp",
        revision: "bf45d04276c4817521a6a4dccc3f79e0"
    }, {
        url: "/img/sdCard3.3412a4e026b9cd4b5a07eedafbbb4e58.png",
        revision: "3412a4e026b9cd4b5a07eedafbbb4e58"
    }, {
        url: "/img/sdCard3.891a2cbe0432f474639c108d68768dc9.webp",
        revision: "891a2cbe0432f474639c108d68768dc9"
    }, {
        url: "/img/sdCard3xlow.4da987415ceea41b949695a6f2ee70c5.webp",
        revision: "4da987415ceea41b949695a6f2ee70c5"
    }, {
        url: "/img/slider1x1387x600.32db59859e98552e547d2137566237b5.jpg",
        revision: "32db59859e98552e547d2137566237b5"
    }, {
        url: "/img/slider1x1387x600.9357b3eacaf0a38b32144aa60cbd55e3.webp",
        revision: "9357b3eacaf0a38b32144aa60cbd55e3"
    }, {
        url: "/img/slider1x1387x600xlow.42e4de1ea882dd12d576d5a4c9c0e056.webp",
        revision: "42e4de1ea882dd12d576d5a4c9c0e056"
    }, {
        url: "/img/slider2x1390x600.957e02467f0cf3feae7492c9ea7f7513.webp",
        revision: "957e02467f0cf3feae7492c9ea7f7513"
    }, {
        url: "/img/slider2x1390x600.eb6f00b6d158741da0b5eeb567ed40e3.jpg",
        revision: "eb6f00b6d158741da0b5eeb567ed40e3"
    }, {
        url: "/img/slider2x1390x600xlow.3e2998a5b370962e6e69d39644c91123.webp",
        revision: "3e2998a5b370962e6e69d39644c91123"
    }, {
        url: "/img/slider3x1377x600.21b6f09fc533ac68fa086de8574a47e1.webp",
        revision: "21b6f09fc533ac68fa086de8574a47e1"
    }, {
        url: "/img/slider3x1377x600.f13e74231cdcbf96c1d806729ec90619.jpg",
        revision: "f13e74231cdcbf96c1d806729ec90619"
    }, {
        url: "/img/slider3x1377x600xlow.bacb87aafbeb599226df588a0b37b16c.webp",
        revision: "bacb87aafbeb599226df588a0b37b16c"
    }, {
        url: "/img/trepied1.6eca7d59f24c9caf48bfbdc6344ff754.png",
        revision: "6eca7d59f24c9caf48bfbdc6344ff754"
    }, {
        url: "/img/trepied1.e57718eac106eb809829455346304b1a.webp",
        revision: "e57718eac106eb809829455346304b1a"
    }, {
        url: "/img/trepied1xlow.a9db62ba4e10d27a76310a933f3ec543.webp",
        revision: "a9db62ba4e10d27a76310a933f3ec543"
    }, {
        url: "/img/trepied2.669959fb4fc133b999630702c3930272.webp",
        revision: "669959fb4fc133b999630702c3930272"
    }, {
        url: "/img/trepied2.ce69cdf0c700d2ca9a21405b914901c9.png",
        revision: "ce69cdf0c700d2ca9a21405b914901c9"
    }, {
        url: "/img/trepied2xlow.1a8578aaa58b2db6a3c50d0c445f03e2.webp",
        revision: "1a8578aaa58b2db6a3c50d0c445f03e2"
    }, {
        url: "/img/trepied3.1a76547fc59ef94570c724e646e462c8.png",
        revision: "1a76547fc59ef94570c724e646e462c8"
    }, {
        url: "/img/trepied3.c9cef487f064b468d9d734044c6dd2f3.webp",
        revision: "c9cef487f064b468d9d734044c6dd2f3"
    }, {
        url: "/img/trepied3xlow.f9587051b5580d4fdab915c368b16dac.webp",
        revision: "f9587051b5580d4fdab915c368b16dac"
    }, {
        url: "/index.html",
        revision: "24c79ab02fedce8045766be4665af7a7"
    }, {
        url: "/indexEn.51a5ca090ffa2b7bd77b..css",
        revision: "1fb6c7dd2d82467aa11d75a1acbe2f85"
    }, {
        url: "/indexEn.51a5ca090ffa2b7bd77b.js",
        revision: "fec23693cecc4dfec53cda26c9297ce6"
    }, {
        url: "/manifest.8031e4285145b59bc04438b62d01989d.json",
        revision: "8031e4285145b59bc04438b62d01989d"
    }, {
        url: "/productsEn.51a5ca090ffa2b7bd77b..css",
        revision: "1fb6c7dd2d82467aa11d75a1acbe2f85"
    }, {
        url: "/productsEn.51a5ca090ffa2b7bd77b.js",
        revision: "44dac68d8f07fa3def29e9eed2c2904c"
    }], {})
}));