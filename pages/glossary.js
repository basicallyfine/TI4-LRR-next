import { Fragment } from 'react';
import ReactMarkdown from 'react-markdown';

import Page from '../components/page';

import * as glossary from '../content/glossary';

export default function Glossary() {
    const content = [
        <ReactMarkdown key="preamble" children={glossary.preamble} />
    ];
    content.push(glossary.content.map((section, sectionIdx) => {
        const sectionNumber = sectionIdx + 1;
        let itemNumber = 1;
        const sectionItems = [];

        section.subsections.forEach((subsection) => {
            if (subsection.name) {
                sectionItems.push(
                    <Fragment key={`subsection-${sectionNumber}-${itemNumber}`}>
                        <dt className="subsection-name">{sectionNumber}.{itemNumber}</dt>
                        <dd className="subsection-name">
                            <h3 key={subsection.name}>{subsection.name}</h3>
                            {subsection.preamble && <ReactMarkdown children={subsection.preamble} />}
                        </dd>
                    </Fragment>
                );
                itemNumber += 1;
            }
            subsection.items.forEach((item) => {
                sectionItems.push(
                    <Fragment key={`item-${sectionNumber}-${itemNumber}`}>
                        <dt className="subsection-name">{sectionNumber}.{itemNumber}</dt>
                        <dd className="subsection-name"><ReactMarkdown children={item} /></dd>
                    </Fragment>
                );
                itemNumber += 1;
            })
        });
        
        return (
            <Fragment>
                <dl className="glossary-section">
                    <dt className="section-name">{sectionIdx + 1}</dt>
                    <dd className="section-name">
                        <h2 key={section.name}>{section.name}</h2>
                        {section.preamble && <ReactMarkdown children={section.preamble} />}
                    </dd>
                </dl>
                <dl className="glossary-subsections">
                    {sectionItems}
                </dl>
            </Fragment>
        )
    }));
    return (
        <Page
            title="Glossary"
            content={content}
        />
    );
}
