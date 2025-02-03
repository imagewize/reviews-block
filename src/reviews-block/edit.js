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
                ['core/image', {
                    width: '95px',
                    style: { border: { radius: '100px' } }
                }],
                ['core/paragraph', {
                    align: 'center',
                    fontSize: 'lg',
                    fontFamily: 'open-sans',
                    content: '"Example review text goes here"'
                }]
            ]],
            ['core/column', {}, [
                ['core/image', {
                    width: '95px',
                    style: { border: { radius: '100px' } }
                }],
                ['core/paragraph', {
                    align: 'center',
                    fontSize: 'lg',
                    fontFamily: 'open-sans',
                    content: '"Example review text goes here"'
                }]
            ]],
            ['core/column', {}, [
                ['core/image', {
                    width: '95px',
                    style: { border: { radius: '100px' } }
                }],
                ['core/paragraph', {
                    align: 'center',
                    fontSize: 'lg',
                    fontFamily: 'open-sans',
                    content: '"Example review text goes here"'
                }]
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
