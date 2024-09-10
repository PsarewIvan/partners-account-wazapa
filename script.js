'use strict';

const HIDDEN_CLASS = 'hidden';
const NONE_CLASS = 'none';

const HAS_AUTH = true;

const ICONS = {
    OK: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M14.531 5.031l-8 8a.75.75 0 0 1-.531.221.75.75 0 0 1-.531-.221l-3.5-3.5a.75.75 0 0 1-.22-.531.75.75 0 0 1 .22-.531.75.75 0 0 1 .531-.22.75.75 0 0 1 .531.22L6 11.438l7.469-7.468a.75.75 0 0 1 1.063 0 .75.75 0 0 1 0 1.063l-.001-.001z" fill="#1eae53"/></svg>`,
    RECORD: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 1.25a6.75 6.75 0 0 0-6.236 4.167 6.75 6.75 0 0 0 1.463 7.356 6.75 6.75 0 0 0 7.356 1.463A6.75 6.75 0 0 0 14.75 8 6.76 6.76 0 0 0 8 1.25zm0 12a5.25 5.25 0 0 1-4.85-3.241 5.25 5.25 0 0 1 1.138-5.721 5.25 5.25 0 0 1 5.721-1.138A5.25 5.25 0 0 1 13.25 8c-.002 1.392-.555 2.726-1.539 3.711S9.392 13.249 8 13.25zm2.5-7v3.5a.75.75 0 0 1-.75.75h-3.5a.75.75 0 0 1-.75-.75v-3.5a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 .75.75z" fill="#e61818"/></svg>`,
    SIGN: `<svg width="32" height="32" fill="none" viewBox="0 0 32 32"><path d="M15 27a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1 1 1 0 0 1-1 1H7v20h7a1 1 0 0 1 1 1zm13.708-11.707l-5-5a1 1 0 0 0-1.415 0 1 1 0 0 0 0 1.415L25.586 15H14a1 1 0 0 0-1 1 1 1 0 0 0 1 1h11.586l-3.294 3.293a1 1 0 0 0 0 1.415 1 1 0 0 0 1.415 0l5-5a1 1 0 0 0 .293-.707 1 1 0 0 0-.293-.707z" fill="currentColor"/></svg>`,
    HOME: `<svg fill="none" height="32" viewBox="0 0 32 32" width="32"><g fill="currentColor"><path d="m17.7071 12.2929c.3905.3905.3905 1.0237 0 1.4142l-6 6c-.3905.3905-1.0237.3905-1.4142 0l-2.00001-2c-.39052-.3905-.39052-1.0237 0-1.4142.39053-.3905 1.02369-.3905 1.41422 0l1.29289 1.2929 5.2929-5.2929c.3905-.3905 1.0237-.3905 1.4142 0z"/><path d="m23.7071 13.7071c.3905-.3905.3905-1.0237 0-1.4142s-1.0237-.3905-1.4142 0l-6 6c-.3905.3905-.3905 1.0237 0 1.4142s1.0237.3905 1.4142 0z"/><path clip-rule="evenodd" d="m16 2c-11.529 0-14 2.471-14 14s2.471 14 14 14 14-2.471 14-14-2.471-14-14-14zm-11.4814 7.3826c-.364 1.6378-.5186 3.7808-.5186 6.6174s.1546 4.9795.5186 6.6174c.35895 1.6151.89439 2.6139 1.57224 3.2918.67784.6778 1.67662 1.2132 3.29176 1.5722 1.6378.364 3.7808.5186 6.6174.5186s4.9795-.1546 6.6174-.5186c1.6151-.359 2.6139-.8944 3.2918-1.5722.6778-.6779 1.2132-1.6767 1.5722-3.2918.364-1.6379.5186-3.7808.5186-6.6174s-.1546-4.9796-.5186-6.6174c-.359-1.61514-.8944-2.61392-1.5722-3.29176-.6779-.67785-1.6767-1.21329-3.2918-1.57224-1.6379-.364-3.7808-.5186-6.6174-.5186s-4.9796.1546-6.6174.5186c-1.61514.35895-2.61392.89439-3.29176 1.57224-.67785.67784-1.21329 1.67662-1.57224 3.29176z" fill-rule="evenodd"/></g></svg>`,
    QUESTION: `<svg width="32" height="32" fill="none" viewBox="0 0 32 32"><path d="M17.5 22.5a1.5 1.5 0 0 1-.926 1.386 1.5 1.5 0 0 1-1.635-.325 1.5 1.5 0 0 1-.325-1.635A1.5 1.5 0 0 1 16 21a1.5 1.5 0 0 1 1.5 1.5zM16 9c-2.758 0-5 2.019-5 4.5v.5a1 1 0 0 0 1 1 1 1 0 0 0 1-1v-.5c0-1.375 1.346-2.5 3-2.5s3 1.125 3 2.5-1.346 2.5-3 2.5a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1 1 1 0 0 0 1-1v-.09c2.28-.419 4-2.238 4-4.41 0-2.481-2.242-4.5-5-4.5zm13 7a13 13 0 0 1-8.025 12.01 13 13 0 0 1-14.167-2.818A13 13 0 0 1 3.99 11.025 13 13 0 0 1 16 3c3.447.004 6.751 1.374 9.188 3.812S28.996 12.553 29 16zm-2 0A11 11 0 0 0 20.21 5.837 11 11 0 0 0 8.222 8.222 11 11 0 0 0 5.837 20.21 11 11 0 0 0 16 27a11.01 11.01 0 0 0 11-11z" fill="currentColor"/></svg>`,
    STOREFRONT: `<svg fill="none" height="32" viewBox="0 0 32 32" width="32""><path d="m30 26h-2v-14c0-.5304-.2107-1.0391-.5858-1.4142s-.8838-.5858-1.4142-.5858h-8v-5.99998c.0002-.36217-.0979-.71761-.2839-1.02838-.186-.31076-.4528-.56519-.7721-.73613s-.679-.25197-1.0408-.23445c-.3617.01753-.7119.13295-1.0132.33396l-10 6.665c-.27433.18302-.49914.43104-.65442.72198-.15528.2909-.23621.6157-.23558.9455v15.3325h-2c-.26522 0-.51957.1054-.70711.2929-.18753.1875-.29289.4419-.29289.7071s.10536.5196.29289.7071c.18754.1876.44189.2929.70711.2929h28c.2652 0 .5196-.1053.7071-.2929.1875-.1875.2929-.4419.2929-.7071s-.1054-.5196-.2929-.7071-.4419-.2929-.7071-.2929zm-4-14v14h-8v-14zm-20-1.3325 10-6.66748v21.99998h-10zm8 3.3325v2c0 .2652-.1054.5196-.2929.7071-.1875.1876-.4419.2929-.7071.2929s-.5196-.1053-.7071-.2929c-.1875-.1875-.2929-.4419-.2929-.7071v-2c0-.2652.1054-.5196.2929-.7071s.4419-.2929.7071-.2929.5196.1054.7071.2929.2929.4419.2929.7071zm-4 0v2c0 .2652-.10536.5196-.29289.7071-.18754.1876-.44189.2929-.70711.2929s-.51957-.1053-.70711-.2929c-.18753-.1875-.29289-.4419-.29289-.7071v-2c0-.2652.10536-.5196.29289-.7071.18754-.1875.44189-.2929.70711-.2929s.51957.1054.70711.2929c.18753.1875.29289.4419.29289.7071zm0 7v2c0 .2652-.10536.5196-.29289.7071-.18754.1876-.44189.2929-.70711.2929s-.51957-.1053-.70711-.2929c-.18753-.1875-.29289-.4419-.29289-.7071v-2c0-.2652.10536-.5196.29289-.7071.18754-.1875.44189-.2929.70711-.2929s.51957.1054.70711.2929c.18753.1875.29289.4419.29289.7071zm4 0v2c0 .2652-.1054.5196-.2929.7071-.1875.1876-.4419.2929-.7071.2929s-.5196-.1053-.7071-.2929c-.1875-.1875-.2929-.4419-.2929-.7071v-2c0-.2652.1054-.5196.2929-.7071s.4419-.2929.7071-.2929.5196.1054.7071.2929.2929.4419.2929.7071z" fill="currentColor"/></svg>`,
    COINS: `<svg fill="none" height="32" viewBox="0 0 32 32" width="32"><path d="m27 9h-20c-.26522 0-.51957-.10536-.70711-.29289-.18753-.18754-.29289-.44189-.29289-.70711s.10536-.51957.29289-.70711c.18754-.18753.44189-.29289.70711-.29289h17c.2652 0 .5196-.10536.7071-.29289.1875-.18754.2929-.44189.2929-.70711s-.1054-.51957-.2929-.70711c-.1875-.18753-.4419-.29289-.7071-.29289h-17c-.79565 0-1.55871.31607-2.12132.87868s-.87868 1.32567-.87868 2.12132v16c0 .7956.31607 1.5587.87868 2.1213s1.32567.8787 2.12132.8787h20c.5304 0 1.0391-.2107 1.4142-.5858s.5858-.8838.5858-1.4142v-14c0-.5304-.2107-1.03914-.5858-1.41421-.3751-.37508-.8838-.58579-1.4142-.58579zm0 16h-20c-.26522 0-.51957-.1054-.70711-.2929-.18753-.1875-.29289-.4419-.29289-.7071v-13.1713c.32109.1139.65933.1718 1 .1713h20zm-6-7.5c0-.2967.088-.5867.2528-.8334.1648-.2466.3991-.4389.6732-.5524s.5757-.1433.8666-.0854c.291.0579.5583.2008.7681.4105.2097.2098.3526.4771.4105.7681.0579.2909.0281.5925-.0854.8666s-.3058.5084-.5524.6732c-.2467.1648-.5367.2528-.8334.2528-.3978 0-.7794-.158-1.0607-.4393s-.4393-.6629-.4393-1.0607z" fill="currentColor"/></svg>`,
    CALENDAR: `<svg fill="none" height="32" viewBox="0 0 32 32" width="32"><path d="m26 4h-3v-1c0-.26522-.1054-.51957-.2929-.70711-.1875-.18753-.4419-.29289-.7071-.29289s-.5196.10536-.7071.29289c-.1875.18754-.2929.44189-.2929.70711v1h-10v-1c0-.26522-.1054-.51957-.2929-.70711-.1875-.18753-.4419-.29289-.7071-.29289-.26522 0-.51957.10536-.70711.29289-.18753.18754-.29289.44189-.29289.70711v1h-3c-.53043 0-1.03914.21071-1.41421.58579-.37508.37507-.58579.88378-.58579 1.41421v20c0 .5304.21071 1.0391.58579 1.4142.37507.3751.88378.5858 1.41421.5858h20c.5304 0 1.0391-.2107 1.4142-.5858s.5858-.8838.5858-1.4142v-20c0-.53043-.2107-1.03914-.5858-1.41421-.3751-.37508-.8838-.58579-1.4142-.58579zm-17 2v1c0 .26522.10536.51957.29289.70711.18754.18753.44189.29289.70711.29289.2652 0 .5196-.10536.7071-.29289.1875-.18754.2929-.44189.2929-.70711v-1h10v1c0 .26522.1054.51957.2929.70711.1875.18753.4419.29289.7071.29289s.5196-.10536.7071-.29289c.1875-.18754.2929-.44189.2929-.70711v-1h3v4h-20v-4zm17 20h-20v-14h20z" fill="currentColor"/></svg>`,
    DOWNLOAD: `<svg width="32" height="32" fill="none" viewBox="0 0 32 32"><path d="M28 18v8a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1 1 1 0 0 1 1 1v7h20v-7a1 1 0 0 1 1-1 1 1 0 0 1 1 1zm-12.707.707a1 1 0 0 0 .707.293 1 1 0 0 0 .707-.293l5-5a1 1 0 0 0 .293-.707 1 1 0 0 0-.293-.707 1 1 0 0 0-.707-.293 1 1 0 0 0-.707.293L17 15.586V4a1 1 0 0 0-1-1 1 1 0 0 0-1 1v11.586l-3.293-3.294a1 1 0 0 0-1.415 0 1 1 0 0 0 0 1.415l5 5z" fill="currentColor"/></svg>`,
};

