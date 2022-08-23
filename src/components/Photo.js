import React from 'react'
import ImgList from './ImgList'

const Photo = (props) => {

    console.log(props.photos)

  return props.photos.map((photo) => (

        <ImgList key={photo.id} photo={photo}></ImgList>


  ))
}

export default Photo


