import React, { useLayoutEffect, useState, Fragment } from 'react';
import _ from 'lodash';

import Markdown from '../components/markdown';
import Page from '../components/page';

import * as glossary from '../content/glossary';

import styles from '../styles/Glossary.module.scss';

const ItemNumber = ({ size = "text-sm", number, tag = "span" }) => {
    const Tag = tag;
    return (
        <Tag className="relative -top-px">
            <a href={`#${number}`} className={`${styles['item-number-link']} ${size}`}>
                {number}
            </a>
        </Tag>
    );
}

const ItemSection = ({ className = "", children, ...props }) => {
    const [number, content] = React.Children.toArray(children);
    return (
        <div {...props} className={`item-section flex flex-row ${className}`}>
            <dt className="item-section-dt w-9 flex-shrink-0">{number}</dt>
            <dd className="item-section-dd flex-grow w-auto">{content}</dd>
        </div>
    )
};

export default function Glossary() {
    const content = [];
    content.push(glossary.content.map((section, sectionIdx) => {
        const sectionNumber = sectionIdx + 1;
        let itemNumber = 1;
        const sectionItems = [];

        if (section.name) {
            sectionItems.push(
                <ItemSection key={section.name} className="mt-6">
                    <ItemNumber number={sectionNumber} size="text-base" tag="h2" />
                    <h2>{section.name}</h2>
                </ItemSection>
            );
        }

        (section.subsections || []).forEach((subsection) => {
            if (subsection.name) {
                const subsectionContent = [
                    <h3 key="subsection-heading">{subsection.name}</h3>
                ];
                if (subsection.preamble) {
                    subsectionContent.push(<Markdown key="subsection-content">{subsection.preamble}</Markdown>);
                }
                sectionItems.push(
                    <ItemSection key={subsection.name} className="mt-2">
                        <ItemNumber number={`${sectionNumber}.${itemNumber}`} tag="h3" />
                        {subsectionContent}
                    </ItemSection>
                );
                itemNumber += 1;
            }
            subsection.items.forEach((item) => {
                let itemContent = item;
                if (typeof item === 'object') {
                    itemContent = _.get(item, 'content');
                }

                sectionItems.push(
                    <ItemSection key={`item-${sectionNumber}-${itemNumber}`}>
                        <ItemNumber number={`${sectionNumber}.${itemNumber}`} />
                        <Markdown listType={_.get(item, 'listType')}>
                            {itemContent}
                        </Markdown>
                    </ItemSection>
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
                    <Markdown key="preamble">{glossary.preamble}</Markdown>
                    <dl className="leading-5" id="glossary-content">{content}</dl>
                    <style>{`
                        .item-section-dt > :first-child,
                        .item-section-dd > :first-child {
                            margin-top: 0 !important;
                        }
                    `}</style>
                </Fragment>
            )}
        />
    );
}