// RENDER ICONS
(() => {
    function insertIcon(oldElement, newElementString) {
        const parent = oldElement.parentNode;
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = newElementString;
        const newElement = tempDiv.firstChild;

        Array.from(oldElement.attributes).forEach((attr) => {
            newElement.setAttribute(attr.name, attr.value);
        });

        parent.replaceChild(newElement, oldElement);
    }

    const iconClasses = [
        { className: '.js-icon-ok', iconType: ICONS.OK },
        { className: '.js-icon-record', iconType: ICONS.RECORD },
        { className: '.js-icon-sign', iconType: ICONS.SIGN },
        { className: '.js-icon-home', iconType: ICONS.HOME },
        { className: '.js-icon-question', iconType: ICONS.QUESTION },
        { className: '.js-icon-storefront', iconType: ICONS.STOREFRONT },
        { className: '.js-icon-coins', iconType: ICONS.COINS },
        { className: '.js-icon-calendar', iconType: ICONS.CALENDAR },
        { className: '.js-icon-download', iconType: ICONS.DOWNLOAD },
    ];

    iconClasses.forEach(({ className, iconType }) => {
        document.querySelectorAll(className)?.forEach((icon) => {
            insertIcon(icon, iconType);
        });
    });
})();

// AUTH
(() => {
    const authOk = document.querySelector('.js-auth-status-ok');
    const authNotOk = document.querySelector('.js-auth-status-not-ok');
    const warningPopup = document.querySelector('.js-auth-warning');

    if (authOk && authNotOk) {
        if (HAS_AUTH) {
            authOk?.classList.remove(NONE_CLASS);
            authNotOk?.classList.add(NONE_CLASS);
            warningPopup?.classList.add(NONE_CLASS);
        } else {
            authOk?.classList.add(NONE_CLASS);
            authNotOk?.classList.remove(NONE_CLASS);
            warningPopup?.classList.remove(NONE_CLASS);
        }
    }
})();

