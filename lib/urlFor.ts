import { client } from "./sanity.client";
import imageURlBuilder from '@sanity/image-url'

const builder = imageURlBuilder(client)

function urlFor(source: any) {
    return builder.image(source)
}

export default urlFor