/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

// Import images
import profile1 from './assets/profile1.webp';
import profile2 from './assets/profile2.webp';
import profile3 from './assets/profile3.webp';

const TEMPLATE = [
    ['core/group', { layout: { type: 'constrained' } }, [
        ['core/spacer', { height: '80px' }],
        ['core/heading', {
            textAlign: 'center',
            content: 'Client Reviews.',
            fontSize: '3xl',
            fontFamily: 'open-sans',
            style: { typography: { fontWeight: '600' } }
        }],
        ['core/columns', {}, [
            ['core/column', {}, [
                ['core/group', { 
                    layout: { type: 'flex', orientation: 'vertical', justifyContent: 'center' },
                    style: { spacing: { blockGap: '1rem' } }
                }, [
                    ['core/image', {
                        width: '95px',
                        url: profile1,
                        alt: 'Profile 1',
                        style: { border: { radius: '100px' } }
                    }],
                    ['core/paragraph', {
                        align: 'center',
                        fontSize: 'lg',
                        fontFamily: 'open-sans',
                        content: 'We have hired Jasper a couple of times and he always does a great job and in a timely manner! He is very good at what he does and we continue to use him for our projects.'
                    }]
                ]]
            ]],
            ['core/column', {}, [
                ['core/group', { 
                    layout: { type: 'flex', orientation: 'vertical', justifyContent: 'center' },
                    style: { spacing: { blockGap: '1rem' } }
                }, [
                    ['core/image', {
                        width: '95px',
                        url: profile2,
                        alt: 'Profile 2',
                        style: { border: { radius: '100px' } }
                    }],
                    ['core/paragraph', {
                        align: 'center',
                        fontSize: 'lg',
                        fontFamily: 'open-sans',
                        content: 'His communication was top-notch, he met all deadlines, and his skills were very strong. He was proficient in WordPress, Woo Commerce, Shopify and programming on those platforms to get our new Shopify site up and running.'
                    }]
                ]]
            ]],
            ['core/column', {}, [
                ['core/group', { 
                    layout: { type: 'flex', orientation: 'vertical', justifyContent: 'center' },
                    style: { spacing: { blockGap: '1rem' } }
                }, [
                    ['core/image', {
                        width: '95px',
                        url: profile3,
                        alt: 'Profile 3',
                        style: { border: { radius: '100px' } }
                    }],
                    ['core/paragraph', {
                        align: 'center',
                        fontSize: 'lg',
                        fontFamily: 'open-sans',
                        content: 'Couldn\'t have done this job without jasper and he did a great job. My website now runs faster than ever. Would definitely hire again.'
                    }]
                ]]
            ]]
        ]],
        ['core/spacer', { height: '80px' }]
    ]]
];

export default function Edit() {
    const blockProps = useBlockProps();
    return (
        <div {...blockProps}>
            <InnerBlocks template={TEMPLATE} />
        </div>
    );
}