// TOOLTIP POSITION
(() => {
    const TOOLTIP_TOP_CLASS = 'tooltip_top';
    const TOOLTIP_BOTTOM_CLASS = 'tooltip_bottom';

    document.addEventListener('DOMContentLoaded', function () {
        window.addEventListener('resize', initTooltip);
        initTooltip();

        function initTooltip() {
            const triggers = document.querySelectorAll('.js-tooltip-trigger');

            triggers?.forEach((trigger) => {
                const tooltip = trigger.querySelector('.js-tooltip');

                if (tooltip) {
                    adjustTooltipPosition(trigger, tooltip);
                }
            });
        }

        function adjustTooltipPosition(trigger, tooltip) {
            tooltip.classList.remove(TOOLTIP_TOP_CLASS);
            tooltip.classList.remove(TOOLTIP_BOTTOM_CLASS);

            const viewportWidth = window.innerWidth;
            const viewportHeight = window.innerHeight;
            const tooltipRect = tooltip.getBoundingClientRect();

            const tooltipRightPointX = tooltipRect.left + tooltipRect.width;
            const tooltipBottomPointY = tooltipRect.bottom + tooltipRect.height;

            if (tooltipRightPointX > viewportWidth) {
                tooltip.classList.add(TOOLTIP_BOTTOM_CLASS);
            }

            if (tooltipBottomPointY > viewportHeight) {
                tooltip.classList.add(TOOLTIP_TOP_CLASS);
            }
        }
    });
})();

// NAV MENU MOBILE POSITION FIX
(() => {
    window.onload = () => {
        const nav = document.querySelector('.nav');

        if (nav) {
            nav.style.visibility = 'visible';
            nav.style.opacity = '1';
        }
    };
})();
