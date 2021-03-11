import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import axios from 'axios';
import { Image } from 'cloudinary-react';
import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { useDispatch, useSelector } from 'react-redux';
import styled, { css, keyframes } from 'styled-components';
import {
    finishedUploading,
    imageLoaded,
    uploadError,
    uploading,
} from '../slices/imageUploadSlice';

const loaderAnimation = keyframes`
  0% { transform: rotate(0deg) }
  100% { transform: rotate(360deg) }
`;

const LoaderContainer = styled.div`
    width: 169px;
    height: 150px;
    display: flex;
    position: absolute;
    justify-content: center;
    align-items: center;
    transition: all 1s ease-in;
    background-color: white;
    ${(props) => {
        return (
            props.isImageLoaded &&
            !props.isImageUploading &&
            css`
                opacity: 0;
            `
        );
    }};
`;

const Loader = styled.div`
    border: 16px solid #f3f3f3;
    border-top: 16px solid #2a73d5;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    animation: ${loaderAnimation} 2s linear infinite;
`;

const FlexBox = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 25px;
`;

const StyledPhotoCameraIcon = styled(PhotoCameraIcon)`
    position: absolute;
    z-index: 100;
    color: white;
`;

const Photo = styled(Image)`
    background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3));
    background-size: cover;
    /* display: none; */
    object-fit: cover;
    border-radius: 8px;
    width: 72px;
    height: 72px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

const PhotoForm = styled.div`
    display: flex;
    align-items: center;
`;

const DropArea = styled.form`
    width: 150px;
    height: 150px;
    background: #f6f8fb;
    border: 1px dashed #97bef4;
    border-radius: 12px;
    transition: all 0.2s ease-in;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    ${(props) =>
        props.isDragActive &&
        css`
            border: dashed blue 1px;
            background-color: #c6ffc6;
        `}

    ${(props) =>
        props.isDragReject &&
        css`
            border: dashed black 1px;
            background-color: #ffa2a2;
        `};

    &:hover {
        filter: brightness(1.05);
    }
`;

const Input = styled.input`
    display: none;
`;

const ChooseButton = styled.label`
    text-transform: uppercase;
    font-weight: 500;
    font-size: 13px;
    letter-spacing: -0.035em;
    color: #828282;
    margin-left: 15px;
    cursor: pointer;
    transition: all 0.1s ease-out;
    &:hover {
        filter: brightness(0.9);
    }
    &:active {
        filter: brightness(1);
    }
`;

const OnDrop = () => {
    const dispatch = useDispatch();
    const [uploadingImage, setUploadingImage] = useState(false);
    const isImageLoaded = useSelector((state) => state.imageUpload.imageLoaded);
    const uploadedImage = useSelector((state) => state.imageUpload.publicID);
    const isImageUploading = useSelector(
        (state) => state.imageUpload.uploading
    );
    console.log(isImageUploading);
    const onDrop = useCallback(async (acceptedFiles, fileRejections) => {
        try {
            dispatch(
                uploading({
                    uploading: true,
                })
            );
            const url =
                'https://api.cloudinary.com/v1_1/dlw8rtuwl/image/upload';
            const formData = new FormData();
            formData.append('file', acceptedFiles[0]);
            formData.append('upload_preset', 'wkhvtkwu');
            const response = await axios.post(url, formData);
            dispatch(
                finishedUploading({
                    uploading: false,
                    uploadSuccessful: true,
                    publicID: response.data.public_id,
                })
            );
        } catch (error) {
            dispatch(
                uploading({
                    uploading: false,
                })
            );
            if (fileRejections.length > 1) {
                dispatch(
                    uploadError({
                        uploadFail: true,
                        errorMessage:
                            'Only one file can be uploaded at a time!',
                    })
                );

                return;
            }
            if (fileRejections.length > 0) {
                dispatch(
                    uploadError({
                        uploadFail: true,
                        errorMessage: fileRejections[0].errors[0].message,
                    })
                );
            }
        }
    }, []);

    const {
        getRootProps,
        getInputProps,
        isDragActive,
        isDragReject,
    } = useDropzone({ accept: 'image/*', onDrop, maxFiles: 1 });

    return (
        <>
            <FlexBox>
                <DropArea {...getRootProps({ isDragActive, isDragReject })}>
                    <PhotoForm
                        {...getRootProps({ isDragActive, isDragReject })}
                    >
                        <Input
                            {...getInputProps()}
                            type="file"
                            name="image"
                            id="image"
                        ></Input>
                    </PhotoForm>
                    <Photo
                        onLoad={() => {
                            dispatch(imageLoaded());
                        }}
                        isImageLoaded={isImageLoaded}
                        cloudName="dlw8rtuwl"
                        publicId={uploadedImage}
                        width="300"
                        crop="scale"
                    />
                    <StyledPhotoCameraIcon />
                    <LoaderContainer
                        isImageLoaded={isImageLoaded}
                        isImageUploading={isImageUploading}
                    >
                        <Loader />
                    </LoaderContainer>
                </DropArea>
                <ChooseButton type="file" for="image">
                    Change Photo
                </ChooseButton>
            </FlexBox>
        </>
    );
};

export default OnDrop;
