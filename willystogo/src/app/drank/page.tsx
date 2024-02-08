import React from 'react'
import TextOneImage from '@/app/components/TextOneImage'
import TextThreeImages from '@/app/components/TextThreeImages'
import Spacer from '@/app/components/spacers/Spacer'
import TextPopup from '@/app/components/textPopup'
import LandingVideo from '@/app/components/LandingVideo'
import SpacerStart from '@/app/components/spacers/SpacerStart'
import EditorServer from '@/app/components/editor/EditorServer'

export const revalidate = 360

function Page() {
    return (
        <div>
            <LandingVideo videoPath='imgs/drank/cocktail_downsampled.webm' posterURL='imgs/drank/utils_frame.png' />

            <SpacerStart />

            <TextOneImage image="/imgs/drank/arrangement.jpg" imagePosition="right" theme="dark" verticalPosition="below">
                <EditorServer documentId="dranken_arrangement" />
            </TextOneImage>

            <Spacer />

            <div className='-mt-24 lg:mt-0 mb-28'>
                <TextThreeImages images={['/imgs/drank/pop.gif', '/imgs/drank/cocktails.jpg', '/imgs/drank/staand.jpg']} imagesPosition='left' theme="dark" verticalPosition='below'>
                    <EditorServer documentId="cocktails" />
                </TextThreeImages>
            </div>

            <SpacerStart />

            <TextPopup imgPath='/imgs/drank/willy.jpg' link='faciliteiten' buttonText='Overige Faciliteiten'>
                <EditorServer documentId="opruimen-naar-eigen-event" />
            </TextPopup>
        </div>
    )
}

export default Page