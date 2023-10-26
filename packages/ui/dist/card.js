import { jsxs, jsx } from 'react/jsx-runtime';

function Card({ className, title, children, href, }) {
    return (jsxs("a", Object.assign({ className: className, href: `${href}?utm_source=create-turbo&utm_medium=basic&utm_campaign=create-turbo"`, rel: "noopener noreferrer", target: "_blank" }, { children: [jsxs("h2", { children: [title, " ", jsx("span", { children: "->" })] }), jsx("p", { children: children })] })));
}

export { Card };
//# sourceMappingURL=card.js.map
