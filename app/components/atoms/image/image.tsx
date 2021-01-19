import * as React from "react";
import { ImageURISource, Image as RNImage } from "react-native";
import { ImageProps } from "./image.props";

const images : { [key: string]: ImageURISource }= {
    paraisopolis: require("../../../assets/paraisopolis.png")
}

export const Image = (props: ImageProps) => {
    return (
        <RNImage
        {...props}
        source={
            !!props.file ?
            images[props.file] : props.source as ImageURISource
        }
        />
    );
}
