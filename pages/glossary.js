import { useLayoutEffect, useState, Fragment } from 'react';
import ReactMarkdown from 'react-markdown';

import Page from '../components/page';

import * as glossary from '../content/glossary';

function ItemNumber({ size = "text-sm", number })  {
    return (
        <span className={`item-number-wrapper relative width-0 overflow-visible`} >
            <a href={`#${number}`} className={`${size} absolute -left-9 bottom-0`}>
                {number}
            </a>
        </span>
    );
}

function itemNumberMd({ size = "text-sm", number }) {
    return `<span class="relative width-0 overflow-visible"><a href="#${number}" class="${size} absolute -left-9 bottom-0">${number}</a></span> `;
}

export default function Glossary() {

    const [val, setVal] = useState(true);

    useLayoutEffect(() => {
        const content = window.document.getElementById('glossary-content');
        const items = content.getElementsByClassName('glossary-item');
        
        for (let i = 0; i < items.length; i += 1) {
            const firstLink = items[i].getElementsByTagName('a').item(0);
            if (firstLink.hasAttribute('class')) return;
            
            const span = window.document.querySelector('.item-number-wrapper').cloneNode();
            firstLink.setAttribute('class', 'text-sm absolute -left-9 bottom-0');
            firstLink.parentNode.prepend(span);
            span.appendChild(firstLink);
        }
    })

    const content = [];
    content.push(glossary.content.map((section, sectionIdx) => {
        const sectionNumber = sectionIdx + 1;
        let itemNumber = 1;
        const sectionItems = [];

        if (section.name) {
            sectionItems.push((
                <h2 key={section.name}>
                    <ItemNumber number={sectionNumber} size="text-base" />
                    {section.name}
                </h2>
            ));
        }

        section.subsections.forEach((subsection) => {
            if (subsection.name) {
                sectionItems.push(
                    <h3 key={`subsection-${sectionNumber}-${itemNumber}`}>
                        <ItemNumber number={`${sectionNumber}.${itemNumber}`} />
                        {subsection.name}
                    </h3>
                );
                if (subsection.preamble) {
                    sectionItems.push((
                        <div key={`preamble-${sectionNumber}-${itemNumber}`}>
                            <ReactMarkdown
                                key={`subsection-${sectionNumber}-${itemNumber}`}
                                children={subsection.preamble}
                            />
                        </div>
                    ));
                }
                itemNumber += 1;
            }
            subsection.items.forEach((item) => {
                const number = `${sectionNumber}.${itemNumber}`;
                sectionItems.push(
                    <div className="glossary-item" key={`item-${sectionNumber}-${itemNumber}`}>
                        <ReactMarkdown children={`[${number}](#${number}) ${item}`} />
                    </div>
                );
                itemNumber += 1;
            })
        });
        
        return sectionItems;
    }));

    return (
        <Page
            title="Glossary"
            content={(
                <Fragment>
                    <ReactMarkdown key="preamble" children={glossary.preamble} />
                    <button onClick={() => { setVal(!val); }}>{val ? 'TRUE' : 'FALSE'}</button>
                    <div className="pl-9 leading-6" id="glossary-content">{content}</div>
                </Fragment>
            )}
        />
    );
}
